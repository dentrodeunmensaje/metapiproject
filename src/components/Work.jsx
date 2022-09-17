import React from "react";
import styles from "../styles/styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWork } from "../redux/actions";
import { removeFromSeenWorks } from "../redux/actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

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
    <div className="work_full">
      <h3>{title}</h3>

      {isFavorite ? (
        <div>
          <form>
            <input
              type="button"
              id="favorites"
              name="favorites"
              onClick={(e) => {
                handleRemove(e);
              }}
              value="Remove from favorites"
            />
          </form>
        </div>
      ) : (
        <div>
          <form>
            <input
              type="button"
              id="favorites"
              name="favorites"
              onClick={(e) => {
                handleChange(e);
              }}
              value="Add to favorites"
            />
          </form>
        </div>
      )}

      {artist ? <p>Artist: {artist}</p> : null}
      {image ? <img src={image} /> : <p>No main image in the API</p>}
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
      {country ? <p>Country: {country}</p> : null}
      {dimensions ? <p>Dimensions: {dimensions}</p> : null}
      {medium ? <p>Medium: {medium}</p> : null}
      {culture ? <p>Culture: {culture}</p> : null}
      {department ? <p>Department: {department}</p> : null}
      {date ? <p>Date: {date}</p> : null}
      {culture ? <p>Culture: {culture}</p> : null}
      {beginDate ? <p>Begin Date: {beginDate}</p> : null}
      {endDate ? <p>End Date: {endDate}</p> : null}
    </div>
  );
}

export default Work;
