import React from "react";
import {useSelector} from "react-redux";
import Work from "./Work";

function History() {

  const seenWorks = useSelector((state) => state.seenWorks);
  return (
    <div>
      <h3>Your favorites</h3>
      {seenWorks?.map((work, index) => {
        if (index>0){
          return(
            <Work
            key={work.objectID}
            title={work.title}
            image={work.image}  
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
            favorite={work.favorite}
            objectID={work.objectID}
          />
          )
        }
      })}
    </div>
  );
}

export default History;
