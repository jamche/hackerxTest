// 4 Options the user can select
//1. Show all movies from json file that the user can select from available_movies, sorted alphabetically and by genre showing title/rating/cost

// empty array to push list of movies inside
const allMovies = []
const actionMovies = []
const comedyMovies = []
const documentaryMovies = []
const dramaMovies = []
const horrorMovies = []
const romanceMovies = []
const scifiMovies = []
const thrillerMovies = []

// link to data file
const url = "available_movies.json";
const movieList = document.querySelector(".movieList");
const userList = document.querySelector(".userMovieList");


  // remove "the" from words
const removeArticles = (str) => {
  words = str.split(" ");
  if (words.length <= 1) return str;
  if (words[0] === "THE" || words[0] === "MY" || words[0] === "A") 
  return words.splice(1).join(" ");
  return str;
}

// comparison function
function compareStr(a,b){
  return typeof a ==='string' && typeof b === 'string' ?
  a.localeCompare(b, undefined, {sensitivity:'accent'}) === 0
  : a === b;
}

//show all movies
const btnAll = document.getElementById("allMovies");
btnAll.addEventListener('click', getAction);
btnAll.addEventListener('click', getComedy);
btnAll.addEventListener('click', getDrama);
btnAll.addEventListener('click', getDocumentary);
btnAll.addEventListener('click', getHorror);
btnAll.addEventListener('click', getRomance);
btnAll.addEventListener('click', getScifi);
btnAll.addEventListener('click', getThriller);
btnAll.addEventListener('click', toggleButton);
btnAll.addEventListener('click', clearMyMovies);
btnAll.addEventListener('click', populateMovies)

function populateMovies(){
  movieList.style.display = "block";
}
function clearMyMovies(){
  userList.style.display = "none";
}

function toggleButton(){
  if(btnAll.style.display === "none"){
    btnAll.style.display = "block";
  } else{
    btnAll.style.display = "none"
    btnUser.style.display = "block";
    //deletes and sets again list of movies
    strAct = '';
    strCom = '';
    strDoc = '';
    strDra = '';
    strHor = '';
    strRom = '';
    strSci = '';
    strThr = '';
  }
}

// show users movies
const btnUser = document.getElementById("usersMovies");
btnUser.addEventListener('click', getUserMovies);
btnUser.addEventListener('click', toggleButtonUser);
btnUser.addEventListener('click', clearMovieList);
btnUser.addEventListener('click', populateUserMovies);
// btnUser.addEventListener('click', showMoviesAdded);


// shhows users movies
function populateUserMovies(){
  userList.style.display = "block";
}
// clears all movie list
function clearMovieList(){
  movieList.style.display = "none";
}

function toggleButtonUser() {
  if (btnUser.style.display === "none") {
    btnUser.style.display = "block";
  } else {
    btnUser.style.display = "none";
    btnAll.style.display = "block";
    strUsr = '';
  }
}
// puts movies in here as a list on the page
let strAct = '';
let strCom = '';
let strDoc = '';
let strDra = '';
let strHor = '';
let strRom = '';
let strSci = '';
let strThr = '';
// puts users movie list on page when my movies is selected
let strUsr = '';

// async function for getting movies from json
async function getData() {
  const response = await fetch(url);
  const data = await response.json()
  return data;
}

