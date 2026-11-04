import Link from "next/link";
import Image from "next/image";
import {Movie} from "@/types";

export default function MovieCard(props: {movie: Movie}) {
    return (
        <Link href={`/movie/${props.movie.imdbID}`} className="w-full max-w-xs p-4 bg-slate-50 text-slate-900 border-4 border-amber-500 rounded text-center">
            <h3 className="text-xl font-bold mb-2">{props.movie.Title}</h3>
            {props.movie.Poster !== "N/A" ? <Image src={props.movie.Poster} alt={`Poster for ${props.movie.Title}`} width={300} height={445} className="w-full h-auto mb-2"/> : <p>No poster</p>}
            <p>Year: {props.movie.Year}</p>
        </Link>
    );
}
