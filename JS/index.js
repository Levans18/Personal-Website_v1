let animateIndex = () => {
    animateHTML();
    setTimeout(() => {animateCSS()},2000);
    setTimeout(() => {animateJS()},4000);
    setTimeout(() => {animateJava()},6000);
    setTimeout(() => {animateC()},8000);
}

let animateHTML = () => {
    anime({
        targets: 'li.html',
        keyframes:[
        {translateY: -40,duration: 2500},
        {translateY: 40, duration: 5000},
        {translateY: 0, duration: 2500},
        ],
        translateY: 0,
        duration: 10000,
        easing: 'linear',
        loop:true,
    });
}

let animateCSS = () => {
    anime({
        targets: 'li.css',
        keyframes:[
        {translateY: -40,duration: 2500},
        {translateY: 40, duration: 5000},
        {translateY: 0, duration: 2500},
        ],
        translateY: 0,
        duration: 10000,
        easing: 'linear',
        loop:true,
    });
}

let animateJS = () => {
    anime({
        targets: 'li.js',
        keyframes:[
        {translateY: -40,duration: 2500},
        {translateY: 40, duration: 5000},
        {translateY: 0, duration: 2500},
        ],
        translateY: 0,
        duration: 10000,
        easing: 'linear',
        loop:true,
    });
}

let animateJava = () => {
    anime({
        targets: 'li.java',
        keyframes:[
        {translateY: -40,duration: 2500},
        {translateY: 40, duration: 5000},
        {translateY: 0, duration: 2500},
        ],
        translateY: 0,
        duration: 10000,
        easing: 'linear',
        loop:true,
    });
}

let animateC = () => {
    anime({
        targets: 'li.c',
        keyframes:[
        {translateY: -40,duration: 2500},
        {translateY: 40, duration: 5000},
        {translateY: 0, duration: 2500},
        ],
        translateY: 0,
        duration: 10000,
        easing: 'linear',
        loop:true,
    });
}