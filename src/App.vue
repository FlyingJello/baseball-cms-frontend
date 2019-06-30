<template>
  <div id="app">
    <router-view/>
    <b-modal id="bv-modal-message" no-close-on-backdrop=true :header-bg-variant="headerBgVariant">
      <template slot="modal-header">
          <div class="text-white mx-auto py-4">
            <i v-bind:class="iconModalClass"></i>
          </div>
      </template>
      <template slot="default">
        <h3 class="text-center">{{messageTitle}}</h3>
        <p class="my-auto px-3 text-center pt-2">{{modalMessage}}</p>
      </template>
      <template slot="modal-footer" slot-scope="{ ok }">
        <b-button pill class="mx-auto px-4" :variant="buttonBgVariant" @click="ok()">Fermer</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      iconModalClass: '',
      messageTitle: '',
      modalMessage: '',
      headerBgVariant: '',
      buttonBgVariant: ''
    }
  },
  methods: {
    showModalMessage: function (modalMessage, messageType) {
      const listTypeMessage = [
        { type: 'danger', icon: 'far fa-times-circle', title: 'Une erreur est survenue.' },
        { type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Attention !' },
        { type: 'primary', icon: 'far fa-check-circle', title: 'Succès !' },
        { type: 'info', icon: 'fas fa-info-circle', title: 'Information' }
      ]

      var typeMessageObject = listTypeMessage.filter(function (element) { return element.type === messageType })[0]

      this.iconModalClass = typeMessageObject.icon + ' fa-5x'
      this.headerBgVariant = messageType
      this.buttonBgVariant = messageType
      this.messageTitle = typeMessageObject.title
      this.modalMessage = modalMessage
      this.$bvModal.show('bv-modal-message')
    }
  }
}
</script>
