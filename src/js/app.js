import { API_TOKEN, BASE_URL_MOVIE, BASE_URL_SERIES, URL_IMAGE } from "./api.js"
import { getPopularMovies, getPopularAvaliados, getOnAirTvSeries } from "./api.js"

async function moviePopular() {
  const moviesEl = document.querySelector('#movies')

  const movies = await getPopularMovies()

  let li = ""



  movies.results.forEach(movie => {
    const dataBr = movie.release_date.split('-').reverse().join('/');

    li += `
        <li id="movie">
        <div id="movie-card">
          <img src="${URL_IMAGE}${movie.poster_path}" alt="poster do filme"/>
          <hr>
          <h3>${movie.title}</h3>
        </div>
        <div id="sinopse">
        <h5>${dataBr}</h5>
        <p>${movie.overview}</p>
        <span>Popularidade: <b>${movie.popularity}</b></span>
        </div>
        </li>
                `
  });
  moviesEl.innerHTML = li;

  document.querySelectorAll('#movie').forEach(movieEl => {
    const card = movieEl.querySelector('#movie-card');
    const sinopse = movieEl.querySelector('#sinopse');

    // Quando o mouse entrar no card, exibe a sinopse
    sinopse.addEventListener('mouseover', () => {
      sinopse.style.display = 'block';
      card.style.opacity = '0.4'
    })

    card.addEventListener('mouseover', () => {
      sinopse.style.display = 'block';
      card.style.opacity = '0.4'
    });

    // Quando o mouse sair do card, esconde a sinopse
    sinopse.addEventListener('mouseout', () => {
      sinopse.style.display = 'none';
      card.style.opacity = '1'
    })

    card.addEventListener('mouseout', () => {
      sinopse.style.display = 'none';
      card.style.opacity = '1'
    });
  });
}


async function movieMoreRated() {
  const moviesEl = document.querySelector('#movies-10')
  const movies = await getPopularAvaliados()

  let li = ""

  movies.results.forEach(movie => {
    li += `
    <li id="movietop">
    <div id="movie-top-card">
      <a href=""
      ><img
        src="${URL_IMAGE}${movie.poster_path}"
        alt="poster do filme"
    /></a>
    <hr />
    <h3>${movie.title}</h3>
    </div>
    <div id="sinopse-top">
      <h5>${movie.title}</h5>
      <p>${movie.overview}</p>
      <span>Popularidade: <b>${movie.popularity}</b></span>
    </div>
  </li>
        `
  });

  moviesEl.innerHTML = li

  document.querySelectorAll('#movietop').forEach(movieEl => {
    const card = movieEl.querySelector('#movie-top-card');
    const sinopse = movieEl.querySelector('#sinopse-top');

    // Quando o mouse entrar no card, exibe a sinopse
    sinopse.addEventListener('mouseover', () => {
      sinopse.style.display = 'block';
      card.style.opacity = '0.4'
    })

    card.addEventListener('mouseover', () => {
      sinopse.style.display = 'block';
      card.style.opacity = '0.4'
    });

    // Quando o mouse sair do card, esconde a sinopse
    sinopse.addEventListener('mouseout', () => {
      sinopse.style.display = 'none';
      card.style.opacity = '1'
    })

    card.addEventListener('mouseout', () => {
      sinopse.style.display = 'none';
      card.style.opacity = '1'
    });
  });
}

//Chamando as Funçôes

moviePopular()
movieMoreRated()
