fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(
        (json) => {
            const posts = json;
            posts.forEach((post, index) => {
                const newRestaurantElement = `<section class="restaurant">Restaurant #${index}: ${post.title}</section>`
                document.getElementById('restaurants').innerHTML += newRestaurantElement;
            });
        }
    );