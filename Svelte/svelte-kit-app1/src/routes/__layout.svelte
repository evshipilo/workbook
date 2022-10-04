<script context="module">
	import { createClient } from '@urql/svelte';

	export async function load({ url, fetch, session, stuff }) {
		const client = createClient({
			url: 'https://graphqlzero.almansi.me/api',
			// Pass in the fetch from sveltekit to have access to serialized requests during hydration
			fetch
		});

		return {
			// pass client in props to client side
			props: { client },
			// pass client in stuff to other pages on the server side (load function)
			stuff: { client }
		};
	}

</script>

<script>
	import { setClient } from '@urql/svelte';
	export let client;
	import { operationStore, query } from '@urql/svelte';

	//set the graphQL client on the client side so that other pages inherit it
	setClient(client);

	const user = operationStore(`
   query {
  user(id: 1) {
    name
    email
    company{
      name
    }
  }
}
  `);

	query(user);
</script>

{#if $user.fetching}
	<p>Loading...</p>
{:else if $user.error}
	<p>Oh no... {$user.error.message}</p>
{:else}
	<h1>{$user.data.user.name}</h1>
{/if}

<div>
	<p>layout</p>
	<ul>
		<li><a href="/">default</a></li>
		<li><a href="/first">first</a></li>
		<li><a href="/second">second</a></li>
	</ul>

	<div class="bord">
		layout slot
		<slot />
	</div>
</div>

<style>
	.bord {
		border: 2px solid black;
	}
</style>
