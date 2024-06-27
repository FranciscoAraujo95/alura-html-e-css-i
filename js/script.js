let btnCafe = document
  .querySelector("#cabecalho__menu__link__cafe")
  .addEventListener("click", () => {
    document.body.classList.remove("active__forest");
    document.body.classList.remove("active__tsunami");
  });

let btnForest = document
  .querySelector("#cabecalho__menu__link__forest")
  .addEventListener("click", () => {
    document.body.classList.remove("active__tsunami");
    document.body.classList.add("active__forest");
  });

let btnTsunami = document
  .querySelector("#cabecalho__menu__link__tsunami")
  .addEventListener("click", () => {
    document.body.classList.remove("active__forest");
    document.body.classList.add("active__tsunami");
  });
