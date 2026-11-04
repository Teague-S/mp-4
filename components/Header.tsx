import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-800 p-4 text-center">
            <h1 className="text-4xl font-bold">
                <Link href="/">Movie Finder</Link>
            </h1>
            <p>Search movies from the Open Movie Database</p>
        </header>
    );
}
