const Element = (props) => {
  if (!props) return false;

  const _element = document.createElement(props.typeElement);

  if (props.attribute)
    _element.setAttribute(props.attribute[0], props.attribute[1]);

  if (props.classList)
    props.classList.forEach((clas) => {
      _element.classList.add(clas);
    });

  if (props.children)
    props.children.forEach((children) => {
      _element.appendChild(children);
    });

  if (props.textContent) _element.textContent = props.textContent;

  return _element;
};

export default Element;
