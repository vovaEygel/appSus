export default {
    template: `
    <section class="note note-img-cmp">.
        <img :src="this.info.url" />
        <div class="note-type-selection-btns">
            <a class="fa fa-image note-type"></a>
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
            txt: ''
        }
    },
}