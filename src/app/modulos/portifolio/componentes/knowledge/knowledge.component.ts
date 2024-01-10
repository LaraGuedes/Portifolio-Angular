import { Component, signal } from '@angular/core';
import { IKnowleginterfac } from '../../interface/Iknowleginterface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowleginterfac[]>([
    {
      src:' assets/icons/knowledge/html5.svg',
      alt: ' Icone de conhecimento do HTML5',
    },
    {
      src:' assets/icons/knowledge/css3.svg',
      alt: ' Icone de conhecimento do css3',
    },
    {
      src:' assets/icons/knowledge/javascript.svg',
      alt: ' Icone de conhecimento do javascript',
    },
    {
      src:' assets/icons/knowledge/angular.svg',
      alt: ' Icone de conhecimento do angular',
    },
    {
      src:' assets/icons/knowledge/nodejs.svg',
      alt: ' Icone de conhecimento do nodejs',
    },
  ])
}
