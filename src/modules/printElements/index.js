const printElements = (props) => {
  const $root = document.querySelector("#root");

  props.elements.forEach((element) => {
    element.build($root);
  });
};

export default printElements;
