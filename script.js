class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotatedBurgerMenu: 'burger-menu-init',
      shownNavSections: 'nav-sections',
      mobileNavbackground: 'mobile-nav-background',
      width: window.innerWidth,
      mobileNavButton: 'mobile-nav-button-init' };

    this.rotateBurgerMenu = this.rotateBurgerMenu.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.mobileNavTrigger = this.mobileNavTrigger.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      rotatedBurgerMenu: 'burger-menu-init',
      shownNavSections: 'nav-sections',
      mobileNavbackground: 'mobile-nav-background',
      width: window.innerWidth,
      mobileNavButton: 'mobile-nav-button' });

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  rotateBurgerMenu() {
    if (this.state.rotatedBurgerMenu === 'burger-menu-init' || this.state.rotatedBurgerMenu === 'burger-menu')
    this.setState({
      rotatedBurgerMenu: 'rotated-burger-menu',
      shownNavSections: 'nav-sections shown-nav-sections' });

  }

  closeBurgerMenu() {
    this.setState({
      rotatedBurgerMenu: 'burger-menu',
      shownNavSections: 'nav-sections hidden-nav-sections' });

  }

  mobileNavTrigger() {
    if (this.state.mobileNavButton === 'mobile-nav-button-init' || this.state.mobileNavButton === 'mobile-nav-button')
    this.setState({
      mobileNavbackground: 'mobile-nav-background shown-mobile-nav-background',
      mobileNavButton: 'closing-mobile-nav',
      shownNavSections: 'nav-sections shown-nav-sections' });else


    this.setState({
      mobileNavbackground: 'mobile-nav-background hidden-mobile-nav-background',
      mobileNavButton: 'mobile-nav-button',
      shownNavSections: 'nav-sections hidden-nav-sections' });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "navigation-bar" }, /*#__PURE__*/
      React.createElement("nav", null, /*#__PURE__*/
      React.createElement("div", { className: this.state.mobileNavbackground }), /*#__PURE__*/
      React.createElement("div", { className: this.state.shownNavSections }, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#about" }, "About")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#stats" }, "Stats")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#projects" }, "Projects")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#reviews" }, "Reviews")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#partners" }, "Partners")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#blogheadcontainer" }, "Blog")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#unitedcontainer" }, "Form")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("div", { className: "close-btn", onClick: this.closeBurgerMenu }, /*#__PURE__*/
      React.createElement("div", { className: "close-btn-slice" }), /*#__PURE__*/
      React.createElement("div", { className: "close-btn-slice" }))))), /*#__PURE__*/




      React.createElement("div", { className: this.state.rotatedBurgerMenu, onClick: this.rotateBurgerMenu }, /*#__PURE__*/
      React.createElement("div", { className: "burger-menu-slice" }), /*#__PURE__*/
      React.createElement("div", { className: "burger-menu-slice" }), /*#__PURE__*/
      React.createElement("div", { className: "burger-menu-slice" }), /*#__PURE__*/
      React.createElement("div", { className: "burger-menu-slice" })), /*#__PURE__*/

      React.createElement("div", { className: this.state.mobileNavButton, onClick: this.mobileNavTrigger }, /*#__PURE__*/
      React.createElement("div", { className: "mobile-nav-button-slice" }), /*#__PURE__*/
      React.createElement("div", { className: "mobile-nav-button-slice" }), /*#__PURE__*/
      React.createElement("div", { className: "mobile-nav-button-slice" })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Navigation, null), document.getElementById('app'));