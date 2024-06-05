
  // Dummy data for hotels and landmarks (replace this with actual data)
const hotelsData = {
    1: [
      { id: 1, name: 'Hotel A', pricePerPerson: { single: 100, double: 150 } },
      { id: 2, name: 'Hotel B', pricePerPerson: { single: 120, double: 180 } },
    ],
    2: [
      { id: 3, name: 'Hotel C', pricePerPerson: { single: 130, double: 160 } },
      { id: 4, name: 'Hotel D', pricePerPerson: { single: 140, double: 170 } },
    ],
    3: [
      { id: 5, name: 'Hotel E', pricePerPerson: { single: 110, double: 140 } },
      { id: 6, name: 'Hotel F', pricePerPerson: { single: 125, double: 155 } },
    ],
  };
  

const landmarksData = {
    1: [
      { id: 1, name: 'Landmark 1A', image: 'landmark1.png' }, // Adjust the path as needed
      { id: 2, name: 'Landmark 1B', image: 'landmark1.png' }, // Adjust the path as needed
    ],
    2: [
      { id: 3, name: 'Landmark 2A', image: 'landmark1.png' }, // Adjust the path as needed
      { id: 4, name: 'Landmark 2B', image: 'landmark1.png' }, // Adjust the path as needed
    ],
};

  
  // Function to populate hotels based on the selected location
  function populateHotels(locationId) {
    const hotelSelect = document.getElementById('hotel');
    hotelSelect.innerHTML = ''; // Clear previous options
  
    hotelsData[locationId].forEach(hotel => {
      const option = document.createElement('option');
      option.value = `${locationId}-${hotel.id}`; // Add location ID prefix to hotel ID
      option.textContent = `${hotel.name} - Rs${hotel.price}`;
      hotelSelect.appendChild(option);
    });
  
    // After populating hotels, populate nearby landmarks for the first hotel by default
    const defaultHotelId = `${locationId}-${hotelsData[locationId][0].id}`; // Default to the first hotel
    populateLandmarks(defaultHotelId);
  }
  


  function populateLandmarks(hotelId) {
    const landmarksList = document.getElementById('landmarksList');
    landmarksList.innerHTML = ''; // Clear previous landmarks
  
    const [locationId, hotelActualId] = hotelId.split('-'); // Split location ID and hotel ID
    if (!landmarksData.hasOwnProperty(locationId) || !landmarksData[locationId].hasOwnProperty(hotelActualId)) {
      console.error(`Hotel with ID ${hotelId} does not have associated landmarks.`);
      return;
    }
  
    const hotelLandmarks = landmarksData[locationId][hotelActualId];
    hotelLandmarks.forEach(landmark => {
      const listItem = document.createElement('li');
  
      // Create an image element
      const landmarkImage = document.createElement('img');
      landmarkImage.src = landmark.image;
      landmarkImage.alt = landmark.name;
      listItem.appendChild(landmarkImage);
  
      // Create a span for the landmark name
      const landmarkName = document.createElement('span');
      landmarkName.textContent = landmark.name;
      listItem.appendChild(landmarkName);
  
      landmarksList.appendChild(listItem);
    });
  }
  // Event listener for hotel selection
document.getElementById('hotel').addEventListener('change', function() {
    const hotelId = this.value;
    populateLandmarks(hotelId);
  });
  

// Function to update the displayed price based on the number of people selected
function updatePrice() {
    const numPeople = parseInt(document.getElementById('numPeople').value);
    const selectedHotelId = document.getElementById('hotel').value;
    const [locationId, hotelId] = selectedHotelId.split('-');
    const selectedHotel = hotelsData[locationId].find(hotel => hotel.id == hotelId);

    if (selectedHotel) {
        const roomType = document.getElementById('roomType').value;
        const pricePerPerson = selectedHotel.pricePerPerson[roomType];
        const totalPrice = pricePerPerson * numPeople;

        document.getElementById('totalPrice').textContent = `$${totalPrice}`;
    }
}

// Event listener for number of people input field
document.getElementById('numPeople').addEventListener('input', updatePrice);


// Event listener for number of people input field
document.getElementById('numPeople').addEventListener('input', updatePrice);

// Event listener for number of people input field
document.getElementById('numPeople').addEventListener('input', updatePrice);

  
  // Event listener for location selection
  document.getElementById('location').addEventListener('change', function() {
    const locationId = this.value;
    populateHotels(locationId);
  });
  
  // Event listener for hotel selection
  document.getElementById('hotel').addEventListener('change', function() {
    const hotelId = this.value;
    populateLandmarks(hotelId);
  });
  
  // Initial population of hotels based on the default location
  const defaultLocationId = document.getElementById('location').value;
  populateHotels(defaultLocationId);
