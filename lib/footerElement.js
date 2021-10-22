import { createElement } from "./elements";

export function createFooterElement() {
  const footerElement = createElement(
    "footer",
    {
      className: "footer",
    },
    [
      createElement("p", {
        textContent: "Probs to Karlkartoffel",
      }),
    ]
  );
  return footerElement;
}
