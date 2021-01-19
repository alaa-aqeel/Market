<template>
    <div class="mt-2">
        <v-row  class="fill-height mt-12 text-center"
            align="center"
            justify="center">
            <v-col cols=12>
                <h1>انشاء حساب</h1>
            </v-col>
            <v-col md=5 cols=12>
                <form-sign-up></form-sign-up>
            </v-col>
        </v-row>
   </div>
</template>

<script>
import { VRow, VCol } from 'vuetify/lib';
const formSignUP = () => import("@forms/SignUP.vue");

export default {
    components: {
        'form-sign-up':formSignUP,
        VRow, VCol
    }
}
</script>

<style>

</style>