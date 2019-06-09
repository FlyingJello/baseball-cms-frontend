<template>
  <div>
    <div class="row bg-white" style="border-bottom: 1px solid #e7eaec">
        <div class="col-12 py-4 px-3 px-md-4">
            <h1>Gestion des joueurs</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="home">Accueil</router-link></li>
                    <li class="breadcrumb-item"><router-link to="managePlayers">Liste des joueurs</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page"><b>Ajout d'un joueur</b></li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="row d-none">
        <div class="col-12 px-3 py-3 px-md-4">
            <p class="mb-0">Consignes : Veuillez remplir les champs ci-joint pour faire l'ajout d'un joueur.</p>
        </div>
    </div>
    <div class="row" style="border-top: 1px solid #e7eaec;">
        <div class="col-12 px-0 px-md-4">
            <form>
                <div class="card mt-4">
                    <h3 class="card-header"><i class="fas fa-user-circle fa-lg mr-2" style="color: #76787a"></i>Informations du joueur</h3>
                    <div class="card-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputPrenomJoueur">Prénom du joueur</label>
                                <input type="text" class="form-control" id="inputPrenomJoueur">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputNomJoueur">Nom du joueur</label>
                                <input type="text" class="form-control" id="inputNomJoueur">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputDateNaissance">Date de naissance</label>
                                <input type="date" class="form-control" id="inputDateNaissance">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputNumeroTelephone">Numéro de téléphone</label>
                                <input type="text" class="form-control" id="inputNumeroTelephone">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-4">
                    <h3 class="card-header"><i class="fas fa-user-circle fa-lg mr-2" style="color: #76787a"></i>Informations du parent #1</h3>
                    <div class="card-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputPrenomParent1">Prénom du parent #1</label>
                                <input type="text" class="form-control" id="inputPrenomParent1">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputNomParent1">Nom du parent #1</label>
                                <input type="text" class="form-control" id="inputNomParent1">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmailParent1">Adresse courriel du parent #1</label>
                                <input type="email" class="form-control" id="inputEmailParent1">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputNumeroTelephoneParent1">Numéro de téléphone du parent #1</label>
                                <input type="text" class="form-control" id="inputNumeroTelephoneParent1">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mt-4">
                    <h3 class="card-header"><i class="fas fa-user-circle fa-lg mr-2" style="color: #76787a"></i>Informations du parent #2</h3>
                    <div class="card-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputPrenomParent2">Prénom du parent #2</label>
                                <input type="text" class="form-control" id="inputPrenomParent2">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputNomParent2">Nom du parent #2</label>
                                <input type="text" class="form-control" id="inputNomParent2">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmailParent2">Adresse courriel du parent #2</label>
                                <input type="email" class="form-control" id="inputEmailParent2">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputNumeroTelephoneParent2">Numéro de téléphone du parent #2</label>
                                <input type="text" class="form-control" id="inputNumeroTelephoneParent2">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="my-3 pt-2" style="border-bottom: 1px solid #e7eaec">
                    <h3><i class="fas fa-map-marker-alt fa-lg mr-2" style="color: #76787a"></i>Adresse</h3>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <input type="text" class="form-control" id="inputCity" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control" id="inputZip" placeholder="Code postal">
                    </div>
                </div>
                <div class="my-3 pt-2" style="border-bottom: 1px solid #e7eaec">
                    <h3><i class="fas fa-comment-dots fa-lg mr-2" style="color: #76787a"></i>Autres</h3>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <input type="text" class="form-control" id="inputCity" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control" id="inputZip" placeholder="Code postal">
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!--<div class="row">
        <div class="col-12 px-3 px-md-4 pt-3">
            <button type="submit" class="btn btn-primary"><i class="fas fa-save mr-2"></i>Sauvegarder</button>
            <button class="btn btn-warning"><i class="fas fa-ban mr-2"></i>Annuler</button>
        </div>
    </div>-->
  </div>
</template>
