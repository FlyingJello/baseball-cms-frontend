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
    <div class="row div-search">
        <div class="d-none d-sm-block col-sm-5 col-md-7 col-lg-8 col-xl-9">
           <!-- <button type="button" class="btn btn-primary py-2"><i class="fas fa-plus-circle mr-2"></i>Ajouter un joueur</button>-->
        </div>
        <div class="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 pr-1 pr-sm-3">
            <input type="text" class="form-control search-textbox" id="search" placeholder="Rechercher">
        </div>
        <div class="col-2 d-sm-none px-0 text-center my-auto">
            <i style="color: #676a6c;" class="fas fa-user-plus fa-lg"></i>
        </div>
    </div>
    <div id="list-player" class="row bg-white">
        <div class="col-12 px-0">
            <table class="table mb-1">
                <thead class="d-none d-sm-block">
                    <tr class="d-flex">
                        <th class="col-3 pl-5">Nom</th>
                        <th class="col-1">Catégorie</th>
                        <th class="d-none d-lg-block col-lg-3">Ville</th>
                        <th class="col-3">Adresse courriel</th>
                        <th class="col-2">No de téléphone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="d-flex">
                        <td class="col-3 pl-5"><img class="mr-4" src="..\..\assets\img_avatar.jpg" alt="Avatar">Jean-Philippe Perron-Lévesque</td>
                        <td class="col-1">Moustique</td>
                        <td class="d-none d-lg-block col-lg-3">Sainte-Catherine-de-la-Jacques-Cartier</td>
                        <td class="col-3">jeanphilippeLevesque@hotmail.com</td>
                        <td class="col-2">+1-613-555-0129</td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-3 pl-5"><img class="mr-4" src="..\..\assets\img_avatar2.jpg" alt="Avatar">Ocean Pacheco</td>
                        <td class="col-1">Expo</td>
                        <td class="d-none d-lg-block col-lg-3">Métabetchouan–Lac-à-la-Croix</td>
                        <td class="col-3">0aoumar20l@trashmail.pw</td>
                        <td class="col-2">(418)832-5163</td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-3 pl-5"><img class="mr-4" src="..\..\assets\img_avatar3.jpg" alt="Avatar">Hussein Hutton</td>
                        <td class="col-1">Bantam</td>
                        <td class="d-none d-lg-block col-lg-3">Dollard-des-Ormeaux</td>
                        <td class="col-3">qmed@ucho.top</td>
                        <td class="col-2">(778)421-6735</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>
