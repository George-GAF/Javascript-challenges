// define const letters and words with catogery
const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ012345679");

const moviesstring = `"The 400 Blows(-)La Haine(-)The Godfather(-)The Godfather: Part II(-)Man Bites Dog(-)The Departed(-)Umberto D.(-)White Heat(-)Eddie Murphy: Raw(-)All Quiet on the Western Front(-)Duck Soup(-)Mafioso(-)Stalag 17(-)The Shawshank Redemption(-)The Dark Knight(-)Fight Club(-)Batman Begins(-)The Big Lebowski(-)Snatch(-)The Good, the Bad and the Ugly(-)Gladiator(-)Saving Private Ryan(-)Amelie(-)American History X(-)In Bruges(-)Crash(-)Big Fish(-)Seven Samurai(-)Layer Cake(-)Coming to America(-)O Brother, Where Art Thou?(-)Friday(-)Donnie Brasco(-)Raging Bull(-)Ed Wood(-)Primal Fear(-)Half Baked(-)Field of Dreams(-)Analyze This(-)Mean Streets(-)The Dirty Dozen(-)The Longest Day(-)Combat de boxe(-)The Errand Boy(-)The Bellboy(-)Six Shooter(-)CKY2K(-)The Dark Hours(-)Edmond(-)Let Him Have It(-)Johnny Mad Dog(-)The Public Enemy(-)American Splendor(-)The Football Factory(-)The Taking of Pelham One Two Three(-)Small Time Crooks(-)The Business(-)Belly(-)Rango(-)Transformers(-)Limitless(-)Pulp Fiction(-)Star Trek(-)The Town(-)300(-)Heat(-)Schindler's List(-)The Matrix(-)Goodfellas(-)The Usual Suspects(-)Up(-)Ferris Bueller's Day Off(-)Yip Man(-)Mean Girls(-)American Pie(-)Casino Royale(-)Back to the Future(-)Pan's Labyrinth(-)Dumb and Dumber(-)Braveheart(-)Moon(-)Lock, Stock and Two Smoking Barrels(-)Old School(-)Trainspotting(-)Slumdog Millionaire(-)Casablanca(-)Catch Me If You Can(-)The Bourne Identity(-)The Boondock Saints(-)Blow(-)The Fast and the Furious: Tokyo Drift(-)Blood Diamond(-)The Game(-)Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb(-)Four Lions(-)3:10 to Yuma(-)The Bourne Supremacy(-)Ghostbusters(-)Groundhog Day(-)Wet Hot American Summer`;
const peoplestring = `Marilyn Monroe(-)Abraham Lincoln(-)Nelson Mandela(-)Martin Luther King(-)Queen Elizabeth(-)Winston Churchill(-)Donald Trump(-)Bill Gates(-)Muhammad Ali(-)Mahatma Gandhi(-)Mother Teresa(-)Christopher Columbus(-)Charles Darwin(-)Elvis Presley(-)Albert Einstein(-)Paul McCartney(-)Queen Victoria(-)Jawaharlal Nehru(-)Leonardo da Vinci(-)Franklin Roosevelt(-)Pope John Paul II(-)Thomas Edison(-)Lyndon Johnson(-)Ludwig Beethoven(-)Oprah Winfrey(-)Indira Gandhi(-)Eva Peron(-)Benazir Bhutto(-)George Orwell(-)Desmond Tutu(-)Dalai Lama(-)Walt Disney(-)Neil Armstrong(-)Peter Sellers(-)Barack Obama(-)Malcolm(-)Richard Branson(-)Angelina Jolie(-)Jesse Owens(-)John Lennon(-)Henry Ford(-)Haile Selassie(-)Joseph Stalin(-)Lord Baden Powell(-)Michael Jordon(-)Vladimir Lenin(-)Ingrid Bergman(-)Fidel Castro(-)Leo Tolstoy(-)Greta Thunberg(-)Pablo Picasso(-)Oscar Wilde(-)Coco Chanel(-)Charles de Gaulle(-)Amelia Earhart(-)Louis Pasteur(-)Mikhail Gorbachev(-)Plato(-)Adolf Hitler(-)Sting(-)Mary Magdalene(-)Alfred Hitchcock(-)Michael Jackson(-)Madonna(-)Mata Hari(-)Cleopatra(-)Grace Kelly(-)Malala Yousafzai(-)Steve Jobs(-)Ronald Reagan(-)Lionel Messi(-)Babe Ruth(-)Bob Geldof(-)Roger Federer(-)Sigmund Freud(-)Woodrow Wilson(-)Mao Zedong(-)Katherine Hepburn(-)Audrey Hepburn(-)David Beckham(-)Usain Bolt(-)Carl Lewis(-)Prince Charles(-)Jacqueline Kennedy Onassis(-)Billie Holiday(-)Billie Jean King(-)Margaret Thatcher(-)Anne Frank(-)Simon Bolivar(-)Marie Antoinette(-)Cristiano Ronaldo(-)Emmeline Pankhurst(-)Emile Zatopek(-)Lech Walesa(-)Julie Andrews(-)Florence Nightingale(-)Marie Curie(-)Stephen Hawking(-)Tim Berners Lee(-)Aung San Suu Kyi(-)Lance Armstrong(-)Shakira(-)Jon Stewart(-)Wright Brothers(-)Ernest Hemingway(-)Paul Krugman`;
const countriesstring = `Afghanistan
Albania
Algeria
Andorra
Angola
Antigua and Barbuda
Argentina
Armenia
Australia
Austria
Azerbaijan
The Bahamas
Bahrain
Bangladesh
Barbados
Belarus
Belgium
Belize
Benin
Bhutan
Bolivia
Bosnia and Herzegovina
Botswana
Brazil
Brunei
Bulgaria
Burkina Faso
Burundi
Cambodia
Cameroon
Canada
Cape Verde
Central African Republic
Chad
Chile
China
Colombia
Comoros
Congo, Republic of the
Congo, Democratic Republic of the
Costa Rica
Cote d'Ivoire
Croatia
Cuba
Cyprus
Czech Republic
Denmark
Djibouti
Dominica
Dominican Republic
East Timor (Timor-Leste)
Ecuador
Egypt
El Salvador
Equatorial Guinea
Eritrea
Estonia
Ethiopia
Fiji
Finland
France
Gabon
The Gambia
Georgia
Germany
Ghana
Greece
Grenada
Guatemala
Guinea
Guinea-Bissau
Guyana
Haiti
Honduras
Hungary
Iceland
India
Indonesia
Iran
Iraq
Ireland
Israel
Italy
Jamaica
Japan
Jordan
Kazakhstan
Kenya
Kiribati
Korea, North
Korea, South
Kosovo
Kuwait
Kyrgyzstan
Laos
Latvia
Lebanon
Lesotho
Liberia
Libya
Liechtenstein
Lithuania
Luxembourg
Macedonia
Madagascar
Malawi
Malaysia
Maldives
Mali
Malta
Marshall Islands
Mauritania
Mauritius
Mexico
Micronesia, Federated States of
Moldova
Monaco
Mongolia
Montenegro
Morocco
Mozambique
Myanmar (Burma)
Namibia
Nauru
Nepal
Netherlands
New Zealand
Nicaragua
Niger
Nigeria
Norway
Oman
Pakistan
Palau
Panama
Papua New Guinea
Paraguay
Peru
Philippines
Poland
Portugal
Qatar
Romania
Russia
Rwanda
Saint Kitts and Nevis
Saint Lucia
Saint Vincent and the Grenadines
Samoa
San Marino
Sao Tome and Principe
Saudi Arabia
Senegal
Serbia
Seychelles
Sierra Leone
Singapore
Slovakia
Slovenia
Solomon Islands
Somalia
South Africa
South Sudan
Spain
Sri Lanka
Sudan
Suriname
Swaziland
Sweden
Switzerland
Syria
Taiwan
Tajikistan
Tanzania
Thailand
Togo
Tonga
Trinidad and Tobago
Tunisia
Turkey
Turkmenistan
Tuvalu
Uganda
Ukraine
United Arab Emirates
United Kingdom
United States of America
Uruguay
Uzbekistan
Vanuatu
Vatican City (Holy See)
Venezuela
Vietnam
Yemen
Zambia
Zimbabwe
`;
const programLangString =
  "dart(-)php(-)javascript(-)java(-)kotlin(-)scala(-)pyton(-)ruby(-)actionscript";
