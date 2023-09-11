fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(
        (json) =>
          (document.getElementById("restaurantList").innerHTML += json.length)
    );