// 4 Options the user can select
//1. Show all movies from json file that the user can select from available_movies, sorted alphabetically and by genre showing title/rating/cost

// empty array to push list of movies inside
// const allMovies = []
let actionMovies = []
let comedyMovies = []
let documentaryMovies = []
let dramaMovies = []
let horrorMovies = []
let romanceMovies = []
let scifiMovies = []
let thrillerMovies = []

// link to data file
const url = "available_movies.json";
const movieList = document.querySelector(".movieList");
const userList = document.querySelector(".userMovieList");
userList.style.display = "none";

// user movies json file(putting data in array instead, sorry I have not learned node.js to post to a json file)
const urlUserMovies = "my_movies.json"
const userMovies = []

// puts movies in here as a list on the page
let strAct = "";
let strCom = "";
let strDoc = "";
let strDra = "";
let strHor = "";
let strRom = "";
let strSci = "";
let strThr = "";
// puts users movie list on page when my movies is selected
let strUsr = "";

//target title headers
const actionTitle = document.querySelector("#actionTitle");
const comedyTitle = document.querySelector("#comedyTitle");
const documentaryTitle = document.querySelector("#documentaryTitle");
const dramaTitle = document.querySelector("#dramaTitle");
const horrorTitle = document.querySelector("#horrorTitle");
const romanceTitle = document.querySelector("#romanceTitle");
const scifiTitle = document.querySelector("#scifiTitle");
const thrillerTitle = document.querySelector("#thrillerTitle");

// remove any articles from the titles from words
const removeArticles = (str) => {
  words = str.split(" ");
  if (words.length <= 1) return str;
  if (words[0] === "THE" || words[0] === "MY" || words[0] === "A") 
  return words.splice(1).join(" ");
  return str;
}

// comparison function to compare user input to movie data 
const compareStr = (a,b) => {
  return typeof a ==="string" && typeof b === "string" ?
  a.localeCompare(b, undefined, {sensitivity:"accent"}) === 0
  : a === b;
}
// shows all movies from movies data
const populateMovies = () =>{
  movieList.style.display = "block";
}
// shows users movies
const populateUserMovies = () =>{
  userList.style.display = "block";
}
// clears all movies list from page
const clearMovieList = () =>{
  movieList.style.display = "none";
}
// clears users movie from page
const clearMyMovies = () =>{
  userList.style.display = "none";
}

// toggles to show buttons when show all movies is clicked and show user movies
const toggleButton = () =>{
  if(btnAll.style.display === "none"){
    btnAll.style.display = "block";
  } else{
    btnAll.style.display = "none"
    btnUser.style.display = "block";
    //deletes and sets again list of movies
    strAct = "";
    strCom = "";
    strDoc = "";
    strDra = "";
    strHor = "";
    strRom = "";
    strSci = "";
    strThr = "";
  }
}
const showAllMoviesButton = () => {
  btnAll.style.display = "block";
}
// toggles to show and hide "show my movies" when clicked
const toggleButtonUser = () => {
  if (btnUser.style.display === "none") {
    btnUser.style.display = "block";
  } else {
    btnUser.style.display = "none";
    btnAll.style.display = "block";
    strUsr = '';
  }
}
// shows the button again
const showUsersMoviesButton = () => {
  btnUser.style.display = "block";
}
// async function for getting data from json available_movies.json
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json()
  return data;
}
//2. Show all movies that the user has selected from my_movies.json
const getMyMovies = async () => {
  const response = await fetch(urlUserMovies);
  const data = await response.json()
  return data;
}
// gets user movies when input is added
const getUserMovies = () => {
  filteredMovies.forEach(movie => {
    // random boolean for if watched or not
    let random = Math.random() >= 0.5;
    // console.log(random);
    if (random > 0.5) {
      movie.watched = 'Watched'
    } else {
      movie.watched = 'Not Watched'
    }
    strUsr += `
  <ul class=${"movies"}>
    <li> Title: ${movie.title}</li> 
    <li> Cost: ${movie.cost}</li> 
    <li> Rating: ${movie.rating}</li>
    <li> Watched: ${movie.watched}</li>
  </ul>  
  `
  });
  document.querySelector(".userList").innerHTML = strUsr;
}

