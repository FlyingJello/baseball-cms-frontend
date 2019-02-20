<template>
  <div>
    <div class="d-none d-sm-block">
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top px-0 py-0">
        <router-link class="navbar-header" to="home">
          <a class="navbar-brand pl-2 pl-sm-3 mx-0" href="#">Baseball mineur de La Pocatière</a>
        </router-link>
        <ul class="navbar-nav ml-auto nav-right-items">
          <li class="nav-item">
            <button class="btn dropdown-toggle nav-link px-3 py-3" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
              <i class="far fa-bell"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right" style="margin-right: 94px;">
              <button class="dropdown-item py-2 pr-5" type="button">Action</button>
              <button class="dropdown-item py-2 pr-5" type="button">Another action</button>
              <button class="dropdown-item py-2 pr-5" type="button">Something else here</button>
            </div>
          </li>
          <li class="nav-item">
            <button class="btn dropdown-toggle nav-link px-3 py-3" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
              <i class="far fa-user"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right mr-5">
              <button class="dropdown-item py-2 pr-5" type="button"><i class="far fa-user-circle mr-3"></i>Mon profil</button>
              <button class="dropdown-item py-2 pr-5" type="button"><i class="fas fa-cog mr-3"></i>Réglages</button>
              <button class="dropdown-item py-2 pr-5" type="button"><i class="fas fa-power-off mr-3"></i>Déconnexion</button>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3 py-3"><i class="far fa-question-circle"></i></a>
          </li>
        </ul>
      </nav>
    </div>
    <nav id="top-container" class="navbar-dark navbar-expand d-xs-block d-sm-none">
      <div class="row mx-0">
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fas fa-th-large fa-lg"></span>
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
        <a class="col text-center py-3 list-group-item-xs">
          <span class="fas fa-star fa-lg"></span>
        </a>
      </div>
    </nav>

    <div class="row mx-0" id="body-row">
      <nav id="sidebar-container" class="sidebar-expanded d-none d-sm-block col-xl-2">
        <ul class="list-group sticky-top">
          <li class="d-none d-xl-block">
            <div class="text-center py-3 d-none d-xl-block">
              <div class="py-1">
                <img src="..\..\assets\img_avatar.jpg" alt="Avatar" style="width:85px; border-radius: 50%;">
              </div>
              <div class="pt-1">
                <span style="color:white; font-size: 16px;">Jean-Philippe Lévesque</span>
              </div>
              <div>
                <span class="align-top" style="color:#bbbbbb; font-size: 14px;">Administrateur</span>
              </div>
            </div>
          </li>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small>GÉNÉRAL</small>
          </li>

          <router-link to="home">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-start align-items-center">
                <span class="fas fa-th fa-fw mr-3 d-none d-xl-block"></span>
                <span class="fas fa-th-large fa-fw mr-3 d-md-block d-xl-none"></span>
                <span class="d-none d-xl-block">Tableau de bord</span>
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
                <span class="d-none d-xl-block">
                  Gestion des événements
                </span>
              </div>
            </a>
          </router-link>

          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-newspaper fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Gestion des nouvelles</span>
            </div>
          </a>
          <router-link to="managePlayersList">
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-start align-items-center">
                <span class="fas fa-users fa-fw mr-3"></span>
                <span class="d-none d-xl-block">Gestion des joueurs</span>
              </div>
            </a>
          </router-link>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small style="color:white;">OPTIONS</small>
          </li>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-file-import fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Importations et exportations</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-chart-bar fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Statistiques</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-handshake fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Commandites</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-address-card fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Contact</span>
            </div>
          </a>

          <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center">
            <small style="color:white;">COORDONATEUR</small>
          </li>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-tasks fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Gestion des tâches</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-users-cog fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Gestion du personnel</span>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-history fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Historique des transactions</span>
            </div>
          </a>
        </ul>
      </nav>
      <div id="content" class="col-xl-10">
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
