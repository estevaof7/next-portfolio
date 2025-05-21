const tempElement = document.createElement('div');

tempElement.style.display = 'none';
tempElement.className = 'bg-red-50';

document.body.appendChild(tempElement);
const computedBackgroundColor =
  window.getComputedStyle(tempElement).backgroundColor;
export const isTailwindCompatible = computedBackgroundColor.includes('oklch');
