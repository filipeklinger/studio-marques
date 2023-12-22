export function PhotoCard({ src, children, onClick }: { src: string, children: React.ReactNode, onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) {
    return (
        <div className="flex-1 relative  w-full aspect-[3/4]">
            <img className="absolute w-full h-full object-cover" src={src} />
            <div className="absolute flex justify-center items-center w-full h-full ">
                <div onClick={(e) => onClick?.(e)} className="rounded-3xl flex cursor-pointer flex-col justify-center items-center w-48 h-48 text-white bg-black/[.5] hover:bg-black/80">
                    {children}
                </div>

            </div>

        </div>
    )
}