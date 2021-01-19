<template>
    <v-footer padless >
      <v-card flat tile
        width="100%"
        class="lighten-1 text-center"
        style="background-color:#fbfbfb"
      >
        <v-card-text>
          <v-btn icon
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-text class="black--text">
          2020 — <strong>AlaaAqeel</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
import { 
    VFooter, VCard, VCardText, 
    VDivider, VBtn, VIcon, 
} from 'vuetify/lib'; 

export default {
    components: {
      VFooter, VCard, VCardText, 
      VDivider, VBtn, VIcon, 
    },
    name:"app-footer",
    data: () => ({
        icons: [
            'fa-home',
            'fa-github',
            'fa-telegram',
            'fa-facebook',
        ]
    })
}
</script>