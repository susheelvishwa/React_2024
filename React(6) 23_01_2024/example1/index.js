let input = document.getElementById("input");
let btn = document.getElementById("searchBtn");

btn.addEventListener("click", function () {
  let value = input.value;
  getData(value);
});

function getData(movieName) {
  fetch(`https://www.omdbapi.com/?apikey=f2ba708b&type=movie&s=${movieName}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      showData(res.Search);
    });
}

function showData(data) {
  main.innerHTML = "";
  data.forEach(function (ele, i) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.Poster;

    let title = document.createElement("p");
    title.innerHTML = `<b>Title :</b> ${ele.Title}`;

    let year = document.createElement("Year");
    year.innerHTML = `<b>Year :</b> ${ele.Year}`;

    div.append(img, title, year);
    main.append(div);
  });
}
