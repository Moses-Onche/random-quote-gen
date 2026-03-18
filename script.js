const setup = document.querySelector(".quote");
const button = document.querySelector(".generate");
const punchLine = document.querySelector(".author");

async function generateQuote() {
  try {
    let url = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.punchline);
    setup.textContent = data.setup;
    punchLine.textContent = data.punchline;
  } catch (error) {
    console.log(error);
  }
};

generateQuote();

button.addEventListener('click', generateQuote);