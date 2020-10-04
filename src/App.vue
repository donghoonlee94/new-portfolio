<template>
	<!-- eslint-disable -->
	<div id="app">
		<Landing />
	</div>
</template>

<script>
import Landing from './components/Landing';

export default {
	name: 'App',
	components: {
		Landing,
	},
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/common.scss';
</style>
