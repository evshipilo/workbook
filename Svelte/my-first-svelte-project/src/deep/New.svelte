<script>
	export let a = 'n'
	$: {a += "N"}
</script>


<style>
	p {
		cursor: pointer;
		color: #d5c4c4;
	}
</style>


<button on:click={() => {a += 'n'}}> {a} </button>


<input bind:value={a}>
<p>{a}</p>
