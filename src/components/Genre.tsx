import { useGenreViewQuery } from "../redux/Services/spotifyAPI";
import { GenreView,PurpleItem,FluffyItem } from "../redux/interfaces/GenreView.interface";
import { useParams } from "react-router";
import TitleHeader from "./TitleHeader";
import SquareDetailCard from "./cards/SquareDetailCard";
import { ifError } from "assert";
function Genre() {
  const { genreid } = useParams();
  const { data,
    //  isLoading: queryIsLoading, 
    //  error: queryError 
    } = useGenreViewQuery({genreID:"0JQ5DAqbMKFEC4WFtoNRpw"});
    // console.log(data);
  return (
    <div className="playlist-single-container">
      {data?.content?.items?.map((item: PurpleItem) => (
        <div key={item.id}> {/* Add a unique key for each item */}
          {item.rendering === "HEADER"? 
            <TitleHeader key={12}
              // profile={profile} (if needed)
              type="Genre"
              title={item?.name}
              message={`The best 50 from the world music. Always fresh and always brand new.
                created by **Spotify** -- mins`}
            />:
            <>
              <h2>{item?.name}</h2>
              <div className='card-container'>
                {item?.content?.items?.map((carditem:FluffyItem)=>(
                  <SquareDetailCard 
                    key={carditem.id}
                    cover={carditem?.images[0]?.url}
                    title={carditem?.name}
                    subtitle={carditem?.description}
                    />

                ))}
              </div>
            </>
            
          
          }
        </div>
      ))}
    
        
              

        {/* </div> */}
    </div>
  )
}

export default Genre