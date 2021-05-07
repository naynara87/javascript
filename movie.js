import axios from 'axios'

function fetchMovies() {
    axios
        .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
        .then(res => {
            console.log(res)
            const h1El = document.querySelector('h1')
            const imgEl = document.querySelector('img')
            const h2El = document.querySelector('h2')
            const pEl = document.querySelector('p')
            const spanEl = document.querySelector('span')
            h1El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster
            h2El.textContent = res.data.Search[0].Type
            pEl.textContent = res.data.Search[0].imdbID
            spanEl.textContent = res.data.Search[0].Year
        })
}
fetchMovies()