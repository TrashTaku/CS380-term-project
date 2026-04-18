// 1. Get the ID from the URL (e.g., ?id=0)
const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('id');

// 2. Reference the same car data (In a real project, this would be in a shared file)
const cars = [
    { brand: "Ferrari", model: "488 Pista", hp: 711, engine: "3.9L V8", price: 350000, img: "images/ferrari488pista.webp" },
    { brand: "Lamborghini", model: "Huracan EVO", hp: 631, engine: "5.2L V10", price: 289000, img: "images/lambo.webp" }
    // ... add the rest of your cars here
];

// 3. Find the specific car
const selectedCar = cars[carId];

// 4. Inject the data into the HTML
if (selectedCar) {
    document.getElementById('car-name').innerText = `${selectedCar.brand} ${selectedCar.model}`;
    document.getElementById('car-hp').innerText = selectedCar.hp + " hp";
    document.getElementById('car-engine').innerText = selectedCar.engine;
    document.getElementById('car-image').src = selectedCar.img;
}