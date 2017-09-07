import React,{ Component } from 'react'

class ModalDel extends Component {
    

    deleteProduct() {
    	console.log(this.props.id);
    	var index = this.props.products.findIndex((product) => {
    		return product.id === this.props.id
    	});

    	this.props.products.splice(index,1);
    	var products = JSON.stringify(this.props.products);
    	localStorage.setItem('products',products);

    	this.props.hideDelClick();
    }


	render() {
		return(
			<div className="ModalDel">
				<div className="modal" role="dialog">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
							    <button onClick={this.props.hideDelClick} type="button" className="close" aria-label="Close">
							    	<span aria-hidden="true">&times;</span>
							    </button>
								<h4>Modal Delete</h4>
							</div>
							<div className="modal-body text-right">
								<button type="button" className="btn btn-success" onClick={() => this.deleteProduct()}>Ok</button>
								<button type="button" className="btn btn-danger">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ModalDel;