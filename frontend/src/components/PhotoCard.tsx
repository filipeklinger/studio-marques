export function PhotoCard({ src, children }: { src: string, children: React.ReactNode }) {
    return (
        <div className="flex-1 relative  w-full aspect-[3/4]">
            <img className="absolute w-full h-full object-cover" src={src} />
            <div className="absolute flex justify-center items-center w-full h-full ">
                <div className="rounded-3xl flex flex-col justify-center items-center w-48 h-48 text-white bg-black/[.5]">
                    {children}
                </div>

            </div>

        </div>
    )
}