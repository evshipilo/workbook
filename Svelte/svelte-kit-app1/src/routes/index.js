export async function get() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	const post = await response.json();
	return {
		body: { post }
	};
}
