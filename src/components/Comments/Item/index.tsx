import React from 'react';

export interface ICommentItem {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

interface CommentItemProps {
	comment: ICommentItem;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
	return (
		<li>
			<header>
				<strong>{comment.name}</strong>
			</header>

			<p>{comment.body}</p>
		</li>
	);
};

export default React.memo(CommentItem);
