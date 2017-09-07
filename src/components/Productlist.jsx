import React,{ Component } from 'react'
import SearchAdd from './SearchAdd'
import ModalAdd from './ModalAdd'
import ModalDel from './ModalDel'
import ModalEdit from './ModalEdit'
import accounting from 'accounting'
//import products from '../products.js'


class Productlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			products: [],
			modalAddVisible: false,
			modalDelVisible: false,
			modalEditVisible: false,
			triangleDown: true,
			filteredProducts: [],
			query: ''
		}
	}
    
    componentWillMount() {

       var products = JSON.parse(localStorage.getItem('products'));
    	
    	if(products !== null){
    		  console.log(products);
              this.setState({
              	  products,
              	  filteredProducts: products
              });
              
    	}else{
    		console.log(this.state.products.length);
    	}
        
    }

	showAddModal() {
		this.setState({
			modalAddVisible: true
		});
	}

	hideAddModal() {
		var products = JSON.parse(localStorage.getItem('products'));
		this.setState({
			modalAddVisible: false,
			filteredProducts: products
		});
	}

	showDelModal(id) {
		
		this.setState({
			modalDelVisible: true,
			id
		});
	}

	hideDelModal() {
		this.setState({
			modalDelVisible: false
		})
	}

	showEditModal(id) {
		this.setState({
			modalEditVisible: true,
			id
		});
	}

	hideEditModal() {
		var products = JSON.parse(localStorage.getItem('products'));
		products = products.filter((product) => {
			return product.name.toUpperCase().match(this.state.query.toUpperCase());
		});
		this.setState({
			modalEditVisible: false,
			filteredProducts: products
		})
	}

	sortProducts() {
		this.setState({
			products: this.state.products.reverse(),
			triangleDown: !this.state.triangleDown
		})
		console.log(this.state.triangleDown);
	}

	searchQuery(query) {
		
		var products = JSON.parse(localStorage.getItem('products'));
		products = products.filter((product) => {
			return product.name.toUpperCase().match(query.toUpperCase());
		});

		this.setState({
			filteredProducts: products,
			query: query
		});
	}

	

	
	render() {
		return(
			<div className="Productlist col-sm-12">
			    <SearchAdd  searchQuery={(query) => this.searchQuery(query)} showAddClick={() => this.showAddModal()}/>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name <span onClick={() => this.sortProducts()} className={
								(this.state.triangleDown) ? 'triangle-down pull-right' : 'triangle-up pull-right'
							}></span></th>
							<th>Price <span onClick={() => this.sortProducts()} className={
								(this.state.triangleDown) ? 'triangle-down pull-right' : 'triangle-up pull-right'
							}></span></th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					   {
					   	  this.state.filteredProducts.map((product,key) => {
					   	  	  return (
					   	  	   	   <tr key={key}>
										<td>{ product.name } <span className="badge">{ product.count }</span></td>
										<td>{ accounting.formatMoney(product.price) }</td>
										<td>
											<button className="btn btn-default" onClick={() => this.showEditModal(product.id)}>Edit</button>
											<button className="btn btn-danger" onClick={() => this.showDelModal(product.id)}>Delete</button>
										</td>
									</tr>
					   	  	   )
					   	  })
					   }
						
					</tbody>
				</table>
				{
					(this.state.modalAddVisible !== false)
					? <ModalAdd 
					    hideAddClick={() => this.hideAddModal()}
					    products={this.state.products}
					   />
					: <div></div>
				}
				{
					(this.state.modalDelVisible !== false)
					? <ModalDel products={this.state.products} id={this.state.id} hideDelClick={() => this.hideDelModal()}/>
					: <div></div>

				}
				{
					(this.state.modalEditVisible !== false)
					? <ModalEdit  products={this.state.products} id={this.state.id} hideEditClick={() => this.hideEditModal() } />
					: <div></div>
				}
				
			</div>
		)
	}
}

export default Productlist;