//API METHODFS
// Variable to store API response
let apiData = [];

// Function to fetch API data
function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {

      // Store data in one place
      apiData = data;

      // Display data in UI
      displayData(apiData);
    });
}

// Function to display data
function displayData(data) {
  const output = document.getElementById("output");
  output.innerHTML = ""; // clear old data

  data.forEach(user => {
    // Create elements dynamically
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Mobile:</strong> ${user.phone}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Geo Location:</strong> 
        Lat: ${user.address.geo.lat}, 
        Lng: ${user.address.geo.lng}
      </p>
    `;

    output.appendChild(card);
  });
}

// Function to clear UI
function clearData() {
  document.getElementById("output").innerHTML = "";
  apiData = [];



  document.getElementById("clearbtn").disabled=true;
}
