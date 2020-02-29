import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus.service.js'

export default {
    template: `
    <section class="note-img-cmp">
        <img v-if="info" :src="info.url" />
        <div class="control-btns">
            <a class=" fa fa-image note-type fa-2x"></a>
            <!-- <a class="button fa fa-paint-brush note-type fa-2x"></a> -->
            <a class="button fa fa fa-pencil note-type fa-2x"
               @click="edit"
               :class="{'editing' : editing}"></a>
            <a @click="$emit('remove', id)" class="button fa fa fa-trash-o fa-2x"></a>
        </div>        
    </section>
    `,
    props: ['info', 'id', 'type'],
    data() {
        return {
            editing: false,
        }
    },
    methods: {
        edit() {
            eventBus.$emit('edit', { type: this.type, id: this.id, info: this.info })
            this.editing = !this.editing
                // console.log(this.info, this.id);
        },
        saveNote() {
            noteService.updateNote(this.id)
        },
    },
}