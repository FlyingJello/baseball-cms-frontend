<template>
  <div>
    <div class="row" style="height: 400px;">
    </div>
    <div class="row mt-3">
      <div class="col-12 col-lg-6 col-xl-7 mb-3 px-0 px-sm-3 pr-lg-0">
        <div class="col-12 tale-section">
          <div class="row py-2" style="border-bottom: 1px solid #e7eaec;">
            <div class="col-9 pr-0 my-auto">
              <h2>Événements de la semaine</h2>
            </div>
            <div class="col-3 px-0 tale-section-menu text-right">
                <button class="btn px-2 py-1"><i class="fas fa-sync-alt"></i></button>
                <button class="btn dropdown-toggle px-2 mr-2" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">Action</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <!--<table class="table mb-0" style="border-top: none;">
                <tbody>
                  <tr class="d-flex">
                      <td class="col-9 px-0">Pratique de baseball à La Pocatière</td>
                      <td class="col-3 text-right">
                        <span style="color: #ccc;">Aujourd'hui, 19h00</span>
                      </td>
                  </tr>
                  <tr class="d-flex">
                      <td class="col-9 px-0">Pratique de baseball à La Pocatière</td>
                      <td class="col-3 text-right">
                        <span style="color: #ccc;">Aujourd'hui, 19h00</span>
                      </td>
                  </tr>
                  <tr class="d-flex">
                      <td class="col-9 px-0">Pratique de baseball à La Pocatière</td>
                      <td class="col-3 text-right">
                        <span style="color: #ccc;">Aujourd'hui, 19h00</span>
                      </td>
                  </tr>
                  <tr class="d-flex">
                      <td class="col-9 px-0">Pratique de baseball à La Pocatière</td>
                      <td class="col-3 text-right">
                        <span style="color: #ccc;">Aujourd'hui, 19h00</span>
                      </td>
                  </tr>
                  <tr class="d-flex">
                      <td class="col-9 px-0">Pratique de baseball à La Pocatière</td>
                      <td class="col-3 text-right">
                        <span style="color: #ccc;">Aujourd'hui, 19h00</span>
                      </td>
                  </tr>
                  <tr class="d-flex">
                      <td class="col-9 px-0">Pratique de baseball à La Pocatière</td>
                      <td class="col-3 text-right">
                        <span style="color: #ccc;">Aujourd'hui, 19h00</span>
                      </td>
                  </tr>
                  <tr class="d-flex">
                      <td class="col-9 px-0">Pratique de baseball à La Pocatière</td>
                      <td class="col-3 text-right">
                        <span style="color: #ccc;">Aujourd'hui, 19h00</span>
                      </td>
                  </tr>
                </tbody>
              </table>--> 
            </div>
          </div>
          <div class="row">
            <div class="col-12 py-3 text-center">
              <a style="font-weight: 450">Voir plus d'événements <i class="fas fa-arrow-right ml-1"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 col-xl-5 mb-3 px-0 px-sm-3">
        <div class="col-12 tale-section">
          <div class="row py-2" style="border-bottom: 1px solid #e7eaec;">
            <div class="col-9 pr-0 my-auto">
              <h2>Liste des tâches</h2>
            </div>
            <div class="col-3 px-0 tale-section-menu text-right">
                <button class="btn px-2 py-1"><i class="fas fa-sync-alt"></i></button>
                <button class="btn dropdown-toggle px-2 mr-2" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">Modifier</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 px-2 px-md-3">
              <table class="table mb-0" style="border-top: none;">
                <tbody>
                    <tr class="d-flex">
                        <td class="col-1">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1"></label>
                          </div>
                        </td>
                        <td class="col-9 col-sm-8 ml-2 ml-sm-0 pr-0 pl-sm-0 pl-lg-2 pl-xl-1">Aller chercher du McDonald !</td>
                        <td class="col-2 col-sm-3 pr-0 pl-0 pl-sm-2 text-center text-sm-right">
                          <div class="d-none d-sm-block">
                            <small class="badge badge-danger">
                              <i class="far fa-clock mr-sm-1"></i>Aujourd'hui
                            </small>
                          </div>
                          <div class="d-sm-none">
                            <small class="badge badge-danger">
                              <i class="far fa-clock"></i>
                            </small>
                          </div>
                        </td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-1">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck2">
                            <label class="custom-control-label" for="customCheck2"></label>
                          </div>
                        </td>
                        <td class="col-9 col-sm-8 ml-2 ml-sm-0 pr-0 pl-sm-0 pl-lg-2 pl-xl-1">Faire le ménage de la maison.</td>
                        <td class="col-2 col-sm-3 pr-0 pl-0 pl-sm-2 text-center text-sm-right">
                          <div class="d-none d-sm-block">
                            <small class="badge badge-warning">
                              <i class="far fa-clock mr-sm-1"></i>Demain
                            </small>
                          </div>
                          <div class="d-sm-none">
                            <small class="badge badge-warning">
                              <i class="far fa-clock"></i>
                            </small>
                          </div>
                        </td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-1">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck3">
                            <label class="custom-control-label" for="customCheck3"></label>
                          </div>
                        </td>
                        <td class="col-9 col-sm-8 ml-2 ml-sm-0 pr-0 pl-sm-0 pl-lg-2 pl-xl-1">S'occuper de l'aménagement de la cour arrière.</td>
                        <td class="col-2 col-sm-3 pr-0 pl-0 pl-sm-2 text-center text-sm-right">
                          <div class="d-none d-sm-block">
                            <small class="badge badge-warning">
                              <i class="far fa-clock mr-sm-1"></i>Demain
                            </small>
                          </div>
                          <div class="d-sm-none">
                            <small class="badge badge-warning">
                              <i class="far fa-clock"></i>
                            </small>
                          </div>
                        </td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-1">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck4">
                            <label class="custom-control-label" for="customCheck4"></label>
                          </div>
                        </td>
                        <td class="col-9 col-sm-8 ml-2 ml-sm-0 pr-0 pl-sm-0 pl-lg-2 pl-xl-1">Aller chercher de la nourriture à l'épicerie.</td>
                        <td class="col-2 col-sm-3 pr-0 pl-0 pl-sm-2 text-center text-sm-right">
                          <div class="d-none d-sm-block">
                            <small class="badge badge-info">
                              <i class="far fa-clock mr-sm-1"></i>2 jours
                            </small>
                          </div>
                          <div class="d-sm-none">
                            <small class="badge badge-info">
                              <i class="far fa-clock"></i>
                            </small>
                          </div>
                        </td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-1">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck5">
                            <label class="custom-control-label" for="customCheck5"></label>
                          </div>
                        </td>
                        <td class="col-9 col-sm-8 ml-2 ml-sm-0 pr-0 pl-sm-0 pl-lg-2 pl-xl-1">Retour au travail.</td>
                        <td class="col-2 col-sm-3 pr-0 pl-0 pl-sm-2 text-center text-sm-right">
                          <div class="d-none d-sm-block">
                            <small class="badge badge-primary">
                              <i class="far fa-clock mr-sm-1"></i>3 jours
                            </small>
                          </div>
                          <div class="d-sm-none">
                            <small class="badge badge-secondary">
                              <i class="far fa-clock"></i>
                            </small>
                          </div>
                        </td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-1">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck6">
                            <label class="custom-control-label" for="customCheck6"></label>
                          </div>
                        </td>
                        <td class="col-9 col-sm-8 ml-2 ml-sm-0 pr-0 pl-sm-0 pl-lg-2 pl-xl-1">Give love to my girlfriend.</td>
                        <td class="col-2 col-sm-3 pr-0 pl-0 pl-sm-2 text-center text-sm-right">
                          <div class="d-none d-sm-block">
                            <small class="badge badge-secondary">
                              <i class="far fa-clock mr-sm-1"></i>4 jours
                            </small>
                          </div>
                          <div class="d-sm-none">
                            <small class="badge badge-secondary">
                              <i class="far fa-clock"></i>
                            </small>
                          </div>
                        </td>
                    <tr class="d-flex" style="border-bottom: 1px solid #e7eaec;">
                        <td class="col-1">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck7">
                            <label class="custom-control-label" for="customCheck7"></label>
                          </div>
                        </td>
                        <td class="col-9 col-sm-8 ml-2 ml-sm-0 pr-0 pl-sm-0 pl-lg-2 pl-xl-1">Préparer le jardin et vérifier pour l'achat de graines.</td>
                        <td class="col-2 col-sm-3 pr-0 pl-0 pl-sm-2 text-center text-sm-right">
                          <div class="d-none d-sm-block">
                            <small class="badge badge-light">
                              <i class="far fa-clock mr-sm-1"></i>5 jours
                            </small>
                          </div>
                          <div class="d-sm-none">
                            <small class="badge badge-light">
                              <i class="far fa-clock"></i>
                            </small>
                          </div>
                        </td>
                    </tr>
                </tbody>
              </table>
              <div class="row">
                <div class="col-12 py-3 text-right text-sm-center">
                  <a style="font-weight: 450">Voir plus de tâches <i class="fas fa-arrow-right ml-1"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 col-xl-4 mb-3 px-0 px-sm-3 pr-lg-0 pr-xl-3">
        <div class="col-12 tale-section">
          <div class="row py-2" style="border-bottom: 1px solid #e7eaec;">
            <div class="col-9 pr-0 my-auto">
              <h2>Dernières transactions</h2>
            </div>
            <div class="col-3 px-0 tale-section-menu text-right">
                <button class="btn px-2 py-1"><i class="fas fa-sync-alt"></i></button>
                <button class="btn dropdown-toggle px-2 mr-2" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">Action</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
