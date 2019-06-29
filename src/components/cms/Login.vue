<template>
  <div class="login-background">
    <div class="container">
      <div class="row h-75">
        <div class="col-12 my-sm-auto px-0">
          <div class="login-wrap bg-white mx-auto px-5 py-4">
            <h1 class="font-weight-light text-center pt-2 mb-0">Connexion</h1>
            <hr/>
            <b-alert :variant="formAuth.alertVariant" dismissible fade :show="formAuth.showDismissibleAlert" @dismissed="formAuth.showDismissibleAlert=false">
              {{formAuth.alertMessage}}
            </b-alert>
            <b-form @submit="userAuthentication">
              <b-form-group id="user-group" label="Nom d'utilisateur" label-for="user" :state="formAuth.usernameState" :invalid-feedback="formAuth.usernameErrorMessage">
                <b-form-input id="user" type="text" v-model="formAuth.username" :state="formAuth.usernameState" @input="resetValidationUsername()"/>
              </b-form-group>
              <b-form-group id="pwd-group" class="mb-0" label="Mot de passe" label-for="pwd" :state="formAuth.passwordState" :invalid-feedback="formAuth.passwordErrorMessage">
                <b-form-input id="pwd" type="password" v-model="formAuth.password" :state="formAuth.passwordState" @input="resetValidationPassword()"/>
              </b-form-group>
              <b-link v-b-modal.modal-forgot-password class="text-primary-color">Mot de passe oublié ?</b-link>
              <div class="text-right mt-3">
                <b-button type="submit" squared variant="primary">Se connecter</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-forgot-password" title="Mot de passe oublié ?" @ok="userForgotPassword" ok-title="Envoyer" cancel-title="Annuler" @show="resetModalForgotPassword">
      <b-alert class="my-0" :variant="formForgotPass.alertVariant" fade :show="formForgotPass.showDismissibleAlert" @dismissed="formForgotPass.showDismissibleAlert=false">
        {{formForgotPass.alertMessage}}
      </b-alert>
      <b-form @submit.stop.prevent="handleSubmitForgotPassword">
        <b-form-group :state="formForgotPass.emailState" label="Veuillez saisir votre adresse courriel :" label-for="email" :invalid-feedback="formForgotPass.emailErrorMessage">
          <b-form-input id="email" v-model="formForgotPass.email" :state="formForgotPass.emailState"/>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import router from '../../router'

export default {
  data () {
    return {
      formAuth: {
        showDismissibleAlert: false,
        alertVariant: '',
        alertMessage: '',
        username: '',
        usernameState: null,
        usernameErrorMessage: '',
        password: '',
        passwordState: null,
        passwordErrorMessage: ''
      },
      formForgotPass: {
        showDismissibleAlert: false,
        alertVariant: '',
        alertMessage: '',
        email: '',
        emailState: null,
        emailErrorMessage: ''
      }
    }
  },
  methods: {
    checkUserAuthenticationFormValidity () {
      const validUsername = this.formAuth.username !== ''
      const validPassword = this.formAuth.password !== ''

      if (!validUsername) {
        this.formAuth.usernameState = !validUsername ? 'invalid' : null
        this.formAuth.usernameErrorMessage = 'Le nom d\'utilisateur est requis.'
      }

      if (!validPassword) {
        this.formAuth.passwordState = !validPassword ? 'invalid' : null
        this.formAuth.passwordErrorMessage = 'Le mot de passe est requis.'
      }

      return validUsername && validPassword
    },
    userAuthentication (evt) {
      evt.preventDefault()
      this.handleSubmitUserAuthentication()
    },
    handleSubmitUserAuthentication () {
      if (this.checkUserAuthenticationFormValidity()) {
        this.$http
          .post('api/users/authenticate', {
            username: this.formAuth.username,
            password: this.formAuth.password
          })
          .then(function (response) {
            router.push('/cms/home')
          })
          .catch((error) => {
            this.showAlertMessage(this.formAuth, 'danger', error.response.data)
            this.formAuth.password = ''
          })
      }
    },
    resetValidationUsername () {
      this.formAuth.usernameState = null
    },
    resetValidationPassword () {
      this.formAuth.passwordState = null
    },
    checkForgotPasswordFormValidity () {
      const valid = this.formForgotPass.email !== '' && this.validEmail(this.formForgotPass.email)
      this.formForgotPass.emailState = !valid ? 'invalid' : null
      this.formForgotPass.emailErrorMessage = 'L\'adresse courriel est invalide.'
      return valid
    },
    userForgotPassword (bvModalForgotPass) {
      bvModalForgotPass.preventDefault()
      this.handleSubmitForgotPassword()
    },
    handleSubmitForgotPassword () {
      if (this.checkForgotPasswordFormValidity()) {
        /*  this.$http
        .post('api/users/ForgotPassord', {
          email: this.formForgotPass.email
        })
        .then(function (response) {
          this.$parent.showModalMessage("Un courriel vous a été envoyé à l'adresse courriel suivante : " + this.formForgotPass.email, 'primary')
          this.showAlertMessage(this.formForgotPass, 'primary', 'Un courriel vous a été envoyé à l\'adresse courriel :' + this.formForgotPass.email + '.')
        })
        .catch((error) => {
          this.$parent.showModalMessage(error.response.data, 'danger')
          this.showAlertMessage(this.formForgotPass, 'primary', error.response.data)
        })  */
      }
    },
    resetModalForgotPassword () {
      this.formForgotPass.email = ''
      this.formForgotPass.emailState = null
      this.formForgotPass.showDismissibleAlert = false
      this.formAuth.showDismissibleAlert = false
    },
    validEmail: function (email) {
      const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return emailReg.test(email)
    },
    showAlertMessage (alertForm, alertVariant, alertMessage) {
      alertForm.alertVariant = alertVariant
      alertForm.alertMessage = alertMessage
      alertForm.showDismissibleAlert = true
    }
  }
}
</script>
