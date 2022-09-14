import React from "react";
import styles from "../styles/styles.css";
import { Link } from "react-router-dom";


function Work({
  title,
  image,
  country,
  dimensions,
  beginDate,
  // additionalImages,
  endDate,
  medium,
  department,
  culture,
  artist,
  date,
}) {
  return (
    <div className="work_full">
      <h3>{title}</h3>
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
