// API config
const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
// const API_URL =
//   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const API_URL = `https://api.jikan.moe/v4/anime`;
// const IMG_URL = "https://image.tmdb.org/t/p/w500";
// DOM
const container = document.getElementById("movieContainer");
const searchInput = document.getElementById("search");

//  (LƯU TOÀN BỘ DATA)
let movieList = []; // mảng gốc từ API
let displayList = []; // mảng dùng để hiển thị (search)

// FETCH DATA

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    movieList = data.data;
    displayList = [...movieList];
    renderMovies(displayList);
  })
  .catch((err) => {
    container.innerHTML = "<p>Error loading data</p>";
    console.error(err);
  });

// RENDER UI
function renderMovies(movies) {
  container.innerHTML = "";

  if (movies.length === 0) {
    container.innerHTML = "<p>No anime found</p>";
    return;
  }

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${movie.images.jpg.image_url ? movie.images.jpg.image_url : ""}">
      <div class="info">
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.score}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      alert(
        `Title: ${movie.title}\nRating: ${movie.score}\n\n${movie.synopsis}`,
      );
    });

    container.appendChild(card);
  });
}

// SEARCH (LỌC TỪ MẢNG)
searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  displayList = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(keyword),
  );

  renderMovies(displayList);
});
