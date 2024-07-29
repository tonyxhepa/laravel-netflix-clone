import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export interface Movie {
    id: number;
    title: string;
    slug: string;
    overview: string;
    posterPath: string;
    backdropPath: string;
    releaseDate: string;
    videoUrl: string;
    trailerUrl: string;
    viewCount: number;
    genres: Genre[];
}

export interface Series {
    id: number;
    title: string;
    slug: string;
    overview: string;
    posterPath: string;
    backdropPath: string;
    releaseDate: string;
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
}
