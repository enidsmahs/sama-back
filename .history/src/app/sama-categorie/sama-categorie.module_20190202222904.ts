import { NgModule } from "@angular/core";
import { SamaCategorieComponent } from "./sama-categorie.component";
import { RouterModule } from "@angular/router";
import { SamaCategorieRoutes } from "./sama-categorie.routing";

@NgModule({
    imports: [
        RouterModule.forChild(SamaCategorieRoutes)
    ],
    declarations: [SamaCategorieComponent]
})
export class SamaCategorieModule {

}
