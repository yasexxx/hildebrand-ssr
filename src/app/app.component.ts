import { Component, ComponentFactoryResolver, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, RouterEvent } from '@angular/router';
// import { AboutComponent } from './component/about/about.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route: ActivatedRoute){
  }

}
