document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.getElementById("cardGrid");

  fetch("./api/cards.json")
    .then(res => res.json())
    .then(data => {
      data.cards.forEach(card => {
        const col = document.createElement("div");
        col.className = "col-md-3";

        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="./assets/${card.image}" class="card-img-top" alt="${card.title}">
            <div class="card-body">
              <p class="mb-1 text-muted">${card.date}</p>
              <h6>${card.title}</h6>
              <p class="text-muted">${card.views} views</p>
            </div>
          </div>
        `;
        cardGrid.appendChild(col);
      });
    })
    .catch(err => {
      console.error("JSON error:", err);
      cardGrid.innerHTML = `<p class="text-danger">Xəta: JSON yüklənmədi</p>`;
    });
});
