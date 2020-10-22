import { storiesOf } from '@storybook/vue';
import SideProfile from '../components/SideProfile.vue';

storiesOf('CommonUI/PartialLoading', module).add('default', () => ({
	components: { SideProfile },
	template: `<SideProfile></SideProfile>`,
}));
