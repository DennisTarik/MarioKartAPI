export function createElement(tagName, probs, children) {
  const element = document.createElement(tagName);
  if (probs) {
    Object.assign(element, probs);
  }
  if (children) {
    element.append(...children);
  }
  return element;
}
