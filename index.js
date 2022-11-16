// Creates copyright year in the footer
var copyRightElement = document.querySelector('.copyright');
var currentYear = new Date().getFullYear();

copyRightElement.innerHTML = `&copy; ${currentYear} Tyler Montgomery <a href='https://github.com/ArKaes13' style='text-decoration:none; color:white;'><i class="fa-brands fa-github"></a></i>`

// Animates the resume section
function debounce(func, wait = 10, immediate = true) {
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

const jobDivs = document.querySelectorAll('.slide-in');

function checkSlide(event) {
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