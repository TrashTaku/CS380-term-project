// 1. Select the date input
const datePicker = document.getElementById('date');

// 2. Add an Event Listener for when the date is changed
datePicker.addEventListener('input', function(e) {
    const day = new Date(this.value).getUTCDay();
    
    // In JS, 0 is Sunday. 
    if (day === 0) {
        alert('We are closed on Sundays. Please select a Monday through Saturday.');
        this.value = ''; // Reset the input
    }
});

// 3. Form Submission Mastery (Prevents page refresh and shows a confirmation)
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from reloading the page
    
    const name = document.getElementById('name').value;
    const car = document.getElementById('vehicle').value;
    const time = document.getElementById('time').value;

    alert(`Thank you, ${name}! Your request to test drive the ${car} at ${time} has been received.`);
    
    // You could redirect to a 'thank-you.html' here to hit the 9th page idea!
    // window.location.href = 'thank-you.html';
});