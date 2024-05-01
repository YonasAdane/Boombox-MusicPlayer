import React  from 'react';
import { useExploreQuery } from '../redux/Services/spotifyAPI';
// import { ExploreInterface } from '../redux/interfaces/Explore.interface';
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
}

function Explore() {
  const { data,
    //  isLoading: queryIsLoading, 
    //  error: queryError 
    } = useExploreQuery({});
  const maincontainer = data?.data?.browseStart?.sections?.items[0];
  const subcontainer = data?.data?.browseStart?.sections?.items[0].sectionItems.items;
  const title = maincontainer?.data?.title.transformedLabel;

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
                  <div id="card" className={item.content.data.__typename}>
                      <img
                        src={cardRepresentation?.artwork.sources[0].url}
                        // width={cardRepresentation?.artwork.sources[0].width}
                        // height={cardRepresentation?.artwork.sources[0].height}
                        alt="square"
                        />
                      <h2>{cardRepresentation?.title.transformedLabel}</h2>
                  </div>
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