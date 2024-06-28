let imagemPerfil = document.querySelector(".apresentacao__imagem");
let btnCafe = document
  .querySelector("#cabecalho__menu__link__cafe")
  .addEventListener("click", () => {
    imagemPerfil.setAttribute("src", "./img/perfil-chico-figma.png");
    document.body.classList.remove("active__forest");
    document.body.classList.remove("active__tsunami");
  });

let btnForest = document
  .querySelector("#cabecalho__menu__link__forest")
  .addEventListener("click", () => {
    imagemPerfil.setAttribute("src", "./img/perfil-chico-figma-forest.png");
    document.body.classList.remove("active__tsunami");
    document.body.classList.add("active__forest");
  });

let btnTsunami = document
  .querySelector("#cabecalho__menu__link__tsunami")
  .addEventListener("click", () => {
    imagemPerfil.setAttribute("src", "./img/perfil-chico-figma-tsunami.png");
    document.body.classList.remove("active__forest");
    document.body.classList.add("active__tsunami");
  });
