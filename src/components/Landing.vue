<template>
	<div>
		<h1 ref="h1">API Get Test</h1>
		<div
			v-for="skil in skilList"
			:key="skil.id"
			:ref="skil.lowerName"
			:class="[skil.lowerName, 'landing-page__skil-each']"
		>
			<img :src="skil.imgUrl" :alt="skil.lowerName" />
			<p>{{ skil.name }}</p>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { GET_SKILS } from '../store/modules/skil';

export default {
	name: 'LandingPage',
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
			addEventListener('mousemove', this.iconMoving);
		});
	},
	methods: {
		...mapActions('skils', {
			getSkils: GET_SKILS,
		}),
		iconMoving(e) {
			const iconArray = this.$refs;
			const x = e.clientX;
			const y = e.clientY;
			let mx = 0;
			let my = 0;
			const speed = 0.03;
			mx += (x - mx) * speed;
			my += (y - my) * speed;
			Object.values(iconArray).forEach(icon => {
				Object.values(icon).forEach(eachIcon => {
					eachIcon.style.transform =
						'translate(' + mx / 4 + 'px,' + my / 4 + 'px)';
				});
			});
			// html5[0].style.transform = 'translate(' + mx / 9 + 'px,' + my / 9 + 'px)';

			// console.log(test);
		},
	},
};
</script>

<style lang="scss">
@import '../assets/scss/landing.scss';
</style>
