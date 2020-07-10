import React from 'react';

export interface UserProps {
	name: string;
	email: string;
}

const User: React.FC<UserProps> = ({ name, email }) => {
	return (
		<div className="post-user">
			<div className="user-image">
				<img src={`https://ui-avatars.com/api/?name=${name}`} alt={name} />
			</div>

			<div className="user-info">
				<p className="name">{name}</p>
				<p className="email">{`<${email}>`}</p>
			</div>
		</div>
	);
};

export default React.memo(User);
