import Element from "../../modules/createElement/index.js";
import printText from "../../modules/printText/index.js";

const Header = {
  build: (props) => {
    const $root = document.querySelector("#root");

    const _profileIcon = Element({
      typeElement: "i",
      classList: ["fi", "fi-rr-user"],
    });

    const _txtCart = printText("Shooping Cart");

    const _shoopingCartIcon = Element({
      typeElement: "i",
      classList: ["fi", "fi-rr-shopping-cart-add"],
    });

    const _shoopingCart = Element({
      typeElement: "div",
      classList: ["wrapper-shooping-cart"],
      children: [_shoopingCartIcon, _txtCart],
    });

    const _menuBurgerIcon = Element({
      typeElement: "i",
      classList: ["fi", "fi-rr-menu-burger"],
    });

    const _topHeaderResponsive = Element({
      typeElement: "div",
      classList: ["box-top-header-responsive"],
      children: [_menuBurgerIcon, _shoopingCart, _profileIcon],
    });

    const _login = Element({
      typeElement: "a",
      classList: ["text-login"],
      textContent: "Login or Register",
    });

    const _txtWelcome = printText("Welcome to our store!");

    const _topHeader = Element({
      typeElement: "div",
      classList: ["box-top-header"],
      children: [_txtWelcome, _login],
    });

    const _header = Element({
      typeElement: "header",
      attribute: ["id", "header"],
      children: [_topHeader, _topHeaderResponsive],
    });

    $root.appendChild(_header);

    _menuBurgerIcon.addEventListener("click", () => {
      console.log("entrei");
    });

    return _header;
  },
};

export default Header;
