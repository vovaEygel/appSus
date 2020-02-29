import {emailService} from '../services/email-service.js'

export default {
  template: `
    <section class="extended-preview">
      <p class="subject flex">
        {{email.subject}} 
        <span class="fa fa-trash trash-icon" @click="removeEmail(email.id)"></span>
        <router-link class="expand-link":to="'/email-details/' + email.id + '?'">
          <span class="fa fa-expand"></span>
        </router-link>
      </p>
      <p class="from">
        {{email.from}}
        <span class="from-email">{{email.fromEmail}}</span>
      </p>
      <p class="body">{{email.body}}</p>
    </section>
  `,

  props: ['email'],

  methods: {
    removeEmail(emailId) {
      emailService.deleteEmail(emailId)
    }
  },
}