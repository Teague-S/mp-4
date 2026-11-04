import Link from "next/link";
import Image from "next/image";
import {getMovieDetails} from "@/lib/getMovies";

// SSR: fetch fresh data on every request instead of caching it.
export const dynamic = "force-dynamic";

export default async function MoviePage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const movie = await getMovieDetails(id);

    return (
        <article className="max-w-3xl mx-auto p-4 bg-slate-50 text-slate-900 rounded">
            <Link href="/" className="underline">Back to search</Link>
            <h2 className="text-3xl font-bold my-2">{movie.Title} ({movie.Year})</h2>
            {movie.Poster !== "N/A" ? <Image src={movie.Poster} alt={`Poster for ${movie.Title}`} width={300} height={445} className="max-w-full h-auto mb-2"/> : null}
            <p><strong>Rated:</strong> {movie.Rated}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>IMDb rating:</strong> {movie.imdbRating} / 10</p>
            <p className="mt-4">{movie.Plot}</p>
        </article>
    );
}
