import { IProject } from "./IProject";

export const projects: IProject[] = [
  {
    name: 'Uno strumento per la visualizzazione ed editing nella Teoria dei Grafi',
    desc: 'La mia tesi triennale consiste nello sviluppo di uno strumento interattivo basato su Java per la visualizzazione, l\'editing e la risoluzione dei problemi nella Teoria dei Grafi. L\'obiettivo principale del mio progetto è creare un\'applicazione intuitiva ed efficace che possa essere utilizzata come supporto didattico per gli studenti che studiano i grafi.',
    img: '../../../assets/Thesis.png',
    latestRelease: 'Released on March 2021',
    redirection: 'https://github.com/Lewis-Peace/Editor-didattico-per-la-teoria-dei-grafi/releases'
  },
  {
    name: 'Applicazione ionic per attività in palestra',
    desc: 'Per tenere traccia dei risultati personali in palestra ho sviluppato un\'applicazione con il framework Ionic. Questa app è pubblicata nell\'appstore sotto il nome di Gym Helper.',
    img: '../../../assets/gym_helper.png',
    latestRelease: 'Released on March 2021',
    dismissed: true
  },
  {
    name: 'Let\'s find Carol',
    desc: '',
    img: '../../../assets/Game title.png',
    ongoing: true
  }
]
