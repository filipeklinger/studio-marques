import React from "react";

export function Container({children}: {children:React.ReactNode}){
    //bg-slate-400
    return (
    <div className="bg-black text-white min-h-screen text-center tracking-tighter md:tracking-normal">
        {children}
    </div>)
}