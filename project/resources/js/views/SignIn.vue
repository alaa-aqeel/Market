<template>
   <div class="mt-2">
        <v-row  class="fill-height mt-12 text-center"
            align="center"
            justify="center">
            <v-col cols=12>
                <h1>تسجيل الدخول</h1>
            </v-col>
            <v-col md=5 cols=12>
                <form-sign-in></form-sign-in>
            </v-col>
        </v-row>
   </div>
</template>

<script>
const formSignIN = () => import("@forms/SignIN.vue");
import {VCol, VRow} from 'vuetify/lib';

export default {
    components: {
        'form-sign-in': formSignIN,
        VCol, VRow
    }
}
</script>

