// =======================
// STAR RATING
// =======================

const stars = document.querySelectorAll(".stars span");

let selectedRating = 0;

stars.forEach((star, index) => {

    star.addEventListener("mouseover", () => {

        highlightStars(index);

    });

    star.addEventListener("click", () => {

        selectedRating = index + 1;

        highlightStars(index);

    });

});

document.querySelector(".stars").addEventListener("mouseleave", () => {

    if(selectedRating===0){

        resetStars();

    }else{

        highlightStars(selectedRating-1);

    }

});

function highlightStars(index){

    stars.forEach((star,i)=>{

        if(i<=index){

            star.style.filter="grayscale(0)";
            star.style.transform="scale(1.2)";

        }else{

            star.style.filter="grayscale(1)";
            star.style.transform="scale(1)";

        }

    });

}

function resetStars(){

    stars.forEach(star=>{

        star.style.filter="grayscale(1)";
        star.style.transform="scale(1)";

    });

}

// Initially stars appear grey
resetStars();


// =======================
// FEEDBACK SUBMIT
// =======================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(selectedRating===0){

        alert("Please select a rating ⭐");

        return;
    }

    alert(`Thank you for your feedback!\n\nRating : ${selectedRating} ⭐`);

    form.reset();

    selectedRating=0;

    resetStars();

});