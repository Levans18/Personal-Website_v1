


let animateContact = () => {
    noFigcaption();
    setTimeout(() => {middleTranslate()},200);
    setTimeout(() => {outlierTranslate()},1000);
}

let noFigcaption = () => {
    anime({
        targets: "contact-widgets figure figcaption",
        scale: 0,
    })
}

let middleTranslate = () => {
    anime({
        targets: '.contact-widgets figure',
        translateX: screen.width/3 + 300,
        duration: 2000,
    });  
}

let outlierTranslate = () => {
    anime({
        targets: '.email',
        translateX: 300,
        duration: 2000,
    });
    anime({
        targets: '.github',
        translateX: screen.width/1.40 + 200,
        duration: 2000,
    });
}