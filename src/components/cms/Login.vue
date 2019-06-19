<template>
  <div class="login-background">
    <div class="container">
      <div class="row h-75">
        <div class="col-12 my-sm-auto px-0">
          <div class="login-wrap bg-white shadow-lg mx-auto px-5 pb-4">
            <h1 class="font-weight-light text-center pt-3 mb-0">Connexion</h1>
            <hr/>
            <b-form @submit="userAuthentication" class="pt-2">
              <b-form-group id="user-group" label="Nom d'utilisateur" label-for="user">
                <b-form-input id="user" type="text" v-model="form.username" required />
              </b-form-group >
              <b-form-group id="pwd-group" label="Mot de passe" label-for="pwd">
                <b-form-input id="pwd" type="password" v-model="form.password" required />
                <a href="" class="text-primary-color">Mot de passe oublié ?</a>
              </b-form-group >
              <div class="py-2">
                <b-button type="submit" variant="primary">Se connecter</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import router from '../../router'

export default {
  data() {
    return {
      form: {
        username: '', 
        password: ''
      }
    }
  },
  methods: {
    userAuthentication(evt) {
      evt.preventDefault()
      new Vue().$http
        .post('api/users/authenticate', {
          username: this.form.username,
          password: this.form.password
        })
        .then(function (response) {
          router.push('/cms/home')
        })
        .catch(function (error) {

        })
    }
  }
}
</script>