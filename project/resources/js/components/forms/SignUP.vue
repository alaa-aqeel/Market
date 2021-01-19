<template>
  <v-form id='form' ref='form' @submit.prevent='submit'>

        <v-alert 
            v-show='!!errors.message'
            type="error">
            {{errors.message}}
        </v-alert>
        <v-text-field outlined clearable
            label="ألاسم"
            hint="ادخل الاسم الكامل"
            name='name'
            required
            autofocus
            :error-messages='errors.username'
        ></v-text-field>

        <v-text-field outlined clearable
            label="رقم الهاتف"
            hint="ادحل رقم الشخصي"
            name='phone'
            required
            autofocus
            :error-messages='errors.username'
            :rules='rulePhone'
        ></v-text-field>

        <v-text-field outlined clearable
            label="البريد الاكتروني"
            hint="البريد الاكتروني الشخصي"
            name='email'
            required
            autofocus
            :error-messages='errors.username'
            :rules='ruleEmail'
        ></v-text-field>

        <v-text-field outlined clearable
            type='password'
            name="password"
            v-model='password'
            label="الرمز السري"
            hint="يجب ان يتكون الرمز من احرف وارقام ورموز "
            :min="8"
            :error-messages='errors.password'
            :rules='rulePassword'
        ></v-text-field>

        <v-text-field v-model='confirm'
            type='password'
            :min='8'
            label="تاكيد كلمة السر"
            placeholder="اعد كتابة كلمة السر" 
            clearable outlined
            :rules='confirmPasswrod'
        ></v-text-field>

        <v-btn  :loading=loading
            block large
            type="submit"
            elevation=2
            color="primary" >
            انشاء
        </v-btn>
        <v-btn to='/signin'
            text 
            color='blue' 
            class="ma-4">
            املك حساب
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
            
            password: '',
            loading: false,
            errors: {}
        }
    },
    computed: {
      rulePassword() {
        const rules = []

        if (this.password.length) {

            rules.push( v => v.length >= 8 || 'password lenght min 8 char')
            
            rules.push( // not number only 
                v => !v.match('^[0-9]+$') || 'can\'t use number only'
            )

            rules.push(
                v => !!v.match('^[A-Z]') || 'First must by captal'
            )

            rules.push( 
                v => !!v.match('^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\-\.\_\=\+\{\}\|\\\/]+$') || 'password must first char captal and chart and number'
            )
        }
            
        return rules 
      },
      confirmPasswrod(v) {
        
        if (this.password.length){

            return [ v => v === this.password || `Not confirm password`]
        }
      },
      ruleEmail() {
        
            return [
                v =>  !!v ?  !!v?.match('^[A-Za-z0-9\.\_]+@+[a-z]+\.[a-z]{2,3}$') || 'Email invalid' : true 
            ] 
      },
      rulePhone() { 
            return [

                v =>  !!v?.match('^07[7|8|9]') || 'Number phone must strat with 078, 077, 079 ...' 
            ]
      },
    },
    methods: {
        submit(){

            if (this.$refs.form.validate()) {
                this.loading = true
                this.$store.dispatch('register')
                    .then( resp=>{
                        
                        this.loading = false
                    }).catch( err=>{

                        this.errors = err.response.data.errors
                        this.loading = false
                    })
            }
        }
    }
}
</script>