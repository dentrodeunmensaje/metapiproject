import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getDepartmentWorks, getWorksD, departmentSearchStarted} from "../redux/actions";
import { useDispatch } from "react-redux";
import Work from "./Work";


function Department(props) {
  const departments = useSelector((state) => state.departments);
  const departmentWorks = useSelector((state) => state.departmentWorks);
  const departmentWorkIds = useSelector((state) => state.departmentWorkIds);
  const departmentSearchMade = useSelector((state) => state.departmentSearchMade);
  const thisDepartment = departments.departments.find(
    (department) => department.departmentId == props.match.params.id
  );
  const dispatch = useDispatch();

  //when the component mounts, get the department work ids
  useEffect(() => {
    dispatch(getDepartmentWorks(props.match.params.id));
    dispatch(departmentSearchStarted());
  }, []);
  

  function getWorks(){
    dispatch(getWorksD(departmentWorkIds.objectIDs));
  }



  return (
    <div>
      <h3>{thisDepartment.displayName}</h3>
      {/* <p>Se está renderizando un dept</p>
       {console.log ({thisDepartment})} 
       {console.log ({departments})} 
       {console.log (props.match.params.id)} */}
       {/* {departmentWorkIds ? console.log(departmentWorkIds.objectIDs) : null} */}
       {departmentWorkIds.objectIDs && departmentWorkIds.objectIDs.length > 0 ? getWorks() : null}
       {departmentWorks.length!=0 ? departmentWorks.map((work, index) => {
          return(
            <div key={index}>
            <Work 
             title={work.title}
             image = {work.primaryImageSmall}
             country = {work.country}
             dimensions = {work.dimensions}
             beginDate = {work.beginDate}
             endDate = {work.endDate}
             additionalImages = {work.additionalImages}
             medium = {work.medium}
             department = {work.department}
             culture = {work.culture}
             artist = {work.artistDisplayName}
             date = {work.objectDate}
             objectID = {work.objectID}
             key = {work.objectID}
            />
            </div>
          )
        }) : null}
    </div>
  );
}

export default Department;
