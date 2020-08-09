import { Component, OnInit, HostBinding } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFacebookSquare = faFacebookSquare;
  faInstagramSquare = faInstagramSquare;

  constructor() { }

  @HostBinding('class.container') container = true;

  ngOnInit(): void {
  }
}
