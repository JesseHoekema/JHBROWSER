document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        'url(bg-images/1.jpg)',
        'url(bg-images/2.jpg)',
        'url(bg-images/3.jpg)',
        'url(bg-images/4.jpg)',
        'url(bg-images/5.jpg)',
        'url(bg-images/6.jpg)',
        'url(bg-images/7.jpg)',
        'url(bg-images/8.jpg)',
        'url(bg-images/9.jpg)',
        'url(bg-images/10.jpg)',
        'url(bg-images/11.jpg)',
        'url(bg-images/12.jpg)',
        'url(bg-images/13.jpg)',
        'url(bg-images/14.jpg)',
        'url(bg-images/15.jpg)',
        // Voeg hier de URL's van je achtergrondafbeeldingen toe
    ];

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomBackground = backgrounds[randomIndex];

    const backgroundContainer = document.querySelector('.background-container');
    backgroundContainer.style.backgroundImage = randomBackground;
});