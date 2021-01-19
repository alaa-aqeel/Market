
<template>
    <div id='home' class="mt-6 ">
        <v-layout row wrap dir='ltr' align-center justify-center class="my-12">
            <v-col md=6 class="text-center pa-md-12" color="#eee">
                <v-text-field  filled shaped clearable
                    v-model='search'
                    @change="getItems"
                    @click:clear='getItems'
                    append-icon="fa-search"
                    label="بحث"
                    type="text"
                    ></v-text-field>
            </v-col>
            <v-col md=10 >
                <v-slide-group multiple 
                        v-model="tagsModel"
                        @change='getItems'
                        :mobile-breakpoint='600'
                    >
                    <v-slide-item
                        v-for="tag in $root.$data.tags"
                        :key="tag.id"
                        v-slot="{ active, toggle }"
                        :value='tag.id'
                    >
                        <v-btn depressed  rounded
                            class="ma-4"
                            :input-value="active"
                            active-class="purple white--text"
                            color='#f5f5f5'
                            @click="toggle"
                        >
                             <v-icon small left>
                                fa-hashtag
                            </v-icon>
                            {{tag.name}}
                        </v-btn>
                    </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-layout>
        <v-layout row wrap v-if='!loading'> 
            <v-col v-for="(item, i) in items" :key="i" sm=6 md="6" lg="4">
                <item-card :item="item"></item-card>
            </v-col>
        </v-layout>
        <v-layout row wrap v-if='!loading && !items.length' class="text-center ">
            <v-col >
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
// import card from "./../components/items/card.vue";
// import loading from "./../components/Loading.vue";

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
export default{
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
            search: '',
            tags : [],
            tagsModel: []
        }
    },
    computed: {
        firstItems(){

           return this.items[0]
       }
    },
    methods:{
        getItems(){
            
            this.loading = true;
            this.$http.get(`/items`,{
                    params: {
                        q: this.search || '',
                        tags: Array.from(this.tagsModel)
                    }
                }
            )
                .then(resp => {
                    this.items= resp.data.data 
                    this.$root.$data.tags = resp.data.tags
                    this.loading = false
                })

        },
    },
    created(){
        this.getItems()
    }
}
</script>


