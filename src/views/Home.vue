<template>
  <div class="home">
    <v-card tile>
      <v-card-title>Falcon Kristyan</v-card-title>
      <v-card-text>
        <div class="d-flex">
          <img class="myself" alt="myself" src="../assets/me 2.jpg"/>
          <div v-if="!isMobile()" class="description-of-myself">
            Sono un ragazzo di {{myAge}} anni. Appassionato di sicurezza informatica, con conoscenze amatoriali riguardo lo sviluppo di siti web, applicazioni e piccoli progetti software ad uso personale.
            <br/>I linguaggi utilizzati principalmente sono C, Java e JS usati fino ad ora per scopi personali o didattici.
            
          </div>
          <div v-if="isMobile()" class="description-of-myself">
            
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-carousel
      v-model="carousel"
      cycle
      interval="5000"
      hide-delimiters
      show-arrows-on-hover
      height="350"
      >
      <v-carousel-item src="../assets/basket.jpg">
        <p class="citation">
          <i>Mira alla luna, anche se mancherai il bersaglio finirai pur sempre in mezzo alle stelle.</i> <br/>
          Les Brown
        </p>
      </v-carousel-item>
      <v-carousel-item src="../assets/highJump.jpg">
        <p class="citation">
          <i>Nel momento in cui dubiti di poter volare, perdi per sempre la facoltà di farlo.</i><br/>
          J. M. Barrie
        </p>
      </v-carousel-item>
    </v-carousel>
    <v-card flat tile>
      <v-card-title>Esperienze lavorative:</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th v-if="!isMobile()">Data di inizio</th>
                <th v-if="!isMobile()">Data di fine</th>
                <th v-if="isMobile()">Mesi</th>
                <th>Descrizione</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in experiences"
                v-bind:key="index"
              >
                <td v-if="!isMobile()">{{item.start}}</td>
                <td v-if="!isMobile()">{{item.end}}</td>
                <td v-if="isMobile()">{{item.time}}</td>
                <td>{{item.desc}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <v-card tile>
      <v-card-title>Educazione e Titoli di studio:</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Conseguito nel</th>
                <th>Descrizione</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in titles"
                v-bind:key="index"
              >
                <td>{{item.achieved}}</td>
                <td>{{item.desc}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <v-card tile>
      <v-card-title>Linguaggi e Framework conosciuti</v-card-title>
      <v-card-text>
        <div class="logos-container">
          <v-row
            v-for="(row, index) in programminLanguages"
            v-bind:key="index"
          >
            <v-col
              v-for="(item, index) in row"
              v-bind:key="index"
            >
              <programmin-language-logo
                v-bind:to="item.to"
                dimensions="100px"
                v-bind:alt="item.alt"
                v-bind:src="item.src"
                v-bind:language="item.language"/>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
    <v-card tile>
      <v-card-title></v-card-title>
    </v-card>
    <v-card tile>
      <v-card-title>Patente di Guida B</v-card-title>
      <v-card-subtitle>Conseguita nel 2017</v-card-subtitle>
    </v-card>
  </div>
</template>

<style scoped>
td th {
  text-align: center;
}
.myself {
  margin: 10px;
  width: 25%;
}
.description-of-myself {
  width: 75%;
  margin: 10px;
}
.logos-container {
  margin-left: 10%;
  margin-right: 10%;
}
.citation {
  width: 100%;
  font-family: cursive;
  color: black;
  bottom: 0;
  left: 10px;
  position: absolute;
}
</style>

<script>
import ProgramminLanguageLogo from '../components/ProgramminLanguageLogo.vue'

export default {
  name: 'Home',
  components: {
    ProgramminLanguageLogo
  },
  data () {
    return {
      carousel: 0,
      myAge: (new Date().getFullYear() - 1999),
      experiences: [
        { start: this.dateFormat(2,11,2020), end: this.dateFormat(11,12,2020), time: this.subDates('11-2-2020', '12-11-2020'), desc: 'Tirocinio presso OmniaEvo' },
        { start: this.dateFormat(1,8,2019), end: this.dateFormat(31,8,2019), time: this.subDates('8-1-2019', '8-31-2019'), desc: 'Cameriere presso ristorante Moby Dick a Bibione' },
        { start: this.dateFormat(11,9,2017), end: this.dateFormat(13,10,2017), time: this.subDates('9-11-2017', '10-13-2017'), desc: 'Stage presso banca BCC di Basiliano'},
        { start: this.dateFormat(1,2,2016), end: this.dateFormat(4,3,2016), time: this.subDates('2-1-2016', '3-4-2016'), desc: 'Stage presso studio DI.GA. Control Codroipo' }
      ],
      titles: [
        { achieved: '2021', desc: 'Laurea in Informatica classe L-31'},
        { achieved: '2017', desc: 'Diploma di amministrazione Finanza e Marketing' },
        { achieved: '2016', desc: 'Corso sulla la creazione di siti web con Wordpress' }
      ],
      programminLanguages: [
        [
          {to: 'https://www.java.com', alt: 'Java logo', src: require('../assets/java.jpg'), language: 'Java'},
          {to: 'https://docs.microsoft.com/en-us/dotnet/csharp/', alt: 'C# logo', src: require('../assets/C-sharp.png'), language: 'C#'},
          {to: 'https://www.learn-c.org/', alt: 'C logo', src: require('../assets/C.png'), language: 'C'},
          {to: 'https://www.javascript.com/', alt: 'JavaScript logo', src: require('../assets/js.png'), language: 'JavaScript'},
          {to: 'https://vuejs.org/', alt: 'Vue logo', src: require('../assets/vue.png'), language: 'Vue'}
        ],
        [
          {to: 'https://ionicframework.com/', alt: 'Ionic logo', src: require('../assets/ionic.jpg'), language: 'Ionic'},
          {to: 'https://angular.io/', alt: 'Angular logo', src: require('../assets/angular.png'), language: 'Angular'},
          {to: 'https://capacitorjs.com/', alt: 'Capacitor logo', src: require('../assets/capacitor.png'), language: 'Capacitor'},
          {to: 'https://www.python.org/', alt: 'Python logo', src: require('../assets/python.png'), language: 'Python'},
          {to: 'https://www.arduino.cc/', alt: 'Arduino logo', src: require('../assets/arduino.jpg'), language: 'Arduino'}
        ]
      ]
    }
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    dateFormat(day, month, year) {
      return new Date(year,month - 1, day).toLocaleDateString()
    },
    subDates(start, end) {
      return Math.floor((new Date(end).getTime() - new Date(start).getTime()) / (1000 * 3600 * 24 * 30))
    }
  }
}
</script>
