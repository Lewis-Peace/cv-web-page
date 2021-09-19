<template>
    <v-card
        class="project-template"
        tile
        flat
        v-on:click="show = !show"
    >
        <div class="white-space"></div>
        <v-img
            class="image"
            v-bind:alt="alt"
            v-bind:src="src"
        >
            <p class="project-title">{{title}}</p>
        </v-img>
        <v-expand-transition>
            <div v-if="show">
                <v-divider></v-divider>
                <v-card-text>
                    {{text}}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<style scoped>
.image {
    height: 300px;
    width: 100%;
}
.white-space {
    height: 10px;
    width: 100%;
}
.project-title {
    border-radius: 8px;
    background-color: black;
    color: #FFFFFF;
    position: absolute;
    bottom: 0;
    left: 10px;
    font-size: 30px;
}
</style>

<script>
export default {
    props: {
        src: String,
        alt: String,
        title: String,
        text: String
    },
    data () {
        return {
            show: false
        }
    }
}
</script>
