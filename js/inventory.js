// 1. The Data: An Array of Objects
const cars = [
    { brand: "Ferrari", model: "488 Pista", year: 2019, price: 350000, mileage: "5,000", img: "images/ferrari488pista.webp" },
    { brand: "Lamborghini", model: "Huracan EVO", year: 2021, price: 289000, mileage: "3,400", img: "images/lambo.webp" },
    { brand: "Porsche", model: "911 Turbo S", year: 2022, price: 245000, mileage: "2,100", img: "images/porsche.webp" },
    { brand: "Mercedes-Benz", model: "S-Class", year: 2023, price: 138000, mileage: "1,800", img: "images/mercedes.webp" }
];

// 2. The Function: Displays the cars on the page
function displayCars(carArray) {
    const container = document.getElementById('car-container');
    container.innerHTML = ""; // Clear current listings

    // The Loop: Creating HTML for each car object
    carArray.forEach((car, index) => {
    const carCard = `
        <section class="car-card">
            <p><a href="car-details.html?id=${index}">View Details</a></p>
        </section>
    `;
    container.innerHTML += carCard;
});
}

// 3. Initial call to show all cars when page loads
displayCars(cars);

// 4. AddEventListener for Filtering (Example: Price Sort)
document.getElementById('sortPrice').addEventListener('change', function() {
    let sortedCars = [...cars]; // Copy the array
    if (this.value === "low-high") {
        sortedCars.sort((a, b) => a.price - b.price);
    } else if (this.value === "high-low") {
        sortedCars.sort((a, b) => b.price - a.price);
    }
    displayCars(sortedCars); // Refresh the list
});