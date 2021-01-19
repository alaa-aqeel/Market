<template>
  <div id='app'>
    <v-app>
        <m-header></m-header> 
        <v-main >
            <v-container>
              <router-view></router-view>               
            </v-container>
            <v-btn class="ma-4"
                fixed bottom fab dark
                v-scroll="onScroll"
                v-show="fab"
                elevation='2'
                color="#4e5cc1d4"
                @click="toTop"
              >
                    <v-icon>fa-arrow-up</v-icon>
            </v-btn>
        </v-main>
        <m-footer ></m-footer>
    </v-app>
  </div>
</template>

<script >
const header = () => import('@/components/layout/Header.vue');
const Footer = () => import('@/components/layout/Footer.vue');

// const { VBtn, VContainer, VMain, VApp, VIcon } = () => import('vuetify/lib') 
import { VBtn, VContainer, VMain, VApp, VIcon,  } from 'vuetify/lib';
import { Scroll } from 'vuetify/lib/directives';

export default {
  components:{
    VBtn, VContainer, VMain, VApp, VIcon,
    "m-header":header, 
    "m-footer":Footer,
  },
  directives:{
      Scroll
  },
  name: 'App',
  data(){
      return {
          fab: false,
          icons: [
              'mdi-home',
              'mdi-email',
              'mdi-calendar',
              'mdi-delete',
          ]
      }
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
};
</script>