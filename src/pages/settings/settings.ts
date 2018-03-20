import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  constructor(private router: Router) {}

  startNewAttendance() {
    this.router.navigateByUrl("course");
  }
}
