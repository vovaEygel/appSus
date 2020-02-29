import { noteService } from "../services/missKeep-service.js";
import { eventBus } from "../../../services/event-bus.service.js";

export default {
    template: `
    <section class="note-text-cmp">
        <p v-if="info">{{info.txt}}</p>
        <div class="control-buttons">
            <a class="fa fa-font fa-2x"></a>
            <!-- <a class="button fa fa-paint-brush note-type fa-2x"></a> -->
            <a class="button fa fa fa-pencil note-type fa-2x"
               @click="edit"
               :class="{'editing' : editing}"></a>
            <a @click="$emit('remove', id)" class="button fa fa fa-trash-o fa-2x"></a>
        </div>
    </section>
    `,
    props: ['info', 'type', 'id'],
    data() {
        return {
            editing: false
        }
    },
    methods: {
        edit() {
            eventBus.$emit('edit', { type: this.type, id: this.id, info: this.info })
            this.editing = !this.editing
        },
        saveNote() {
            noteService.updateNote(this.id)
        },
    },
}