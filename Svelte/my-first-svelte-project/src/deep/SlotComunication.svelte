<script>
	export let items
</script>


<p>slot comunication</p>
<ul>
	{#each items as item}
		<li>
			<slot prop={item}></slot>
		</li>
	{/each}
</ul>
