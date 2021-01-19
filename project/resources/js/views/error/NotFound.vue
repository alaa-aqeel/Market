<template>
    <div id='notfound'>
        <v-row align="center" justify='center' class="text-center c-hight">
            <v-col>
                <h1>404</h1>
                <h2 class='mb-4'> لم يتم العثور على الصفحة </h2>
                <v-btn @click='$router.back()' large color='blue' text dark>
                    رجوع <v-icon left class='mr-2'>fa-chevron-left</v-icon> 
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { VBtn, VRow, VCol, VIcon } from 'vuetify/lib';

export default {
    components: {
        VBtn, VRow, VCol, VIcon
    }
}
</script>

<style scoped>
    .c-hight{
        height: 50vh;
    }
    h1{
        font-size: 6rem;
    }
    h2{
        font-size: 2rem;
    }
</style>