

// gallery page image section
document.querySelectorAll('.gallery-image img').forEach(image=>{
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

document.querySelector('.popup-image').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}
