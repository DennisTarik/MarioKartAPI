import { createElement } from "./elements";

export function createMainElement() {
  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    [
      createElement("p", {
        textContent: "GoKartInfo will appear here:",
      }),
    ]
  );
  return mainElement;
}
