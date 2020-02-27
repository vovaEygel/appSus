export default {
    template: `
        <section class="note note-todos-cmp">
        <ul class="todo-list">
            <li v-for="todo in info.todos">
            <input type="checkbox" id="checkbox"">
                {{todo.txt}}
                {{todo.isDone}}
                {{todo.doneAt}}
            </li>
        </ul>
        <div class="note-type-selection-btns">
            <a class="fa fa-list note-type"></a>
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

        }
    },
    created() {
        console.log(this.info)
    }
}