// create words object
const words = {
  programming: programLangString.split("(-)"),
  movies: moviesstring.split("(-)").filter((c) => c.length < 10),
  people: peoplestring.split("(-)").filter((c) => c.length < 10),
  countries: countriesstring
    .split(
      `
`
    )
    .filter((c) => c.length < 10),
};
// get message compent
let message = document.getElementById("message");
let title = document.querySelector("#message h3");
let messageBody = document.querySelector("#message p");
// create message content
function showMessage(titleText, bodyText) {
  title.textContent = titleText;
  messageBody.innerHTML = bodyText;
  document.getElementById("back").style.display = "block";
  setTimeout(() => {
    message.className = "show";
  }, 100);
}

// select hangman div
let hangmanDiv = document.querySelector(".hangman-draw");
// preper letters container
let lettersContainer = document.querySelector(".letters");
// preper letters guess container
let guessWordContainer = document.querySelector(".letters-guess");
// init random word
let randomWord = "";
// init guessed word
let guessdWord = "";
// init random catogery
let randomCatogery = "";
//init random array word
let wordArray = [];
// init wrong click counter
let wrongClicks = 0;
// init tester to detect if right click or wrong
let isRightLetters = false;
// get game sound
let succ = document.getElementById("succ");
let fail = document.getElementById("fail");
// create letters span and add in container
letters.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});
// get random word from words object and assign to randomWord
// get random catogery and assign to randomCatogery
function getRandomWord() {
  let allKeys = Object.keys(words);
  let randomKeyIndex = Math.floor(Math.random() * allKeys.length);
  randomCatogery = allKeys[randomKeyIndex];
  let randomPropValue = words[randomCatogery];
  let randomWordIndex = Math.floor(Math.random() * randomPropValue.length);
  randomWord = randomPropValue[randomWordIndex];
  document.querySelector(".game-info .category div span").textContent =
    randomCatogery;
  document.querySelector(
    ".game-info .category div span:nth-child(2)"
  ).textContent = randomWord.replace(/ /g, "").length;
}
// convert randomWord to array and assign to wordArray
// create letter span and add in guess container
function setRandomWordContainer() {
  wordArray = Array.from(randomWord);
  wordArray.forEach((c) => {
    let span = document.createElement("span");
    if (c === " ") {
      span.className = "has-space";
    }
    guessWordContainer.appendChild(span);
  });
}

