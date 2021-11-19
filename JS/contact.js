


let animateContact = () => {
    setTimeout(() => {middleTranslate()},200);
    setTimeout(() => {outlierTranslate()},1000);
    setTimeout(() => {yesFigcaption()},2000);
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

let yesFigcaption = () => {
    anime({
        targets: ".email figcaption",
        width: '600px',
    })
    anime({
        targets: ".phone-number figcaption",
        width: '400px',
    })
    anime({
        targets: ".github figcaption",
        width: '250px',
    })
    anime({
        targets: "figure figcaption a",
        opacity: '1',
      })
}