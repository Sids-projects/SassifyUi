import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  appMenu: any = {
    screens: [
      {
        routerLink: 'Home',
        routerLinkActive: 'selected',
        click: 'Home',
        displayName: 'Home',
      },
      {
        routerLink: 'Components',
        routerLinkActive: 'selected',
        click: 'Components',
        displayName: 'Components',
      },
      {
        routerLink: 'Templates',
        routerLinkActive: 'selected',
        click: 'Templates',
        displayName: 'Templates',
      },
    ],
    uiComponents: [
      {
        routerLink: 'Button-Route',
        routerLinkActive: 'selected',
        click: 'Button',
        displayName: 'Button',
        img: '',
        compDesc: '',
      },
      {
        routerLink: 'Card-Route',
        routerLinkActive: 'selected',
        click: 'Card',
        displayName: 'Card',
        img: '',
        compDesc: '',
      },
      {
        routerLink: 'Dropdown-Route',
        routerLinkActive: 'selected',
        click: 'Dropdown',
        displayName: 'Dropdown',
        img: '',
        compDesc: '',
      },
      {
        routerLink: 'Input-Route',
        routerLinkActive: 'selected',
        click: 'Input',
        displayName: 'Input',
        img: '',
        compDesc: '',
      },
      {
        routerLink: 'Table-Route',
        routerLinkActive: 'selected',
        click: 'Table',
        displayName: 'Table',
        img: '',
        compDesc: '',
      },
    ],
  };

  appUiCompsList: any = [
    {
      img: {
        path: './assets/Accordion_img.svg',
        alt: 'Button Img',
        class: 'accordion-img',
      },
      compDesc: {
        h3: 'Accordion',
        p: 'Collapsible panels to organize content compactly.',
      },
      routerLink: 'Accordion-Route',
    },
    {
      img: {
        path: './assets/Button_img.svg',
        alt: 'Button Img',
        class: 'button-img',
      },
      compDesc: {
        h3: 'Button',
        p: 'Customizable buttons with various styles and states.',
      },
      routerLink: 'Button-Route',
    },
    {
      img: {
        path: './assets/Card_img.svg',
        alt: 'Card Img',
        class: 'card-img',
      },
      compDesc: {
        h3: 'Card',
        p: 'Flexible containers for images, titles, and descriptions.',
      },
      routerLink: 'Card-Route',
    },
    {
      img: {
        path: './assets/Dropdown_img.svg',
        alt: 'Card Img',
        class: 'dropdown-img',
      },
      compDesc: {
        h3: 'Dropdown',
        p: 'Toggleable menus for navigation or options.',
      },
      routerLink: 'Dropdown-Route',
    },
    {
      img: {
        path: './assets/Inputs_img.svg',
        alt: 'Card Img',
        class: 'inputs-img',
      },
      compDesc: {
        h3: 'Inputs',
        p: 'Styled input fields with focus and validation states.',
      },
      routerLink: 'Inputs-Route',
    },
    {
      img: {
        path: './assets/Menubar_img.svg',
        alt: 'Menubar Img',
        class: 'menubar-img',
      },
      compDesc: {
        h3: 'Menu Bar',
        p: 'Horizontal or vertical navigation menus.',
      },
      routerLink: 'MenuBar-Route',
    },
    {
      img: { path: './assets/Nav_img.svg', alt: 'Nav Img', class: 'nav-img' },
      compDesc: {
        h3: 'Navigation',
        p: 'Seamless navigation bars for linking sections.',
      },
      routerLink: 'Nav-Route',
    },
    {
      img: {
        path: './assets/Table_img.svg',
        alt: 'Tablet Img',
        class: 'table-img',
      },
      compDesc: {
        h3: 'Table',
        p: 'Styled tables for displaying tabular data.',
      },
      routerLink: 'Table-Route',
    },
    {
      img: {
        path: './assets/Tabs_img.svg',
        alt: 'Tabs Img',
        class: 'tabs-img',
      },
      compDesc: {
        h3: 'Tabs',
        p: 'Tabbed interfaces for organizing and switching content.',
      },
      routerLink: 'Tabs-Route',
    },
  ];

  tableSm: any = [
    { tr: ['1', 'Apple', 'Iphone 8', '10.08.2024', 'Battery Replacemeent'] },
  ];

  tableMd: any = [
    { tr: ['1', 'Apple', 'Iphone 8', '10.08.2024', 'Battery Replacemeent'] },
    { tr: ['2', 'Nokia', 'Nokia 10', '20.09.2024', 'Battery Replacemeent'] },
    {
      tr: ['3', 'Nothing', 'Nothing 2a', '05.10.2024', 'Battery Replacemeent'],
    },
    { tr: ['4', 'Oneplus', 'Oneplus 8', '08.09.2024', 'Battery Replacemeent'] },
    {
      tr: ['5', 'Redmi', 'Redmi 2 Prime', '10.08.2024', 'Battery Replacemeent'],
    },
    { tr: ['6', 'Pixel', 'Pixel 4a', '15.08.2024', 'Battery Replacemeent'] },
  ];

  tableLg: any = [
    {
      tr: [
        '1',
        '001',
        'Apple',
        'Iphone 8',
        '10.08.2024',
        'Screen replacement due to cracks',
      ],
    },
    {
      tr: [
        '2',
        '002',
        'Nokia',
        'Nokia 10',
        '20.09.2024',
        'Software update for new features',
      ],
    },
    {
      tr: [
        '3',
        '003',
        'Nothing',
        'Nothing 2a',
        '05.10.2024',
        'Camera lens replacement',
      ],
    },
    {
      tr: [
        '4',
        '004',
        'Oneplus',
        'Oneplus 8',
        '08.09.2024',
        'Speaker malfunction repair',
      ],
    },
    {
      tr: [
        '5',
        '005',
        'Redmi',
        'Redmi 2 Prime',
        '10.08.2024',
        'Charging port replacement',
      ],
    },
    {
      tr: [
        '6',
        '006',
        'Pixel',
        'Pixel 4a',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
    {
      tr: [
        '7',
        '006',
        'Pixel',
        'Nokia 8a',
        '15.08.2024',
        'Charging port replacement',
      ],
    },
    {
      tr: [
        '8',
        '006',
        'Pixel',
        'Redmi 4',
        '15.08.2024',
        'Camera lens replacement',
      ],
    },
    {
      tr: [
        '9',
        '006',
        'Pixel',
        'Pixel 9 Pro',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
    {
      tr: [
        '10',
        '006',
        'Pixel',
        'Onplus 8',
        '15.08.2024',
        'Speaker malfunction repair',
      ],
    },
    {
      tr: [
        '11',
        '006',
        'Pixel',
        'Oppo Reno',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
    {
      tr: [
        '12',
        '006',
        'Pixel',
        'Samsung s23',
        '15.08.2024',
        'Camera lens replacement',
      ],
    },
    {
      tr: [
        '13',
        '006',
        'Pixel',
        'Backberry One',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
    {
      tr: [
        '14',
        '006',
        'Pixel',
        'Samsung A19',
        '15.08.2024',
        'Speaker malfunction repair',
      ],
    },
    {
      tr: [
        '15',
        '006',
        'Pixel',
        'Oneplus 12',
        '15.08.2024',
        'WiFi connectivity issue fix',
      ],
    },
  ];

  tableMini: any = [
    { tr: ['1', 'Apple', 'Iphone 8'] },
    { tr: ['2', 'Nokia', 'Nokia 10'] },
    {
      tr: ['3', 'Nothing', 'Nothing 2a'],
    },
    { tr: ['4', 'Oneplus', 'Oneplus 8'] },
    {
      tr: ['5', 'Redmi', 'Redmi 2 Prime'],
    },
    { tr: ['6', 'Pixel', 'Pixel 4a'] },
  ];

  constructor() {}
}
