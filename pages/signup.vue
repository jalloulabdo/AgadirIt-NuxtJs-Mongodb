<template>
    <div class="limiter">
        <div class="container-login100" style="background-image: url('img/bg-01.jpg');">
            <div class="wrap-login100 p-l-80 p-r-80 p-t-2 p-b-16">
                <div class="back"><nuxt-link to="/"><i class="bi bi-arrow-left">Back to Home</i></nuxt-link></div>
                <form class="login100-form validate-form flex-sb flex-w"  @submit.prevent="submitForm()">
                    <span class="login100-form-title p-b-20">
                        Sign Up With
                    </span>

                    <a href="#" class="btn-face m-b-20">
                        <i class="fa fa-facebook-official"></i>
                        Facebook
                    </a>

                    <a href="#" class="btn-google m-b-20">
                        <img src="img/icons/icon-google.png" alt="GOOGLE">
                        Google
                    </a>

                    <div class="p-t-10 p-b-9">
                        <span class="txt1">
                            Username
                        </span>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="Username is required">
                        <input class="input100" type="text" name="username" v-model="username">
                        <span class="focus-input100" v-if="errors && errors.username"> {{ errors.username.msg }}</span>
                    </div>

                    <div class="p-t-10 p-b-9">
                            <span class="txt1">
                                Email
                            </span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Email is required">
                            <input class="input100" type="text" name="email" v-model="email">
                            <span class="focus-input100" v-if="errors && errors.email">{{ errors.email.msg }}</span>
                        </div>

                    <div class="p-t-10 p-b-9">
                        <span class="txt1">
                            Password
                        </span>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="password" v-model="password">
                        <span class="focus-input100" v-if="errors && errors.password">{{ errors.password.msg }}</span>
                    </div>

                    <div class="p-t-10 p-b-9">
                            <span class="txt1">
                                Repeat your password
                            </span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Password is required">
                            <input class="input100" type="password" name="confirmPassword" v-model="confirmPassword">
                        <span class="focus-input100" v-if="errors && errors.confirmPassword">{{ errors.confirmPassword.msg }}</span>

                        </div>

                    <div class="container-login100-form-btn m-t-17">
                        <button class="login100-form-btn">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script >

export default {
    middleware: 'auth',
    auth: 'guest',
    data() {
        return {
            errors: null,
            username: null,
            email: null,
            password: null,
            confirmPassword:null,
            status: false,
        }
    },

    methods: {
        submitForm() {
            this.$axios.post('/api/users/register', {
                username: this.username,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            })
                .then((response) => {
                    console.log(response)

                    if (response.data._id) {
                        this.$router.push({ name: '/', params: { registered: 'yes' } })
                        // log in if successfully registered
                        this.$auth.loginWith('local', {
                            data: {
                                email: this.email,
                                password: this.password
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            })
                    }
                })
                .catch((error) => {
                    console.log(error)
                    if (error.response.data.errors) {
                        this.errors = error.response.data.errors
                    }
                });
        }
    }
}
</script>