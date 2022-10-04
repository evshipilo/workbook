<script>
	import Counter from './deep/Counter.svelte';
	import New from './deep/New.svelte';
	import SlotComunication from './deep/SlotComunication.svelte';

	let b = 'o'
</script>

<style>
	p{
		color: cadetblue;
	}
</style>

<p>Text</p>

<Counter count={0}/>

<hr>

<New bind:a={b}/>


<hr>
<p>from app</p>
<input bind:value={b}>


<SlotComunication items={[1,2,3,4,5]} let:prop={thing}>
<div>{thing}</div>
</SlotComunication>
<hr>
<hr>
<hr>
<hr>



