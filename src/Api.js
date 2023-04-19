
function getRandomDadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke))
    .catch((error) => console.log("Failed to fetch dad joke"));
}

// display a random dad joke on app load
getRandomDadJoke();

// function to fetch and display a random dad joke on button click
function fetchDadJoke() {
  getRandomDadJoke();
}