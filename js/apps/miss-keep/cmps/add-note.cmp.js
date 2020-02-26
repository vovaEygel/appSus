export default {
    template: `
        <section class="note-add-cmp">
        <input type="text" placeholder="add note" v-model="txt" />
        <div></div>
        <a class="fa fa-list"></a>
        <a class="fa fa-list"></a>
        <a class="fa fa-list"></a>
        <a class="fa fa-list"></a>
        <a class="fa fa-list"></a>
        </section>
    `,
    data() {
        return {
            txt: null
        }
    },

}