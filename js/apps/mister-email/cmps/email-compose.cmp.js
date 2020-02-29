import {emailService} from '../services/email-service.js'

export default {
  template: `
    <section class="email-compose">
      <div class="close-compose-container flex space-between">
        <span class="close-compose-title">New Message</span>
        <button class="fa fa-close close-compose-btn" @click="emitCloseCompose()"></button>
      </div>
      <form class="flex flex-column" @submit.prevent>
        <input ref="subject" type="text" class="new-email-subject" placeholder="Subject" v-model="newEmail.subject"/>
        <textarea ref="body" class="new-email-body" placeholder="Your message" v-model="newEmail.body"></textarea>
        <div class="email-send-btn-container">
          <button class="email-send-btn flex" @click="sendEmail()">Send</button>  
        </div>
      </form>
    </section>
  `,


  data() {
    return {
      newEmail: {
        subject: null,
        body: null,
        from: 'Mr.Email',
        fromEmail: 'mrEmail@gmailwho.com',
      },
    }
  },

  methods: {
    sendEmail() {
      if (this.$refs.subject.value === '' || this.$refs.body.value === '') return
      const { from, fromEmail, subject, body } = this.newEmail
      emailService.receiveEmail(from, fromEmail, subject, body)
      this.$refs.subject.value = ''
      this.$refs.body.value = ''
    },
    emitCloseCompose() {
      this.$emit('closeCompose', false)
    }
  },
}