// action
function getAction(){
  getData()
  .then(data => {
    actionMovies.push(data.action);
    sorted = actionMovies[0].sort(function(a,b){
      const first = removeArticles(a.title.toUpperCase());
      const second = removeArticles(b.title.toUpperCase());
      return (first < second) ? -1 : (first > second) ? 1 : 0;
    })
    sorted.forEach(movie => {
      strAct += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Cost: ${movie.cost}</li> 
      </ul>  
      `
    });
    document.querySelector(".actionList").innerHTML = strAct;
  });
}
// comedy
function getComedy() {
  getData()
    .then(data => {
      comedyMovies.push(data.comedy);
      sorted = comedyMovies[0].sort(function (a, b) {
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      sorted.forEach(movie => {
        strCom += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Cost: ${movie.cost}</li> 
      </ul>  
      `
      });
      document.querySelector(".comedyList").innerHTML = strCom;
    });
}
// documentary
function getDocumentary() {
  getData()
    .then(data => {
      documentaryMovies.push(data.documentary);
      sorted = documentaryMovies[0].sort(function (a, b) {
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      sorted.forEach(movie => {
        strDoc += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Cost: ${movie.cost}</li> 
      </ul>  
      `
      });
      document.querySelector(".documentaryList").innerHTML = strDoc;
    });
}
// drama
function getDrama() {
  getData()
    .then(data => {
      dramaMovies.push(data.drama);
      sorted = dramaMovies[0].sort(function (a, b) {
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      sorted.forEach(movie => {
        strDra += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Cost: ${movie.cost}</li> 
      </ul>  
      `
      });
      document.querySelector(".dramaList").innerHTML = strDra;
    });
}
// horror
function getHorror() {
  getData()
    .then(data => {
      horrorMovies.push(data.horror);
      sorted = horrorMovies[0].sort(function (a, b) {
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      sorted.forEach(movie => {
        strHor += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Cost: ${movie.cost}</li> 
      </ul>  
      `
      });
      document.querySelector(".horrorList").innerHTML = strHor;
    });
}
// romance
function getRomance() {
  getData()
    .then(data => {
      romanceMovies.push(data.romance);
      sorted = romanceMovies[0].sort(function (a, b) {
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      sorted.forEach(movie => {
        strRom += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Cost: ${movie.cost}</li> 
      </ul>  
      `
      });
      document.querySelector(".romanceList").innerHTML = strRom;
    });
}
// Scifi
function getScifi() {
  getData()
    .then(data => {
      scifiMovies.push(data.scifi);
      sorted = scifiMovies[0].sort(function (a, b) {
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      sorted.forEach(movie => {
        strSci += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Cost: ${movie.cost}</li> 
      </ul>  
      `
      });
      document.querySelector(".scifiList").innerHTML = strSci;
    });
}
// thriller
function getThriller() {
  getData()
    .then(data => {
      thrillerMovies.push(data.thriller);
      sorted = thrillerMovies[0].sort(function (a, b) {
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      sorted.forEach(movie => {
      strThr += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Cost: ${movie.cost}</li> 
      </ul>  
      `
      });
      document.querySelector(".thrillerList").innerHTML = strThr;
    });
}
   

//2. Show all movies that the user has selected from my_movies.json
const urlUserMovies = 'my_movies.json'
const userMovies = []
async function getMyMovies() {
  const response = await fetch(urlUserMovies);
  const data = await response.json()
  return data;
}
function getUserMovies(){

      filteredMovies.forEach(movie => {
      strUsr += `
      <ul class=${'movies'}>
        <li> Title: ${movie.title}</li> 
        <li> Cost: ${movie.cost}</li> 
        <li> Rating: ${movie.rating}</li>
        <li> Watched: ${movie.watched}</li>
      </ul>  
      `
      });
      document.querySelector(".userList").innerHTML = strUsr;
    // });
}
//3. User is shown their credit balance and returned to the selection menu. Initial is 100 credits

// user credit balance 
// should be 100, 10 for test
let userCreditBalance = 10;
const btnShowCreditBal = document.getElementById('userCreditBalance');
const creditBalance = document.querySelector('.creditBalance')
btnShowCreditBal.addEventListener('click', showBalance);
btnShowCreditBal.addEventListener('click', clearPage)

// clears the page and only shows user's balance
function clearPage(){
  movieList.style.display = 'none';
  userList.style.display = 'none';
  btnAll.style.display = 'block';
  btnUser.style.display = 'block';
}
// shows users credit balance
function showBalance(){
  console.log(filteredMovies);
  // showCost();
  let total = filteredMovies.reduce((acc, cur) => {
    return acc + cur.cost;
  }, 0)
   console.log(total);
   if(total > 10){
     console.log("not enough credit")
   }else{
  creditBalance.innerHTML = `Your Current Credit Balance: 
    ${userCreditBalance - total}`;
   } 
}
//4. 
// User can purchase a movie by typing the name of the movie. If movie is owned alredy, the string "You have already purchased this movie" should display and user is returned to select.

// Each purchase deducts from the user's credit based on cost of the movie -- done
// If not enough credits display the string "Not enough credit remaining to purchase this movie" -- need to work on this
// when movie is purchased, it is added to my_movies.json  -- adding to array instead

// purchase/submit purchase
// 1. When typed in, adds the movie to my_movies.json ---> add to array

// 2. If movie is owned already, display "You have already purchased this movie" and returned to selection -- need to do this

// 3. Each purchase deducts from the credit balance, if not enough credit remaining to purchase display "Not enough credit remaining to purchase this"--- can deduct but need condition of no credit left and do not add

btnPurchase = document.getElementById("purchaseMovie")
// btnPurchase.addEventListener('click', purchaseMovie);

const movieTitles = []
const form = document.getElementById('form');

// compares movies to the input of the user and matches
// adds all movies that the user has typed in
let purchasedMovies = [];
let filteredMovies = [];
form.addEventListener('submit',function(e){
  e.preventDefault();
  // for matching to movie titles
  const movieInput = document.getElementById('movieInput').value.toUpperCase();
  // calls data here
  getData().then( movies =>{
    // console.log(movies);
    for(let key in movies){
      // console.log([key]);
      let moviesOne = movies[key]
      // console.log(moviesOne)
      for(let i = 0; i< moviesOne.length; i++){
        // console.log(moviesOne[i])
        // console.log(moviesOne[i].cost)
        // matches input of the user to title of the movie
          if (movieInput === moviesOne[i].title.toUpperCase() ) {
            console.log("found movie!")
            // pushes the input of the user to the purchased movies array if typed in correctly
            filteredMovies.push(moviesOne[i])
            // creates a new array that will filter out any duplicate entries from filteredMovies input
            filteredMovies = filteredMovies.reduce((acc, cur) => {
            let movieName = acc.find(movie => movie.title === cur.title);
            // let movieDup = [cur].find(movie => movie.title === cur.title)
            // if the titles do not match, add the movie to the filteredMovies
            if (!movieName ) {
              // console.log(cur);
              // console.log(acc.concat([cur]));
              return acc.concat([cur]);
              // if they do match, do not add the movie to filteredMovies and alert that the movie is already owned
            } else{
              // this is the title of the movie to compare to
              // console.log(movieInput);
              // console.log(movieDup);
              console.error(`You have already purchased ${movieName.title}`);
              // console.log(acc);
              return acc;
            }
          }, [])
          // console.log(purchasedMovies);
          console.log(filteredMovies);
          return;
          }
        }
      }
    console.log("not found...")
  })
  .catch(err => console.log(err))
  form.reset();
})

// on submit of input, input value is matched to all movies
// if matched 

// problems ******

// when submitted, movie is pushed in to purchased movies
// when purchased movies is filtered, if statement is comparing to pruchased movies, so alert pops up everytime there is a duplicate in purchased movies --- need to fix

// purchased movies is filtered to filtered movies
// need fo fix way when filtered movies to not push if total cost of movies is > remaining credit balance



// maybe use this for search function *********

// got movie names but not the correct way
// const movieTitles = [];
// // get all movies titles and pushes in to array movieTitles
// function getMovieTitles(){
//   getData()
//   .then(data=>{
//     movieTitles.push(data)
//     // console.log(movieTitlesList);

//     for(let key in movieTitles){
//       let obj = movieTitles[key]
//       // console.log(obj);
//       for(let key in obj){
//         let movies = obj[key]
//         // console.log(movies);
//         for(let i = 0; i < movies.length; i++){
//           // console.log(movies[i].title);
//           movieTitles.push(movies[i].title);
//         }
//       }
//     }
//     console.log(movieTitles);
//     return movieTitles;
//   })
// }

// getMyMovies()
//   .then(data => {
//     userMovies.push(data);
// action movies
// sortedAction = userMovies[0].action;
// console.log(sortedAction);
// sortedAction.forEach(movie => {
//   strUsr += `
// <ul class=${'movies'}>
//   <li> Title: ${movie.title}</li> 
//   <li> Cost: ${movie.cost}</li> 
//   <li> Rating: ${movie.rating}</li>
//   <li> Watched: ${movie.watched}</li>
// </ul>  
// `
// });
// sorted = userMovies[0].scifi;
// console.log(sorted);