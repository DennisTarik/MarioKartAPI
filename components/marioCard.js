import styles from "./marioCard.module.css";
import { createElement } from "../lib/elements";

export function createMarioCard() {
  const marioCard = createElement(
    "div",
    {
      className: styles.card,
    },
    [
      createElement("p", {
        textContent: "Mario",
      }),
    ]
  );
  return marioCard;
}
