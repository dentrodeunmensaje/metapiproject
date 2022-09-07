import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getObjectIds, getWork, getAllDepartments } from "../redux/actions";
import { addWork } from "../redux/actions";
import Work from "./Work";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/styles.css";

function Nav() {
  const dispatch = useDispatch();
  const work = useSelector((state) => state.work);
  const seenWorks = useSelector((state) => state.seenWorks);
  const objectIds = useSelector((state) => state.objectIds);
  const allDepartments = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(getObjectIds());
    dispatch(getWork(500));
    dispatch(addWork(work));
    dispatch(getAllDepartments());
    //console.log(seenWorks);
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.trunc(
      Math.floor(Math.random() * (objectIds.total - 0 + 1)) + 0
    );
    const realId = objectIds["objectIDs"][id];
    console.log(realId, "resultado del random");
    dispatch(addWork(work));
    dispatch(getWork(realId));
  };

  return (
    <div>
      <div >
        <ul>
          <li className="nav">
            <Link to="/history">Your Browsing History</Link>
          </li>&nbsp; &nbsp;
          <li className="nav">
            <Link to="/departments">Departments</Link>
          </li>&nbsp;&nbsp;
          <li className="nav">
            <Link to="/search">Search</Link>
          </li>&nbsp;&nbsp;
        </ul>
      </div>

      {/* <button
        className="mainButton"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Show me one of your favourite works
      </button> */}

      {/* {seenWorks?.map((work, index) => {
        if (index === seenWorks.length - 1) {
          return (
            <Work
              key={work.objectID}
              title={work.title}
              image={work.primaryImageSmall}
              country={work.country}
              dimensions={work.dimensions}
              beginDate={work.beginDate}
              endDate={work.endDate}
              artist={work.artist}
              additionalImages={work.additionalImages}
              medium={work.medium}
              culture={work.culture}
              department={work.department}
              date={work.date}
            />
          );
        }
      })} */}
    </div>
  );
}

export default Nav;
