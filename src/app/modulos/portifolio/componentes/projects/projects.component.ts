import { Component, inject, signal } from '@angular/core';
import {Iprojects} from '../../interface/Iprojects';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EdialogPaneClass } from '../../enum/EdialogPaneClass';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<Iprojects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt:'Vida fullStack',
      title: 'Vida fullStack',
      width: 100,
      height: 51,
      description:'<p> Explore o desenvolvimento full<p/>',
      links:[
        {
          name: 'Conheça o GitHub',
          href: 'https://github.com/LaraGuedes',
        },
      ],
    },
  ]);

  public openDialog(data:Iprojects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EdialogPaneClass.PROJECTS,
    });
  }
}


