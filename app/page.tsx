import SearchForm from "@/components/SearchForm";
import MovieCard from "@/components/MovieCard";
import {getMovies} from "@/lib/getMovies";
import {Movie} from "@/types";

// SSR: fetch fresh data on every request instead of caching it.
export const dynamic = "force-dynamic";

// OMDb has no "popular" list, so the home page starts with a default search.
const DEFAULT_SEARCH = "Star Wars";

export default async function Home({searchParams}: {searchParams: Promise<{search?: string}>}) {
    const {search} = await searchParams;
    const query = search ? search : DEFAULT_SEARCH;
    const movies = await getMovies(query);

    return (
        <section className="text-center">
            <SearchForm search={search}/>
            <h2 className="text-2xl font-bold mb-4">Results for &quot;{query}&quot;</h2>
            {movies.length === 0 ? <p>No movies found.</p> : null}
            <div className="flex flex-wrap justify-center gap-4">
                {
                    movies.map((movie: Movie) =>
                        <MovieCard key={movie.imdbID} movie={movie}/>
                    )
                }
            </div>
        </section>
    );
}
