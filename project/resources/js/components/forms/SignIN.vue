<template>
  <v-form id='form' ref='form' @submit.prevent='submit'>

        <v-alert 
            v-show='!!errors.message'
            type="error">
            {{errors.message}}
        </v-alert>
        <v-text-field outlined clearable
            label="البريد الاكتروني او رقم الهاتف"
            hint="يمكنك تسجيل الدخول بستخدام رقم الهاتف او البريد الاكتروني"
            name='username'
            required
            autofocus
            :error-messages='errors.username'
        ></v-text-field>

        <v-text-field outlined clearable
            type='password'
            name="password"
            label="الرمز السري"
            hint="يجب ان يكون اكثر من 8 احرف"
            min="8"
            :error-messages='errors.password'
        ></v-text-field>

        <v-btn  :loading=loading
            block large
            type="submit"
            elevation=2
            color="primary" >
            تسجيل الدخول
        </v-btn>
        <v-btn 
            text 
            color='blue' 
            class="ma-4">
            نسيت كلمت السر
        </v-btn>
  </v-form>
</template>

<script>
import { 
    VBtn, VForm, VTextField, VAlert 
} from 'vuetify/lib';
export default {
    components: {
        VBtn, VForm, VTextField, VAlert 
    },
    data() {
        return {
            value: false,
            errors: {},
            loading: false
        }
    },
    methods: {
        submit(){
            this.errors = {}
            this.loading = true
            
            this.$store.dispatch('login', new FormData(this.$refs.form.$el))
                .then( resp=>{
                    this.errors = {}
                    this.loading = false
                    this.$store.dispatch('user')
                        .then( user=>{
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            } else {
                                this.$router.push({name: "home"})
                            }
                        })
                }).catch( err=> {
                    this.loading = false
                    if (err.response.data.errors) {
                        this.errors = err.response.data.errors
                    } else {
                        this.errors = {message: err.response.data.message}
                    }
                })
        }
    },
}
</script>