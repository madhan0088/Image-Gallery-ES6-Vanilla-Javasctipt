const currentImage = document.querySelector('.main-image img');
const images = document.querySelectorAll('.images img');
const opacity = 0.4;
images[0].style.opacity=opacity;

images.forEach(function (img) {
    img.addEventListener('click', function (e) {
        images.forEach(function(img){
            img.style.opacity=1; 
        });
        currentImage.src = this.attributes['src'].value;
        currentImage.classList.add('fade-in');
        setTimeout(() => {
            currentImage.classList.remove('fade-in');
        }, 500);
        e.target.style.opacity=opacity;
    });
});

// writing the above function withES6 arrow function way
// images.forEach(img =>img.addEventListener('click',e =>(currentImage.src = e.target.src)));

