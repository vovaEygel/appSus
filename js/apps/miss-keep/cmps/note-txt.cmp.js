export default {
    template: `
    <section class="note note-text-cmp">
        <p>{{info.txt}}</p>
        <a class="button fa fa-font fa-2x"></a>
    </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}