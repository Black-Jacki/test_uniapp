<template>
	<view class="home">
    <Home-album></Home-album>
    <Home-category></Home-category>
    <Home-new></Home-new>
		<Home-recomment></Home-recomment>
	</view>
</template>

<script>
	import homeAlbum from "../../component/Home-album/Home-album";
	import homeCategory from "../../component/Home-category/Home-category";
	import homeNew from "../../component/Home-new/Home-new";
	import homeRecomment from "../../component/Home-recomment/Home-recomment";
	export default {
		data() {
			return {};
		},
		components: {
      homeAlbum,
      homeCategory,
      homeNew,
			homeRecomment,
		},
	};
</script>

<style lang="scss" scoped>
</style>