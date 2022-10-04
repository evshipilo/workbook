<script context="module">
	
	export async function load({ url, params, props, fetch, session, stuff }) {
		const dataUrl = `https://jsonplaceholder.typicode.com/posts/${params.something}`
		const response = await fetch(dataUrl);

		return {
			status: response.status,
			props: {
				post: response.ok && (await response.json())
			}
		};
	}
</script>

<script>

	export let post;
</script>



<h2>sub second</h2>

<p>data from load: {post.title}</p>
