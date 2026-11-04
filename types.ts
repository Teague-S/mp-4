export type Movie = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
};

// OMDb wraps search results in a Search array. Response is "False" when nothing matches.
export type SearchPayload = {
    Search?: Movie[];
    Response: string;
    Error?: string;
};

export type MovieDetails = Movie & {
    Rated: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    imdbRating: string;
    Response: string;
    Error?: string;
};
