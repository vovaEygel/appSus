export default {
    template: `
        <section class="note note-video-cmp">
            <a class="fa fa-caret-square-o-right" style="font-size:20px"></a>
         <iframe width="420" height="315" :src="this.info.url">
        </iframe>
        <div class="note-type-selection-btns">
            <a class="fa fa-font"></a>
            <a class="fa fa-image"></a>
            <a class="fa fa-list"></a>
            <a class="fa fa-caret-square-o-right"></a>
        </div>        
        </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: '',
        }
    }
}