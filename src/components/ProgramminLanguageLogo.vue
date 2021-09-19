<template>
    <v-card v-bind:href="to" target="blank">
        <v-img
            v-bind:alt="alt"
            class="image"
            v-bind:width="dimensions"
            v-bind:height="dimensions"
            v-bind:src="src"
        />
        <v-card-text class="text">{{language}}</v-card-text>
    </v-card>
</template>

<style scoped>
.text {
    text-align: center;
    font-size: 24px!important;
    font-weight: bold!important;
}
.image {
    margin-left: 50%;
    transform: translateX(-50%);
}
</style>

<script>

export default {
    props: {
        alt: String,
        to: String,
        dimensions: String,
        src: String,
        language: String
    }

}
</script>