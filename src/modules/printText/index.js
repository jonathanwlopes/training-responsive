import Element from "../createElement/index.js";

const printText = (text) => {
  
  const newText = Element({
    typeElement: "span",
    classList: ["text-small"],
    textContent: text,
  });

  return newText;
};

export default printText;
