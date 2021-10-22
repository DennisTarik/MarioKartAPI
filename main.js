import "./style.css";
import { createHeaderElement } from "./lib/headerElement";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderElement();

  const mainComponent = createMainElement();

  const footerComponent = createFooterElement();

  appElement.append(headerComponent, mainComponent, footerComponent);
}

renderApp();
