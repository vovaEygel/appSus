import {
  emailService
} from '../services/email-service.js'
import {
  eventBus
} from '../../../services/event-bus.service.js'

export default {
  template: `
    <section class="email-compose">
      <div class="close-compose-container flex space-between">
        <span class="close-compose-title">{{titleTxt}}</span>
        <button class="fa fa-close close-compose-btn" @click="emitCloseCompose()"></button>
      </div>
      <form class="flex flex-column" @submit.prevent>
        <input ref="subject" type="text" class="new-email-subject" placeholder="Subject" v-model="newMessage.subject"/>
        <textarea ref="body" class="new-email-body" placeholder="Your message" v-model="newMessage.body"></textarea>
        <div class="email-send-btn-container">
          <button class="email-send-btn flex" @click="sendOrReply()">{{buttonTxt}}</button>  
        </div>
      </form>
    </section>
  `,

  props: ['emailId', 'isReply'],

  data() {
    return {
      newMessage: {
        subject: null,
        body: null,
        from: 'Mr.Email',
        fromEmail: 'mrEmail@gmailwho.com',
      },
      isComposed: true,
      noteData: null
    }
  },

  computed: {
    titleTxt() {
      return this.isReply ? 'New Reply' : 'New Message'
    },
    buttonTxt() {
      return this.isReply ? 'Reply' : 'Send'
    }
  },

  methods: {
    sendOrReply() {
      if (this.$refs.subject.value === '' || this.$refs.body.value === '') return
      const {
        from,
        fromEmail,
        subject,
        body
      } = this.newMessage
      if (this.isReply) emailService.addReply(this.emailId, from, fromEmail, subject, body)
      else {
        eventBus.$emit('emailToNote', this.newMessage)
        emailService.receiveEmail(from, fromEmail, subject, body, this.isComposed)
      }
      this.$refs.subject.value = ''
      this.$refs.body.value = ''
    },
    emitCloseCompose() {
      this.$emit('closeCompose', false)
    }
  },

    created() {
      eventBus.$on('noteToMail', (noteData) => {
        this.toggleEditing(noteForEdit)
      })
    }
}