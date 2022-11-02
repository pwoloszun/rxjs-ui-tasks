import { Component, Input, OnInit } from '@angular/core';

import { ISectionData } from 'src/app/routing/link-sections';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
})
export class MenuSectionComponent implements OnInit {

  @Input()
  sectionData!: ISectionData

  ngOnInit(): void { }

}
