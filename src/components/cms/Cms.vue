<template>
  <div>
    <nav class="navbar navbar-expand-md bg-red navbar-dark fixed-top d-xs-block">
      <a class="navbar-brand" href="#">
        <span>Baseball mineur de La Pocatière</span>
      </a>
      <ul class="nav navbar-nav ml-auto">
        <li class="px-2 py-1"><i style="color:white;" class="fas fa-sign-out-alt fa-lg"></i></li>
      </ul>
    </nav>
    <nav class="fixed-bottom navbar-expand dark-grey-background d-xs-block d-sm-none">
      <div class="row" style="margin-left: 0px; margin-right: 0px;">
        <a class="col text-center py-3 list-group-item-xs active">
          <span class="fas fa-tachometer-alt fa-lg"></span>
        </a>
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fab fa-whmcs fa-lg"></span>
        </a>
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fas fa-users fa-lg"></span>
        </a>
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fas fa-star fa-lg"></span>
        </a>
      </div>
    </nav>

    <div class="row" id="body-row">
      <nav id="sidebar-container" class="sidebar-expanded d-none d-sm-block col-lg-2">
        <ul class="list-group sticky-top">
          <li class="d-none d-lg-block">
            <div class="text-center py-3 d-none d-lg-block">
              <div class="py-1">
                <img src="..\..\assets\img_avatar.png" alt="Avatar" style="width:75px; border-radius: 50%;">
              </div>
              <div class="pt-1">
                <span style="color:white;">Jean-Philippe Lévesque</span>
              </div>
              <div>
                <span style="color:#aaa;">Administrateur</span>
              </div>
            </div>
          </li>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small>GÉNÉRAL</small>
          </li>

          <router-link to="home">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-start align-items-center">
                <span class="fas fa-tachometer-alt fa-fw mr-3"></span>
                <span class="d-none d-lg-block">Tableau de bord</span>
              </div>
            </a>
          </router-link>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small style="color:white;">PILOTAGE</small>
          </li>

          <router-link to="events">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-start align-items-center">
                <span class="far fa-calendar-alt fa-fw mr-3"></span>
                <span class="d-none d-lg-block">
                  Gestion des événements
                </span>
              </div>
            </a>
          </router-link>

          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-newspaper fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Gestion des nouvelles</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-users fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Gestion des joueurs</span>
            </div>
          </a>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small style="color:white;">OPTIONS</small>
          </li>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-file-import fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Importations et exportations</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-chart-bar fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Statistiques</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-handshake fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Commandites</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-address-card fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Contact</span>
            </div>
          </a>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small style="color:white;">COORDONATEUR</small>
          </li>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-tasks fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Gestion des tâches</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-users-cog fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Gestion du personnel</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-history fa-fw mr-3"></span>
              <span class="d-none d-lg-block">Historique des transactions</span>
            </div>
          </a>
        </ul>
      </nav>
      <div id="content" class="col-lg-10 pt-3">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cms'
}
</script>

<style>
@import "../../styles/app.css";
</style>
