import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { UserService } from 'src/app/services/user.service';
import {
  faHome,
  IconDefinition,
  faFileMedical,
  faCubes,
  faClipboardList,
  faQuestionCircle,
  faUserPlus,
  faUser,
  faHospitalUser
} from '@fortawesome/free-solid-svg-icons';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

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
  faHospitalUser: IconDefinition = faHospitalUser

  userStorage: any = localStorage.getItem('user');
  user!: User;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
    ) {}

    ngOnInit() {
      this.user = JSON.parse(this.userStorage);
    }

  logOut() {
    this.authService.logOut();
  }


}
