import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Dashboard',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'sama-categorie',
        name: 'Mes catégories',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'sama-collection',
        name: 'Mes collections',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'sama-preference',
        name: 'Mes préférences',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'sama-tissu',
        name: 'Mes tissus',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'sama-modele',
        name: 'Nouveau modèle',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'sama-liste-modele',
        name: 'Mes modèles',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'sama-commande',
        name: 'Mes commandes',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  },
  /*
  {
        label: '',
        main: [
            {
                state: 'basic',
                name: 'Categories',
                type: 'sub',
                icon: 'ti-layout-grid2-alt',
                children: [
                    {
                        state: 'ajout-categorie',
                        name: 'Mes catégories'
                    }
                ]
            },
        ]
    },
  {
    label: '',
    main: [
      {
        state: 'basic',
        name: 'Collections',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'liste-collection',
            name: 'Mes Collections'
          }
        ]
      },
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'basic',
        name: 'Modeles',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'liste-modele',
            name: 'Liste modèle'
          }
        ]
      },
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'basic',
        name: 'Préférences',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'ajout-preference',
            name: 'Liste préférences'
          }
        ]
      },
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'basic',
        name: 'Tissu',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'type-tissu',
            name: 'Mes Tissus'
          }
        ]
      },
    ]
  }
*/
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
