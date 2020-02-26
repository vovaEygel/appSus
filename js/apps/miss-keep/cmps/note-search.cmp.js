export default {
    template: `
        <section class="note-search-cmp">
        <input type="text" placeholder="Search notes..." v-model="txt" />
        </section>
    `,
    data() {
        return {
            txt: null
        }
    }
}