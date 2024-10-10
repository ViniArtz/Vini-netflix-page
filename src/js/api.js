// module import/export

export const BASE_URL_SERIES = 'https://api.themoviedb.org/3/tv';
export const BASE_URL_MOVIE = 'https://api.themoviedb.org/3/movie';
export const URL_IMAGE = 'https://image.tmdb.org/t/p/w300';
export const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmI4MjZkYTY1NTdiMGZkZTM3YmU4ZWEzNTJkZWFhOSIsIm5iZiI6MTcyODIzMjA0Ni4wNjAwMDQsInN1YiI6IjY2ZjQ4ZDBlNGZkNGViZTIyNDBlMGVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x50Tq_yqLd-sHJDWQAoX4rD9i9I_dc6r9BrERTGmYnE' //Your token here


// ROTA (filmes populares)
export async function getPopularMovies() {
    const response = await fetch(`${BASE_URL_MOVIE}/popular?language=pt-BR&page=1`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        },
    })
    const movies = await response.json()
    return movies
}

// ROTA (Bem avaliados)

export async function getPopularAvaliados() {
    const response = await fetch(`${BASE_URL_MOVIE}/top_rated?language=pt-BR&page=1`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        },
    })
    const movies = await response.json()
    console.log(movies);

    return movies
}

// ROTA (Series no ar)

export async function getOnAirTvSeries() {
    const response = await fetch(`${BASE_URL_SERIES}/on_the_air?language=en-US&page=1`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        },
    })
    const series = await response.json()
    // console.log(series);

    return series
}