export default {
    template: `
        <section class="note note-todos-cmp">
        <ul class="todo-list">
            <li v-for="todo in info.todos">
            <p>{{todo.txt}}</p>
            <!-- <p>{{todo.doneAt}}</p> -->
                <!-- {{todo.isDone}} -->
                <!--  -->
            </li>
        </ul>
        <div class="note-type-selection-btns">
            <a class="button fa fa-list note-type fa-2x"></a>
            <a class="button fa fa-paint-brush note-type fa-2x"></a>
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
    created() {}
}