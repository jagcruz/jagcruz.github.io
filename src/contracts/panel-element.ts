export class PanelElement extends HTMLElement {
  panelhash = window.location.hash;

  constructor() {
    super();
    this.render();
  }

  handleEvent(event: Event) {
    if (event.type === 'popstate') {
      this.panelhash = window.location.hash;
      this.render();
    }
  }

  connectedCallback() {
    window.addEventListener('popstate', this);
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this);
  }

  render() {
    throw new Error('Method not implemented.');
  }
}
