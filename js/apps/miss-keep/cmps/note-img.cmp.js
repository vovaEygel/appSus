export default {
    template: `
        <section class="note note-img-cmp">.
            
            <img :src="this.info.url" />
            <div>
            <a class="fa fa-image" style="font-size:20px"></a>
            <a class="fa fa-image" style="font-size:20px"></a>
            <a class="fa fa-image" style="font-size:20px"></a>
            <a class="fa fa-image" style="font-size:20px"></a>
            </div>
            
        </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    },
}