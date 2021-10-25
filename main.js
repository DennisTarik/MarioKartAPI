import "./style.css";
import { createHeaderElement } from "./components/headerElement";
import { fetchCharacters } from "./lib/fetchCharacter";
import { handleSubmit } from "./lib/handleSubmit";
import { createMainElement } from "./components/mainElement";
import { createFooterElement } from "./components/footerElement";
import { createMarioCard } from "./components/marioCard";
import createSearchElement from "./components/searchForm";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderElement();

  const searchForm = createSearchElement(handleSubmit);

  const mainComponent = createMainElement();

  const characterList = await fetchCharacters(
    "https://mario-kart-tour-api.herokuapp.com/api/v1/drivers"
  );

  const marioCards = characterList.map((character) =>
    createMarioCard(character)
  );

  const footerComponent = createFooterElement();

  appElement.append(
    headerComponent,
    searchForm,
    mainComponent,
    footerComponent
  );
  mainComponent.append(...marioCards);
}

renderApp();
