<script>
	import FancyInput from './FancyInput.svelte';

	export let count = 20;
	$: doubleCount = count * 2;
	$: quadCount = doubleCount * 2;
	let isWarning = false;

	$: {
		if(quadCount >100) {
			isWarning = true;
		}
	}

	let inputValueFromOuter = 'Hi from outer';
</script>

<style>
	.warning{
		background-color: red;
	}


</style>

<p>
	Count = {count}
</p>

<p>
	doubleCount = {doubleCount}
</p>

<p>
	quadCount = {quadCount}
</p>

<button
	on:click={()=>{count+=1}}
	class:warning={isWarning}
>
	+
</button>

<FancyInput bind:inputValue={inputValueFromOuter}/>

<input bind:value={inputValueFromOuter}>
