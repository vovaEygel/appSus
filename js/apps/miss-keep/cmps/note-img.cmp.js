export default {
    template: `
    <section class="note note-img-cmp">
    <input type="text" />
        <img :src="this.info.url" />
        <div class="note-type-selection-btns">
            <a class=" fa fa-image note-type fa-2x"></a>
            <a @click="$emit('remove', id)" class="button fa fa fa-trash-o fa-2x"></a>
            <!-- <a class="fa fa-font"></a>
            <a class="fa fa-image"></a>
            <a class="fa fa-list"></a>
            <a class="fa fa-caret-square-o-right"></a> -->
        </div>        
    </section>
    `,
    props: ['info', 'id'],
    data() {
        return {
            txt: ''
        }
    },
    created() {}
}