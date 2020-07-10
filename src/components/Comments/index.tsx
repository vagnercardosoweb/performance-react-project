import React from 'react';

import CommentItem from './Item';

export interface CommentItemProps {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

interface CommentListProps {
	comments: CommentItemProps[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
	return (
		<div className="comment-list">
			<strong>Comentários ({comments.length})</strong>

			<ul>
				{comments.map(comment => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</ul>
		</div>
	);
};

export default React.memo(CommentList);
