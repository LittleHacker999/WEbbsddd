let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let currentDate = new Date();
let year = currentDate.getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    // Insert the dynamic year into the footer copyright text span with id "year"
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = year;
    }
});

console.log("Hi Pky Welcome to My Website.")
// Cache the results of the queries
const header = document.querySelector('header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Debounce function to limit the number of times the scroll handler is executed
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleScroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                console.log("Changed Navbar.")
            });
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// Use the debounce function for the scroll event
window.onscroll = debounce(handleScroll, 100);

$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    new TypeIt(".typing", { 
        lifeLike: true, 
        speed: 0,
        loop: true,
        waitUntilVisible: true
    })
    .type("Y")
    .pause(100)
    .type("o")
    .pause(100)
    .type("u")
    .pause(100)
    .type("t")
    .pause(100)
    .type("u")
    .pause(100)
    .type("b")
    .pause(100)
    .type("e")
    .pause(100)
    .type("r")
    .pause(1500)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(29)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
	.pause(30)
    .delete(1)
    .pause(500)
    .type("D")
    .pause(100)
    .type("e")
    .pause(100)
    .type("s")
    .pause(100)
    .type("i")
    .pause(100)
    .type("g")
    .pause(100)
    .type("n")
    .pause(100)
    .type("e")
    .pause(100)
    .type("r")
    .pause(1500)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(500)
    .type("F")
    .pause(100)
    .type("r")
    .pause(100)
    .type("e")
    .pause(100)
    .type("e")
    .pause(100)
    .type("l")
    .pause(100)
    .type("a")
    .pause(100)
    .type("n")
    .pause(100)
    .type("c")
    .pause(100)
    .type("e")
    .pause(100)
    .type("r")
    .pause(1500)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
	.delete(1)
    .pause(30)
	.delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(500)
    .type("W")
    .pause(100)
    .type("e")
    .pause(100)
    .type("b")
    .pause(100)
    .type(" ")
    .pause(100)
    .type("D")
    .pause(100)
    .type("e")
    .pause(100)
    .type("v")
    .pause(100)
    .type("e")
    .pause(100)
    .type("l")
    .pause(100)
    .type("o")
    .pause(100)
    .type("p")
    .pause(100)
    .type("e")
    .pause(100)
    .type("r")
    .pause(1500)
    .move(-10, {speed: 500})
    .pause(100)
    .delete(8, {instant: true})
    .pause(30)
    .delete(8, {instant: true})
    .pause(30)
    .delete(8, {instant: true})
    .pause(500)
    .type("B")
    .pause(100)
    .type("o")
    .pause(100)
    .type("t")
    .move(10, {speed: 500})
    .pause(1500)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
	.delete(1)
    .pause(30)
	.delete(1)
    .pause(30)
	.delete(1)
    .pause(30)
	.delete(1)
    .pause(30)
    .pause(500)
    .type("S")
    .pause(100)
    .type("u")
    .pause(100)
    .type("p")
    .pause(100)
    .type("p")
    .pause(100)
    .type("o")
    .pause(100)
    .type("r")
    .pause(100)
    .type("t")
    .pause(100)
    .type("e")
    .pause(100)
    .type("r")
    .pause(1500)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(30)
	.delete(1)
    .pause(30)
    .delete(1)
    .pause(500)
    .type("S")
    .pause(100)
    .type("t")
    .pause(100)
    .type("u")
    .pause(100)
    .type("d")
    .pause(100)
    .type("e")
    .pause(100)
    .type("n")
    .pause(100)
    .type("t")
    .go();

    new TypeIt("#name", {
        strings: "",
        waitUntilVisible: true,
    })
    .pause(1000)
    .type("Jithula Bhasitha")
    .go();
    
    new TypeIt("#email", {
        strings: "",
        waitUntilVisible: true,
    })
    .pause(1000)
    .type("JithulaBhasitha@proton.me")
    .go();
    
    new TypeIt("#num", {
        strings: "",
        waitUntilVisible: true,
    })
    .pause(1000)
    .type("+94123456789")
    .go();
    
    new TypeIt("#emailsub", {
        strings: "",
        waitUntilVisible: true,
    })
    .pause(1000)
    .type("Hi!")
    .go();
    
    new TypeIt("#body", {
        strings: "",
        waitUntilVisible: true,
		lifeLike: true,
        speed: 2
    })
    .pause(1000)
    .type("Hi, I am reaching out regarding [specific topic or inquiry]. I am interested in [specific details or request] and would appreciate any information or assistance you can provide. Please let me know if you need any further details from my side. Looking forward to your response!")
    .go();
});