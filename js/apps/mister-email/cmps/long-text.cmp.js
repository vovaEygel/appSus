export default {
	template: `
		<section class="long-text">
			<p>
					{{hundredChars}}...
			</p>
		</section>
	`,
	props: ['txt'],
	data() {
		return {
			desc: this.txt,
			isMoreOn: false,
		}
	},
	computed: {
		hundredChars() {
			return this.desc.substring(0, 50);
		},
		restOfDesc() {
			return this.desc.substring(100, this.desc.length);
		},
		readBtn() {
			if (this.isMoreOn) return 'Read Less'
			if (!this.isMoreOn) return 'Read More'
		}
	},
	methods: {
		toggleMoreDesc() {
			this.isMoreOn = !this.isMoreOn;
		}
	}
}