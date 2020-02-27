export default {
    template: `
    <section class="note text-note">
    <a class="fa fa-font"></a>
    <p>{{info.txt}}</p>
    </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}