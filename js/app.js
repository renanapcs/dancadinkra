var img_name = new Array("assets/img/adinkra/memory/adinkra01.png", "assets/img/adinkra/memory/adinkra02.png", 
                        "assets/img/adinkra/memory/adinkra03.png", "assets/img/adinkra/memory/adinkra04.png", 
                        "assets/img/adinkra/memory/adinkra05.png", "assets/img/adinkra/memory/adinkra06.png",
                        "assets/img/adinkra/memory/adinkra07.png", "assets/img/adinkra/memory/adinkra08.png", 
                        "assets/img/adinkra/memory/adinkra09.png", "assets/img/adinkra/memory/adinkra10.png", 
                        "assets/img/adinkra/memory/adinkra11.png", "assets/img/adinkra/memory/adinkra12.png",
                        "assets/img/adinkra/memory/adinkra13.png", "assets/img/adinkra/memory/adinkra14.png", 
                        "assets/img/adinkra/memory/adinkra15.png", "assets/img/adinkra/memory/adinkra16.png", 
                        "assets/img/adinkra/memory/adinkra17.png", "assets/img/adinkra/memory/adinkra18.png",
                        "assets/img/adinkra/memory/adinkra19.png", "assets/img/adinkra/memory/adinkra20.png", 
                        "assets/img/adinkra/memory/adinkra21.png", "assets/img/adinkra/memory/adinkra22.png", 
                        "assets/img/adinkra/memory/adinkra23.png", "assets/img/adinkra/memory/adinkra24.png");

// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];

let adinkra = document.getElementsByClassName("adinkra");
let adinkras = [...adinkra];

// deck of all cards in game
const deck = document.getElementById("card-deck");

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// // declare variables for star icons
// const stars = document.querySelectorAll(".fa-star");

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

//  // stars list
//  let starsList = document.querySelectorAll(".stars li");

 // close icon in modal
 let closeicon = document.querySelector(".close");

 // declare modal
 let modal = document.getElementById("popup1")

 // array for opened cards
var openedCards = [];
var openedAdinkras = [];


// @description shuffles cards
// @param {array}
// @returns shuffledarray
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    currentIndex = 0;
    var imgN = img_name.length;
    while (currentIndex < array.length/2) {
        randomIndex = Math.floor(Math.random() * (imgN-currentIndex)) + currentIndex;
        temporaryValue = img_name[currentIndex];
        img_name[currentIndex] = img_name[randomIndex];
        img_name[randomIndex] = temporaryValue;
        adinkras[2*currentIndex].src =  img_name[currentIndex];
        adinkras[2*currentIndex+1].src =  img_name[currentIndex];
        currentIndex += 1;       
    }

    return array;
};


// @description shuffles cards when page is refreshed / loads
document.body.onload = startGame();


// @description function to start a new play 
function startGame(){
 
    // empty the openCards array
    openedCards = [];

    // shuffle deck
    cards = shuffle(cards);
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
        adinkras[i].classList.remove("show");
    }
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
    // reset rating
    // for (var i= 0; i < stars.length; i++){
    //     stars[i].style.color = "#FFD700";
    //     stars[i].style.visibility = "visible";
    // }
    //reset timer
    second = 0;
    minute = 0; 
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}


// @description toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

var displayAdinkra = function (){
    this.classList.toggle("show");
};


// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

function adinkraOpen() {
    openedAdinkras.push(this);
};

// @description when cards match
function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
    openedAdinkras = [];
}


// description when cards don't match
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedAdinkras[0].classList.remove("show");
        openedAdinkras[1].classList.remove("show");
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
        openedAdinkras = [];
    },1100);
}


// @description disable cards temporarily
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}


// @description enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}


// @description count player's moves
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
    // // setting rates based on moves
    // if (moves > 8 && moves < 12){
    //     for( i= 0; i < 3; i++){
    //         if(i > 1){
    //             stars[i].style.visibility = "collapse";
    //         }
    //     }
    // }
    // else if (moves > 13){
    //     for( i= 0; i < 3; i++){
    //         if(i > 0){
    //             stars[i].style.visibility = "collapse";
    //         }
    //     }
    // }
}


// @description game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}


// @description congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (matchedCard.length == cards.length){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations modal
        modal.classList.add("show");

        // // declare star rating variable
        // var starRating = document.querySelector(".stars").innerHTML;

        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        // document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;

        //closeicon on modal
        closeModal();
    };
}


// @description close icon on modal
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}


// @desciption for user to play Again 
function playAgain(){
    modal.classList.remove("show");
    startGame();
}


// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click",congratulations);
};

for (var i = 0; i < adinkras.length; i++){
    adinkra = adinkras[i];
    adinkra.addEventListener("click", displayAdinkra);
    adinkra.addEventListener("click", adinkraOpen);    
};
