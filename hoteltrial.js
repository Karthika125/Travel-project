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
    1: {
      1: [
        { id: 1, name: 'Landmark 1A1' },
        { id: 2, name: 'Landmark 1A2' },
      ],
      2: [
        { id: 3, name: 'Landmark 1B1' },
        { id: 4, name: 'Landmark 1B2' },
      ],
    },
    2: {
      3: [
        { id: 5, name: 'Landmark 2A1' },
        { id: 6, name: 'Landmark 2A2' },
      ],
      4: [
        { id: 7, name: 'Landmark 2B1' },
        { id: 8, name: 'Landmark 2B2' },
      ],
    },
    3: {
      5: [
        { id: 9, name: 'Landmark 3A1' },
        { id: 10, name: 'Landmark 3A2' },
      ],
      6: [
        { id: 11, name: 'Landmark 3B1' },
        { id: 12, name: 'Landmark 3B2' },
      ],
    },
  };
  
  // Function to populate hotels based on the selected location
  function populateHotels(locationId) {
    const hotelSelect = document.getElementById('hotel');
    hotelSelect.innerHTML = ''; // Clear previous options
  
    hotelsData[locationId].forEach(hotel => {
      const option = document.createElement('option');
      option.value = $ {locationId}-${ hotel.id}; // Add location ID prefix to hotel ID
      option.textContent = $ {hotel.name} - $$ {hotel.price};
      hotelSelect.appendChild(option);
    });
  
    // After populating hotels, populate nearby landmarks for the first hotel by default
    const defaultHotelId = $ {locationId} - $ {hotelsData[locationId][0].id}; // Default to the first hotel
    populateLandmarks(defaultHotelId);
  }
  
  // Function to populate nearby landmarks based on the selected hotel
  function populateLandmarks(hotelId) {
    const landmarksList = document.getElementById('landmarksList');
    landmarksList.innerHTML = ''; // Clear previous landmarks
  
    const [locationId, hotelActualId] = hotelId.split('-'); // Split location ID and hotel ID
    if (!landmarksData.hasOwnProperty(locationId) || !landmarksData[locationId].hasOwnProperty(hotelActualId)) {
      console.error ( Hotel with ID ${hotelId} does not have associated landmarks.);
      return;
    }
  
    const hotelLandmarks = landmarksData[locationId][hotelActualId];
    hotelLandmarks.forEach(landmark => {
      const listItem = document.createElement('li');
      listItem.textContent = landmark.name;
      landmarksList.appendChild(listItem);
    });
  }

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

        document.getElementById('totalPrice').textContent = $${totalPrice};
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
