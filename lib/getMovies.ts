import {Movie, MovieDetails, SearchPayload} from "@/types";

// Only read on the server, so the key never reaches the browser.
const API_KEY = process.env.OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// Shared by both functions below. Throws if OMDb is down or the daily limit is reached.
async function fetchJson(url: string) {
    const res = await fetch(url, {cache: "no-store"});

    if (!res.ok) {
        throw new Error(`OMDb request failed with status ${res.status}`);
    }
    return res.json();
}

export async function getMovies(search: string): Promise<Movie[]> {
    const data: SearchPayload = await fetchJson(`${BASE_URL}?apikey=${API_KEY}&type=movie&s=${encodeURIComponent(search)}`);

    // OMDb leaves out Search when nothing matches. That is not an error, just an empty list.
    if (!data.Search) {
        return [];
    }
    return data.Search;
}

export async function getMovieDetails(id: string): Promise<MovieDetails> {
    const data: MovieDetails = await fetchJson(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);

    // A bad id comes back as Response "False", so treat it as an error.
    if (data.Response === "False") {
        throw new Error(`OMDb error: ${data.Error}`);
    }
    return data;
}
