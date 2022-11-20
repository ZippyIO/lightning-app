const form = document.querySelector('form');
const distancePara = document.querySelector('.calc-distance');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    distancePara.textContent = 'Distance: ' + calculateDistance() + 'km away';
    console.log(calculateDistance());
});

function calculateDistance() {
    time = form.elements['distance'].value;
    return (result = time / 3);
}
