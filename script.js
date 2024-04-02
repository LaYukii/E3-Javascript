const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.querySelector("#form");
const inputNumber = document.querySelector("#number");
const container = document.querySelector("#container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = inputNumber.value.trim();

  if (number && !isNaN(number)) {
    const foundPizza = pizzas.find((pizza) => pizza.id === parseInt(number));
    if (foundPizza) {
      renderPizzaCard(foundPizza, container);
      localStorage.setItem("lastSearchedPizza", JSON.stringify(foundPizza));
    } else {
      renderError("No hay una pizza con ese número.", container);
    }
  } else {
    renderError("Por favor, introduce un número.", container);
  }
});

const renderPizzaCard = (pizza, container) => {
  const cardHTML = `
    <div class="card">
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <h2>${pizza.nombre}</h2>
      <h3>Ingredientes: ${pizza.ingredientes}.</h3>
      <p>Precio: $${pizza.precio}</p>
    </div>
    `;
  container.innerHTML = cardHTML;
};

const renderError = (message, container) => {
  const errorHTML = `<p class="error">${message}</p>`;
  container.innerHTML = errorHTML;
};

// Se fija en la ultima pizza encontrada en el localStorage
const lastSearchedPizza = JSON.parse(localStorage.getItem("lastSearchedPizza"));
if (lastSearchedPizza) {
  renderPizzaCard(lastSearchedPizza, container);
}
