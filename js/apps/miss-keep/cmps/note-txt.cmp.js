export default {
    template: `
    <section class="note text-note">
    <a class="fa fa-font" style="font-size:24px"></a>
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