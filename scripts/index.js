
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
/*
var flipPaper = document.getElementsByClassName('slid-4-card-max')[0];

document.getElementsByClassName('slid-4-filp')[0].onclick = function() {
    if(!flipPaper.classList.contains('flip'))
    {
        flipPaper.classList.add('flip');
    }else
    {
        flipPaper.classList.remove('flip');
    }
}*/

function ShowModal() {
    var modal = document.getElementById("myModal");
    var img = document.querySelectorAll(".image-show img,.item-card-icon img");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.forEach((element) => {
        element.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    })
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    
}

function Scoll() {
    document.addEventListener("scroll", () => {
        const elements = document.querySelectorAll(".slid-scroll-img");
        elements.forEach((element) => {
            var speed = parseFloat(element.getAttribute("speed")) || 1.0;
            var offset = parseFloat(element.getAttribute("offset")) || 0;
            var scrollbetween = offset + (window.scrollY - element.scrollHeight)/((window.innerHeight/100) / speed);
            element.style['transform'] = `translateY(${scrollbetween}px)`
        });
        const elementsmask = document.querySelectorAll(".slid-scroll-img-mask");
        elementsmask.forEach((element) => {
            var speed = parseFloat(element.getAttribute("speed")) || 1.0;
            var offset = parseFloat(element.getAttribute("offset")) || 0;
            var scrollbetween = offset + (window.scrollY - element.scrollHeight)/((window.innerHeight/90) / speed);
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

function SortData(indexes,selector) { 
    var indexesArray = Array.from(indexes); 
    let sorted = indexesArray.sort(comparator); 
    sorted.forEach(e => 
        document.querySelector(selector).appendChild(e)); 
}

function showImage(n,id) {
    let index = document.querySelectorAll(".image-show-flex");
    index.forEach((element) => {
        if(element.id == id){
            let l = element.querySelectorAll(".image-show");
            for (let i = 0; i < l.length; i++) {
                l[i].className = l[i].className.replace(" active", "");
            };
            l[n].className += " active";
        }
    })
}

function plusSlides(n,id) {
    let slides = document.querySelectorAll(".image-slot");
    slides.forEach((element) => {
        let current = parseInt(element.getAttribute("current"))
        if (element.id == id)
        {
            element.setAttribute("current",current+n);
            showSlides(current+n,element);
        }
    })
  }

function currentSlide(n,id) {
    let slides = document.querySelectorAll(".image-slot");
    slides.forEach((element) => {
        let current = parseInt(element.getAttribute("current"))
        if (element.id == id)
        {
            element.setAttribute("current",n);
            showSlides(current,element);
        }
    })
  }

function showSlides(n,element) {
    let current = parseInt(element.getAttribute("current"));
    let dots = element.querySelectorAll(".dot");
    if (n > dots.length) {
        current = 1
        element.setAttribute("current",1)
    };
    if (n < 1) {
        current = dots.length
        element.setAttribute("current",dots.length)
    };
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };
    showImage(current-1,element.id)
    dots[current-1].className += " active";
    /*
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "flex";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    */
  }




Delay()
View()
Scoll()
ShowModal()
SortData(document.querySelectorAll(".slid-3-bars .index-1"),"#list-1")
SortData(document.querySelectorAll(".slid-3-bars .index-2"),"#list-2")