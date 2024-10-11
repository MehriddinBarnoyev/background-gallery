const colorsBox = document.getElementById("colorsBox");
const colorText = document.getElementById("color-text");
let index = 1;
let lastColor = "";
const testElement = document.createElement("div");

colorsBox.innerHTML = "";

const checkColor = (color) => {
  const colors = document.getElementsByClassName("color-box");

  // Use the hidden testElement to standardize the color format
  testElement.style.background = color;
  const standardizedColor = testElement.style.backgroundColor;

  // Loop through existing color boxes and compare colors
  for (const element of colors) {
    if (element.style.backgroundColor === standardizedColor) {
      return true; // Color already exists
    }
  }
  return false; // Color doesn't exist
};

const addColor = () => {
  const color = colorText.value.trim(); // Get the entered color and trim whitespace
  if (color === "" || checkColor(color)) return; // Ensure the input is not empty and color doesn't already exist

  lastColor = colorsBox.innerHTML;

  // Create a new div element for the column
  const col = document.createElement("div");
  col.className = "col-sm-6 col-md-4 col-lg-3";
  col.id = index;

  // Create a new div element for the color box
  const colorBox = document.createElement("div");
  colorBox.className = "rounded shadow color-box mb-2";

  //   Background berish jarayoni
  if (color.includes(".")) {
    colorBox.style.background = testElement.style.background = `url(${color})`  // Corrected sntax for background image
  } else {
    testElement.style.background = color // If it's not a URL, treat it as a color
  }

  colorBox.style.background = color; // Set the background color to the input value
  colorBox.innerHTML = `<button class="btn btn-danger" onclick="removeColor('${index++}')"><i class="fas fa-trash"></i></button>`;

  // Append the colorBox to the column
  col.appendChild(colorBox);

  // Append the column to the colorsBox
  colorsBox.appendChild(col); // Fix: Append 'col', not 'color'

  // Clear the input after adding the color
  colorText.value = "";
};

const keyUp = (e) => {
  if (e.key === "Enter") {
    addColor(); // Call addColor() when Enter is pressed
  }
};

const removeColor = (id) => {
  const element = document.getElementById(id);
  console.log(element);
  element.remove();
};

const deleteAllBtn = document.getElementById("deleteAllBtn");

deleteAllBtn.onclick = function () {
  lastColor.color = colorsBox.innerHTML;

  colorsBox.innerHTML = "";
};

const back = () => {
  colorsBox.innerHTML = lastColor;
  console.log(colorsBox.innerHTML.lastColor);
};
