import {emailService} from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailNavbar from '../cmps/email-navbar.cmp.js'


export default {
  template: `
    <section v-if="emails" class="email-app flex">
      <email-navbar></email-navbar>
      <email-list :emails="emails"></email-list>
    </section>
    `,
  
  components: {
    emailList,
    emailNavbar
  },

  data() {
    return {
      emails: null,
    }
  },

  created() {
    emailService.getEmails()
      .then(emails => this.emails = emails)
  }
}