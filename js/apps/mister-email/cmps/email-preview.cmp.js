import expendedPreview from './expended-preview.cmp.js'

export default {
  template: `
    <section :class="{regular: email.isRead, expended: email.isExpended}" class="email-preview">
      <!-- <router-link :to="'/email-details/'+email.id"> -->
        <ul class="email-preview-content flex space-between align-center">
          <li>{{email.from}}</li>
          <li>{{email.subject}}</li>
          <li>{{email.sentAt}}</li>
        </ul>
        <expended-preview v-if="email.isExpended" :email="email"></expended-preview>
      <!-- </router-link> -->
    </section>
  `,
  
  components: {
    expendedPreview
  },

  props: ['email'],
}