import { createElement } from "../lib/elements";
import styles from "./searchForm.module.css";

export default function createSearchElement(onSubmit) {
  const searchInputElement = createElement("input", {
    type: "text",
    placeholder: "Enter character here",
    className: styles.input,
  });

  const searchButtonElement = createElement(
    "button",
    {
      type: "submit",
      className: styles.submit,
    },
    ["Search"]
  );

  const searchFormElement = createElement(
    "form",
    {
      className: styles.form,
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(searchInputElement.value);
      },
    },
    [searchInputElement, searchButtonElement]
  );

  return searchFormElement;
}
