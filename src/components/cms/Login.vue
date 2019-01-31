<template>
    <div>
        <section id="login">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="form-wrap container pb-4 px-5">
                            <div class="text-center py-4">
                                <span style="color:#aaa;" class="fas fa-user-circle fa-7x"></span>
                            </div>
                            <div id="error" class="d-none alert alert-danger" role="alert">
                            </div>
                            <div class="form-group">
                                <label for="user" class="sr-only">Nom d'utilisateur</label>
                                <input id="user" type="user" v-model="username" placeholder="Nom d'utilisateur" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="pwd" class="sr-only">Mot de passe</label>
                                <input id="pwd" type="password" v-model="password" placeholder="Mot de passe" class="form-control">
                            </div>
                            <input type="submit" v-on:click="userAuthentication" class="btn btn-primary btn-lg btn-block mt-4" value="Se connecter">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="container hyperlink py-3 text-center">
                            <a href="" class="text-primary-color">Mot de passe oublié ?</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Vue from 'vue'
import router from '../../router'

export default {
  name: 'Login',
  data: function () {
    return {username: '', password: ''}
  },
  methods: {
    userAuthentication: function () {
      new Vue().$http
        .post('api/users/authenticate', {
          username: this.username,
          password: this.password
        })
        .then(function (response) {
          router.push('/cms/home')
        })
        .catch(function (error) {
          document.getElementById('error').innerText = error
          document.getElementById('error').classList.remove('d-none')
        })
    }
  }
}
</script>

<style>
    @import '../../styles/app.css'
</style>
