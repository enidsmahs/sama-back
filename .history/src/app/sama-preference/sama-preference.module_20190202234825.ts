import { NgModule } from "@angular/core";
import { SamaPreferenceComponent } from "./sama-preference.component";
import { RouterModule } from "@angular/router";
import { SamaPreferenceRoutes } from "./sama-preference.routing";

@NgModule({
    imports: [
        RouterModule.forChild(SamaPreferenceRoutes)
    ],
    declarations: [SamaPreferenceComponent]
})
export class SamaPreferenceModule {

}
