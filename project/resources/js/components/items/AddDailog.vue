<template>
    <v-dialog
       persistent
       v-model="show"
       :fullscreen="$vuetify.breakpoint.smAndDown && !loading"
       max-width="600"
       transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ on }">
            <slot v-on="on"></slot>
        </template>

        <v-card v-show='!loading'>
            <v-toolbar  dark color="primary">
                <v-btn icon dark
                    @click="closeDiaglog"
                >
                    <v-icon>fa-close</v-icon>
                </v-btn>
                <v-toolbar-title>  اضافة عنصر جديد</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items left>
                    <v-btn  dark  text @click='submit'>
                        حفظ
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-container grid-list-xs>
                <v-row 
                    class="fill-height"
                    align-content="center"
                    justify="center">
                    <v-col cols=12 >
                        <m-add-item-form 
                                ref='addForm' 
                                @close='show = false'
                                @toggle-loading='loading = !loading'
                            ></m-add-item-form>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    
        <v-progress-linear v-show='loading'
            indeterminate
            color="white"
            class="mb-0"
        ></v-progress-linear>

    </v-dialog>
</template>

<script>
const AddItemForm = () => import("@forms/addItem.vue");

import { 
    VProgressLinear, VCard, VToolbar, VSpacer, 
    VIcon, VBtn, VToolbarItems, VToolbarTitle ,
    VContainer, VRow, VCol , VDialog
} from 'vuetify/lib';

export default {
    components: {
        "m-add-item-form": AddItemForm,
        VProgressLinear, VCard, VToolbar, VSpacer, 
        VIcon, VBtn, VToolbarItems, VToolbarTitle ,
        VContainer, VRow, VCol , VDialog
    },
    data(){
        return {
            show : false,
            loading : false
        }
    },
    methods:{
        toggle(){
            this.show = !this.show
        },
        closeDiaglog(){
            this.show = false

            this.$refs.addForm.$refs.form.reset()
            this.$refs.addForm.reset()
        },
        submit(){
            this.$refs.addForm.submit()
        }
    }
}
</script>

<style>

</style>