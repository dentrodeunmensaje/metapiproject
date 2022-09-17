import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Department from "./Department";
import { Link } from "react-router-dom";

function Departments() {
  const allDepartments = useSelector((state) => state.departments);
  

  // useEffect(() => {
  //   dispatch(getAllDepartments());
  // }, []);

  return (
    <div className="departments">
      <h3>Departments</h3>
      {allDepartments.departments?.map((department, index) => {
        return(
         <span className="departmentLink" key={index}>
          {/* <p>{department.displayName}</p> */}
          <Link to={`/departments/${department.departmentId}`}>
            {department.displayName}<br/>
          </Link>
          {/* <p>{department.departmentId}</p> */}
         </span>
        )
      })}

      
      
    </div>
  );
}

export default Departments;
