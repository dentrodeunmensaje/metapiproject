import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getDepartmentWorks, getWorksD, departmentSearchStarted, clearDepartmentWorks} from "../redux/actions";
import { useDispatch } from "react-redux";
import Work from "./Work";
import { useState } from "react";


function Department(props) {
  const departments = useSelector((state) => state.departments);
  const departmentWorks = useSelector((state) => state.departmentWorks);
  const departmentWorkIds = useSelector((state) => state.departmentWorkIds);
  const departmentSearchMade = useSelector((state) => state.departmentSearchMade);
  const thisDepartment = departments.departments.find(
    (department) => department.departmentId == props.match.params.id
  );
  const dispatch = useDispatch();
  const [searching, setSearching] = useState(false);


  //when the component mounts, get the department work ids
  useEffect(() => {
    dispatch(clearDepartmentWorks());
    dispatch(getDepartmentWorks(props.match.params.id));
    dispatch(departmentSearchStarted());
  }, []);
  
  function getWorks(){
    setSearching(true);
    dispatch(getWorksD(departmentWorkIds.objectIDs));
  }

  return (
    <div>
      <h3>{thisDepartment.displayName}</h3>
      {thisDepartment.displayName === "Arms and Armor" &&
      <div>
        <p>The Met's Department of Arms and Armor is one of the museum's most popular collections.The distinctive "parade" of armored figures on horseback installed in the first-floor Arms and Armor gallery is one of the most recognizable images of the museum, which was organized in 1975 with the help of the Russian immigrant and arms and armors' scholar, Leonid Tarassuk 1925-90. The department's focus on "outstanding craftsmanship and decoration," including pieces intended solely for display, means that the collection is strongest in late medieval European pieces and Japanese pieces from the 5th through 19th centuries.</p>
      </div>
      }
      {thisDepartment.displayName === "Asian Art" &&
      <div>
        <p>The Met's Asian department holds a collection of Asian art, of more than 35,000 pieces,[21] that is arguably the most comprehensive in the US. The collection dates back almost to the founding of the museum: many of the philanthropists who made the earliest gifts to the museum included Asian art in their collections. Today, an entire wing of the museum is dedicated to the Asian collection, and spans 4,000 years of Asian art. Every known Asian civilization is represented in the Met's Asian department, and the pieces on display include every type of decorative art, from painting and printmaking to sculpture and metalworking.</p>
      </div>
      }
      {thisDepartment.displayName === "Egyptian Art" &&
      <div>
        <p>Though the majority of the Met's initial holdings of Egyptian art came from private collections, items uncovered during the museum's own archeological excavations, carried out between 1906 and 1941, constitute almost half of the current collection. More than 26,000 separate pieces of Egyptian art from the Paleolithic era through the Ptolemaic era constitute the Met's Egyptian collection, and almost all of them are on display in the museum's massive wing of 40 Egyptian galleries.</p>
      </div>
      }
      {thisDepartment.displayName === "European Paintings" &&
      <div>
        <p>The Met's collection of European paintings numbers around 1,700 pieces. The current curator in charge of the European Paintings department is Stephan Wolohojian.</p>
        </div>
      }
      {thisDepartment.displayName === "Greek and Roman Art" &&
      <div>
        <p>The Met's collection of Greek and Roman art contains more than 17,000 objects. The Greek and Roman collection dates back to the founding of the museum—in fact, the museum's first accessioned object was a Roman sarcophagus, still currently on display. Though the collection naturally concentrates on items from ancient Greece and the Roman Empire, these historical regions represent a wide range of cultures and artistic styles, from classic Greek black-figure and red-figure vases to carved Roman tunic pins.</p>
        </div>
      }
      {thisDepartment.displayName === "Islamic Art" &&
      <div>
        <p>The Metropolitan Museum owns one of the world's largest collection of works of art of the Islamic world. The collection also includes artifacts and works of art of cultural and secular origin from the time period indicated by the rise of Islam predominantly from the Near East and in contrast to the Ancient Near Eastern collections. The biggest number of miniatures from the "Shahnameh" list prepared under the reign of Shah Tahmasp I, the most luxurious of all the existing Islamic manuscripts, also belongs to this museum.</p>
        </div>
      }
      {thisDepartment.displayName === "Medieval Art" &&
      <div>
        <p>The Met's collection of medieval art consists of a comprehensive range of Western art from the 4th through the early 16th centuries, as well as Byzantine and pre-medieval European antiquities not included in the Ancient Greek and Roman collection. Like the Islamic collection, the Medieval collection contains a broad range of two- and three-dimensional art, with religious objects heavily represented.</p>
        </div>
      }
      {thisDepartment.displayName === "Modern and Contemporary Art" &&
      <div>
        <p></p>
        </div>
      }
      {thisDepartment.displayName === "Musical Instruments" &&
      <div>
        <p></p>
        </div>
      }
      {thisDepartment.displayName === "Photographs" &&
      <div>
        <p></p>
        </div>
      }
      {thisDepartment.displayName === "The Robert Lehman Collection" &&
      <div>
        <p></p>
        </div>
      }
      {thisDepartment.displayName === "The American Wing" &&
      <div>
        <p></p>
        </div>
      }
      {thisDepartment.displayName === "The Cloisters" &&
      <div>
        <p>The Cloisters was a principal project of John D. Rockefeller, Jr., a major benefactor of the Met. Located in Fort Tryon Park and completed in 1938, it is a separate building dedicated solely to medieval art. The Cloisters collection was originally that of a separate museum, assembled by George Grey Barnard and acquired in toto by Rockefeller in 1925 as a gift to the Met.</p>
        </div>
      }
      {thisDepartment.displayName === "The Libraries" &&
      <div>
        <p>Each Department maintains a library, most of the material of which can be requested online through the libraries' catalog.</p>
        </div>
      }
      {thisDepartment.displayName == 	"American Decorative Arts" &&
      <div>
        <p>The Metropolitan Museum of Art is situated in Lenapehoking, homeland of the Lenape diaspora, and historically a gathering and trading place for many diverse Native Peoples, who continue to live and work on this island. We respectfully acknowledge and honor all Indigenous communities—past, present, and future—for their ongoing and fundamental relationships to the region. Ever since its establishment in 1870, the Museum has acquired important examples of American art. A separate "American Wing" to display the domestic arts of the seventeenth to early nineteenth centuries opened in 1924; painting and sculpture galleries and a skylit courtyard were added in 1980. Today, the Wing's ever-evolving collection comprises some 20,000 works of art by African American, Euro American, Latin American, and Native American men and women. Ranging from the colonial to early-modern periods, the holdings include painting, sculpture, works on paper, and decorative arts—including furniture, textiles, ceramics, glass, silver, metalwork, jewelry, basketry, quill and bead embroidery—as well as historical interiors and architectural fragments.</p>
        </div>
      }
      {thisDepartment.displayName === "Ancient Near Eastern Art" &&
      <div>
        <p></p>
        </div>
      }
      {thisDepartment.displayName === "Arts of Africa, Oceania, and the Americas" &&
      <div>
        <p>Though the Met first acquired a group of Peruvian antiquities in 1882, the museum did not begin a concerted effort to collect works from Africa, Oceania, and the Americas until 1969, when American businessman and philanthropist Nelson A. Rockefeller donated his more than 3,000-piece collection to the museum. Before Rockefeller's collection existed at the Met, Rockefeller founded The Museum of Primitive Art in New York City with the intentions of displaying these works, after the Met had previously shown disinterest in his art collection.</p>
        </div>
      }
      {thisDepartment.displayName === 	"The Costume Institute" &&
      <div>
        <p>The Museum of Costume Art was founded by Aline Bernstein and Irene Lewisohn. In 1946, with the financial support of the fashion industry, the Museum of Costume Art merged with The Metropolitan Museum of Art as The Costume Institute, and in 1959 became a curatorial department. Today, its collection contains more than 35,000 costumes and accessories.</p>
        </div>
        }
      {thisDepartment.displayName === "Drawings and Prints" &&
      <div>
        <p>Though other departments contain significant numbers of drawings and prints, the Drawings and Prints department specifically concentrates on North American pieces and western European works produced after the Middle Ages. The first Old Master drawings, comprising 670 sheets, were presented as a single group in 1880 by Cornelius Vanderbilt II and in effect launched the department, though it was not formally constituted as a department until later.</p>
        </div>
        }
      {thisDepartment.displayName === "European Sculpture and Decorative Arts" &&
      <div>
        <p>The fifty thousand objects in the Museum's comprehensive and historically important collection of European sculpture and decorative arts reflect the development of a number of art forms in Western European countries from the early fifteenth through the early twentieth century. The holdings include sculpture in many sizes and media, woodwork and furniture, ceramics and glass, metalwork and jewelry, horological and mathematical instruments, and tapestries and textiles. Ceramics made in Asia for export to European markets and sculpture and decorative arts produced in Latin America during this period are also included among these works.</p>
        </div>
        }
      {thisDepartment.displayName === 	"Musical Instruments" &&
      <div>
        <p>The Met's collection of musical instruments, with about 5,000 examples of musical instruments from all over the world, is virtually unique among major museums. The collection began in 1889 with a donation of 270 instruments by Mary Elizabeth Adams Brown, who joined her collection to become the museum's first curator of musical instruments, named in honor of her husband, John Crosby Brown. By the time she died, the collection had 3,600 instruments that she had donated and the collection was housed in five galleries.</p>
        </div>
        }
      {thisDepartment.displayName === "Modern Art" &&
      <div>
        <p>With some 13,000 artworks, primarily by European and American artists, the modern art collection occupies 60,000 square feet 6,000 m2, of gallery space and contains many iconic modern works. Cornerstones of the collection include Picasso's portrait of Gertrude Stein, Jasper Johns's White Flag, Jackson Pollock's Autumn Rhythm Number 30, and Max Beckmann's triptych Beginning. Certain artists are represented in remarkable depth, for a museum whose focus is not exclusively on modern art: for example, ninety works constitute the museum's Paul Klee collection, donated by Heinz Berggruen, spanning the entirety of the artist's life.</p>
        </div>
        }


      {/* <p>Se está renderizando un dept</p>
       {console.log ({thisDepartment})} 
       {console.log ({departments})} 
       {console.log (props.match.params.id)} */}
       {/* {departmentWorkIds ? console.log(departmentWorkIds.objectIDs) : null} */}
       {console.log(departmentSearchMade)}
       {console.log(departmentWorks)}
       {!departmentSearchMade ? <button onClick={getWorks}>Get Works</button> : null}
       {departmentWorks.length === 0 && searching != false ? <p>Retrieving {departmentWorkIds.objectIDs.length} works from the database</p> : null}
       {departmentWorks.length!=0 ? departmentWorks.map((work, index) => {
          return(
            <div key={index}>
            <Work 
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
            </div>
          )
        }) : null}
    </div>
  );
}

export default Department;
