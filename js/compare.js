// 1. Data Object (Should match your inventory.js data)
const carData = [
    { brand: "Ferrari", model: "488 Pista", hp: "711 hp", engine: "3.9L V8", speed: "211 mph", price: "$350,000" },
    { brand: "Lamborghini", model: "Huracan EVO", hp: "631 hp", engine: "5.2L V10", speed: "202 mph", price: "$289,000" },
    { brand: "Porsche", model: "911 Turbo S", hp: "640 hp", engine: "3.7L Flat-6", speed: "205 mph", price: "$245,000" },
    { brand: "Mercedes-Benz", model: "S-Class", hp: "496 hp", engine: "4.0L V8", speed: "155 mph", price: "$138,000" }
];

// 2. Populate the Select dropdowns
const selectors = [document.getElementById('select1'), document.getElementById('select2'), document.getElementById('select3')];

selectors.forEach(selector => {
    carData.forEach((car, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = `${car.brand} ${car.model}`;
        selector.appendChild(option);
    });

    // 3. Add Event Listener to update table when selection changes
    selector.addEventListener('change', updateTable);
});

function updateTable() {
    selectors.forEach((selector, i) => {
        const carIndex = selector.value;
        const columnNum = i + 1; // 1, 2, or 3

        if (carIndex !== "") {
            const car = carData[carIndex];
            document.getElementById(`name${columnNum}`).textContent = car.brand + " " + car.model;
            document.getElementById(`hp${columnNum}`).textContent = car.hp;
            document.getElementById(`engine${columnNum}`).textContent = car.engine;
            document.getElementById(`speed${columnNum}`).textContent = car.speed;
            document.getElementById(`price${columnNum}`).textContent = car.price;
        } else {
            // Reset column if "Select Car" is chosen
            document.getElementById(`name${columnNum}`).textContent = "-";
            document.getElementById(`hp${columnNum}`).textContent = "-";
            document.getElementById(`engine${columnNum}`).textContent = "-";
            document.getElementById(`speed${columnNum}`).textContent = "-";
            document.getElementById(`price${columnNum}`).textContent = "-";
        }
    });
}