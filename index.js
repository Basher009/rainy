const rainContainer = document.querySelector(".rain");

function createRaindrop() {
    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    rainContainer.appendChild(raindrop);

    raindrop.addEventListener("animationiteration", () => {
        rainContainer.removeChild(raindrop);
        createRaindrop();
    });
}

function init() {
    for (let i = 0; i < 50; i++) {
        createRaindrop();
    }
}

init();
