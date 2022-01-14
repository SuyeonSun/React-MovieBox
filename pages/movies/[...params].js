import { useRouter } from "next/router";
import Link from "next/link";
// import Seo from "../../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function Detail({params, results}) {
    const router = useRouter();
    const [title, id] = params || [];
    
    const index = results.findIndex(i=>i.original_title == title);
    const vote_average = results[index].vote_average;
    const release_date = results[index].release_date;
    const overview = results[index].overview;
    const poster_path = results[index].poster_path;

    const other_one = results[index+1].poster_path;
    const other_two = results[index+2].poster_path;
    const other_three = results[index+3].poster_path;
    const other_four = results[index+4].poster_path;

    return (
    <div className='detailContainer'>
        <div className='detailOuterBox'>
            {/* <Seo title={title}/> */}
            <div className='detailTitle'> {title} </div>  

            <div className='detailBox'>
                <div className='detailInnerBox'>
                    <div className='StarDate'>
                        <div className='detailStar'> 
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            {vote_average} 
                        </div>
                        <div className='detailDate'>
                            <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                            {release_date}
                        </div>
                    </div>
                    <div className='detailView'>{overview}</div>
                </div>

                <div className='detailImg'>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                </div>
            </div>
        </div>

        <div className='morebox'>
            <div className="moreboxTitle">More Popular Movies</div>
            <div className='moreboxInner'>
                <Link href={`/movies/${results[index+1].original_title}/${results[index+1]}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${other_one}`} />
                </Link>
                <Link href={`/movies/${results[index+2].original_title}/${results[index+2]}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${other_two}`} />
                </Link>
                <Link href={`/movies/${results[index+3].original_title}/${results[index+3]}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${other_three}`} />
                </Link>
                <Link href={`/movies/${results[index+4].original_title}/${results[index+4]}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${other_four}`} />
                </Link>
            </div>
        </div>
    </div>
    )
}

export async function getServerSideProps({params:{params}}) {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            params,
            results,
        }
    }
}