// Credit Balance functions
// doesn't show balance on other options
const noShowBal = () => {
  creditBalance.style.display = "none";
}
const showBal = () => {
  creditBalance.style.display = "block"
}
// clears the page and only shows user's balance
const clearPage = () => {
  movieList.style.display = "none";
  userList.style.display = "none";
  btnAll.style.display = "block";
  btnUser.style.display = "block";
}
// shows users credit balance
const showBalance = () => {
  creditBalance.innerHTML = `<p>Your Current Credit Balance: 
    ${userCreditBalance - total}</p>`;
}

// Purchase Button functions
const hidePurchaseButton = () => {
  btnPurchaseOption.style.display = "none";
}
const showPurchaseButton = () => {
  btnPurchaseOption.style.display = "block";
}

const showPurchaseOption = () => {
  purchaseForm.style.display = "block";
}
const hidePurchaseOption = () => {
  purchaseForm.style.display = "none";
}

// Show Genre options buttons
const showGenreOptions = () => {
  showGenre.style.display = "flex"
}
// hides genre options buttons
const hideGenreOptions = () => {
  showGenre.style.display = "none"
}
const initialMovies = () => {
  movieList.style.display = "initial"
}

// gets action movies
const getAction = () => {
  getData()
    .then(data => {
      actionMovies.push(data.action);
      sorted = actionMovies[0].sort( (a, b) =>{
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      actionTitle.innerHTML = `Action Movies`
      sorted.forEach(movie => {
        strAct += `
      <ul class=${"movies"}>
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
const getComedy = () => {
  getData()
    .then(data => {
      comedyMovies.push(data.comedy);
      sorted = comedyMovies[0].sort( (a, b) =>{
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      comedyTitle.innerHTML = `Comedy Movies`
      sorted.forEach(movie => {
        strCom += `
    <ul class=${"movies"}>
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
const getDocumentary = () => {
  getData()
    .then(data => {
      documentaryMovies.push(data.documentary);
      sorted = documentaryMovies[0].sort( (a, b) =>{
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      documentaryTitle.innerHTML = `Documentary Movies`
      sorted.forEach(movie => {
        strDoc += `
    <ul class=${"movies"}>
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
const getDrama = () => {
  getData()
    .then(data => {
      dramaMovies.push(data.drama);
      sorted = dramaMovies[0].sort( (a, b) =>{
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      dramaTitle.innerHTML = `Drama Movies`
      sorted.forEach(movie => {
        strDra += `
    <ul class=${"movies"}>
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
const getHorror = () => {
  getData()
    .then(data => {
      horrorMovies.push(data.horror);
      sorted = horrorMovies[0].sort( (a, b) =>{
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      horrorTitle.innerHTML = `Horror Movies`
      sorted.forEach(movie => {
        strHor += `
    <ul class=${"movies"}>
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
const getRomance = () => {
  getData()
    .then(data => {
      romanceMovies.push(data.romance);
      sorted = romanceMovies[0].sort( (a, b) =>{
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      romanceTitle.innerHTML = `Romance Movies`
      sorted.forEach(movie => {
        strRom += `
    <ul class=${"movies"}>
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
const getScifi = () => {
  getData()
    .then(data => {
      scifiMovies.push(data.scifi);
      sorted = scifiMovies[0].sort( (a, b) =>{
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      scifiTitle.innerHTML = `Scifi Movies`
      sorted.forEach(movie => {
        strSci += `
    <ul class=${"movies"}>
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
const getThriller = () => {
  getData()
    .then(data => {
      thrillerMovies.push(data.thriller);
      sorted = thrillerMovies[0].sort( (a, b) =>{
        const first = removeArticles(a.title.toUpperCase());
        const second = removeArticles(b.title.toUpperCase());
        return (first < second) ? -1 : (first > second) ? 1 : 0;
      })
      thrillerTitle.innerHTML = `Thriller Movies`
      sorted.forEach(movie => {
        strThr += `
    <ul class=${"movies"}>
      <li> Title: ${movie.title}</li> 
      <li> Rating: ${movie.rating}</li>
      <li> Cost: ${movie.cost}</li> 
    </ul>  
    `
      });
      document.querySelector(".thrillerList").innerHTML = strThr;
    });
}
//show all movies by calling each genre function ot populate movies with data
const btnAll = document.getElementById("allMovies");
// gets all movies
btnAll.addEventListener("click", getAction);
btnAll.addEventListener("click", getComedy);
btnAll.addEventListener("click", getDrama);
btnAll.addEventListener("click", getDocumentary);
btnAll.addEventListener("click", getHorror);
btnAll.addEventListener("click", getRomance);
btnAll.addEventListener("click", getScifi);
btnAll.addEventListener("click", getThriller);
// hides show all movies when clicked and show my users movies
btnAll.addEventListener("click", toggleButton);
// clears page of any movies purchased
btnAll.addEventListener("click", clearMyMovies);
// displays the movie list when clicked again
btnAll.addEventListener("click", populateMovies);
// hides balance
btnAll.addEventListener("click", noShowBal);
// hides the input option to purchase a movie
btnAll.addEventListener("click", hidePurchaseOption);
// shows the purchased button if it was hidden previuosly
btnAll.addEventListener("click", showPurchaseButton);
// hides all the options to select by genre by default
btnAll.addEventListener("click", hideGenreOptions);

// show users movies
const btnUser = document.getElementById("usersMovies");
btnUser.addEventListener("click", getUserMovies);
btnUser.addEventListener("click", toggleButtonUser);
btnUser.addEventListener("click", clearMovieList);
btnUser.addEventListener("click", populateUserMovies);
btnUser.addEventListener("click", noShowBal);
btnUser.addEventListener("click", hidePurchaseOption);
btnUser.addEventListener("click", showPurchaseButton);
btnUser.addEventListener("click", hideGenreOptions);


//3. User is shown their credit balance and returned to the selection menu. Initial is 100 credits
// user credit balance 
// should be 100, 10 for test
let userCreditBalance = 10;
const btnShowCreditBal = document.getElementById("userCreditBalance");
const creditBalance = document.querySelector(".creditBalance")
btnShowCreditBal.addEventListener("click", showBalance);
// btnShowCreditBal.addEventListener("click", clearPage);
btnShowCreditBal.addEventListener("click", showBal);
btnShowCreditBal.addEventListener("click", clearMovieList);
btnShowCreditBal.addEventListener("click", clearMyMovies);
btnShowCreditBal.addEventListener("click", hidePurchaseOption);
btnShowCreditBal.addEventListener("click", showAllMoviesButton);
btnShowCreditBal.addEventListener("click", showUsersMoviesButton)
btnShowCreditBal.addEventListener("click", showPurchaseButton);
btnShowCreditBal.addEventListener("click", hideGenreOptions);

//4. 
// User can purchase a movie by typing the name of the movie. If movie is owned alredy, the string "You have already purchased this movie" should display and user is returned to select.
// when movie is purchased, it is added to my_movies.json  -- adding to array instead
// 1. When typed in, adds the movie to my_movies.json ---> add to array

// purchase button for form
const btnPurchaseOption = document.getElementById("purchase");
const purchaseForm = document.getElementById("purchaseForm");
const purchaseText = document.getElementById("purchaseFormText");
const noCreditText =document.getElementById("noCredit")
purchaseForm.style.display = "none";

btnPurchaseOption.addEventListener("click", showPurchaseOption);
btnPurchaseOption.addEventListener("click", noShowBal);
btnPurchaseOption.addEventListener("click", showAllMoviesButton);
btnPurchaseOption.addEventListener("click", showUsersMoviesButton)
btnPurchaseOption.addEventListener("click", clearMovieList);
btnPurchaseOption.addEventListener("click", clearMyMovies);
btnPurchaseOption.addEventListener("click", hidePurchaseButton);
btnPurchaseOption.addEventListener("click", hideGenreOptions);

const form = document.getElementById("form");
// adds all movies that the user has typed in
let filteredMovies = [];
let total = 0;

form.addEventListener("submit",(e) =>{
  e.preventDefault();
  // for matching to movie titles
  const movieInput = document.getElementById("movieInput").value.toUpperCase();
  // calls data here
  getData().then( movies =>{    
    // gets genre of movie data
    for(let key in movies){
      // gets array of each genre
      let moviesOne = movies[key]
      for(let i = 0; i< moviesOne.length; i++){
        // gets objects(movies) of each genre
        // matches input of the user to title of the movie
          if (movieInput === moviesOne[i].title.toUpperCase() ) {
            // pushes the input of the user to the purchased movies array if typed in correctly
            console.log(total);
            if(total + 1 > 11 || total + 2 > 11 || total + 3 > 11){
              noCreditText.innerHTML = "Not enough credit remaining to purchase this movie."
              return false;
            } 
            else{
              // if user still has credit, push to the user's movies
              filteredMovies.push(moviesOne[i])
              // track cost of movies bought
              total = filteredMovies.reduce((acc, cur) => {
                console.log(acc)
                console.log(cur.cost)
                let accumCost = acc + cur.cost
                // if accumCost is greater than credit remaining, substract movie cost and remove last added movie from user's movies
                if(accumCost > 10){
                  total = total - cur.cost
                  filteredMovies.pop();
                  purchaseText.innerHTML = "Not enough credit remaining to purchase this movie."
                  setTimeout(() => {
                    noCreditText.innerHTML = "";
                  }, 3000);
                  return acc;
                }else{ 
                  // if enough cost, return the total of added movie
                  return acc + cur.cost; 
                }
              }, 0)
              // creates a new array that will filter out any duplicate entries from filteredMovies input
              filteredMovies = filteredMovies.reduce((acc, cur) => {
              let movieName = acc.find(movie => movie.title === cur.title)
                // if the titles do not match and total is less than remaining credit, add the movie to the filteredMovies
                if (!movieName && total < 11) {
                  return acc.concat([cur]);                
                  // if they do match, do not add the movie to filteredMovies and alert that the movie is already owned
                } else{
                  total = total - cur.cost;
                  // console.error("You have already purchased this movie");
                  purchaseText.innerHTML = "You have already purchase this movie."
                  setTimeout(() => {
                    purchaseText.innerHTML = "";
                  }, 3000);
                  return acc;
                }
              }, [])
            return;
            }
          }
        }
      }
    purchaseText.innerHTML = "Can't find movie"
    setTimeout(() => {
      purchaseText.innerHTML = ""
    }, 1000);
  })
  .catch(err => console.log(err))
  form.reset();
})
// extra here to show by genre
// default options by genre hidden until show by genre button is clicked

// clears lists when show genre is clicked(to empty out if "show all movies" was already clicked)
const clearLists = () => {
  getActionList.innerHTML = "";
  getComedyList.innerHTML = "";
  getDocumentaryList.innerHTML = "";
  getDramaList.innerHTML = "";
  getHorrorList.innerHTML = "";
  getRomanceList.innerHTML = "";
  getScifiList.innerHTML = "";
  getThrillerList.innerHTML = "";
  strAct = "";
  strCom = "";
  strDoc = "";
  strDra = "";
  strHor = "";
  strRom = "";
  strSci = "";
  strThr = "";
  actionTitle.innerHTML = '';
  comedyTitle.innerHTML = '';
  documentaryTitle.innerHTML = '';
  dramaTitle.innerHTML = '';
  horrorTitle.innerHTML = '';
  romanceTitle.innerHTML = '';
  scifiTitle.innerHTML = '';
  thrillerTitle.innerHTML = '';
}

const getOnlyAction = () => {
  getAction();
  movieList.style.display = "block"
  getActionList.innerHTML = "flex"
  getComedyList.innerHTML = "";
  getDocumentaryList.innerHTML = "";
  getDramaList.innerHTML = "";
  getHorrorList.innerHTML = "";
  getRomanceList.innerHTML = "";
  getScifiList.innerHTML = "";
  getThrillerList.innerHTML = "";
  strCom = "";
  strDoc = "";
  strDra = "";
  strHor = "";
  strRom = "";
  strSci = "";
  strThr = "";
  // empties titles when clicked for each genre, repopulates it based on which genre is selected
  actionTitle.innerHTML = 'Action Movies';
  comedyTitle.innerHTML = '';
  documentaryTitle.innerHTML = '';
  dramaTitle.innerHTML = '';
  horrorTitle.innerHTML = '';
  romanceTitle.innerHTML = '';
  scifiTitle.innerHTML = '';
  thrillerTitle.innerHTML = '';
  // shows all genre option buttons other than action since it was clicked and showing, same for all functions below
  btnGetAction.style.display = "none";
  btnGetComedy.style.display = "flex";
  btnGetDocumentary.style.display = "flex";
  btnGetDrama.style.display = "flex";
  btnGetHorror.style.display = "flex";
  btnGetRomance.style.display = "flex";
  btnGetScifi.style.display = "flex";
  btnGetThriller.style.display = "flex";
}
const getOnlyComedy = () => {
  getComedy();
  movieList.style.display = "block"
  getActionList.innerHTML = "";
  getComedyList.innerHTML = "flex";
  getDocumentaryList.innerHTML = "";
  getDramaList.innerHTML = "";
  getHorrorList.innerHTML = "";
  getRomanceList.innerHTML = "";
  getScifiList.innerHTML = "";
  getThrillerList.innerHTML = "";
  strAct = "";
  strDoc = "";
  strDra = "";
  strHor = "";
  strRom = "";
  strSci = "";
  strThr = "";
  // empties titles when clicked for each genre, repopulates it based on which genre is selected
  actionTitle.innerHTML = '';
  comedyTitle.innerHTML = 'Comedy Movies';
  documentaryTitle.innerHTML = '';
  dramaTitle.innerHTML = '';
  horrorTitle.innerHTML = '';
  romanceTitle.innerHTML = '';
  scifiTitle.innerHTML = '';
  thrillerTitle.innerHTML = '';
  // 
  btnGetAction.style.display = "flex";
  btnGetComedy.style.display = "none";
  btnGetDocumentary.style.display = "flex";
  btnGetDrama.style.display = "flex";
  btnGetHorror.style.display = "flex";
  btnGetRomance.style.display = "flex";
  btnGetScifi.style.display = "flex";
  btnGetThriller.style.display = "flex";
}
const getOnlyDocumentary = () => {
  getDocumentary();
  movieList.style.display = "block"
  getActionList.innerHTML = "";
  getComedyList.innerHTML = "";
  getDocumentaryList.innerHTML = "flex";
  getDramaList.innerHTML = "";
  getHorrorList.innerHTML = "";
  getRomanceList.innerHTML = "";
  getScifiList.innerHTML = "";
  getThrillerList.innerHTML = "";
  strAct = "";
  strCom = "";
  strDra = "";
  strHor = "";
  strRom = "";
  strSci = "";
  strThr = "";
  // empties titles when clicked for each genre, repopulates it based on which genre is selected
  actionTitle.innerHTML = '';
  comedyTitle.innerHTML = '';
  documentaryTitle.innerHTML = 'Documentary Movies';
  dramaTitle.innerHTML = '';
  horrorTitle.innerHTML = '';
  romanceTitle.innerHTML = '';
  scifiTitle.innerHTML = '';
  thrillerTitle.innerHTML = '';
  //
  btnGetAction.style.display = "flex";
  btnGetComedy.style.display = "flex";
  btnGetDocumentary.style.display = "none";
  btnGetDrama.style.display = "flex";
  btnGetHorror.style.display = "flex";
  btnGetRomance.style.display = "flex";
  btnGetScifi.style.display = "flex";
  btnGetThriller.style.display = "flex";
}
const getOnlyDrama = () => {
  getDrama();
  movieList.style.display = "block"
  getActionList.innerHTML = "";
  getComedyList.innerHTML = "";
  getDocumentaryList.innerHTML = "";
  getDramaList.innerHTML = "flex";
  getHorrorList.innerHTML = "";
  getRomanceList.innerHTML = "";
  getScifiList.innerHTML = "";
  getThrillerList.innerHTML = "";
  strAct = "";
  strCom = "";
  strDoc = "";
  strHor = "";
  strRom = "";
  strSci = "";
  strThr = "";
  // empties titles when clicked for each genre, repopulates it based on which genre is selected
  actionTitle.innerHTML = '';
  comedyTitle.innerHTML = '';
  documentaryTitle.innerHTML = '';
  dramaTitle.innerHTML = 'Drama Movies';
  horrorTitle.innerHTML = '';
  romanceTitle.innerHTML = '';
  scifiTitle.innerHTML = '';
  thrillerTitle.innerHTML = '';
  //
  btnGetAction.style.display = "flex";
  btnGetComedy.style.display = "flex";
  btnGetDocumentary.style.display = "flex";
  btnGetDrama.style.display = "none";
  btnGetHorror.style.display = "flex";
  btnGetRomance.style.display = "flex";
  btnGetScifi.style.display = "flex";
  btnGetThriller.style.display = "flex";
}
const getOnlyHorror = () => {
  getHorror();
  movieList.style.display = "block"
  getActionList.innerHTML = "";
  getComedyList.innerHTML = "";
  getDocumentaryList.innerHTML = "";
  getDramaList.innerHTML = "";
  getHorrorList.innerHTML = "flex";
  getRomanceList.innerHTML = "";
  getScifiList.innerHTML = "";
  getThrillerList.innerHTML = "";
  strAct = "";
  strCom = "";
  strDra = "";
  strRom = "";
  strSci = "";
  strThr = "";
  // empties titles when clicked for each genre, repopulates it based on which genre is selected
  actionTitle.innerHTML = '';
  comedyTitle.innerHTML = '';
  documentaryTitle.innerHTML = '';
  dramaTitle.innerHTML = '';
  horrorTitle.innerHTML = 'Horror Movies';
  romanceTitle.innerHTML = '';
  scifiTitle.innerHTML = '';
  thrillerTitle.innerHTML = '';
  //
  btnGetAction.style.display = "flex";
  btnGetComedy.style.display = "flex";
  btnGetDocumentary.style.display = "flex";
  btnGetDrama.style.display = "flex";
  btnGetHorror.style.display = "none";
  btnGetRomance.style.display = "flex";
  btnGetScifi.style.display = "flex";
  btnGetThriller.style.display = "flex";
}
const getOnlyRomance = () => {
  getRomance();
  movieList.style.display = "block"
  getActionList.innerHTML = "";
  getComedyList.innerHTML = "";
  getDocumentaryList.innerHTML = "";
  getDramaList.innerHTML = "";
  getHorrorList.innerHTML = "";
  getRomanceList.innerHTML = "flex";
  getScifiList.innerHTML = "";
  getThrillerList.innerHTML = "";
  strAct = "";
  strCom = "";
  strDoc = "";
  strDra = "";
  strHor = "";
  strSci = "";
  strThr = "";
  // empties titles when clicked for each genre, repopulates it based on which genre is selected
  actionTitle.innerHTML = '';
  comedyTitle.innerHTML = '';
  documentaryTitle.innerHTML = '';
  dramaTitle.innerHTML = '';
  horrorTitle.innerHTML = '';
  romanceTitle.innerHTML = 'Romance Movies';
  scifiTitle.innerHTML = '';
  thrillerTitle.innerHTML = '';
  //
  btnGetAction.style.display = "flex";
  btnGetComedy.style.display = "flex";
  btnGetDocumentary.style.display = "flex";
  btnGetDrama.style.display = "flex";
  btnGetHorror.style.display = "flex";
  btnGetRomance.style.display = "none";
  btnGetScifi.style.display = "flex";
  btnGetThriller.style.display = "flex";
}
const getOnlyScifi = () => {
  getScifi();
  movieList.style.display = "block"
  getActionList.innerHTML = "";
  getComedyList.innerHTML = "";
  getDocumentaryList.innerHTML = "";
  getDramaList.innerHTML = "";
  getHorrorList.innerHTML = "";
  getRomanceList.innerHTML = "";
  getScifiList.innerHTML = "flex";
  getThrillerList.innerHTML = "";
  strAct = "";
  strCom = "";
  strDoc = "";
  strDra = "";
  strRom = "";
  strThr = "";
  // empties titles when clicked for each genre, repopulates it based on which genre is selected
  actionTitle.innerHTML = '';
  comedyTitle.innerHTML = '';
  documentaryTitle.innerHTML = '';
  dramaTitle.innerHTML = '';
  horrorTitle.innerHTML = '';
  romanceTitle.innerHTML = '';
  scifiTitle.innerHTML = 'Scifi Movies';
  thrillerTitle.innerHTML = '';
  //
  btnGetAction.style.display = "flex";
  btnGetComedy.style.display = "flex";
  btnGetDocumentary.style.display = "flex";
  btnGetDrama.style.display = "flex";
  btnGetHorror.style.display = "flex";
  btnGetRomance.style.display = "flex";
  btnGetScifi.style.display = "none";
  btnGetThriller.style.display = "flex";
}
const getOnlyThriller = () => {
  getThriller();
  movieList.style.display = "block"
  getActionList.innerHTML = "";
  getComedyList.innerHTML = "";
  getDocumentaryList.innerHTML = "";
  getDramaList.innerHTML = "";
  getHorrorList.innerHTML = "";
  getRomanceList.innerHTML = "";
  getScifiList.innerHTML = "";
  getThrillerList.innerHTML = "flex";
  strAct = "";
  strCom = "";
  strDoc = "";
  strDra = "";
  strRom = "";
  strSci = "";
  // empties titles when clicked for each genre, repopulates it based on which genre is selected
  actionTitle.innerHTML = '';
  comedyTitle.innerHTML = '';
  documentaryTitle.innerHTML = '';
  dramaTitle.innerHTML = '';
  horrorTitle.innerHTML = '';
  romanceTitle.innerHTML = '';
  scifiTitle.innerHTML = '';
  thrillerTitle.innerHTML = 'Thriller Movies';
  //
  btnGetAction.style.display = "flex";
  btnGetComedy.style.display = "flex";
  btnGetDocumentary.style.display = "flex";
  btnGetDrama.style.display = "flex";
  btnGetHorror.style.display = "flex";
  btnGetRomance.style.display = "flex";
  btnGetScifi.style.display = "flex";
  btnGetThriller.style.display = "none";
}

const showGenre = document.querySelector(".showGenre");
showGenre.style.display = "none";

const getActionList = document.querySelector(".actionList")
const getComedyList = document.querySelector(".comedyList")
const getDocumentaryList = document.querySelector(".documentaryList")
const getDramaList = document.querySelector(".dramaList")
const getHorrorList = document.querySelector(".horrorList")
const getRomanceList = document.querySelector(".romanceList")
const getScifiList = document.querySelector(".scifiList")
const getThrillerList = document.querySelector(".thrillerList")

btnShowByGenre = document.getElementById("showByGenre");

btnShowByGenre.addEventListener("click", showGenreOptions);
btnShowByGenre.addEventListener("click", noShowBal);
btnShowByGenre.addEventListener("click", showAllMoviesButton);
btnShowByGenre.addEventListener("click", showUsersMoviesButton)
btnShowByGenre.addEventListener("click", hidePurchaseOption);
btnShowByGenre.addEventListener("click", clearMyMovies);
btnShowByGenre.addEventListener("click", clearLists);

btnGetAction = document.getElementById("getActionButton")
btnGetAction.addEventListener("click", getOnlyAction);

btnGetComedy = document.getElementById("getComedyButton")
btnGetComedy.addEventListener("click", getOnlyComedy);

btnGetDocumentary = document.getElementById("getDocumentaryButton")
btnGetDocumentary.addEventListener("click", getOnlyDocumentary);

btnGetDrama = document.getElementById("getDramaButton")
btnGetDrama.addEventListener("click", getOnlyDrama);

btnGetHorror = document.getElementById("getHorrorButton")
btnGetHorror.addEventListener("click", getOnlyHorror);

btnGetRomance = document.getElementById("getRomanceButton")
btnGetRomance.addEventListener("click", getOnlyRomance);

btnGetScifi = document.getElementById("getScifiButton")
btnGetScifi.addEventListener("click", getOnlyScifi);

btnGetThriller = document.getElementById("getThrillerButton")
btnGetThriller.addEventListener("click", getOnlyThriller);


// search form

// const searchForm = document.getElementById


// when submitted, movie is pushed in to purchased movies
// when purchased movies is filtered, if statement is comparing to pruchased movies, so alert pops up everytime there is a duplicate in purchased movies --- need to fix


