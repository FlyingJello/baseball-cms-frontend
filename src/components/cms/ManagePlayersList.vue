<template>
  <div>
    <div class="row bg-white mb-4" style="border-bottom: 1px solid #e7eaec;">
        <div class="col-12 py-4">
            <h1>Gestion des joueurs</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="home">Accueil</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page"><b>Liste des joueurs</b></li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="row div-search" style="border-top: 1px solid #e7eaec; border-bottom: 1px solid #e7eaec;">
        <div class="d-none d-md-block col-md-7 col-lg-8 col-xl-9">
            
        </div>
        <div class="col-10 col-sm-12 col-md-5 col-lg-4 col-xl-3 pr-1 pr-sm-3">
            <input type="text" class="form-control search-textbox" id="search" placeholder="Rechercher">
        </div>
        <div class="col-2 d-sm-none px-0 text-center my-auto">
            <router-link to="ManagePlayerAddPlayer">
                <i style="color: #676a6c;" class="fas fa-user-plus fa-lg"></i>
            </router-link>
        </div>
    </div>
    <div id="list-player" class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <router-link to="managePlayer">
                        <div class="row bg-white" style="border-bottom: 1px solid #eaeaea;">
                            <div class="col-2 py-3 text-center">
                                <img src="..\..\assets\img_avatar.jpg" alt="Avatar" style="">
                            </div>
                            <div class="col-8 pl-4 pr-0 py-3 my-auto">
                                <div class="row">
                                    <div class="col-12 pr-0">
                                        <span>Jean-Philippe Lévesque</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <small class="align-top">Bantam</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <i class="fa fa-angle-right fa-lg"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-xl-6">
                    <router-link to="managePlayer">
                        <div class="row bg-white" style="border-bottom: 1px solid #eaeaea;">
                            <div class="col-2 py-3 text-center">
                                <img src="..\..\assets\img_avatar.jpg" alt="Avatar" style="">
                            </div>
                            <div class="col-8 pl-4 pr-0 py-3 my-auto">
                                <div class="row">
                                    <div class="col-12 pr-0">
                                        <span>Jean-Philippe Lévesque</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <small class="align-top">Bantam</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <i class="fa fa-angle-right fa-lg"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-xl-6">
                    <router-link to="managePlayer">
                        <div class="row bg-white" style="border-bottom: 1px solid #eaeaea;">
                            <div class="col-2 py-3 text-center">
                                <img src="..\..\assets\img_avatar.jpg" alt="Avatar" style="">
                            </div>
                            <div class="col-8 pl-4 pr-0 py-3 my-auto">
                                <div class="row">
                                    <div class="col-12 pr-0">
                                        <span>Jean-Philippe Lévesque</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <small class="align-top">Bantam</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <i class="fa fa-angle-right fa-lg"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-xl-6">
                    <router-link to="managePlayer">
                        <div class="row bg-white" style="border-bottom: 1px solid #eaeaea;">
                            <div class="col-2 py-3 text-center">
                                <img src="..\..\assets\img_avatar.jpg" alt="Avatar" style="">
                            </div>
                            <div class="col-8 pl-4 pr-0 py-3 my-auto">
                                <div class="row">
                                    <div class="col-12 pr-0">
                                        <span>Jean-Philippe Lévesque</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <small class="align-top">Bantam</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <i class="fa fa-angle-right fa-lg"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-xl-6">
                    <router-link to="managePlayer">
                        <div class="row bg-white" style="border-bottom: 1px solid #eaeaea;">
                            <div class="col-2 py-3 text-center">
                                <img src="..\..\assets\img_avatar.jpg" alt="Avatar" style="">
                            </div>
                            <div class="col-8 pl-4 pr-0 py-3 my-auto">
                                <div class="row">
                                    <div class="col-12 pr-0">
                                        <span>Jean-Philippe Lévesque</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <small class="align-top">Bantam</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <i class="fa fa-angle-right fa-lg"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-xl-6">
                    <router-link to="managePlayer">
                        <div class="row bg-white" style="border-bottom: 1px solid #eaeaea;">
                            <div class="col-2 py-3 text-center">
                                <img src="..\..\assets\img_avatar.jpg" alt="Avatar" style="">
                            </div>
                            <div class="col-8 pl-4 pr-0 py-3 my-auto">
                                <div class="row">
                                    <div class="col-12 pr-0">
                                        <span>Jean-Philippe Lévesque</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <small class="align-top">Bantam</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <i class="fa fa-angle-right fa-lg"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
