<script>
	export let inputValue = 'Hi';
	import {valFromStore} from '../stores';
	import {fade} from 'svelte/transition';

	$: isValFromStore = !!$valFromStore;

	const promise = new Promise(resolve => setTimeout(resolve, 1000)).then(() => 'text')
</script>

<div>
	<input
		type="text"
		bind:value={inputValue}
	>
</div>
<p>input value: {inputValue}</p>

{#if inputValue}
	<div>We got input</div>
{:else}
	<div>Empty</div>
{/if}

<hr>
{#await promise}
	<div>....Loading</div>
{:then someResult}
	{someResult}
{/await}

<hr>

<button on:click={()=>{valFromStore.set(0)}}>Set 0</button>
<button on:click={()=>{valFromStore.update(val=>val+1)}}>+1</button>
<p>valFromStore: {$valFromStore}</p>

{#if isValFromStore}
	<div transition:fade>transition</div>
{/if}
<hr>
