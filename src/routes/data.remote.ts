import { query } from '$app/server';

function rand() {
	return Math.round(Math.random() * 1000);
}

export const getData = query(async () => {
	await new Promise((resolve) => setTimeout(resolve, 1_000));
	return [
		{
			id: 1,
			title: `${rand()} — Hello World`,
			content: 'This is a test post',
			slug: 'hello-world'
		},
		{
			id: 2,
			title: `${rand()} — Goodbye World`,
			content: 'This is a test post',
			slug: 'goodbye-world'
		},
		{
			id: 3,
			title: `${rand()} — Foo Bar`,
			content: 'This is a test post',
			slug: 'foo-bar'
		},
		{
			id: 4,
			title: `${rand()} — Baz Qux`,
			content: 'This is a test post',
			slug: 'baz-qux'
		}
	];
});
