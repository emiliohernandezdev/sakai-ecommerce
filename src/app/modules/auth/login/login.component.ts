import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public layoutService: LayoutService){}
}
