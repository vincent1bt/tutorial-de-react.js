import React from 'react';

export default class Comment extends React.Component {
	render() {
		return (
			<div className="comment">
				<h2 className="comment-author">Author: {this.props.author}</h2>
				body: {this.props.children}
				{
					//para poder ejecutar javascript dentro de jsx se usan las llaves {}
				}
			</div>
		)
	}
}