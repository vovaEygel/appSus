import emailPreview from './email-preview.cmp.js'
import {emailService} from '../services/email-service.js'
import {eventBus} from '../../../services/event-bus.service.js'

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

    props: ['emails'],

    components: {
        emailPreview,
    },

  data() {
    return {
      emailsToDisplay: this.emails,
      clickedEmail: null,
      emailsStatus: {
        emailsCount: null,
        readsCount: null
      }
    }
  },

  computed: {
    countEmails() {
      return this.emails.length
    },
    countReads() {
      let reads = 0
      this.emails.forEach(email => {
        if (email.isRead) reads++
      })
      return reads
    }
  },

  created() {
    this.emailsStatus.emailsCount = this.countEmails
    this.emailsStatus.readsCount = this.countReads
  },
  
  methods: {
    extendPreview(emailId) {
      let { clickedEmail, emailsToDisplay } = this
      clickedEmail = emailsToDisplay.find(email => email.id === emailId)
      if (clickedEmail) {
        clickedEmail.isExpended = !clickedEmail.isExpended
        clickedEmail.isRead = true
        emailService.saveEmails()
        this.emailsStatus.emailsCount = this.countEmails
        this.emailsStatus.readsCount = this.countReads
        eventBus.$emit('updateEmailStatus', this.emailsStatus)
      }
    }
  },

}