const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(calculateDistance());
});

function calculateDistance() {
    time = form.elements['distance'].value;
    return (result = time / 3);
}
