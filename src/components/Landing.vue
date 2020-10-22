<template>
	<div>
		<h1 class="landing-page__title" ref="ladingPageTitle"></h1>
		<div class="landing-page__skils" ref="landingPageSkils">
			<img
				v-for="skil in skilList"
				:key="skil.id"
				:src="skil.imgUrl"
				:alt="skil.lowerName"
				:class="[skil.lowerName, 'landing-page__skil-each']"
			/>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { GET_SKILS } from '../store/modules/skil';

export default {
	name: 'LandingPage',
	data: () => ({
		rotateCount: 0,
		titleMsgArray: ['Frontend', 'Developer', 'DongHoonLee'],
		titleArrayCount: 0,
		currentTitleCount: 0,
	}),
	computed: {
		...mapState('skils', {
			skilList: 'skilList',
		}),
	},
	created() {
		this.getSkils();
	},
	mounted() {
		this.$nextTick(() => {
			this.lotateSkils();
			this.typeWriter();
		});
	},
	destroyed() {
		window.cancelAnimationFrame(this.lotateSkils);
	},
	methods: {
		...mapActions('skils', {
			getSkils: GET_SKILS,
		}),
		lotateSkils() {
			const skils = this.$refs.landingPageSkils;
			skils.style.transform = `rotate(${this.rotateCount}deg)`;
			this.rotateCount += 0.3;
			if (this.rotateCount >= 360) this.rotateCount = 0;
			window.requestAnimationFrame(this.lotateSkils);
		},
		typeWriter() {
			const { ladingPageTitle } = this.$refs;
			const title = this.titleMsgArray[this.titleArrayCount];
			const splitTitle = title.split('');
			if (splitTitle.length > this.currentTitleCount) {
				ladingPageTitle.innerHTML += splitTitle[this.currentTitleCount];
				this.currentTitleCount++;
				return setTimeout(this.typeWriter, 1000);
			}
			ladingPageTitle.innerHTML = '';
			this.currentTitleCount = 0;
			this.titleArrayCount++;
			console.log(this.titleArrayCount);
			console.log(title);
			// const { ladingPageTitle } = this.$refs;
			// if (this.currentTitleCount >= title.length) {
			// 	this.titleArrayCount += 1;
			// 	this.currentTitleCount = 0;
			// 	ladingPageTitle.innerHTML = '';
			// }
			// if (this.titleArrayCount >= this.titleMsgArray.length) {
			// 	this.titleArrayCount = 0;
			// }
			// ladingPageTitle.innerHTML += title.charAt(this.currentTitleCount);
			// this.currentTitleCount += 0.0001;
			// console.log(this.currentTitleCount);
			// window.requestAnimationFrame(this.typeWriter);
		},
	},
};
</script>

<style lang="scss">
@import '../assets/scss/landing.scss';
</style>
