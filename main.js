import "./style.css";
import { createHeaderElement } from "./lib/headerElement";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { createMarioCard } from "./components/marioCard";
import { fetchCharacters } from "./lib/fetchCharacter";
import createSearchElement from "./components/searchForm";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderElement();

  const searchForm = createSearchElement();

  const mainComponent = createMainElement();

  const marioCard = createMarioCard();

  const characterCards = fetchCharacters(
    "https://mario-kart-tour-api.herokuapp.com/api/v1/drivers"
  );
  console.log(characterCards);

  const footerComponent = createFooterElement();

  appElement.append(
    headerComponent,
    searchForm,
    mainComponent,
    footerComponent
  );
  mainComponent.append(marioCard);
}

renderApp();
