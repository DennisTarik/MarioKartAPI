import "./style.css";
import { createHeaderElement } from "./lib/headerElement";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { createMarioCard } from "./components/marioCard";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderElement();

  const mainComponent = createMainElement();

  const marioCard = createMarioCard();

  const footerComponent = createFooterElement();

  appElement.append(headerComponent, mainComponent, footerComponent);
  mainComponent.append(marioCard);
}

renderApp();
