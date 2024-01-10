import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiencs = signal <IExperience[]>([
    {
      summary:{
        strong:'Desenvolvedor(a) front-and',
        p:'IC - IFES | OCT 2023 - Present',
      },
      text:'<p> Desde Outubro de 2023 trabalho no Desenvolvimento de uma Ferramenta de Software para Busca e Recuperação de Ativos de Propriedade Intelectual das Bases do INPI  </p>',
    },
    {
      summary:{
        strong:'Robótica',
        p:'Robótica (IFES) | AUG 2021 - Present',
      },
      text:'Desde janeiro de 2021 participo da equipe de robótica do IFES, onde trabalho com programação e montagem de robôs para a realização de Olimpiadas com simulação de problemas reais.',
    },
    {
      summary:{
        strong:'Monitor(a) de programação',
        p:'Programe-SE (IFES) | APR 2022 - OCT 2022',
      },
      text:'Durante o periodo de Abril até Outubro de 2022, trabalhei em um trabalho temporário, sendo facilitadora de programação para jovens.',
    },
    {
      summary:{
        strong:'Facilitadora de atividades com robótica',
        p:'Leter (IFES) | JUNE 2022 - DEC 2022',
      },
      text:'Durante o periodo de Junho até Dezembro de 2023, trabalhei como facilitado de programação e robótica com crianças da rede pública de ensino.',
    },
  ])
}
