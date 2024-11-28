export class Nav {
  private isResized = false;
  private mediaQuery: MediaQueryList;

  constructor(private container: HTMLElement) {
    this.mediaQuery = window.matchMedia('(max-width: 950px)');
    this.initialize();
    this.handleResize();
  }

  initialize() {
    const navLeftTrigger = this.container.querySelector('#navLeft-tigger');

    if (navLeftTrigger) {
      navLeftTrigger.addEventListener('click', () => this.toggleResize());
    } else {
      console.warn('Element #navLeft-tigger not found in Nav component.');
    }

    if (this.mediaQuery.addEventListener) {
      this.mediaQuery.addEventListener('change', () => this.handleResize());
    } else {
      this.mediaQuery.onchange = () => this.handleResize();
    }
  }

  toggleResize() {
    this.isResized = !this.isResized;
    this.updateResizeClass();
  }

  handleResize() {
    this.isResized = this.mediaQuery.matches;
    this.updateResizeClass();
  }

  updateResizeClass() {
    if (this.isResized) {
      this.container.classList.add('navleft-resize');
    } else {
      this.container.classList.remove('navleft-resize');
    }
  }
}
