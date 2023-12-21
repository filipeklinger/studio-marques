import React from "react";

export function Section({ title, children, variant, fontSize }: { title: string, children: React.ReactNode, variant?: 'black' | 'white', fontSize?: string }) {
    const bgVariant = (variant == "white") ? "bg-white text-black" : "bg-black text-white"
    const font = (fontSize) ? fontSize : "text-5xl md:text-6xl";
    return (
        <section className={"pt-9 md:p-16 text-center " + bgVariant}>
            <h1 className={font + " font-serif text-yellow-400 pb-10"}>{title}</h1>
            {children}
        </section>
    )
}