// const Professional = require('./Professional');

class Movie {

  constructor(
    _title,
    _releaseYear,
    _actors,
    _nationality,
    _director,
    _writer,
    _language,
    _plataforma,
    _isMCU,
    _mainCharacterName,
    _producer,
    _distributor,
    _genre,
    _photo,

  ) {
    this.title = _title;
    this.releaseYear = _releaseYear;
    this.actors = _actors;
    this.nationality = _nationality;
    this.director = _director;
    this.writer = _writer;
    this.language = _language;
    this.plataforma = _plataforma;
    this.isMCU = _isMCU;
    this.mainCharacterName = _mainCharacterName;
    this.producer = _producer;
    this.distributor = _distributor;
    this.genre = _genre;
    this.photo = _photo;
  }

  get Title() {
    return this.title;
  }

  get ReleaseYear() {
    return this.releaseYear;
  }

  set ReleaseYear(value) {
    this.releaseYear = value;
  }

  get Actors() {
    return this.actors;
  }

  get Nationality() {
    return this.nationality;
  }

  get Director() {
    return this.director;
  }

  get Writer() {
    return this.writer;
  }

  get Language() {
    return this.language;
  }

  get Plataforma() {
    return this.plataforma;
  }

  get IsMCU() {
    return this.isMCU;
  }

  get MainCharacterName() {
    return this.mainCharacterName;
  }

  get Producer() {
    return this.producer;
  }

  get Distributor() {
    return this.distributor;
  }

  get Genre() {
    return this.genre;
  }

  get Photo() {
    return this.photo;
  }


  set Title(value) {
    this.title = value;
  }

  set Actors(value) {
    this.actors = value;
  }

  set Director(value) {
    this.director = value;
  }

  set Writer(value) {
    this.writer = value;
  }

  set Language(value) {
    this.language = value;
  }

  set Plataforma(value) {
    this.plataforma = value;
  }

  set IsMCU(value) {
    this.isMCU = value;
  }

  set MainCharacterName(value) {
    this.mainCharacterName = value;
  }

  set Producer(value) {
    this.producer = value;
  }

  set Distributor(value) {
    this.distributor = value;
  }

  set Genre(value) {
    this.genre = value;
  }

  set Photo(value) {
    this.photo = value;
  }

  MostrarMovie() {
    console.log(`Title: ${this.title}`);
    console.log(`Release Year: ${this.releaseYear}`);
    console.log(`Actors: ${this.actors.map((actor) => actor.name).join(", ")}`);
    console.log(`Nationality: ${this.nationality}`);
    console.log(`Director: ${this.director.name}`);
    console.log(`Writer: ${this.writer.name}`);
    console.log(`Language: ${this.language}`);
    console.log(`Platform: ${this.plataforma}`);
    console.log(`MCU: ${this.isMCU}`);
    console.log(`Main Character Name: ${this.mainCharacterName}`);
    console.log(`Producer: ${this.producer}`);
    console.log(`Distributor: ${this.distributor}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Photo: ${this.photo}`);
  }
}
