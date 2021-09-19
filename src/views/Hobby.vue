<template>
  <div class="about">
    <v-card tile>
      <v-card-title>Piccoli progetti in Arduino</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <img class="front-image" src="../assets/arduino projects.jpg"/>
          </v-col>
          <v-col>
            <div class="hobby-description">
              Partendo da un corso a scelta svolto presso l'università di Udine sono entrato nel mondo Arduino e Raspberry. Ho iniziato da un comune starting kit arduino, con il quale ho svolto i primi tutorial proposti. Per poi iniziare ad entrare nel mondo raspberry per ogni piccolo progetto che richieda lo stesso come base.
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card tile>
      <v-card-title>Sport</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <img class="front-image" src="../assets/Sports.png"/>
          </v-col>
          <v-col>
            <div class="hobby-description">
              Iniziando "per provare" a praticare il gioco del basket ho scoperto un mondo composto da agonismo, sacrifici, passione e soddisfazioni. Trovando molto conforto nel praticare sport definirei questo come il mio hobby preferito, quasi insostituibile. Ora pratico atletica leggera 5 volte a settimana con l'obiettivo di partecipare a gare di varie discipline. A partire dalla mia disciplina preferita, il salto in alto, fino al tentativo di partecipare al decathlon. Tornando invece al basket, rimane la voglia di giocare, e non dirò mai di no ad una sfida al campetto.
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card tile>
      <v-card-title>Giochi da tavolo</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <img class="front-image" src="../assets/boardgames.jpg"/>
          </v-col>
          <v-col>
            <div class="hobby-description">
              Iniziato per caso sono entrato nel mondo dei giochi da tavolo. Il lato di sfida, divertimento e socializzazione è ciò che più mi affascina. 
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.front-image {
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  width: 100%;
}
.hobby-description {
  text-align: justify;
}
</style>

<script>
export default {
  methods: {
    log(str) {
      console.log(str)
    }
  }
}
</script>