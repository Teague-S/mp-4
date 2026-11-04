// A plain HTML form. Submitting it loads /?search=..., which the home page reads on the server.
export default function SearchForm(props: {search?: string}) {
    return (
        <form action="/" className="flex flex-wrap justify-center items-center gap-2 mb-4">
            <label htmlFor="search">Search movies:</label>
            <input id="search" name="search" type="text" defaultValue={props.search} className="p-2 rounded bg-white text-slate-900"/>
            <button type="submit" className="px-4 py-2 rounded bg-amber-500 text-slate-900 font-bold">Search</button>
        </form>
    );
}
