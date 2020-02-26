export default {
  template: `
    <section class="extended-preview flex-column">
        <p class="subject">{{email.subject}}</p>
        <p class="from">
          {{email.from}}
          <span class="from-email">{{email.fromEmail}}</span>
        </p>
      <p class="body">{{email.body}}</p>
    </section>
  `,

  props: ['email']
}