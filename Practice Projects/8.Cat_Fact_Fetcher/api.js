const url = "https://catfact.ninja/fact";

async function getCatFact() {
    try {
        const response = await axios.get(url);
        return response.data.fact;
    } catch (error) {
        console.error("Error fetching cat fact:", error);
        return "No fact found.";
    }
}

const factButton = document.getElementById("factButton");
const factResult = document.getElementById("factResult");

factButton.addEventListener("click", async () => {
    const fact = await getCatFact();
    factResult.innerText = fact;
    factResult.classList.add("fact-color");

});

