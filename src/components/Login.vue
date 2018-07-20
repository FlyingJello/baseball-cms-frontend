<template>
  <div>
    <form action="/">
      <div class="form-group">
        <label for="user">Nom d'utilisateur :</label>
        <input type="user" class="form-control" id="user">
      </div>
      <div class="form-group">
        <label for="pwd">Mot de passe:</label>
        <input type="password" class="form-control" id="pwd">
      </div>
      <router-link to="/cms/home" class="btn btn-primary" tag="button">Connexion
        <i class="fas fa-sign-in-alt"></i>
      </router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:5977',
  timeout: 1000
})

export default {
  name: 'Login',
  data: function () {
    return {}
  },
  methods: {
    getUsers: () => {
      instance
        .get('/user')
        .then(response => {
          console.log(response)
        })
        .catch(console.error)
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>
