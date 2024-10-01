import { API_TOKEN, BASE_URL_MOVIE, BASE_URL_SERIES, URL_IMAGE } from "./api.js"
import { getPopularMovies, getPopularAvaliados, getOnAirTvSeries } from "./api.js"

async function moviePopular() {
    const moviesEl = document.querySelector('#movies')

    const movies = await getPopularMovies()

    let li = ""

    movies.results.forEach(movie => {
        li += `
        <li id="movie">
        <a href=""><img src="${URL_IMAGE}${movie.poster_path}" alt="poster do filme"/></a>
        <hr>
        <h3>${movie.title}</h3>
      </li>
                `
    });

    moviesEl.innerHTML = li
}

moviePopular()

async function movieMoreRated() {
    const moviesEl = document.querySelector('#moviesRated')

    const movies = await getPopularAvaliados()

    let li = ""

    movies.results.forEach(movie => {
        li += `
        <li id="movietop">
        <a href=""
          ><img
            src="${URL_IMAGE}${movie.poster_path}"
            alt="poster do filme"
        /></a>
        <hr />
        <h3>${movie.title}</h3>
      </li>
        `
    });

    moviesEl.innerHTML = li
}

movieMoreRated()

async function tvSeriesOnAir() {
    const tvSeriesEl = document.querySelector('#seriesOnAir')

    const tvSeries = await getOnAirTvSeries()

    let li = ""

    tvSeries.results.forEach(series => {
        li += `        
        <img src="${URL_IMAGE}${series.backdrop_path}" alt="">
        <h2>${series.name}<h2>
        `
    });

    tvSeriesEl.innerHTML = li
}
tvSeriesOnAir()