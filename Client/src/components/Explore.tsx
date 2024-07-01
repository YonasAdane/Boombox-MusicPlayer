import React  from 'react';
import { useExploreQuery } from '../redux/Services/spotifyAPI';
import { Link } from 'react-router-dom';
interface SectionItemsItem {
  content: {
    __typename: string;
    data: {
      __typename: string;
      data?: { 
        cardRepresentation: {
          title: {
            transformedLabel: string;
          };
          artwork: {
            sources: {
              url: string;
              width: number;
              height: number;
            }[];
          };
          backgroundColor: {
            hex: string;
          };
        };
      };
    };
  };
  uri:string;
}

function Explore() {
  const { data,
    //  isLoading: queryIsLoading, 
    //  error: queryError 
    } = useExploreQuery({});
  const maincontainer = data?.data?.browseStart?.sections?.items[0];
  const subcontainer = data?.data?.browseStart?.sections?.items[0].sectionItems.items;
  const title = maincontainer?.data?.title.transformedLabel;
    // console.log(data)
  return(
    <div className="Explore">
      <h2 className='main-title-Content'>{title}</h2>
      <div className={`Browse All${maincontainer?.data.__typename}`}>
        {/* map here */}
        {subcontainer?.map((list: SectionItemsItem | null) => {
          if (list) {
            const item = list;
            if (item && item.content.data) {
              const cardRepresentation = item?.content?.data?.data?.cardRepresentation;
              return (
                <div className={item.content.__typename}>
                  <Link to={`/genre/${item?.uri.split(":").slice(-1)}`}>
                    <div id="card" className={item.content.data.__typename}>
                        <img
                          src={cardRepresentation?.artwork.sources[0].url}
                          alt="square"
                          />
                        <h2>{cardRepresentation?.title.transformedLabel}</h2>
                    </div>
                  </Link>
                </div>

              );
            }
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Explore;