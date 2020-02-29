import emailCompose from '../cmps/email-compose.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'
import {eventBus} from '../../../services/event-bus.service.js'

export default {
  template: `
  <section class="email-navbar flex flex-column">
    <div class="email-navbar-container">
      <button class="compose" @click="toggleCompose()">
        <span class="fa fa-plus"></span>
        Compose
      </button>
      <p class="index">
        <span class="fa fa-inbox"></span>
        Index
      </p>
      <p class="starred">
        <span class="fa fa-star-o"></span>
        Starred
      </p>
      <p class="sent-mail">
        <span class="fa fa-send-o"></span>
        Sent Mail
      </p>
      <p class="drafs">
        <span class="fa fa-file-o"></span>
        Drafts
      </p>
      <p class="check">
        <email-status v-if="emailStatus" :emailStatus="emailStatus"></email-status>
      </p>
    </div>
    <email-compose v-if="isCompose" @closeCompose="toggleCompose()"></email-compose>
  </section>
  `,

  props:['emailsStatus'],

  components: {
    emailCompose,
    emailStatus,
  },

  data() {
    return {
      isCompose: false,
      emailStatus: null,
    }
  },

  created() {
    this.emailStatus = this.emailsStatus
    eventBus.$on('updateEmailStatus', (status) => {
      this.emailStatus = status
    })
    eventBus.$on('closeCompose', () => {
      this.toggleCompose()
  })
  },

  methods: {
    toggleCompose() {
      this.isCompose = !this.isCompose
    }
  }
}