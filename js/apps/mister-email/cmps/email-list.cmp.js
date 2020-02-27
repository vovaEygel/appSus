import emailPreview from './email-preview.cmp.js'
import {emailService} from '../services/email-service.js'

export default {
  template: `
    <section class="email-list">
      <ul class="emails-container">
        <li v-for="email in emails" class="email-preview-container">
          <email-preview :email="email" @click.native="extendPreview(email.id)"></email-preview>
        </li>   
      </ul>
    </section>
  `,
  
  components: {
    emailPreview,
  },

  props: ['emails'],

  data() {
    return {
      emailsToDisplay: this.emails,
      clickedEmail: null,
    }
  },

  methods: {
    extendPreview(emailId) {
      let { clickedEmail, emailsToDisplay } = this
      clickedEmail = emailsToDisplay.find(email => email.id === emailId)
      if (clickedEmail) {
        clickedEmail.isExpended = !clickedEmail.isExpended
        emailService.increaseReadCount(clickedEmail)
        clickedEmail.isRead = true
      }
    }
  },

}