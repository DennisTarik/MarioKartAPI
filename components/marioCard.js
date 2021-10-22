import styles from "./maroCard.module.css";
import { createElement } from "../lib/elements";

export default function createMarioCard() {
  const marioCard = createElement(
    "card",
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
