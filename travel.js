document.getElementById("travelForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var from = document.getElementById("from").value;
    var destination = document.getElementById("destination").value;
    var duration = document.getElementById("duration").value;
    var budget = document.getElementById("budget").value;
  
    // Clear form fields
    document.getElementById("from").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("budget").value = "";
  
    // Construct travel object
    var travel = {
      from: from,
      destination: destination,
      duration: duration,
      budget: budget
    };
  
    // For demonstration purposes, simply alert the user with the details
    alert("Your trip from " + travel.from + " to " + travel.destination + " for " + travel.duration + " with a budget of $" + travel.budget + " has been booked successfully!");
  });
 
  const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const offerWrapper = document.querySelector('.offer-wrapper');

let currentPosition = 0;
const step = 320; // Adjust step value according to offer width and margin

prevBtn.addEventListener('click', () => {
  currentPosition += step;
  if (currentPosition > 0) {
    currentPosition = 0;
  }
  offerWrapper.style.transform = `translateX(${currentPosition}px)`;
});

nextBtn.addEventListener('click', () => {
  const containerWidth = offerWrapper.offsetWidth;
  const contentWidth = offerWrapper.scrollWidth;

  currentPosition -= step;
  if (currentPosition < -(contentWidth - containerWidth)) {
    currentPosition = -(contentWidth - containerWidth);
  }
  offerWrapper.style.transform = `translateX(${currentPosition}px)`;
});
