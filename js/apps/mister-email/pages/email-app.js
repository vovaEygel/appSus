import {emailService} from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'


export default {
  template: `
    <section v-if="emails" class="email-app flex">
      <router-view class="child-navbar"></router-view>
      <email-list :emails="emails"></email-list>
      <email-compose></email-compose>
    </section>
    `,
  
  //TRY EVENTBUS FOR THE READS COUNTER
  components: {
    emailList,
    emailCompose
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