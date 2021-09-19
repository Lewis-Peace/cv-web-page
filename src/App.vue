<template>
  <v-app>
    <v-app-bar app color="#000000" dark>
      <v-tabs slider-size="0">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/projects">Progetti</v-tab>
        <v-tab v-if="false" to="/hobby">Hobby</v-tab>
      </v-tabs>
      <v-btn icon to="/contactme"><v-icon>mdi-email</v-icon></v-btn>
    </v-app-bar>

    <v-main class="main">
      <v-row v-if="!isMobile()">
        <v-col class="lateral"></v-col>
        <v-col class="central">
          <v-card>
            <router-view></router-view>
          </v-card>
        </v-col>
        <v-col class="lateral"></v-col>
      </v-row>
      <router-view v-if="isMobile()"></router-view>
    </v-main>
    <v-footer color="#BBBBBB">
      <span>Falcon Kristyan © 2021</span>
      <v-spacer></v-spacer>
      <v-btn icon href="https://www.facebook.com/kristyan.falcon" target="blank"><v-icon>mdi-facebook</v-icon></v-btn>
      <v-btn icon href="https://www.instagram.com/kristyan456/" target="blank"><v-icon>mdi-instagram</v-icon></v-btn>
      <v-btn icon href="https://www.linkedin.com/in/kristyan-falcon-63b468145/" target="blank"><v-icon>mdi-linkedin</v-icon></v-btn>
    </v-footer>
  </v-app>
</template>

<style scoped>
.lateral {
  max-width: 10%;
}
.central {
  max-width: 80%;
}
.main {
  background-color: #566246;
}
</style>

<script>

export default {
  name: 'App',

  components: {
  },

  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },

  data: () => ({
    //
  }),
};
</script>
