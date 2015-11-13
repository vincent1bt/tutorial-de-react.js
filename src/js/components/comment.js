import React from 'react';

export default class Comment extends React.Component {
	render() {
		return (
			<div className="comment">
				<h2 className="comment-author">{this.props.author}</h2>
				{this.props.children}
				{
					//para poder ejecutar javascript dentro de jsx se usan las llaves {}
				}
			</div>
		)
	}
}