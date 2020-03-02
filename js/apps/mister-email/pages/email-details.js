import {
  emailService
} from '../services/email-service.js'
import emailCompose from '../cmps/email-compose.cmp.js'

export default {
  template: `
    <section v-if="currEmail" class="email-details">
      <section class="email-content">
        <p class="email-subject">
          {{currEmail.subject}}
          <span class="fa fa-trash e-details-trash" @click="removeEmail(currEmail.id)" title="Delete Mail"></span>
          <router-link :to="'/mr-email'">
            <span class="fa fa-chevron-circle-up" title="Back to List"></span>
          </router-link>
          <span class="fa fa-reply" title="Reply" @click="toggleCompose()"></span>
        </p>
        <p class="from">{{currEmail.from}} 
          <span class="from-email">{{currEmail.fromEmail}}</span>
          <span class="sentAt">{{currEmail.sentAt}}</span>
        </p>
        <p class="email-body">{{currEmail.body}}</p>
      </section>
      <section v-if="currEmail.replys.length > 0" class="replys-contianer email-content">
        <h2>Your Replys:</h2>
        <ul class="replys">
          <li v-for="reply in currEmail.replys" class="reply">
              <p class="email-subject">
                {{reply.subject}}
              <p class="from">{{reply.from}} 
                <span class="from-email">{{reply.fromEmail}}</span>
                <span class="sentAt">{{reply.sentAt}}</span>
              </p>
              <p class="email-body">{{reply.body}}</p>
            </li>
          </ul>
        </section>
      <email-compose v-if="isCompose" :emailId="currEmail.id" :isReply="isReply" @closeCompose="toggleCompose()"></email-compose>
    </section>
  `,

  components: {
    emailCompose
  },

  data() {
    return {
      currEmailId: this.$route.params.emailId,
      currEmail: null,
      isCompose: false,
      isReply: false
    }
  },

  created() {
    emailService.getEmail(this.currEmailId)
      .then(emailData => this.currEmail = emailData)
  },

  methods: {
    removeEmail(emailId) {
      emailService.deleteEmail(emailId)
        .then(this.$router.push('/mr-email'))
    },
    toggleCompose() {
      this.isCompose = !this.isCompose
      this.isReply = !this.isReply
    },
    replyMail() {
      this.isReply = !this.isReply
    },
  }
}