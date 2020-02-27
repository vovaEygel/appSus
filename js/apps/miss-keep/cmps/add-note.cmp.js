export default {
    template: `
     <section class="note-add-cmp">
        <input type="text" placeholder="add note" v-model="txt" />
        <div class="note-type-selection-btns">
            <a class="fa fa-font" ></a>
            <a class="fa fa-image"></a>
            <a class="fa fa-list"></a>
            <a class="fa fa-caret-square-o-right"></a>
        </div>
     </section>
    `,
    data() {
        return {
            note: null,
            txt: null
        }
    },
    watch: {
        text() {

            console.log(this.txt)
        }
    }
}