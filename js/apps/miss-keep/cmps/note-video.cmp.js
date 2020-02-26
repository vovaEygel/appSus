export default {
    template: `
        <section class="note note-video-cmp">
            <a class="fa fa-caret-square-o-right" style="font-size:20px"></a>
         <iframe width="420" height="315" :src="this.info.url">
        </iframe>
        </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: '',
        }
    }
}