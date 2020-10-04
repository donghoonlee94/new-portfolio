<template>
	<div>
		<h1>API Get Test</h1>
		<div
			v-for="skil in skilList"
			:key="skil.id"
			:ref="skil.name"
			:class="[skil.lowerName, 'landing-page__skil-each']"
		>
			<img :src="skil.imgUrl" :ref="skil.name" />
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
		console.log(this.$refs);
	},
	methods: {
		...mapActions('skils', {
			getSkils: GET_SKILS,
		}),
	},
};
</script>

<style lang="scss">
@import url('../assets/scss/landing.scss');
</style>
