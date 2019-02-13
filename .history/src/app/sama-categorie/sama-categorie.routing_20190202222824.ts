import { Routes } from "@angular/router";
import { SamaCategorieComponent } from "./sama-categorie.component";

export const SamaCategorieRoutes: Routes = [{
    path: '',
    component: SamaCategorieComponent,
    data: {
        breadcrumb: 'Mes catégories'
    }
}];
