<template>
    <v-row>
        <v-col cols=12>
            <!--  -->
            <v-slide-group
                v-model="imageGroup"
                class="pa-1"
                :mobile-breakpoint='600'
                ref='slideImage'
            >
                <v-slide-item
                    v-for='(urlImg, i) in urlImages'
                    :key="i"
                    
                >
                    <v-card flat class="ma-4" height="auto" width="300">
                        <v-img :src='urlImg' style="width:100%">
                            <v-btn icon color='red' @click='removeSelectImage(i)'>
                                <v-icon large>fa-remove</v-icon>
                            </v-btn>
                        </v-img>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-col>
        <v-col cols=12>
            <input type="file"
                ref="image"
                @change="selectImage"
                style="display:none">

            <v-btn block large 
                color="primary"
                :loading='loading'
                @click='$refs.image.click()'> 
                <v-icon large> 
                    fa-upload
                </v-icon>
            </v-btn>
            <p class="red--text">{{errors[0]}}</p>
        </v-col>
    </v-row>
</template>

<script>
import { 
    VBtn, VRow, VCol, 
    VSlideGroup, VSlideItem, 
    VIcon, VCard, VImg, 
} from 'vuetify/lib';

export default {
    components: {
        VBtn, VRow, VCol, 
        VSlideGroup, VSlideItem, 
        VIcon, VCard, VImg, 
    },
    props: {
        errors: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            imagesSelect: [],
            urlImages: [],
            loading: false,
            imageGroup: 2
        }
    },
    methods: {
        selectImage( event ){
            this.imageGroup++;
            let image = event.target.files[0]
            this.imagesSelect.push(image)

            let url = URL.createObjectURL(image)
            this.urlImages.push(url)
        },
        removeSelectImage(index){
            this.urlImages = this.urlImages.filter( (img, i) => {
                return i != index
            });

            this.imageGroup = this.urlImages.length - 1 
        }
        
    }
}
</script>

<style >
    .v-slide-group__wrapper{
        touch-action: auto;
    }
</style>