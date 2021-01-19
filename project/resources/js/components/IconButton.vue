<template>
    <v-tooltip 
        :bottom='bottom' 
        :top='top' 
        :left='left' 
        :right="right">
        <template v-slot:activator="{ on }">
            <v-btn 
                :to='to'
                @click='$emit("click")'
                :x-large="xLarge"
                :loading="loading"
                :class='classes'
                :small='small'
                :elevation='elevation'
                :color='color'
                :icon="icon" 
                :fab="fab" 
                :text='text'
                :rounded='round'
                :focus='false'
                v-on='on'>
                <v-icon 
                    :left="iconLeft"
                    :right="iconRight">
                    fa-{{iconName}}
                </v-icon>
                <slot></slot>
            </v-btn>
        </template>
        <span>{{title}}</span>
    </v-tooltip>
</template>

<script>
import { 
    VBtn, VIcon, VTooltip 
} from 'vuetify/lib';

export default {
    components: {
        VBtn, VIcon, VTooltip   
    },
    name:"icon-button",
    props:{
        to:String,
        classes:String,
        title:{
            type:String,
            default:"Click"
        },
        loading:Boolean,
        bottom:Boolean,
        top:Boolean,
        right:Boolean,
        left:Boolean,
        small:Boolean,
        color: String,
        iconName: String,
        elevation:String,
        icon:Boolean,
        text:Boolean,
        fab: Boolean,
        xLarge:Boolean,
        iconLeft:Boolean,
        iconRight:Boolean,
        round:Boolean
    },
}
</script>