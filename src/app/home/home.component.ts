import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  description: string = 'Sono un ragazzo di 24 anni. Appassionato di sicurezza informatica, con conoscenze amatoriali riguardo lo sviluppo di siti web, applicazioni e piccoli progetti software ad uso personale. I linguaggi utilizzati principalmente sono C, Java e JS usati fino ad ora per scopi personali o didattici.'
  expLavoro = [
    { inizio: '15/05/2023', fine: 'Fino ad oggi', descrizione: 'Front end jr. software engineer a Beantech' },
    { inizio: '07/02/2022', fine: '11/06/2022', descrizione: 'Insegnante di informatica presso Paolino d\'Aquileia' },
    { inizio: '02/11/2020', fine: '11/12/2020', descrizione: 'Tirocinio presso OmniaEvo' },
    { inizio: '01/08/2019', fine: '31/08/2019', descrizione: 'Cameriere presso ristorante Moby Dick a Bibione' },
    { inizio: '11/09/2017', fine: '13/10/2017', descrizione: 'Stage presso banca BCC di Basiliano'},
    { inizio: '01/02/2016', fine: '04/03/2016', descrizione: 'Stage presso studio DI.GA. Control Codroipo' }
  ]

  titoliStudio = [
    {conseguito: '2021', descrizione: 'Laurea in Informatica classe L-31'},
    {conseguito: '2017', descrizione: 'Diploma di amministrazione Finanza e Marketing'},
    {conseguito: '2016', descrizione: 'Corso sulla la creazione di siti web con Wordpress'}
  ]
}
