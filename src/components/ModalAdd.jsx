import React,{ Component } from 'react'
import accounting from 'accounting'

class ModalAdd extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: null,
			name: '',
			count: '',
			price: '',
			nameValid: true,
			countValid: true,
			priceValid: true
		}
	}

	handleName(name) {
		this.setState({ name });
	}

	handleCount(count) {
		this.setState({ count });
	}

	handlePrice(price) {
		this.setState({ price });
	}

	inputValidate() {
		(this.state.name !== '') 
		? this.setState({ nameValid: true }) 
		: this.setState({ nameValid: false });

		(this.state.count !== '')
		? this.setState({ countValid: true })
		: this.setState({ countValid: false });

		(this.state.price !== '')
		? this.setState({ priceValid: true })
		: this.setState({ priceValid: false });
	}

	addProduct() {
		
		this.inputValidate();

		if(this.state.name !== '' && this.state.count !== '' && this.state.price !== ''){
			 
			 let product = {
				id: Math.random(),
				name: this.state.name,
				count: this.state.count,
				price: this.state.price
			}

        
	        this.props.products.push(product);
	        var products = JSON.stringify(this.props.products);
	        localStorage.setItem('products',products);
	      
			this.props.hideAddClick();
		}

		
	}

	
    render() {
    
    	return(
    		<div className="ModalAdd">
    			<div className="modal" role="dialog">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
								    <button onClick={this.props.hideAddClick} type="button" className="close" aria-label="Close">
								    	<span aria-hidden="true">&times;</span>
								    </button>
									<h4>Modal</h4>
								</div>
								<div className="modal-body">
									<div className="form-group">
										<label>Name: { this.state.name }</label>
										<input type="text" className={
											(this.state.nameValid) ? 'form-control' : 'form-control input-danger'
										} value={this.state.name} onChange={event => this.handleName(event.target.value)}/>
										{
											(!this.state.nameValid) 
											? <small className="text-danger">Name field is required</small> 
											: <small></small>
										}
									</div>
									<div className="form-group">
										<label>Count: { this.state.count }</label>
										<input type="number" className={
											(this.state.countValid) ? 'form-control' : 'form-control input-danger'
										} value={this.state.count} onChange={event => this.handleCount(event.target.value)}/>
										{
											(!this.state.countValid) 
											? <small className="text-danger">Count field is required</small> 
											: <small></small>
										}
									</div>
									<div className="form-group">
										<label>Price: { accounting.formatMoney(this.state.price) }</label>
										<input type="number" className={
											(this.state.priceValid) ? 'form-control' : 'form-control input-danger'
										} value={this.state.price} onChange={event => this.handlePrice(event.target.value)}/>
										{
											(!this.state.priceValid) 
											? <small className="text-danger">Price field is required</small> 
											: <small></small>
										}
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-info" onClick={() => this.addProduct()}>Add</button>
								</div>
							</div>
						</div>
				</div>
    		</div>
    	)
    }
}

export default ModalAdd;