class Accordion {
  constructor() {
    this.initializeAccordions();
    this.observeDomChanges();
  }

  initializeAccordions() {
    const accordionElements = document.querySelectorAll('.accordion-main');
    accordionElements.forEach((element) => {
      if (!element.classList.contains('initialized')) {
        this.initAccordion(element as HTMLElement);
        element.classList.add('initialized');
      }
    });
  }

  initAccordion(element: HTMLElement) {
    const body = element.querySelector('.acc-body') as HTMLElement;
    const stateArrow = element.querySelector('.state-arrow') as HTMLElement;

    const header = element.querySelector('.acc-head');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = body.classList.toggle('open');
        stateArrow.classList.toggle('open');

        if (isOpen) {
          this.openAccordion(body, stateArrow);
        } else {
          this.closeAccordion(body, stateArrow);
        }

        if (!element.querySelector('.acc-head-static')) {
          const group = element.closest('.accordion-grup') as HTMLElement;
          this.closeOtherAccordions(group, element);
        }
      });
    }
  }

  openAccordion(body: HTMLElement, stateArrow: HTMLElement) {
    const contentHeight = body.scrollHeight;
    body.style.height = `${contentHeight}px`;
    stateArrow.classList.add('open');
  }

  closeAccordion(body: HTMLElement, stateArrow: HTMLElement) {
    body.style.height = '0';
    stateArrow.classList.remove('open');
    setTimeout(() => {
      body.style.height = '';
    }, 500);
  }

  closeOtherAccordions(group: HTMLElement, openElement: HTMLElement) {
    const otherAccordions = group.querySelectorAll('.accordion-main');
    otherAccordions.forEach((element) => {
      if (element !== openElement) {
        const body = element.querySelector('.acc-body') as HTMLElement;
        const stateArrow = element.querySelector('.state-arrow') as HTMLElement;
        if (body?.classList.contains('open')) {
          this.closeAccordion(body, stateArrow);
        }
      }
    });
  }

  observeDomChanges() {
    const observer = new MutationObserver(() => {
      this.initializeAccordions();
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
}

// Initialize accordions globally
document.addEventListener('DOMContentLoaded', () => {
  new Accordion();
});
