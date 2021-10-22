import "./style.css";
import { createHeaderElement } from "./lib/headerElement";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { createMarioCard } from "./components/marioCard";
import { fetchCharacters } from "./lib/fetchCharacter";
import createSearchElement from "./components/searchForm";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderElement();

  const searchForm = createSearchElement();

  const mainComponent = createMainElement();

  const characterCards = await fetchCharacters();

  const marioCard = characterCards.map((character) =>
    createMarioCard(character)
  );

  console.log(characterCards);

  const footerComponent = createFooterElement();

  appElement.append(
    headerComponent,
    searchForm,
    mainComponent,
    footerComponent
  );
  mainComponent.append(...marioCard);
}

renderApp();
