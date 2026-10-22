// API METHODS
// Variable to store API response
let apiData = [];

// wire up buttons after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fetchBtn').addEventListener('click', getData);
  document.getElementById('clearBtn').addEventListener('click', clearData);
});

// Function to fetch API data
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    // Store data in one place
    apiData = data;

    // Display data in UI
    displayData(apiData);

    // enable clear button when there is something to remove
    document.getElementById('clearBtn').disabled = false;
  } catch (err) {
    console.error('fetch error', err);
    alert('Unable to fetch data - please try again later.');
  }
}

// Function to display data
function displayData(data) {
  const output = document.getElementById("output");
  output.innerHTML = ""; // clear old data

  if (!data || data.length === 0) {
    output.textContent = 'No users to display.';
    return;
  }

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
  const output = document.getElementById("output");
  output.innerHTML = "";
  apiData = [];

  // disable until more data is fetched
  document.getElementById("clearBtn").disabled = true;
}
