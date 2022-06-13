import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { faHome, IconDefinition, faFileMedical, faCubes, faClipboardList, faQuestionCircle, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  faHome: IconDefinition = faHome; 
  faFileMedical: IconDefinition = faFileMedical;
  faCubes: IconDefinition = faCubes;
  faClipboardList: IconDefinition = faClipboardList;
  faQuestionCircle: IconDefinition = faQuestionCircle;
  faUserPlus: IconDefinition = faUserPlus
  faUser: IconDefinition = faUser

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
    ) {}

  logOut() {
    this.authService.logOut();
  }
}
