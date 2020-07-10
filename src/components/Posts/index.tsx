import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Comments from '../Comments';

import User, { UserProps } from '../User';

interface IPosts {
	id: number;
	body: string;
	title: string;
	user: UserProps;
	comments: [];
}

const Posts: React.FC = () => {
	const [posts, setPosts] = useState<IPosts[]>([]);

	const [formPost, setFormPost] = useState({ title: '', body: '' });

	const postFormatted = useMemo(() => {
		return posts.map(post => ({
			...post,
			titleMin:
				post.title.length > 40
					? post.title.substr(0, 40).concat('...')
					: post.title,
		}));
	}, [posts]);

	const clearFormPost = useCallback(() => {
		setFormPost({ title: '', body: '' });
	}, []);

	const fetchPosts = useCallback(async function () {
		const url =
			'https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user';
		const response = await fetch(url);
		const responseJson = await response.json();

		setPosts(responseJson);
	}, []);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	const handleNewPost = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			// Adiciona post
			// const { title, body } = formPost;

			alert('Novo post...');

			clearFormPost();
		},
		[clearFormPost]
	);

	function handleInputChange(
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	): void {
		setFormPost({ ...formPost, [e.target.name]: e.target.value });
	}

	return (
		<>
			<form onSubmit={handleNewPost}>
				<input
					placeholder="Título do post"
					name="title"
					onChange={handleInputChange}
					value={formPost.title}
				/>

				<textarea
					placeholder="Corpo do post"
					name="body"
					onChange={handleInputChange}
					value={formPost.body}
				/>

				<button type="submit">Publicar</button>
			</form>

			<div className="post-list">
				{postFormatted.map(post => (
					<article key={post.id}>
						<User name={post.user.name} email={post.user.email} />

						<strong>{post.titleMin}</strong>

						<p>{post.body}</p>

						<Comments comments={post.comments} />
					</article>
				))}
			</div>
		</>
	);
};

export default Posts;
