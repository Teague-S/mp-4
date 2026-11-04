import type {Metadata} from "next";
import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "MP-4 | CS-303",
    description: "Search movies using the OMDb API",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen bg-slate-900 text-white font-sans">
                <Header/>
                <main className="grow w-4/5 mx-auto p-4">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}
