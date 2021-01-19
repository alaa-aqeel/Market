<template>
    <v-app-bar  app large hide-on-scroll
            :elevate-on-scroll='$vuetify.breakpoint.smAndUp'
            color='white'
            height="65px"
        >
        <v-progress-linear
            :active='$store.state.routerLoading'
            :indeterminate='$store.state.routerLoading'
            absolute
            bottom
            color="deep-purple accent-4"
        ></v-progress-linear>
        <v-container >

            <v-layout row wrap>
                
                <v-toolbar-title>
                    <icon-button bottom  round 
                        to='/'
                        @click='$vuetify.goTo(0)'
                        color='#eee'
                        classes="ml-2 text--center "
                        elevation="0"
                        title='Home'
                        icon-name='home'>
                        <span >سوق الجمعة</span>
                    </icon-button>
                </v-toolbar-title>
                
                <v-spacer></v-spacer>
                
                <icon-button 
                    @click='showDialog()'
                    bottom  round
                    :icon='!$vuetify.breakpoint.smAndUp'
                    :color='$vuetify.breakpoint.smAndUp ? "#eee" : ""'
                    classes="ml-2 text--center"
                    elevation="0"
                    title='اضافة عنصر جديد'
                    icon-name='plus'>
                    <span v-show='$vuetify.breakpoint.smAndUp'>اضافة</span>
                </icon-button>
                

                <card-menu></card-menu>
                
                <add-dialog ref='dialog'></add-dialog>
            </v-layout>      
        </v-container>
    </v-app-bar>
</template>

<script>
const  IconButton = ()=> import("./../IconButton.vue");
const AddDialog = ()=> import("./../items/addDailog.vue");
const CardMenu = ()=> import("./../user/CardMenu.vue");

import { 
    VSpacer, VLayout, VContainer, 
    VToolbarTitle, VAppBar, VProgressLinear
} from 'vuetify/lib';


export default {
    name: "Header",
    components:{
        IconButton, 
        AddDialog, 
        CardMenu,
        VSpacer, VLayout, VContainer, 
        VToolbarTitle, VAppBar, VProgressLinear
    },
    methods:{
        showDialog(){

           this.$refs.dialog.toggle()
        }
    }
}
</script>

<style scoped>
    .layout{
        align-items: center;
    }
</style>