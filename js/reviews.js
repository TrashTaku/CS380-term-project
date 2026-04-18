// 1. Data: Array of Review Objects
const customerReviews = [
    { name: "John Doe", rating: 5, text: "The Ferrari 488 Pista is a masterpiece. The buying process was seamless!", img: "images/user1.webp" },
    { name: "Jane Smith", rating: 4, text: "Amazing inventory. Found my dream Porsche here. Highly recommended.", img: "images/user2.webp" },
    { name: "Mike Ross", rating: 5, text: "Elite service for elite cars. The team knows their stuff.", img: "images/user3.webp" }
];

// 2. Function to generate stars based on the rating number
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += "★"; // Solid star for rated
        } else {
            stars += "☆"; // Hollow star for unrated
        }
    }
    return stars;
}

// 3. Display reviews on the page
function displayReviews() {
    const container = document.getElementById('reviews-container');
    
    customerReviews.forEach(review => {
        const reviewHTML = `
            <div class="review-card" style="border: 1px solid #ccc; padding: 15px; margin-bottom: 10px; border-radius: 8px;">
                <img src="${review.img}" alt="${review.name}" style="width:60px; border-radius:50%;">
                <h3 class="cname">${review.name}</h3>
                <div class="rating" style="color: gold; font-size: 1.2rem;">
                    ${generateStars(review.rating)}
                </div>
                <p class="review-text">"${review.text}"</p>
            </div>
        `;
        container.innerHTML += reviewHTML;
    });
}

// Run the function when the page loads
displayReviews();