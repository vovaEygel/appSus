import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus.service.js'

export default {
    template: `
        <section 
        class="note-todos-cmp" 
        @mouseover.once="showBtns" 
        @mouseleave.once="hideBtns">
        <div class="note-content-container">
        <ul class="todo-list">
            <li 
             v-for="(todo,idx) in todos"
             @click="lineThrough(idx)"
             :class="{'list-line' : todo.isDone}">
            <p>{{todo.txt}}</p>
            </li>
        </ul>
        </div>        
        <div v-if="showButtons" class="control-btns">
            <a class="fa fa-list note-type fa-2x"></a>
            <!-- <a class="button fa fa-paint-brush note-type fa-2x"></a> -->
            <!-- <a class="button fa fa fa-pencil note-type fa-2x"
               @click="edit"
               :class="{'editing' : editing}"></a> -->
            <a @click="$emit('remove', id)" class="button fa fa fa-trash-o fa-2x"></a>
        </div>        
        </section>
    `,
    props: ['info', 'id', 'type'],
    data() {
        return {
            editing: false,
            todos: null,
            showButtons: false
        }
    },
    computed: {
        isDone() {
            return this.info.isDone;
        },

    },
    methods: {
        lineThrough(idx) {
            this.todos[idx].isDone = !this.todos[idx].isDone
        },
        edit() {
            console.log(this.info.todos)
            let newInfo = this.info.todos.map(todo => todo.txt).join(',')
            console.log(newInfo)
            eventBus.$emit('edit', { type: this.type, id: this.id, info: this.info })
            this.editing = !this.editing
        },
        saveNote() {
            noteService.updateNote(this.id)
        },
        showBtns() {
            this.showButtons = !this.showButtons;
        },
        hideBtns() {
            this.showButtons = !this.showButtons;
        },

    },
    created() {
        this.todos = this.info.todos;
    }
}