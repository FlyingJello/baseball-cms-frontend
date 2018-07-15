<template>
  <div id="app">
    <nav class="fixed-bottom navbar-expand dark-grey-background d-xs-block d-sm-none">
      <div class="row" style="margin-left: 0px; margin-right: 0px;">
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fas fa-user-cog"></span>
        </a>
        <a class="col text-center py-3 list-group-item-xs active">
          <span class="fab fa-whmcs"></span>
        </a>
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fas fa-users"></span>
        </a>
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fas fa-star"></span>
        </a>
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fas fa-question-circle"></span>
        </a>
      </div>
    </nav>

    <nav class="navbar navbar-expand-md bg-red navbar-dark fixed-top">
      <a class="navbar-brand" href="#">
        <span> Baseball mineur La Pocatière </span>
      </a>
    </nav>

    <div class="row" id="body-row">
      <nav id="sidebar-container" class="sidebar-expanded d-none d-sm-block col-lg-2">
        <ul class="list-group sticky-top sticky-offset">
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-home mr-3"></span>
              <span class="d-none d-lg-block">Accueil</span>
            </div>
          </a>
          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small style="color:white;">PILOTAGE</small>
          </li>
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-calendar-alt mr-3"></span>
              <span class="d-none d-lg-block">Gestion des événements</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-newspaper mr-3"></span>
              <span class="d-none d-lg-block">Gestion des nouvelles</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-users mr-3"></span>
              <span class="d-none d-lg-block">Gestion des joueurs</span>
            </div>
          </a>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small style="color:white;">OPTIONS</small>
          </li>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-file-import mr-3"></span>
              <span class="d-none d-lg-block">Importations et exportations</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-chart-bar mr-3"></span>
              <span class="d-none d-lg-block">Statistiques</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-handshake mr-3"></span>
              <span class="d-none d-lg-block">Commandites</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-address-card mr-3"></span>
              <span class="d-none d-lg-block">Contact</span>
            </div>
          </a>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small style="color:white;">COORDONATEUR</small>
          </li>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-users-cog mr-3"></span>
              <span class="d-none d-lg-block">Gestion du personnel</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-history mr-3"></span>
              <span class="d-none d-lg-block">Historique des transactions</span>
            </div>
          </a>

          <li class="list-group-item sidebar-separator"></li>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-question-circle mr-3"></span>
              <span class="d-none d-lg-block">Aide</span>
            </div>
          </a>
        </ul>
      </nav>

      <div id="contenu" class="col-lg-10 pt-4">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./styles/app.css";
</style>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
