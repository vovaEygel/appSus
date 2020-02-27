// import {email}

export default {
  template: `
    <section class="extended-preview">
      <p class="subject flex flex-row space-between">
        {{email.subject}} 
        <span class="fa fa-trash trash-icon"></span>
        <span class="fa fa-expand"></span>
      </p>
      <p class="from">
        {{email.from}}
        <span class="from-email">{{email.fromEmail}}</span>
      </p>
      <p class="body">{{email.body}}</p>
    </section>
  `,

  props: ['email']
}