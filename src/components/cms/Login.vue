<template>
  <div class="login-background">
    <div class="container">
      <div class="row h-75">
        <div class="col-12 my-sm-auto px-0">
          <div class="login-wrap bg-white mx-auto px-5 py-4">
            <h1 class="font-weight-light text-center pt-2 mb-0">Connexion</h1>
            <hr/>
            <b-form @submit="userAuthentication" class="pt-2">
              <b-form-group id="user-group" label="Nom d'utilisateur" label-for="user">
                <b-form-input id="user" type="text" v-model="formAuth.username" required />
              </b-form-group >
              <b-form-group id="pwd-group" label="Mot de passe" label-for="pwd">
                <b-form-input id="pwd" type="password" v-model="formAuth.password" required />
                <b-link v-b-modal.modal-forgot-password class="text-primary-color">Mot de passe oublié ?</b-link>
              </b-form-group >
              <div class="text-right">
                <b-button type="submit" squared variant="primary">Se connecter</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-forgot-password" title="Mot de passe oublié ?" @ok="userForgotPassword" ok-title="Envoyer" cancel-title="Annuler" @show="resetModalForgotPassword">
      <b-form @submit.stop.prevent="handleSubmitForgotPassword">
        <b-form-group :state="formForgotPass.emailState" label="Veuillez saisir votre adresse courriel :" label-for="email" invalid-feedback="L'adresse courriel est invalide.">
          <b-form-input id="email" v-model="formForgotPass.email" :state="formForgotPass.emailState"></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import router from '../../router'

export default {
  data () {
    return {
      formAuth: {
        username: '',
        password: '',
      },
      formForgotPass: {
        email: '',
        emailState: null
      }
    }
  },
  methods: {
    userAuthentication (evt) {
      evt.preventDefault()
      this.$http
        .post('api/users/authenticate', {
          username: this.formAuth.username,
          password: this.formAuth.password
        })
        .then(function (response) {
          router.push('/cms/home')
        })
        .catch((error) => {
          this.$parent.showModalMessage(error.response.data, 'danger')
          this.formAuth.password = ''
        })
    },
    checkForgotPasswordFormValidity () {
      const valid = this.formForgotPass.email !== '' && this.validEmail(this.formForgotPass.email)
      this.formForgotPass.emailState = !valid ? 'invalid' : null
      return valid
    },
    userForgotPassword (bvModalForgotPass) {
      bvModalForgotPass.preventDefault()
      console.log(bvModalForgotPass)
      this.handleSubmitForgotPassword(bvModalForgotPass)
    },
    handleSubmitForgotPassword (bvModalForgotPass) {
      if (!this.checkForgotPasswordFormValidity()) {
        return
      }

      /* this.$http
        .post('api/users/ForgotPassord', {
          email: this.formForgotPass.email
        })
        .then(function (response) {
          this.$parent.showModalMessage("Un courriel vous a été envoyé à l'adresse courriel suivante : " + this.formForgotPass.email, 'primary')
        })
        .catch((error) => {
          this.$parent.showModalMessage(error.response.data, 'danger')
        })*/
    },
    resetModalForgotPassword () {
      this.formForgotPass.email = ''
      this.formForgotPass.emailState = null
    },
    validEmail: function (email) {
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return emailReg.test(email)
    },
  }
}
</script>
