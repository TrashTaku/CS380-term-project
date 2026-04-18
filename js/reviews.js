document.addEventListener("DOMContentLoaded", () => {
    const allReviewBoxes = document.querySelectorAll(".review .rating");
    console.log("boxes found:", allReviewBoxes.length);

    allReviewBoxes.forEach((container) => {
        const rating = parseFloat(container.dataset.rating) || 0;
        console.log("container:", container, "rating:", rating);

        for (let i = 1; i <= 5; i++) {
            const img = document.createElement("img");
            img.width = 25;

            if (i <= Math.floor(rating)) {
                img.src = "../images/full-star.webp";
            } else if (i - 0.5 === rating) {
                img.src = "../images/half-star.png";
            } else {
                img.src = "../images/empty-star.png";
            }

            console.log("adding image:", img.src);
            container.appendChild(img);
        }
    });
});