<template>
  <div class="container pt-5">
        <div class="row">
            <div class="col-sm-6 col-md-4 offset-sm-3 offset-md-4">
                <div class="login-box">
                    <div id="error" class="login-logo">
                    
                    </div>
                    <hr>
                    <div class="login-form">
                        <form action="/">
                            <div class="form-group">
                                <input type="user" v-model="username" placeholder="Nom d'utilisateur" class="form-control" id="user">
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="password" placeholder="Mot de passe" class="form-control" id="pwd">
                            </div>
                            <input id="clickMe" type="button" value="clickmyD" v-on:click="userAuthentication" />
                        </form>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import router from "../../router";

export default {
  name: "Login",
  data: function() {
    return {username: '', password: ''};
  },
  methods: {
    userAuthentication: function() {
      new Vue().$http
        .post("/user/authenticate", {
          username: this.username,
          password: this.password
        })
        .then(function(response) {
          router.push("/cms/home");
        })
        .catch(function(error) {
          document.getElementById('error').innerHTML = error;
        });
    }
  }
};
</script>
