import React,{ Component } from 'react'

class SearchAdd extends Component {
   
    constructor(props) {
    	super(props);
    	this.state = {
    		query: ''
    	}
    }

    handleQuery(query) {

    	this.setState({
    		query
    	});

    	// var this.props.products.filter((product) => {
    	// 	return product.name.toUpperCase().match(this.state.query);
    	// });
    	
    }

    getSearchQuery() {
	    this.props.searchQuery(this.state.query);
	}


	render() {
		return(
			<div className="SearchAdd">

			   <div className="row">
			   	 <div className="form-group col-sm-4">
			   	 	<input className="form-control" value={this.state.query} onChange={event => this.handleQuery(event.target.value)}/>
			   	 </div>
			   	 <div className="form-group col-sm-4 block">
			   	 	<button className="btn btn-info" onClick={() => this.getSearchQuery()}>Search</button>
			   	 </div>
		
				 <div className="form-group col-sm-4 block">
				   <button className="btn btn-info pull-right" onClick={this.props.showAddClick}>Add New</button>
				 </div>
			   </div>

			</div>
		)
	}
}

export default SearchAdd;