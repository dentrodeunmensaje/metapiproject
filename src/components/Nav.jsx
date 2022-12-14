import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getObjectIds, getWork, getAllDepartments } from "../redux/actions";
import { addWork } from "../redux/actions";

import { NavLink } from "react-router-dom";
import styles from "../styles/styles.css";

function Nav() {
  const dispatch = useDispatch();
  const work = useSelector((state) => state.work);
  
  

  useEffect(() => {
    dispatch(getObjectIds());
    dispatch(getWork(500));
    dispatch(addWork(work));
    dispatch(getAllDepartments());
    //console.log(seenWorks);
  }, []);


  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav active nav-element">
            <NavLink to="/metapiproject">
              Home
            </NavLink>
          </li>&nbsp; &nbsp;
          <li className="nav nav-element">
            <NavLink to="/history">Your favorites</NavLink>
          </li>&nbsp; &nbsp;
          <li className="nav nav-element">
            <NavLink to="/departments">Departments</NavLink>
          </li>&nbsp;&nbsp;
          <li className="nav nav-element">
            <NavLink to="/search">Search</NavLink>
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
    </nav>
  );
}

export default Nav;
