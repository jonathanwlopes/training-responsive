import Element from "../createElement/index.js";

const printMenu = (props) => {
  props.listMenu.forEach((item) => {
    const _a = Element({
      typeElement: "a",
      textContent: item,
      classList: ["text-link"],
    });

    const _li = Element({
      typeElement: "li",
      classList: props.classList,
      children: [_a],
    });

    props.parent.appendChild(_li);
  });
};

export default printMenu;
