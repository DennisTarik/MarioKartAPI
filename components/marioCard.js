import styles from "./marioCard.module.css";
import { createElement } from "../lib/elements";

export function createMarioCard({ name, rarity, special_skill }) {
  const marioCard = createElement(
    "div",
    {
      className: styles.card,
    },
    [
      createElement("h2", {
        className: styles.titleLine,
        textContent: name,
      }),
      createElement("p", {
        className: styles.rarityText,
        textContent: "Rarity",
      }),
      createElement("p", {
        className: styles.rarityStatus,
        textContent: rarity,
      }),
      createElement("p", {
        className: styles.specialSKillText,
        textContent: "Special",
      }),
      createElement("p", {
        className: styles.specialSKillStatus,
        textContent: special_skill,
      }),
    ]
  );
  return marioCard;
}
