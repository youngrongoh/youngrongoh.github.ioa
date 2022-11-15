class Component extends HTMLElement {
  constructor() {
    super();
  }
  abc = 1;
  static abc = 2;

  connectedCallback() {
    // this.innerHTML = this.innerHTML;
  };
}

Component.abc = function (contents) {
  console.log(this, contents);
};

class Header extends Component {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

}

export default function defineElement() {
  customElements.define('my-header', Header);
}