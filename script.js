const apiUrl = "https://meowfacts.herokuapp.com/"

  // Function to fetch and display a random Meow Fact
  function fetchRandomFact() {
    // Fetch data from the Meow Facts API
    fetch(apiUrl)
      .then(response => {
        return response.json();
      })
      .then(meowFact => {
        // Display the Meow Fact
        const meowFactElement = document.getElementById('meowFact');
        meowFactElement.innerHTML = `<p>${meowFact.data}</p>`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
 // Attach the fetchRandomFact function to the button click event
 document.getElementById('btn').addEventListener('click', fetchRandomFact);