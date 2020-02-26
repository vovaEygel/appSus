import emailPreview from './email-preview.cmp.js'


export default {
  template: `
    <section class="email-list">
      <ul class="emails-container">
        <li v-for="email in emails" class="email-preview-container">
          <email-preview :email="email" @click.native="openEmail(email.id)"></email-preview>
        </li>   
        <li>
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
    openEmail(emailId) {
      let { clickedEmail, emailsToDisplay } = this
      clickedEmail = emailsToDisplay.find(email => email.id === emailId)
      clickedEmail.isExpended = !clickedEmail.isExpended
      clickedEmail.isRead = true
      console.log(clickedEmail);
    }
  },

  computed: {
    isExpended() {

    }
  }
}