"use client";

import Link from "next/link";

// Next.js shows this instead of a page when that page throws (OMDb down, daily limit reached, bad movie id).
export default function ErrorPage() {
    return (
        <section className="text-center">
            <h2 className="text-2xl font-bold mb-2">Could not load movie data</h2>
            <p className="mb-2">The OMDb API may be down or the daily request limit may have been reached. Please try again later.</p>
            <Link href="/" className="underline">Back to home</Link>
        </section>
    );
}
