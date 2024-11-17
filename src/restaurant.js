const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const image = document.createElement("img");
    image.src = "../image/restaurant.webp";
    image.height = "300";
    pageContent.appendChild(image);

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant!";
    pageContent.appendChild(headline);

    const copy = document.createElement("p");
    copy.textContent = "We serve the best food in town. Come and have a bite!";
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;