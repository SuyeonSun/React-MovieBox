import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Seo from "../components/Seo";

export default function Home({results}) {
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    };
  return (
    <div className="container">
    {/* <Seo title="Home" /> */}
    {results.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>
                <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                <a> {movie.original_title}</a>
                </Link>
            </h4>
        </div>
    ))}
  </div>
  );
}

export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        }
    }
}