// game start
getRandomWord();
setRandomWordContainer();

// add listenr to listen to letters click
document.addEventListener("click", (e) => {
  if (e.target.className == "letter-box") {
    e.target.classList.add("clicked");
    let letterChossen = e.target.textContent.toLowerCase();
    wordArray.forEach((c, i) => {
      if (letterChossen == c.toLowerCase()) {
        guessWordContainer.children[i].textContent = c.toUpperCase();
        isRightLetters = true;
        guessdWord += c.toLowerCase();
      }
    });
    drawHangman();
    //check if game win
    if (randomWord.replace(/ /g, "").length == guessdWord.length) {
      winGame();
    }
  }

  if (e.target.className == "message-button") {
    message.className = "hide";
    setTimeout(() => {
      document.getElementById("back").style.display = "none";
    }, 100);

    restartGame();
  }
});

//restart game
console.log(randomWord);
function restartGame() {
  randomWord = "";
  guessdWord = "";
  randomCatogery = "";
  wordArray = [];
  wrongClicks = 0;
  isRightLetters = false;
  let lettersArray = Array.from(lettersContainer.children);
  lettersArray.forEach((i) => {
    i.className = "letter-box";
  });
  lettersArray = Array.from(guessWordContainer.children);
  lettersArray.forEach((i) => {
    i.remove();
  });
  lettersContainer.className = "letters";
  hangmanDiv.className = "hangman-draw";
  document.querySelector(
    ".game-info .category div span:last-child"
  ).textContent = wrongClicks;
  getRandomWord();
  setRandomWordContainer();
}

// check and incress wrong
function drawHangman() {
  if (isRightLetters) {
    isRightLetters = false;
    succ.play();
  } else {
    ++wrongClicks;
    document.querySelector(
      ".game-info .category div span:last-child"
    ).textContent = wrongClicks;
    hangmanDiv.classList.add(`wrong-${wrongClicks}`);
    fail.play();
    if (wrongClicks == 8) {
      endGame();
    }
  }
}

function endGame() {
  document.querySelector(".letters").classList.add("finished");
  showMessage(
    "Game Lose",
    `Sorry,you lose a game<br>the word is : <b>${randomWord}</b><br>try agin don't stop`
  );
}

function winGame() {
  showMessage("Winner", "You are winner...");
}
