<template>
    <div class="projects">
        <project-template
            alt="Website explanation image"
            v-bind:src="require('../assets/htmlCoding.jpg')"
            title="Questo sito"
            text="Questo sito ha lo scopo di presentare me stesso in una maniera, secondo me, migliore rispetto al classico CV. Il sito è interamente sviluppato con Vue, ho scelto di utilizzare questo framework per la presenza di plugin come Vuetify, Vuex, Vue-router, ... che rendono l'esperienza di sviluppo e visiva migliore."
        ></project-template>
        <project-template
            alt="Thesis image"
            v-bind:src="require('../assets/Thesis.png')"
            title="Uno strumento per la visualizzazione ed editing nella Teoria dei Grafi"
            text="Come tesi per la triennale ho sviluppato uno strumento interattivo di ausilio alla didattica per visualizzare, editare e risolvere problemi su grafi. Il programma è scritto interamente in Java ed utilizza la libreria Swing per tutta la parte di interfaccia."
        ></project-template>
    </div>
</template>

<style scoped>
.project-template {
    margin: 10px;
}
</style>

<script>
import ProjectTemplate from '../components/ProjectTemplate.vue'

export default {
  components: { ProjectTemplate },
    name: 'Projects',
    data () {
        return {
            show: false
        }
    }
}
</script>
