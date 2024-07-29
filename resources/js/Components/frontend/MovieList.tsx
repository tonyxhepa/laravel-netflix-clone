import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/types";

interface MovieListProps {
    title: string;
    movies: Movie[];
}

const MovieList = ({ title, movies }: MovieListProps) => {
    return (
        <div className="px-4 md:px-12 mt-4 mb-6 space-x-8">
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                {title}
            </p>
            <div className="grid grid-cols-4 gap-2">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
