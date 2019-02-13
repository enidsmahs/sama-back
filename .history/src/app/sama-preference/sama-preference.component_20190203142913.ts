import { Component, OnInit } from '@angular/core';
import { ServicePreferenceService } from '../../service/service-preference.service';
import { ServiceConfigService } from '../../service/service-config.service';

@Component({
  selector: "app-sama-preference",
  templateUrl: "./sama-preference.component.html",
  styleUrls: ["./sama-preference.component.css"]
})
export class SamaPreferenceComponent implements OnInit {
  file: File = null;
  SamaPreference = {
    idPreference: 0,
    nom: "",
    proprietes: []
  };

  SamaPreferencesSelected: any = {
    idPreference: 0,
    nom: "",
    proprietes: []
  };

  SamaPreferences: any;
  constructor(
    private servicePreference: ServicePreferenceService,
    private serviceConfig: ServiceConfigService
  ) {}

  ngOnInit() {}
}
