<template>
  <v-menu
      v-model="menu"
      
      offset-y
      class='pa-4'
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon
                :loading='$store.state.loading'
                v-bind="attrs"
                :color="$store.state.isLogin ? 'blue': 'gray'"
                v-on="on"
            >
                <v-icon>fa-user</v-icon>
            </v-btn>
        </template>

        <v-card v-if='$store.state.isLogin'>
            <v-list style="font-size:0.5rem">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{$store.state.user.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{$store.state.user.email}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to='/profile'>
                    <v-list-item-content>
                        <v-list-item-title >ملف الشخصي</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to='items'>
                    <v-list-item-content>
                        <v-list-item-title >المنتجات</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click='logout' >
                    <v-list-item-content>
                        <v-list-item-title >تسجيل الخروج</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>

        <v-card v-else>
            <v-list >
                <v-list-item link to='signin'>
                    <v-list-item-title >تسجيل الدخول</v-list-item-title>
                </v-list-item>
                <v-list-item link to='signup'>
                    <v-list-item-title >انشاء حساب</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
  </v-menu>
</template>

<script>
import { 
    VMenu, VCard, VList, 
    VListItem, VListItemTitle, 
    VListItemContent, VListItemSubtitle ,
    VBtn, VIcon, 
} from 'vuetify/lib'; 

export default {
    components: {
        VMenu, VCard, VList, 
        VListItem, VListItemTitle, 
        VListItemContent, VListItemSubtitle ,
        VBtn, VIcon,   
    },
    data() {
        return {

            menu : false
        }
    },
    methods: {
        logout(){
            
            this.$store.dispatch('logout')
                .then( resp => this.$router.push({name: 'home'}))
        }
    }
}
</script>

<style>

</style>