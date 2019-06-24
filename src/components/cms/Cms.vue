<template>
  <div>
    <b-navbar class="shadow" toggleable="lg" type="dark" variant="primary" fixed="top">
      <b-navbar-brand>Baseball mineur de La Pocatière</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right no-caret>
            <template slot="button-content"><i class="fas fa-cog fa-lg"></i></template>
            <b-dropdown-item href="#">Mon profil</b-dropdown-item>
            <b-dropdown-item href="#">Mon profil</b-dropdown-item>
            <b-dropdown-item href="#">Mon profil</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Se déconnecter</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <div class="row">
        <b-nav class="col-md-2 d-none d-md-block bg-dark sidebar" sticky="true">
          <div class="text-center py-4 d-none d-xl-block">
            <img class="rounded-circle" src="..\..\assets\img_Simon.jpg" alt="Avatar" style="width:85px;">
            <div class="pt-1">
              <span class="text-white">Jean-Philippe Lévesque</span>
            </div>
            <div>
              <span class="align-top">Administrateur</span>
            </div>
          </div>
          <div class="sidebar-sticky">
            <b-nav-item active>
              <i class="fas fa-th-large fa-fw mr-3"></i>
              <a class="d-none d-xl-inline">Tableau de bord</a>
            </b-nav-item>
          </div>
        </b-nav>
      <!--<nav id="sidebar-container" class="sidebar-expanded d-none d-sm-block col-xl-2">
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
      </nav>-->
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
