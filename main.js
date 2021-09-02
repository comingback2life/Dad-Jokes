const jokeButton = document.querySelector(".laugh");
const container = document.querySelector("#container");
jokeButton.addEventListener("click", (e) => {
  jokeLoader();
});

//fetching url using axios
async function jokeLoader() {
  try {
    const getHeader = {
      headers: { Accept: "text/plain - Plain text response" },
    };
    const getJokes = await axios.get("https://icanhazdadjoke.com/", getHeader);
    const createCard = document.createElement("div");
    createCard.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.append(getJokes.data);
    createCard.append(cardBody);
    container.append(createCard);
  } catch (e) {
    cardBody.append("Error fetching Joke");
  }
}
