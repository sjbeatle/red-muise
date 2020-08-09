import { Component, OnInit, HostBinding } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;

  constructor() { }

  @HostBinding('class.container') container = true;

  ngOnInit(): void {
  }
}
