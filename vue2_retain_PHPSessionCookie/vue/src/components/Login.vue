<template>
    <div class="vue-template">
        <div class="container">

            <div v-if="message.length > 0" v-bind:class="[messagehaserror ? 'alert-danger' : 'alert-success']" class="alert" role="alert">
                {{message}}
            </div>


            <h3>Login</h3>

            <div class="col-md-2 offset-md-5">

                <div class="form-group">
                    <label>Username</label>
                    <input type="email" v-on:keyup.13="login()" v-model="username" v-bind:class="[usernameinvalid ? 'is-invalid' : '']" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-on:keyup.13="login()" v-model="password" v-bind:class="[passwordinvalid ? 'is-invalid' : '']" class="form-control form-control-lg" />
                </div>
    <br>
                <button @click="login" class="btn btn-lg btn-outline-primary">Sign In</button>
            </div>
        </div>            
    </div>
</template>

<script>

import general from "../general";
import router from '../router';


    export default {
        data() {
            return {
                username : '',
                password : '',
                message: '',
                messagehaserror : false,
                passwordinvalid: false,
                usernameinvalid: false
            }
        },
    methods : {
        async login() {

                this.usernameinvalid = this.username.length == 0;
                this.passwordinvalid = this.password.length== 0;

                if ( this.username.length == 0 || this.password.length == 0 )
                    return;
                

                let formData = new FormData();
                formData.append('username', this.username);
                formData.append('password', this.password);

                let url = 'api/auth.php';

                const { response, error } = await general.GetLogin(url, formData);
                
                if (response) {
                   
                    if (!response.success) {
                        this.message = response.message;
                        this.messagehaserror=true;
                    }
                    else 
                    {
                        this.message = response.message;
                        this.messagehaserror=false;

                        router.push({ name: 'user' })
                    }
                } else {
                    this.message = "error : " + (error == null ? "unknown" : error );
                    this.messagehaserror=true;
                }
                
                setTimeout(() => this.message = '', 2000);
        }
    }
    }
</script>