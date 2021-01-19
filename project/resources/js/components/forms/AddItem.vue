<template>
  <v-form ref='form' :loading=true>

        <!-- Full Name  -->
        <v-text-field outlined clearable required 
             v-if='!$store.state.isLogin'
            v-model='$store.state.user.name'
            :disabled='$store.state.isLogin'
            name="name"
            label="الاسم الكامل "
            id="fullname"
            :error-messages="errors.fullname"
        ></v-text-field>

        <!-- Phone number -->
        <v-text-field  outlined clearable required 
            v-if='!$store.state.isLogin'
            v-model='$store.state.user.phone'
            :disabled='$store.state.isLogin'
            name="phone"
            label="رقم الهاتف"
            id="phone"
            :error-messages="errors.phone"
        ></v-text-field>

        <!-- Title -->
        <v-text-field outlined clearable required
          name="title"
          label="عنوان العنصر"
          id="title"
          :error-messages="errors.title"
        ></v-text-field>

        <!-- Short Description -->
        <v-text-field required filled
          name="short_descrip"
          label="وصف مختصر"
          id="short_descrip"
          :error-messages="errors.short_descrip"
        ></v-text-field>

        <!-- Price, discount -->
        <v-row>
            <v-col cols=12 md=6>
                <v-text-field outlined clearable required 
                    name="price"
                    label="السعر"
                    id="price"
                    type='number'
                    :error-messages="errors.price"
                ></v-text-field>

            </v-col>
            <v-col cols=12 md=6>
                <v-text-field outlined clearable 
                    name="discount"
                    label="خصم"
                    id="discount"
                    type='number'
                    :error-messages="errors.discount"
                ></v-text-field>
            </v-col>
        </v-row>


        <!-- Tags -->
        <v-select outlined clearable required multiple chips
           :items="tags"
           label="اقسام"
           
           name='tags'
           :error-messages="errors.tags"
        ></v-select>

        <!-- images -->
        <m-image-upload ref='images' :errors='errors.images || []'></m-image-upload>

        <!-- Description -->
        <v-textarea 
            clearable filled
            name="description"
            label="وصف العنصر"
            :error-messages="errors.description"
        ></v-textarea>

        <!-- <tiptap-vuetify clearable filled name="description" label="وصف العنصر"></tiptap-vuetify> -->

  </v-form>
</template>

<script>
const ImageUpload = () => import("./../ImageUpload.vue");
import { 
    VTextarea , VForm, VTextField, VAlert ,
    VSelect, VRow, VCol
} from 'vuetify/lib';
export default {
    components: {
        'm-image-upload': ImageUpload,
        VTextarea , VForm, VTextField, VAlert ,
        VSelect, VRow, VCol
    },
    data(){
        return {
            errors: {}
        }
    },
    computed: {
        required(){

            return !!v || 'Field is required';
        },
        tags(){
            if (this.$root.$data.tags){
                return this.$root.$data.tags.map((tag, index) => {
                    return {text: tag.name , value: tag.id}
                })
            }
        }
    },
    methods:{
        reset(){
            this.errors = []
        },
        submit(){
            
            let fd = new FormData(this.$refs.form.$el) 

            Array.from(this.$refs.images.imagesSelect)
                .forEach(img => {
                    fd.append('images[]', img)
                })
            this.$emit("toggle-loading")
            this.$store.dispatch('addItem', fd)
                .then( resp => {
                    this.$emit("toggle-loading")
                    this.$emit("close")
                })
                .catch( err => {
                    this.$emit("toggle-loading")
                    if (err.response.data.errors){

                        this.errors = err.response.data.errors
                    }
                })
        }
    }
}
</script>

<style>

</style>