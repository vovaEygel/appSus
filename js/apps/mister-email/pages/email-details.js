import {
  emailService
} from '../services/email-service.js'

export default {
  template: `
    <section v-if="currEmail" class="email-details flex">
      <router-view class="email-details-navbar"></router-view>
      <section class="email-content">
        <p class="email-subject">
          {{currEmail.subject}}
          <span class="fa fa-trash e-details-trash" @click="removeEmail(currEmail.id)" title="Delete Mail"></span>
          <router-link :to="'/mr-email'">
            <span class="fa fa-chevron-circle-up" title="Back to List"></span>
          </router-link>
        </p>
        <p class="from">{{currEmail.from}} 
          <span class="from-email">{{currEmail.fromEmail}}</span>
          <span class="sentAt">{{currEmail.sentAt}}</span>
        </p>
        <p class="email-body">{{currEmail.body}}</p>
      </section>
    </section>
  `,

  data() {
    return {
      currEmailId: this.$route.params.emailId,
      currEmail: null,
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
  }
}