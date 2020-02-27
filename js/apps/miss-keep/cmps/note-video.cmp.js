export default {
    template: `
        <section class="note note-video-cmp">
            <iframe width="420" height="315" :src="info.url"></iframe>
            
        <div class="note-type-selection-btns">
            <a class="button fa fa-caret-square-o-right fa-2x"></a>
            <!-- <a class="fa fa-font"></a>
            <a class="fa fa-image"></a>
            <a class="fa fa-list"></a>
            <a class="fa fa-caret-square-o-right"></a> -->
        </div>
        </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: '',
        }
    },
    created() {
        console.log(this.info)
    }
}