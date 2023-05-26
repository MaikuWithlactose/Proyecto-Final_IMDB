class Professional {
  constructor(_name, _age, _weight, _height, _isRetired, _nationality, _oscarsNumber, _profession, _photo) {
    this.Name = _name;
    this.Age = _age;
    this.Weight = _weight;
    this.Height = _height;
    this.IsRetired = _isRetired;
    this.Nationality = _nationality;
    this.OscarsNumber = _oscarsNumber;
    this.Profession = _profession;
    this.Photo = _photo;
  }

  get name() {
    return this.Name;
  }

  get age() {
    return this.Age;
  }

  get weight() {
    return this.Weight;
  }

  get height() {
    return this.Height;
  }

  get isRetired() {
    return this.IsRetired;
  }

  get nationality() {
    return this.Nationality;
  }

  get oscarsNumber() {
    return this.OscarsNumber;
  }

  get profession() {
    return this.Profession;
  }

  get photo() {
    return this.Photo;
  }

  set name(_name) {
    this.Name = _name;
  }

  set age(_age) {
    this.Age = _age;
  }

  set weight(_weight) {
    this.Weight = _weight;
  }

  set height(_height) {
    this.Height = _height;
  }

  set isRetired(_isRetired) {
    this.IsRetired = _isRetired;
  }

  set nationality(_nationality) {
    this.Nationality = _nationality;
  }

  set oscarsNumber(_oscarsNumber) {
    this.OscarsNumber = _oscarsNumber;
  }

  set profession(_profession) {
    this.Profession = _profession;
  }

  set photo(_photo) {
    this.Photo = _photo;
  }

  MostrarProfessional() {
    console.log(`Name: ${this.Name}`);
    console.log(`Age: ${this.Age}`);
    console.log(`Weight: ${this.Weight}`);
    console.log(`Height: ${this.Height}`);
    console.log(`Is Retired: ${this.IsRetired}`);
    console.log(`Nationality: ${this.Nationality}`);
    console.log(`Oscars Number: ${this.OscarsNumber}`);
    console.log(`Profession: ${this.Profession}`);
    console.log(`Photo: ${this.Photo}`);
  }
}

