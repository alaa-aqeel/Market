<template>
    <div v-if='show' style="height: 70vh;">
        <v-row 
            class="fill-height"
            align-content="center"
            justify="center"
        >
            <v-col
                class="subtitle-1 text-center"
                cols="12"
            >
                <slot></slot>
            </v-col>
            <v-col cols="6">
                <v-progress-linear
                    :color="color"
                    indeterminate
                    rounded
                    height="6"
                ></v-progress-linear>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { VProgressLinear, VRow, VCol } from 'vuetify/lib';

export default {
    components: {
        VProgressLinear, VRow, VCol 
    },
    props:{
        show: Boolean,
        color:{
            type:String,
            default:"deep-purple accent-4"
        },
        height:{
            type:String,
            default: "6"
        }
    }
}
</script>

<style>

</style>