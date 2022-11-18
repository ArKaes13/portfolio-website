// Creates copyright year in the footer
var copyRightElement = document.querySelector('.copyright');
var currentYear = new Date().getFullYear();

copyRightElement.innerHTML = `&copy; ${currentYear} Tyler Montgomery <a href='https://github.com/ArKaes13' style='text-decoration:none; color:white;'><i class="fa-brands fa-github"></a></i>`

// Debounce function for limiting the amount of scroll events that are triggered
function debounce(func, wait = 15, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Handles animation on scroll for skills and resume sections
const skillImages = document.querySelectorAll('.skill-image');
const jobDivs = document.querySelectorAll('.slide-in');

function checkSlide() {
    for (i = 0; i < skillImages.length; i++) {
        var slideInAt = (window.scrollY + window.innerHeight) - 
            skillImages[i].height / 2;
        var imageBottom = skillImages[i].offsetTop + skillImages[i].height;
        var isHalfShown = slideInAt > skillImages[i].offsetTop;
        var isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            skillImages[i].style.animationDelay = `${.3 * i}s`;
            skillImages[i].classList.remove('inactive');
            skillImages[i].classList.add('active');
        } else {
            skillImages[i].classList.remove('active');
            skillImages[i].style.animationDelay = `0s`;
            skillImages[i].classList.add('inactive');
        }
    }
    
    for (div of jobDivs) {
        var slideInAt = (window.scrollY + window.innerHeight) - 
            div.clientHeight / 2;
        var imageBottom = div.offsetTop + div.clientHeight;
        var isHalfShown = slideInAt > div.offsetTop;
        var isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            div.classList.remove('inactive');
            div.classList.add('active');
        } else {
            div.classList.remove('active');
            div.classList.add('inactive');
        }
    }
}

window.addEventListener('scroll', debounce(checkSlide));