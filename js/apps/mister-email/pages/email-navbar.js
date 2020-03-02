import emailCompose from '../cmps/email-compose.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'
import {eventBus} from '../../../services/event-bus.service.js'
import { emailService } from '../services/email-service.js'

export default {
  template: `
  <section class="email-navbar flex flex-column">
    <div class="email-navbar-container">
      <button class="compose" @click="toggleCompose()">
        <span class="fa fa-plus"></span>
        Compose
      </button>
        <p class="index" @click="onIndexClick()">
          <span class="fa fa-inbox"></span>
          Index
        </p>
        <p class="starred" @click="starredEmails()">
          <span class="fa fa-star"></span>
          Starred
        </p>
        <p class="starred" @click="sentMail()">
          <span class="fa fa-send"></span>
          Sent Mail
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
  },

  methods: {
    toggleCompose() {
      this.isCompose = !this.isCompose
    },
    starredEmails() {
      eventBus.$emit('starredEmails')
    },
    sentMail() {
      eventBus.$emit('sentMail')
    },
    onIndexClick() {
      eventBus.$emit('onIndexClick')
    }
  }
}