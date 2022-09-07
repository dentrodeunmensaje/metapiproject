import React from "react";
import {useSelector} from "react-redux";
import Work from "./Work";

function History() {

  const seenWorks = useSelector((state) => state.seenWorks);
  return (
    <div>
      History
      {seenWorks?.map((work) => {
          return(
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
          )
      })}
    </div>
  );
}

export default History;
