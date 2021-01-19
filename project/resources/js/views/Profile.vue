<template>
    <v-layout row wrap align-center justify-center>
        <v-col cols=12 class="text-center ma-10">
            <h1 v-text='"تعديل الملف الشخصي"'></h1>
        </v-col>
        <v-col md=10 cols=12 class='ma-6'>
            <form-profil-edit></form-profil-edit>
        </v-col>
    </v-layout>
</template>

<script>
import {VLayout, VCol} from 'vuetify/lib';
const ProfileEdit = () => import('@forms/ProfileEdit.vue');

export default {
    components: {
        VLayout, VCol,
        'form-profil-edit':ProfileEdit
    }
}
</script>

<style>

</style>