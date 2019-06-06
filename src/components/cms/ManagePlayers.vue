<template>
  <div>
    <div class="row" style="border-bottom: 1px solid #e7eaec">
        <div class="col-12 py-4 px-3 px-md-4">
            <h1>Gestion des joueurs</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="home">Accueil</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page"><b>Liste des joueurs</b></li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="row div-search py-3 px-3 px-md-4">
        <div class="d-none d-sm-block col-sm-6 col-md-7 col-lg-8 col-xl-4 px-0">
            <button type="button" class="btn btn-secondary py-2 mr-2"><i class="fas fa-file-import mr-2"></i>Importer</button>
            <router-link to="addPlayer">
                <button type="button" class="btn btn-primary py-2"><i class="fas fa-plus-circle mr-2"></i>Ajouter un joueur</button>
            </router-link>
        </div>
        <div class="d-none d-xl-block col-xl-5"></div>
        <div class="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 px-0">
            <div class="input-group">
                <input class="form-control search-textbox py-2" type="search" placeholder="Rechercher un joueur..." id="search">
                <span class="input-group-append">
                    <div class="input-group-text" style="border-color: #dee2e6; background-color: #17a185; color: white;"><i class="fa fa-search"></i></div>
                </span>
            </div>
        </div>
    </div>
    <div id="list-player" class="row">
        <div class="col-12 px-0">
            <table class="table mb-0">
                <thead class="d-none d-md-block">
                    <tr class="d-flex mx-md-4">
                        <th class="col-4 col-lg-3"><i class="fas fa-sort-alpha-down mr-3"></i>Nom du joueur</th>
                        <th class="d-none d-lg-block col-lg-3"><i class="fas fa-sort mr-3"></i>Ville</th>
                        <th class="col-5 col-lg-3"><i class="fas fa-sort mr-3"></i>Adresse courriel</th>
                        <th class="col-3 col-lg-3">No de téléphone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="d-flex mx-0 mx-md-4 py-1">
                        <td class="col-11 col-md-4 col-lg-3">
                            <img class="mr-3 mr-sm-4 ml-2 ml-md-0 float-left" src="..\..\assets\img_avatar.jpg" alt="Avatar"/>
                            <span style="font-size: 14px; font-weight: 500;">Jean-Philippe Perron-Lévesque</span>
                            <br>
                            <span class="align-top" style="font-size: 13px;">Pee-Wee</span>
                        </td>
                        <td class="d-none d-lg-block col-lg-3">Dollard-des-Ormeaux</td>
                        <td class="d-none d-md-block col-5 col-lg-3">qmed@ucho.top</td>
                        <td class="d-none d-md-block col-3">(778) 421-6735</td>
                        <td class="col-1 d-md-none pl-0 pr-0"><i class="fas fa-chevron-right"></i></td>
                    </tr>
                    <tr class="d-flex mx-0 mx-md-4 py-1">
                        <td class="col-11 col-md-4 col-lg-3">
                            <img class="mr-3 mr-sm-4 ml-2 ml-md-0 float-left" src="..\..\assets\img_avatar3.jpg" alt="Avatar"/>
                            <span style="font-size: 14px; font-weight: 500;">Hussein Hutton</span>
                            <br>
                            <span class="align-top" style="font-size: 13px;">Bantam</span>
                        </td>
                        <td class="d-none d-lg-block col-lg-3">Sainte-Catherine-de-la-Jacques-Cartier</td>
                        <td class="d-none d-md-block col-5 col-lg-3">jeanphilippeLevesque@hotmail.com</td>
                        <td class="d-none d-md-block col-3">+1-613-555-0129</td>
                        <td class="col-1 d-md-none pl-0"><i class="fas fa-chevron-right"></i></td>
                    </tr>
                    <tr class="d-flex mx-0 mx-md-4 py-1">
                        <td class="col-11 col-md-4 col-lg-3">
                            <img class="mr-3 mr-sm-4 float-left  ml-2 ml-md-0" src="..\..\assets\img_avatar2.jpg" alt="Avatar"/>
                            <span style="font-size: 14px; font-weight: 500;">Ocean Pacheco</span>
                            <br>
                            <span class="align-top" style="font-size: 13px;">Expo</span>
                        </td>
                        <td class="d-none d-lg-block col-lg-3">Métabetchouan–Lac-à-la-Croix</td>
                        <td class="d-none d-md-block col-5 col-lg-3">0aoumar20l@trashmail.pw</td>
                        <td class="d-none d-md-block col-3">(418) 832-5163</td>
                        <td class="col-1 d-md-none pl-0"><i class="fas fa-chevron-right"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="d-sm-none">
        <router-link to="addPlayer" id="fixedbutton" class="btn btn-primary"><i class="fas fa-plus fa-lg"></i></router-link>
    </div>
  </div>
</template>
