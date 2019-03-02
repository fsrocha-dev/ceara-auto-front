<template>
	<div id="app">
		<Header />
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/template/Header"
import Content from "@/components/template/Content"
import Footer from "@/components/template/Footer"

export default {
	name: "App",
	components: {Header, Content, Footer}
}
</script>

<style>
	*, h1, h2, h3, h4 {
		font-family: 'Lato', sans-serif;
		font-weight: 300;
	}
	body {
		margin: 0;
	}
	#app {
		-webkit-font-smoothing: antialiased;
		-mox-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 1fr;
		grid-template-areas: 
			"header"
			"content"
			"footer"
	}
</style>