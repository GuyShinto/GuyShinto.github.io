
function Delay() {
    var text = document.querySelector(".slid-text-title");
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {newDom += '<span class="each-title-motion">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';}
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {text.children[i].style['animation-delay'] = animationDelay * i * 15 + 'ms';}
}

function View() {
    document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    return;
                }
                entry.target.classList.remove('in-view');
            });
        });
        const allAnimate = document.querySelectorAll(".animate");
        allAnimate.forEach((element) => {
            if (element.hasAttribute("percentage")) {
                var percentage = element.getAttribute("percentage");
                if (!percentage) {percentage = '0%'};
                element.style.setProperty('--percentage-height',percentage + '%');
            }
            observer.observe(element)
        });
    })
}


function Scoll() {
    document.addEventListener("scroll", () => {
        const elements = document.querySelectorAll(".slid-scroll-img");
        elements.forEach((element) => {
            var speed = element.getAttribute("speed");
            if (!speed) {speed = 1};
            var scrollbetween = (window.scrollY - element.scrollHeight)/((window.innerHeight/100) / parseFloat(speed));
            element.style['transform'] = `translateY(${scrollbetween}px)`
        });
        const elementsmask = document.querySelectorAll(".slid-scroll-img-mask");
        elementsmask.forEach((element) => {
            var speed = element.getAttribute("speed");
            if (!speed) {speed = 1};
            var scrollbetween = (window.scrollY - element.scrollHeight)/((window.innerHeight/90) / parseFloat(speed));
            element.style['transform'] = `translateY(${scrollbetween}px)`
        });
    })
}


function comparator(a, b) {
    var pa = a.querySelector("[percentage]").getAttribute("percentage")
    var pb = b.querySelector("[percentage]").getAttribute("percentage")
    if (pa < pb)
        return 1;
    if (pa > pb) 
        return -1; 
    return 0; 
}

function SortData(indexes) { 
    var indexesArray = Array.from(indexes); 
    let sorted = indexesArray.sort(comparator); 
    sorted.forEach(e => 
        document.querySelector("#list").appendChild(e)); 
}
Delay()
View()
Scoll()
SortData(document.querySelectorAll(".slid-3-bars .index"))
