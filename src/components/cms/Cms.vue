<template>
  <div>
    <div class="d-none d-sm-block">
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top px-0 py-0">
        <router-link class="navbar-header navbar-brand pl-2 pl-sm-3 mx-0" to="home">
          Baseball mineur de La Pocatière
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
            <button class="btn nav-link px-3 py-3"><i class="far fa-question-circle"></i></button>
          </li>
        </ul>
      </nav>
    </div>
    <nav id="top-container" class="navbar-dark navbar-expand fixed-top d-xs-block d-sm-none">
      <div class="row">
        <router-link class="col py-3 ml-3 text-center list-group-item-xs" to="home">
            <span class="fas fa-th-large fa-lg"></span>
        </router-link>
        <router-link class="col py-3 text-center list-group-item-xs" to="managePlayers">
            <span class="fas fa-users fa-lg"></span>
        </router-link>
        <router-link class="col py-3 text-center list-group-item-xs" to="Events">
            <span class="fab fa-whmcs fa-lg"></span>
        </router-link>
        <router-link class="col py-3 text-center list-group-item-xs" to="Events">
            <span class="fab fa-whmcs fa-lg"></span>
        </router-link>
        <router-link class="col py-3 mr-3 text-center list-group-item-xs" to="Events">
            <span class="fab fa-whmcs fa-lg"></span>
        </router-link>
      </div>
    </nav>

    <div class="row mx-0" id="body-row">
      <nav id="sidebar-container" class="sidebar-expanded d-none d-sm-block col-xl-2">
        <ul class="list-group sticky-top">
          <li class="d-none d-xl-block">
            <div class="text-center py-4 d-none d-xl-block">
              <div class="py-1">
                <img class="rounded-circle" src="..\..\assets\img_Simon.jpg" alt="Avatar" style="width:85px;">
              </div>
              <div class="pt-1">
                <span class="text-white" style="font-size: 16px;">Simon Lévesque</span>
              </div>
              <div>
                <span class="align-top" style="color:#bbb;">Coordonateur</span>
              </div>
            </div>
          </li>
          <router-link class="list-group-item list-group-item-action flex-column align-items-start" to="home">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-th-large fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Tableau de bord</span>
            </div>
          </router-link>        
          <router-link to="events" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-calendar-alt fa-fw mr-3"></span>
              <span class="d-none d-xl-block">
                Gestion des événements
              </span>
            </div>
          </router-link>
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="far fa-newspaper fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Gestion des nouvelles</span>
            </div>
          </a>
          <router-link to="managePlayers" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-start align-items-center">
              <span class="fas fa-users fa-fw mr-3"></span>
              <span class="d-none d-xl-block">Gestion des joueurs</span>
            </div>
          </router-link>
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
