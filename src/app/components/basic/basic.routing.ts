import { Routes } from '@angular/router';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ButtonComponent} from './button/button.component';
import {TypographyComponent} from './typography/typography.component';
import { ListeCollectionComponent } from '../../collection/liste-collection/liste-collection.component';
import { ListeModeleComponent } from '../../collection/liste-modele/liste-modele.component';
import { AjoutModeleComponent } from '../../collection/ajout-modele/ajout-modele.component';
import {AjoutCategorieComponent} from '../../collection/ajout-categorie/ajout-categorie.component';
import { AjoutPreferenceComponent } from '../../collection/ajout-preference/ajout-preference.component';
import { AjoutTissuComponent } from '../../collection/ajout-tissu/ajout-tissu.component';
import {TypeTissuComponent} from '../../collection/type-tissu/type-tissu.component';

export const BasicRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'liste-collection',
                component: ListeCollectionComponent,
                data: {
                    breadcrumb: 'Mes collections',
                    status: true
                }
            },
            {
                path: 'ajout-preference',
                component: AjoutPreferenceComponent,
                data: {
                    breadcrumb: 'Mes préferences',
                    status: true
                }
            },
            {
                path: 'type-tissu',
                component: TypeTissuComponent,
                data: {
                    breadcrumb: 'Mes tissus',
                    status: true
                }
            },
            {
                path: 'liste-modele',
                component: ListeModeleComponent,
                data: {
                    breadcrumb: 'Liste modèle',
                    status: true
                }
            },
            {
                path: 'ajout-modele',
                component: AjoutModeleComponent,
                data: {
                    breadcrumb: 'Nouvelle modèle',
                    status: true
                }
            },
            {
              path: 'ajout-categorie',
              component: AjoutCategorieComponent,
              data: {
                breadcrumb: 'Nouvelle catégorie',
                status: true
              }
            },
            {
                path: 'breadcrumb',
                component: BreadcrumbComponent,
                data: {
                    breadcrumb: 'Breadcrumb Style',
                    status: true
                }
            }, {
                path: 'button',
                component: ButtonComponent,
                data: {
                    breadcrumb: 'Button',
                    status: true
                }
            }, {
                path: 'typography',
                component: TypographyComponent,
                data: {
                    breadcrumb: 'Typography',
                    status: true
                }
            }
        ]
    }
];
