import React,{ Component } from 'react'
import Productlist from './components/Productlist'
import './App.css'

class App extends Component {
	render() {
      
        return (
        	<div className="App container">
        		<Productlist/>
        	</div>
        )

	} 
}

export default App;