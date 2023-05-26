const movies = [];

const professionals = [];

const moviesSection = document.getElementById('movies-section');
const moviesContainer = document.getElementById('movies-container');
const professionalsSection = document.getElementById('professionals-section');
const professionalsContainer = document.getElementById('professionals-container');
const movieForm = document.getElementById('movie-form');

// document.getElementById('movies-link').addEventListener('click', () => {
//   moviesSection.style.display = 'block';
//   professionalsSection.style.display = 'none';
// });

// document.getElementById('professionals-link').addEventListener('click', () => {
//   moviesSection.style.display = 'none';
//   professionalsSection.style.display = 'block';
// });

$(document).ready(function() { 
  //Cargamos y pintamos los profesionales
  loadProfessionalsBC();
  displayProfessionals();

  //Cargamos y pintamos los profesionales
  loadMoviesBC();
  displayMovies();
});

// movieForm.addEventListener('submit', (e) => {
//   e.preventDefault();


//   const titulo = document.getElementById('titulo').value;
//   const releaseYear = parseInt(document.getElementById('release-year').value);
//   const nationality = document.getElementById('nationality').value;
//   const language = document.getElementById('language').value;
//   const genero = document.getElementById('genero').value;


//   const movie = {
//     titulo,
//     Añosalida,
//     nacionalidad,
//     genero
//   };

//   movies.push(movie);


//   movieForm.reset();


//   displayMovies();
// });

function loadMoviesBC() {
  var movie1 = new Movie(
    "Shrek",
  1994,
  ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
  "USA",
  "Andrew Adamson, Vicky Jenson",
  "Ted Elliott, Terry Rossio, Joe Stillman, Roger S. H. Schulman",
  "English",
  "Theatrical",
  false,
  "Shrek",
  "Jeffrey Katzenberg, Aron Warner, John H. Williams",
  "DreamWorks Animation",
  "Animation, Adventure, Comedy",
    "https://i.pinimg.com/originals/d1/9b/af/d19bafe4354bb867ef332f270f392c53.jpg"
  );

  var movie2 = new Movie(
    "Shrek 2",
    2004,
    ["Mike Myers", "Antonio Banderas", "Eddie Murphy", "Cameron Diaz"],
    "USA",
    "Andrew Adamson, Kelly Asbury, Conrad Vernon",
    "Andrew Adamson, Joe Stillman, J. David Stem, David N. Weiss",
    "English",
    "Theatrical",
    false,
    "Shrek 2",
    "Jeffrey Katzenberg, Aron Warner, David Lipman",
    "DreamWorks Animation",
    "Animation, Adventure, Comedy",
    "https://i.pinimg.com/736x/bb/e3/e0/bbe3e0668e6ac8585baa059b86d62659.jpg"
  );

  var movie3 = new Movie(
    "Shrek 3",
    2007,
    ["Mike Myers", "Cameron Diaz", "Eddie Murphy","Antonio Banderas"],
    "USA",
    "Chris Miller, Raman Hui",
    "Jeffrey Price, Peter S. Seaman, Jon Zack",
    "English",
    "Theatrical",
    false,
    "Shrek the Third",
    "Jeffrey Katzenberg, Aron Warner, David Lipman",
    "DreamWorks Animation",
    "Animation, Adventure, Comedy",
    "https://i.pinimg.com/originals/0d/c7/01/0dc7018c59fe569e7d4d23db1c395b20.jpg"
  );

  movies.push(movie1, movie2, movie3);

}

function loadProfessionalsBC() {
  var professional1 = new Professional(
    "Mike Myers ",
    60,
    82,
    1.73,
    false,
    "CANADA",
    0,
    "Actor",
    "https://media2.giphy.com/media/5xZVmQT7KjMeJcN7MQ/giphy.gif"
  );
  var professional2 = new Professional(
    "Cameron Diaz",
    50,
    56,
    1.74,
    false,
    "USA",
    0,
    "Actress",
   "https://imggraficos.gruporeforma.com/2022/07/90c8ec3de4819016cbcabc7e193ddcf1-1.gif"
  );
  var professional3 = new Professional(
    "Steven Spielberg",
    62,
    80,
    1.75,
    false,
    "USA",
    0,
    "actor",
    "https://i.imgur.com/TTuvBnz.gif"
  );

  professionals.push(professional1, professional2, professional3)
}

function displayProfessionals() {

  professionals.forEach(function (ItemProfessional) {
    var listItem = $("<li>");
 
  
    var nameElement = $("<h3>").text(ItemProfessional.Name);
    listItem.append(nameElement);
  
    var ageElement = $("<p>").text("Age: " + ItemProfessional.Age);
    listItem.append(ageElement);
  
    var weightElement = $("<p>").text("Weight: " + ItemProfessional.Weight);
    listItem.append(weightElement);
  
    var heightElement = $("<p>").text("Height: " + ItemProfessional.Height);
    listItem.append(heightElement);
  
    var retiredElement = $("<p>").text("Retired: " + (ItemProfessional.IsRetired ? "Yes" : "No"));
    listItem.append(retiredElement);
  
    var nationalityElement = $("<p>").text("Nationality: " + ItemProfessional.Nationality);
    listItem.append(nationalityElement);
  
    var oscarsElement = $("<p>").text("Oscars: " + ItemProfessional.OscarsNumber);
    listItem.append(oscarsElement);
  
    var professionElement = $("<p>").text("Profession: " + ItemProfessional.Profession);
    listItem.append(professionElement);

    var professionalImage = $("<img>").attr("src", ItemProfessional.Photo).attr("alt", ItemProfessional.Name).addClass("professional-image");
    listItem.append(professionalImage);


       $("#profesionales-lista").append(listItem);
  });
}

