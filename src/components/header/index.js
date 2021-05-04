import Element from "../../modules/createElement/index.js";
import printMenu from "../../modules/printMenu/index.js";
import printText from "../../modules/printText/index.js";

const listMenu = [
  "Home",
  "Autumn Shop",
  "Custom Content",
  "Products",
  "Brands",
  "Blog",
];

const Header = {
  build: (root) => {
    const _ul = Element({
      typeElement: "ul",
    });

    printMenu({
      parent: _ul,
      listMenu: listMenu,
      classList: ["list-hamburger"],
    });

    const _nav = Element({
      typeElement: "nav",
      classList: ["container"],
      children: [_ul],
    });

    const _navBurger = Element({
      typeElement: "div",
      classList: ["nav-hamburger"],
      children: [_nav],
    });

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

    const _boxTopHeader = Element({
      typeElement: "div",
      classList: ["box-top-header"],
      children: [_txtWelcome, _login],
    });

    const _header = Element({
      typeElement: "header",
      attribute: ["id", "header"],
      children: [_boxTopHeader, _topHeaderResponsive, _navBurger],
    });

    root.appendChild(_header);

    HeaderMiddle.build(_header);

    _menuBurgerIcon.addEventListener("click", () => {
      _navBurger.classList.toggle("on");

      _menuBurgerIcon.classList.toggle("fi-rr-menu-burger");
      _menuBurgerIcon.classList.add("fi-rr-cross");
    });

    return _header;
  },
};

const HeaderMiddle = {
  build: (props) => {

    const _inputSearch = Element  ({
      typeElement: 'input',
      classList: ['input-search'],
      attribute: ['placeholder', 'Search']
    })

    const _txtCart = printText("Shooping Cart");

    const _shoopingCartIcon = Element({
      typeElement: "i",
      classList: ["fi", "fi-rr-shopping-cart-add"],
    });

    const _searchIcon = Element({
      typeElement: "i",
      classList: ["fi", "fi-rr-search"],
    });

    const _shoopingCart = Element({
      typeElement: "div",
      classList: ["wrapper-shooping-cart"],
      children: [_searchIcon, _shoopingCartIcon, _txtCart],
    });

    const _ul = Element({
      typeElement: "ul",
    });

    printMenu({
      parent: _ul,
      listMenu: listMenu,
      classList: ["list-middle"],
    });

    const _nav = Element({
      typeElement: "nav",
      classList: ["container"],
      children: [_ul],
    });

    const _navMiddle = Element({
      typeElement: "div",
      classList: ["nav-middle"],
      children: [_nav],
    });

    const _logo = Element({
      typeElement: "img",
      attribute: [
        "src",
        "http://demo.withinpixels.com/autumn/first/img/autumn-theme-demo-store-1399103895.jpg",
      ],
      classList: ["logo"],
    });

    const _boxHeaderMiddle = Element({
      typeElement: "div",
      classList: ["box-header-middle"],
      children: [_logo, _navMiddle, _shoopingCart, _inputSearch],
    });

    props.appendChild(_boxHeaderMiddle);
  },
};

export default Header;
