import React from 'react';
//import funciona como require
//indicas que quieres importar y de donde
import ReactDOM from 'react-dom';
//reactdom apartir de react 0.14 sirve para poder hacer render
//de los componentes
import CommentBox from 'js/components/commentBox'

//las clases son parecidas a las de otros lenguajes
//aqui creamos la clase MainView que hereda de React.Component
//este ya es considerado un componente
class MainView extends React.Component {
	//el metodo render sirve para indicar que elementos tipo html
	//se usaran en el componente
	render() {
		return (
			<div>
				<CommentBox url="http://jsonplaceholder.typicode.com/comments"/>
			</div>
			//usa una sintaxis llamada jsx para mayor facilidad
			//en compilacion, se crea un metodo llamado React.createElement(tag)
		)
	}
}

//con ReactDOm hacemos render del componente 
ReactDOM.render(
	<MainView/>,
	//la sintaxis para componentes es con camelcase y con etiqueta de cierre al final
	document.querySelector("#content")
	//indicamos en que parte del html se insertara el componente
);