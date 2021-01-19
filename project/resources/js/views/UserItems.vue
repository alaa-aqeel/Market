<template>
    <div id='user-item'>
        <v-layout row wrap v-if='!loading' class='my-12'> 
             <v-col cols=12 class='text-center text-sm-right'>
                <h1> العناصر التي قمت بأضافتها  </h1>
                <v-btn v-if='$vuetify.breakpoint.smAndUp'
                    elevation="1"
                    class='float-left' 
                    color='primary' 
                    tile> اضافة عنصر جديد </v-btn>
             </v-col>
            <v-col v-for="(item, i) in items" :key="i" sm=6 md=6 lg=4>
                <item-card :item="item" action></item-card>
            </v-col>
            <v-col v-if='!items.length' cols=12>
                <v-sheet align-center justify-center
                    color="white"
                    height="250"
                    width="100%"
                ><h1> لاتوجد عناصر  </h1></v-sheet>
            </v-col>
        </v-layout>
        <item-loading :show='loading'></item-loading>
    </div>
</template>

<script>
const Card = () => import("@/components/items/card.vue")
const Loading = () => import("@/components/Loading.vue")
import {
    VCol,
    VLayout, 
    VTextField, 
    VSlideGroup,
    VSlideItem,
    VBtn, VIcon, VSheet
} from 'vuetify/lib';
export default {
    components:{
        "item-card": Card, 
        "item-loading": Loading,
        VCol, VLayout, VTextField, 
        VSlideGroup, VSlideItem,
        VBtn, VIcon, VSheet
    },  
    data(){
        return {
            items : [],
            loading: false,
            search: ''
        }
    },  
    methods:{
        getItems(){
            
            this.loading = true;
            this.$http.get(`/user/items`,{params: {q: this.search || ''}})
                .then(resp => {

                    this.items= resp.data.data 
                    this.loading = false
                })

        },
    },
    created(){ this.getItems() }
}
</script>

<style>

</style>