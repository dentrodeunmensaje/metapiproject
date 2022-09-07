import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchByQuery } from "../redux/actions";
import SearchResult from "./SearchResult";
import { getWorks } from "../redux/actions";
import {startSearch} from '../redux/actions'
import {useEffect} from 'react'
import Work from "./Work";

function Search() {
  const allDepartments = useSelector((state) => state.departments);
  const searchQuery = useSelector((state) => state.searchQuery);
  const searchHasImages = useSelector((state) => state.searchHasImages);
  const searchDepartment = useSelector((state) => state.searchDepartment);
  const searchIsHighlight = useSelector((state) => state.searchIsHighlight);
  const searchResults = useSelector((state) => state.searchResults);
  const works = useSelector((state) => state.works);
  const searchMade = useSelector((state) => state.searchMade);

  const dispatch = useDispatch();
  const searchInput = {
    q: "",
    departmentId: 0,
    hasImages: false,
    isHighlight: false,
  };
  const searchUrl = "";

  //use useEffect to dispatch startSearch on load
  useEffect(() => {
    dispatch(startSearch())
  }, [])

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByQuery(searchInput));
  };

  let handleChange = (e) => {
    //console.log("Changed for: " + e.target.value);
    if (e.target.name === "q") {
      searchInput.q = e.target.value;
    } else if (e.target.name === "departmentId") {
      searchInput.departmentId = e.target.value;
    } else if (e.target.name === "hasImages") {
      searchInput.hasImages = e.target.checked;
    } else if (e.target.name === "isHighlight") {
      searchInput.isHighlight = e.target.checked;
    }
    console.log(searchInput);
  };

  let getResults = () => {
    dispatch(getWorks(searchResults.objectIDs));
  };

 

  return (
    <div>
      <h3>Search</h3>
      <form
        className="search-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Key Word *Required</label>
        <br />
        <input
          type="text"
          name="q"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label>Department</label>
        <br />
        <select
          name="departmentId"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <br />
          {allDepartments.departments?.map((department) => {
            return (
              <option
                key={department.departmentId}
                value={department.departmentId}
              >
                {department.displayName}
              </option>
            );
          })}
        </select>
        <br />
        <label>Has image</label>
        <input
          type="checkbox"
          name="hasImages"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label>Is highlight</label>
        <input
          type="checkbox"
          name="isHighlight"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <input type="submit" value="Search" />
      </form>
      {searchResults.objectIDs && searchMade===false ? getResults() : null}
      {searchResults.total? <p>Total Results:{searchResults.total}</p>: <p>No results</p>}
      
       {works? works.map((work) => {
          return <Work 
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
          
          }): null}
       
    </div>
  );
}

export default Search;
