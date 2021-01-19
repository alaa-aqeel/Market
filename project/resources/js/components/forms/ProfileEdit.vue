<template>
    <v-form v-model="valid" ref='form' @submit.prevent='submit'>
        <v-row>
        <!-- active -->
            <!-- Row -->
            <v-col cols=12 md=6>
                <v-text-field
                    :value='$store.state.user.name'
                    name="name"
                    label="الاسم الكامل"
                    placeholder="ادخل اسمك"
                    outlined clearable
                    required
                    :rules="[ v => !!v || 'Field is required' ]"
                ></v-text-field>
            </v-col>
            <v-col cols=12 md=6>
                <v-text-field
                    :value='$store.state.user.phone'
                    name="phone"
                    :counter="11"
                    label="رقم الهاتف"
                    placeholder="ادخل رقم الهاتف"
                    suffix="+964"
                    outlined  clearable
                    required
                    :rules='rulePhone'
                ></v-text-field>
            </v-col>

            <!-- Row -->
            <v-col cols=12 md=6>
                <v-text-field
                    :value='$store.state.user.email'
                    name="email"
                    label="البريد الاكتروني"
                    placeholder="البريد الاكتروني" 
                    clearable outlined
                    type="email"
                    :rules='ruleEmail'
                ></v-text-field>
            </v-col>
            <v-col cols=12 md=6> 
                <v-text-field
                    :value='$store.state.user.fb_page'
                    placeholder="صفحة الفيس بوك " 
                    clearable outlined
                    name="fb_page"
                    suffix="facebook.com/"
                    label="صفحة الفيس بوك "
                ></v-text-field>
            </v-col>
            <v-col cols=12> 
                <v-text-field
                    :value='$store.state.user.address'
                    placeholder="العنوان" 
                    clearable outlined
                    name="address"
                    label="العنوان"
                ></v-text-field>
            </v-col>
            <!-- Change Password -->
            <!-- Row -->
            <v-col cols=12>
                <p class="text-h5 m-5">
                    تغير كلمة السر
                </p>
            </v-col>
            <v-col cols=12 md=6>
                <v-text-field
                    v-model='password'
                    name="password"
                    :rules='rulePassword'
                    :min='8'
                    label="كلمة السر"
                    placeholder="تغير كلمة السر الحالية " 
                    clearable outlined
                ></v-text-field>
            </v-col>
            <v-col cols=12 md=6>
                <v-text-field v-model='confirm'
                    name="confirm"
                    :min='8'
                    label="تاكيد كلمة السر"
                    placeholder="اعد كتابة كلمة السر" 
                    clearable outlined
                    :rules='confirmPasswrod'
                ></v-text-field>
            </v-col>

            <v-col>
                <v-btn large
                    :loading='loading'
                    :block='$vuetify.breakpoint.xsOnly'
                    type='submit'
                    class="float-left" 
                    color='primary'  >
                    حفظ
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import { 
    VBtn, VForm, VTextField, VAlert, 
    VRow, VCol, VLayout
} from 'vuetify/lib';
export default {
    components: {
        VBtn, VForm, VTextField, VAlert,
        VRow, VCol, VLayout
    },
    data() {
        return {
            password: '',
            confirm: '',
            valid: false,
            loading: false
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
        submit() {
            if (this.$refs.form.validate()) {
                
                // console.log( JSON.stringify()

                let fd = new FormData(this.$refs.form.$el)
                this.loading = true
                this.$store.dispatch('updateProfileUser', Object.fromEntries(fd))
                    .then( resp => {

                        this.loading = false
                        this.confirm = ''
                        this.password = '' 
                    }).catch( err => {this.loading = false})
            } 
        }
    }
}
</script>

<style>

</style>