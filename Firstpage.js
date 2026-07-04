// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card,.step,.stat,.testimonial-box").forEach((el)=>{

    observer.observe(el);

});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stat h2");

let started = false;

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const top = stats.offsetTop;

    if(window.scrollY > top-500 && !started){

        started = true;

        counters.forEach(counter=>{

            const target = counter.innerText;

            const number = parseInt(target);

            if(isNaN(number)) return;

            let count = 0;

            const speed = number/80;

            const update = ()=>{

                count += speed;

                if(count < number){

                    counter.innerText = Math.floor(count)+"+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;

                }

            }

            update();

        });

    }

});