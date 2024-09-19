export class Movie {
    title: string;
    description: string;
    posterUrl: string;

    constructor(title: string, description: string, posterUrl: string) {
        this.title = title;
        this.description = description;
        this.posterUrl = posterUrl;
    }
}

export class Genre {
    title: string;
    description: string;
    movies: Movie[];

    constructor(title: string, description: string, movies: Movie[]) {
        this.title = title;
        this.description = description;
        this.movies = movies;
    }
}
