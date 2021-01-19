<template>
    <v-card :flat='flat' class="ma-1" :to="action ? null : '/notfound'">
    
        <v-card-actions class="float-left" v-if='action'>
            <v-btn color='blue' dark icon><v-icon>fa-edit</v-icon></v-btn>
            <v-btn color='red' dark icon><v-icon>fa-trash</v-icon></v-btn>
            <v-btn color='info' dark icon><v-icon>fa-eye</v-icon></v-btn>
        </v-card-actions>
        <v-img contain
        height="300"
        :lazy-src="$env.joinUrl(`storage/${this.firstImage}`)"
        :src="$env.joinUrl(`storage/${this.firstImage}`)"
        ></v-img>

        <v-card-title>
            <slot name='title'>{{ item.title }}</slot>
        </v-card-title>

        <v-card-text>
            <div class="subtitle-1 blue--text ">
                <slot name='price'>
                    <div class='text-left'>
                        <span class="price" :class='{subcount: item.discount}'>
                            {{ $priceformat(item.price) }} 
                        </span> 
                        <span v-if='item.discount' class="price">
                            {{ $priceformat(item.discount) }}  
                        </span> 
                        <!-- • {{ item.owner.phone }}  -->
                    </div>
                </slot>
            </div>

            <div class='text-truncate'>
               {{ item.short_descrip}}
            </div>
        </v-card-text>
        <v-divider class="mt-6 mx-4"></v-divider>

        <v-card-actions>
            <!-- <v-chip outlined>@ {{ item.owner.name }}</v-chip> -->
            <v-chip  @click='alert'
                    class="mr-1"
                    color="#4e5cc1d4"
                    outlined
                    v-for='tag in item.tags' :key='tag.id' 
                >
                <v-icon small left>
                    fa-hashtag
                </v-icon>
                {{tag.name}}
            </v-chip>
        </v-card-actions>
    </v-card>
</template>

<script>
import  { 
    VCard, VCardText, VImg, VChip, VIcon, 
    VCardTitle, VDivider, VCardActions, VBtn
} from 'vuetify/lib';

export default {
    components: {
        VCard, VCardText, VImg, VChip, VIcon, 
        VCardTitle, VDivider, VCardActions, VBtn 
    },
    props:{
        item: Object,
        flat: Boolean,
        action: Boolean
    },
    computed: {
        firstImage(){

            return this.item.images.length ? this.item.images[0].name : null
        }
    },
    methods: {
        alert(){
            window.alert("hello world")
        }
    }
}
</script>

<style lang="css" scoped>
    .price{
        color:#4e5cc1d4;
        font-weight: blod;
        font-size: 1.50rem;
        font-family: Roboto,sans-serif!important;
    }
    .subcount{
        text-decoration: line-through;
        font-weight: 1;
        font-size: .9rem;
    }
</style>