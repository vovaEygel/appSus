import emailStatus from '../cmps/email-status.cmp.js'

export default {
  template: `
  <section class="email-navbar flex flex-column">
    <button class="compose">
      <span class="fa fa-plus"></span>
      Compose
    </button>
    <p class="index">
      <span class="fa fa-inbox"></span>
      Index
    </p>
    <p class="starred">
      <span class="fa fa-star-o"></span>
      Starred
    </p>
    <p class="sent-mail">
      <span class="fa fa-send-o"></span>
      Sent Mail
    </p>
    <p class="drafs">
      <span class="fa fa-file-o"></span>
      Drafts
    </p>
    <p class="check">
      <span class="fa fa-check"></span>
      <email-status></email-status>
    </p>
  </section>
  `,

  components: {
    emailStatus
  }
}