export default {
    template: `
        <section class="note note-todos-cmp">
        <a class="fa fa-list" style="font-size:20px;"></a>
        <ul>
            <li v-for="todo in info.todos">
            <input type="checkbox" id="checkbox"">
                {{todo.txt}}
                {{todo.isDone}}
                {{todo.doneAt}}
            </li>
        </ul>
        </section>
    `,
    props: ['info'],
    data() {
        return {

        }
    },
    created() {
        console.log(this.info)
    }
}