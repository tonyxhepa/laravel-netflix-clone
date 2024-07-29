import { Movie } from "@/types";
import React from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <div className="group bg-slate-900 col-span relative h-[12vw]">
            <img
                className="cursor-pointer object-cover transition duration-200 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
                src={`images/${movie.posterPath}`}
                alt={movie.title}
            />
            <div className="opacity-0 absolute top-0 transition duration-200 ease-in-out z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:opacity-100">
                <img
                    className="cursor-pointer object-cover transition duration-200 shadow-xl rounded-t-md w-full h-[12vw]"
                    src={`images/${movie.posterPath}`}
                    alt={movie.title}
                />
                <div className="z-10 bg-slate-950 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className="flex flex-row justify-between items-center gap-3">
                        <div className="flex space-x-4">
                            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-slate-400 rounded-full flex justify-center items-center transition hover:bg-slate-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                    />
                                </svg>
                            </div>
                            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-slate-400 rounded-full flex justify-center items-center transition hover:bg-slate-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="justify-end">{movie.releaseDate}</div>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        {movie.genres?.map((genre) => (
                            <p
                                key={genre.id}
                                className="cursor-pointer text-white text-xs lg:text-sm"
                            >
                                {genre.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
