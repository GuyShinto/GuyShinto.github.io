var text = document.querySelector(".slid-text-title");
var newDom = '';
var animationDelay = 6;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="each-title-motion">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i * 15 + 'ms';
}

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
    allAnimate.forEach((element) => observer.observe(element))
})

document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".slid-scroll-img");
    elements.forEach((element) => {
        var scrollbetween = (window.scrollY - element.scrollHeight)/9;
        element.style['transform'] = `translateY(${scrollbetween}px)`
    });

    const elementsmask = document.querySelectorAll(".slid-scroll-img-mask");
    elementsmask.forEach((element) => {
        var scrollbetween = (window.scrollY - element.scrollHeight)/10;
        element.style['transform'] = `translateY(${scrollbetween}px)`
    });
})