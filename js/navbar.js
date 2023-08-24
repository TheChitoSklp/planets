// Datos de los planetas
const planets = [
  { name: "MERCURY", color: "mercury", link: "/html/mercury.html" },
  { name: "VENUS", color: "venus", link: "/html/venus.html" },
  { name: "EARTH", color: "earth", link: "/html/earth.html" },
  { name: "MARS", color: "mars", link: "/html/mars.html" },
  { name: "JUPITER", color: "jupiter", link: "/html/jupiter.html" },
  { name: "SATURN", color: "saturn", link: "/html/saturn.html" },
  { name: "URANUS", color: "uranus", link: "/html/uranus.html" },
  { name: "NEPTUNE", color: "neptune", link: "/html/nepturne.html" },

];

// Obtener el contenedor del navbar
const navbarContainer = document.getElementById("navbarContainer");

// Crear el elemento <nav> y sus hijos
const navElement = document.createElement("nav");
navElement.className = "navbar navbar-expand-lg";

const containerElement = document.createElement("div");
containerElement.className = "container-fluid";

const brandElement = document.createElement("a");
brandElement.className = "navbar-brand";
brandElement.href = "/index.html";
brandElement.textContent = "THE PLANETS";

const toggleButton = document.createElement("button");
toggleButton.className = "navbar-toggler";
toggleButton.type = "button";
toggleButton.setAttribute("data-bs-toggle", "collapse");
toggleButton.setAttribute("data-bs-target", "#navbarNav");
toggleButton.setAttribute("aria-controls", "navbarNav");
toggleButton.setAttribute("aria-expanded", "false");
toggleButton.setAttribute("aria-label", "Toggle navigation");

const toggleIcon = document.createElement("span");
toggleIcon.className = "navbar-toggler-icon";

toggleButton.appendChild(toggleIcon);

const collapseDiv = document.createElement("div");
collapseDiv.className = "collapse navbar-collapse";
collapseDiv.id = "navbarNav";

const navList = document.createElement("ul");
navList.className = "navbar-nav";

// Agregar cada planeta a la lista de navegación
planets.forEach((planet) => {
  const planetItem = document.createElement("li");
  planetItem.className = "nav-item links-nav";

  const planetLinkContainer = document.createElement("div");
  planetLinkContainer.className = "links-nav-planets";

  const planetCircle = document.createElement("div");
  planetCircle.className = `circle ${planet.color}`;

  const planetLink = document.createElement("a");
  planetLink.className = "nav-link";
  planetLink.href = planet.link;
  planetLink.textContent = planet.name;

  planetLinkContainer.appendChild(planetCircle);
  planetLinkContainer.appendChild(planetLink);

  const arrow = document.createElement("div");
  arrow.className = "arrow";
  arrow.textContent = ">";

  planetItem.appendChild(planetLinkContainer);
  planetItem.appendChild(arrow);

  navList.appendChild(planetItem);
});

containerElement.appendChild(brandElement);
containerElement.appendChild(toggleButton);
containerElement.appendChild(collapseDiv);

collapseDiv.appendChild(navList);

navElement.appendChild(containerElement);

navbarContainer.appendChild(navElement);

// navbar secundario ACTIVE
let currentUrl = window.location.href;
let links = document.querySelectorAll(".more-info-links a");
for (let i = 0; i < links.length; i++) {
  if (links[i].href === currentUrl) {
    links[i].classList.add("active");
  }
}



//cambio de color borde 
const borde = document.querySelector('.more-info-links a.active');
const planeta = document.querySelector('.color-title').innerHTML;
function asignarColorPlaneta(planeta) {
  const colores = {
      EARTH: '#6f2ed6',
      VENUS: '#eda249',
      JUPITER: '#d14c32',
      MARS: '#d83a34',
      MERCURY: '#838391',
      NEPTURNE: '#2d68f0',
      SATURN: '#cd5120',
      URANUS: '#419ebb',
     
  };

  return colores[planeta] || 'black'; // Si el planeta no coincide, asigna negro
}
borde.style.borderColor = asignarColorPlaneta(planeta)