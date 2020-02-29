export default {
  template: `
    <section class="email-compose">
      <form class="flex flex-column" @submit.prevent>
        <input type="text" class="new-email-subject" placeholder="Subject" v-model="newEmail.subject"/>
        <textarea class="new-email-body" placeholder="Your message"></textarea>
        <div class="email-send-btn-container">
          <button class="email-send-btn flex" @click="sendEmail">SEND</button>  
        </div>
      </form>
    </section>
  `,

  //on SEND button click -> push the new email to the service's emails obj
  data() {
    return {
      newEmail: {
        id: null,
        subject: null,
        body: null,
        sentAt: Date.now(),
        isRead: false,
        from: 'Mr.Email',
        fromEmail: 'mrEmail@googlewho.com',
        isExpended: false
      },
    }
  },

  methods: {
    sendEmail() {
      console.log(this.newEmail.subject);
    }
  }
}