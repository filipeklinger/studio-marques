import React from "react";

export function Container({children}: {children:React.ReactNode}){
    return (
    <div className="bg-slate-400 text-white min-h-screen">
        {children}
    </div>)
}