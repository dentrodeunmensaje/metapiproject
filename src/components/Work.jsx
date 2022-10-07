import React from "react";
import styles from "../styles/styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWork } from "../redux/actions";
import { removeFromSeenWorks } from "../redux/actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import noimage from "./images/noimage.png";

function Work({
  title,
  image,
  country,
  dimensions,
  beginDate,
  //additionalImages,
  endDate,
  medium,
  department,
  culture,
  artist,
  date,
  objectID,
  favorite,
}) {
  const dispatch = useDispatch();
  const seenWorks = useSelector((state) => state.seenWorks);
  const [isFavorite, setIsFavorite] = useState(false);

  function handleChange(event) {
    dispatch(
      addWork({
        title,
        image,
        country,
        dimensions,
        beginDate,
        endDate,
        medium,
        department,
        culture,
        artist,
        date,
        favorite: true,
        objectID,
      })
    );
  }

  function handleRemove(event) {
    setIsFavorite(false);
    dispatch(removeFromSeenWorks(objectID));
  }

  //on load, check if the work is in the favorites list
  useEffect(() => {
    if (seenWorks) {
      seenWorks.forEach((work) => {
        if (work.objectID === objectID) {
          setIsFavorite(true);
        }
      });
    }
  }, [seenWorks]);

  return (
    <div className="work_full container-fluid  ">
      <div className="flex-child">
        <h3 className="work-title">{title}</h3>

        {isFavorite ? (
          <>
            <form className="fav-btn">
              <input
                type="button"
                id="favorites"
                name="favorites"
                onClick={(e) => {
                  handleRemove(e);
                }}
                value="Remove from favorites"
                className="btn btn-warning btn-md"
              />
            </form>
          </>
        ) : (
          <>
            <form className="fav-btn">
              <input
                type="button"
                id="favorites"
                name="favorites"
                onClick={(e) => {
                  handleChange(e);
                }}
                value="Add to favorites"
                className="btn btn-info btn-md"
              />
            </form>
          </>
        )}

        {image ? (
          <img
            className="col-md-6 col-lg-6 col-sm-6 col-xs-6 work-img"
            src={image}
          />
        ) : (
          <img
            className="col-md-6 col-lg-6 col-sm-6 col-xs-6 work-img"
            src={noimage}
          />
        )}
        {/* {additionalImages ? (
        <>
            {additionalImages.map((image) => (
              <span key={image} >
                <img src={image} className='additionalImage' />
              </span>
            ))}

          <br />
        </>
      ) : null} */}
        <div className="work-desc">
          {artist ? (
            <p className="small description">Artist: {artist}</p>
          ) : null}
          {country ? (
            <p className="small description">Country: {country}</p>
          ) : null}
          {dimensions ? (
            <p className="small description">Dimensions: {dimensions}</p>
          ) : null}
          {medium ? (
            <p className="small description">Medium: {medium}</p>
          ) : null}
          {culture ? (
            <p className="small description">Culture: {culture}</p>
          ) : null}
          {department ? (
            <p className="small description">Department: {department}</p>
          ) : null}
          {date ? <p className="small description">Date: {date}</p> : null}
          {beginDate ? (
            <p className="small description">Begin Date: {beginDate}</p>
          ) : null}
          {endDate ? (
            <p className="small description">End Date: {endDate}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Work;
