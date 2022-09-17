import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchByQuery } from "../redux/actions";
import { getWorks } from "../redux/actions";
import { startSearch } from "../redux/actions";
import { useEffect } from "react";
import Work from "./Work";
import { clearSearchResults } from "../redux/actions";

function Search() {
  const allDepartments = useSelector((state) => state.departments);
  const searchResults = useSelector((state) => state.searchResults);
  const works = useSelector((state) => state.works);
  const searchMade = useSelector((state) => state.searchMade);

  const dispatch = useDispatch();
  
  const [searchInput, setSearchInput] = React.useState({
    q: "",
    departmentId: 0,
    hasImages: false,
    isHighlight: false,
  });

  const [errors, setErrors] = React.useState({
    q: "",
    departmentId: "",
  });

  //use useEffect to dispatch startSearch on load
  useEffect(() => {
    dispatch(startSearch());
  }, []);

  useEffect(() => {
    let check = validate (searchInput);
    setErrors(check);
  }, [searchInput]);

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByQuery(searchInput));
  };


  let handleChange = (e) => {
    //console.log("Changed for: " + e.target.value);
    if (e.target.name === "q") {
      setSearchInput({
        ...searchInput,
        q: e.target.value,
      });
    } else if (e.target.name === "departmentId") {
      setSearchInput({
        ...searchInput,
        departmentId: e.target.value,
      });
    } else if (e.target.name === "hasImages") {
      setSearchInput({
        ...searchInput,
        hasImages: e.target.checked,
      });
    } else if (e.target.name === "isHighlight") {
      setSearchInput({
        ...searchInput,
        isHighlight: e.target.checked,
      });
    }
    
    let check = validate (searchInput);
    setErrors(check);
  };

  let getResults = () => {
    dispatch(getWorks(searchResults.objectIDs));
  };

  let clearResults = () => {
    searchInput = {
      q: "",
      departmentId: 0,
      hasImages: false,
      isHighlight: false,
    };
    dispatch(clearSearchResults());
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
        <label>Key Word(s)</label>
        <br />
        <input
          type="text"
          name="q"
          onChange={(e) => {
            handleChange(e);
          }}
          className={errors.q && "error"}
      
        />
        {errors.q ? <p className="error">{errors.q}</p>: <br/>}
        
        <label>Department</label>
        <br />
        <select
          name="departmentId"
          onChange={(e) => {
            handleChange(e);
          }}
          className={errors.departmentId && "error"}

        >
          <option value="" disabled selected>Select a department *Required</option>
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
        {errors.departmentId ? <p className="error">{errors.departmentId}</p>: <br/>}
        
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
      <button onClick={clearResults}>Clear search results</button>
      {searchResults.objectIDs && searchMade === false ? getResults() : null}
      {searchResults.total ? (
        <p>Total Results:{searchResults.total}</p>
      ) : (
        <p>No results</p>
      )}

      {works
        ? works.map((work) => {
            return (
              <div key= {work.objectID}>
              <Work
                title={work.title}
                image={work.primaryImageSmall}
                country={work.country}
                dimensions={work.dimensions}
                beginDate={work.beginDate}
                endDate={work.endDate}
                additionalImages={work.additionalImages}
                medium={work.medium}
                department={work.department}
                culture={work.culture}
                artist={work.artistDisplayName}
                date={work.objectDate}
                objectID={work.objectID}
                key={work.objectID}
                favorite={work.favorite}
              />
              </div>
            );
          })
        : null}
        {/* {console.log(searchInput)} */}
    </div>
  );
}

export default Search;

export function validate (searchInput) {
  let errors = {};
  if (searchInput.q==='') {
    errors.q = "Key word(s) are required";
  }
  if (searchInput.departmentId===0) {
    errors.departmentId = "Department is required";
  }
  return errors;
}
