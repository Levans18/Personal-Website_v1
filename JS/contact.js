

let animateContact = () => {
    setFigureStart();
    middleTranslate();
    setTimeout(() => {outlierTranslate()},1000)
}

let middleTranslate = () => {
    anime({
        targets: '.contact-widgets figure',
        translateX: screen.width/3 + 100,
        duration: 2000
    });  
}

let outlierTranslate = () => {
    anime({
        targets: '.email',
        translateX: 100,
        duration: 2000
    });
    anime({
        targets: '.github',
        translateX: screen.width/1.40,
        duration: 2000
    });
}