function displayMovies() {
  $("#peliculas-lista").empty();
  movies.forEach(function(movie) {
    var movieCard = $("<div>").addClass("movie-card");
  
    var movieImage = $("<img>").attr("src", movie.photo).attr("alt", movie.titulo).addClass("card-image");
    movieCard.append(movieImage);
  
    var movieTitle = $("<p>").text(movie.titulo);
    movieCard.append(movieTitle);
  
    var movieReleaseYear = $("<p>").text("Release Year: " + movie.ReleaseYear);
    movieCard.append(movieReleaseYear);
  
    var movieNationality = $("<p>").text("Nationality: " + movie.Nationality);
    movieCard.append(movieNationality);

    var movieWriter = $("<p>").text("Writer: " + movie.Nationality);
    movieCard.append(movieWriter);

    var movieProducer = $("<p>").text("Producer: " + movie.Producer);
    movieCard.append(movieProducer);

    var movieActors = $("<p>").text("Actors: " + movie.Actors);
    movieCard.append(movieActors);

    var movieDistributor = $("<p>").text("Distributor: " + movie.Distributor);
    movieCard.append(movieDistributor);
  
    var movieLanguage = $("<p>").text("Language: " + movie.Language);
    movieCard.append(movieLanguage);
  
    var movieGenre = $("<p>").text("Genre: " + movie.Genre);
    movieCard.append(movieGenre);
  
    $("#peliculas-lista").append(movieCard);
  });
}

function pushMovies(movieLoad) {
  $("#peliculas-lista").empty();

  movies.forEach(function(movie) {
    var movieCard = $("<div>").addClass("movie-card");
  
    var movieImage = $("<img>").attr("src", "placeholder-image.jpg").attr("alt", movieLoad.titulo);
    movieCard.append(movieImage);
  
    var movieTitle = $("<p>").text(movieLoad.titulo);
    movieCard.append(movieTitle);
  
    var movieReleaseYear = $("<p>").text("Release Year: " + movieLoad.releaseYear);
    movieCard.append(movieReleaseYear);
  
    var movieNationality = $("<p>").text("Nationality: " + movieLoad.nationality);
    movieCard.append(movieNationality);

    var movieActors = $("<p>").text("Actors: " + movie.Actors);
    movieCard.append(movieActors);

    var movieDirector = $("<p>").text("Director: " + movie.Director);
    movieCard.append(movieDirector);

    var movieDirector = $("<p>").text("Platform: " + movie.Director);
    movieCard.append(moviePlatform);

    
    var movieisMCU = $("<p>").text("Platform: " + movie.isMCU);
    movieCard.append(movieisMCU);

  
    var movieLanguage = $("<p>").text("Language: " + movieLoad.language);
    movieCard.append(movieLanguage);
  
    var movieGenre = $("<p>").text("Genre: " + movieLoad.Genre);
    movieCard.append(movieGenre);
    
      $("#peliculas-lista").append(movieLoad);

  });
}

function AgregarPelicula()
{
  debugger
  let NewMovie = new Movie();
  
  NewMovie.Title = $("#formTitulo").val();
  NewMovie.ReleaseYear = $("#formAnyoSalida").val();
  NewMovie.Actors = $("#formActores").val();
  NewMovie.Nationality = $("#formNacionalidad").val();
  NewMovie.Director = $("#formDirector").val();
  NewMovie.Writer = $("#formWriter").val();
  NewMovie.Plataform = $("#formPlataform").val();
  NewMovie.isMCU = $("#formisMCU").val();
  NewMovie.Genre = $("#formGenero").val();
  NewMovie.photo = $("#formPhoto").val();
  

  movies.push(NewMovie);
  displayMovies();
}

function LimpiarPelicula()
{
  $("#formTitulo").val("");
  $("#formAnyoSalida").val("");
  $("#formActores").val("");
  $("#formNacionalidad").val("");
  $("#formDirector").val("");
  $("#formGenero").val("");
  $("#formPhoto").val("");
}
// $("#movie-form").submit(function(event) {
//   alert("Agregado")
//   let NewMovie = new Movie();
  
//   NewMovie.Title = $("#formTitulo").val();
//   NewMovie.ReleaseYear = $("#formAnyoSalida").val();
//   NewMovie.Actors = $("#formActores").val();
//   NewMovie.Nacionality = $("#formNacionalidad").val();
//   NewMovie.Director = $("#formDirector").val();
//   NewMovie.Genre = $("#formGenero").val();
//   NewMovie.photo = $("#formPhoto").val();

//   movies.push(NewMovie);
//   pushMovies(NewMovie);
// });



// video
