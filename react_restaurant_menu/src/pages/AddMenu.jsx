import React, { Component } from 'react';
import MenuService from '../services/MenuService';

class AddMenu extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id: this.props.match.params.id,
            menu:{}

        }  
        // this.state={
        //    title:'',
        //    category:'',
        //    price:'',
        //    image:'',
        //    description:''
        // }
      
        // this.idHandler = this.idHandler.bind(this);
        // this.titleHandler = this.titleHandler.bind(this);
        // this.categoryHandler = this.categoryHandler.bind(this);
        // this.priceHandler = this.priceHandler.bind(this);
        // this.imageHandler = this.imageHandler.bind(this);
        // this.descriptionHandler = this.descriptionHandler.bind(this);

    }//Closing constructor

     
    // idHandler=(event) => {
    //     this.setState({
    //          id: event.target.value});
    // }


    titleHandler=(event) => {
        this.setState({
           title: event.target.value});
    }

     
    categoryHandler=(event) => {
        this.setState({
             category: event.target.value});
    }

    priceHandler=(event) => {
        this.setState({
           price: event.target.value});
    }

    imageHandler=(event) => {
        this.setState({
           image: event.target.value});
    }

    descriptionHandler=(event) => {
        this.setState({
           description: event.target.value});
    }

    saveMenu = (e) => {
        e.preventDefault();
        let menu={
           //id: this.state.id,
           title: this.state.title,
           category: this.state.category,
           price: Number(this.state.price),
           image: this.state.image,
           description: this.state.description
        };
        console.log(menu);
        MenuService.createMenu(menu).then(res =>{
                this.props.history.push('/listMenu');  
            }).catch(err=>{
                console.log("record not saved.");
            });
        
    }//closing save method

    cancel(){
        this.props.history.push('/listMenu');
    }


    render() {
        return (
            <div>
                {/* <div> //className="container"> */}
                <div>
                   <div className="row">
                      <div className="">
                          <h3 className="text-center">Add Menu Item</h3>
                          <div className="card-body">
                              <form>  
                                  {/* <div className="form-group">
                                    <label>Menu ID: </label>
                                    <input placeholder= "Id" name="id" className="form-control"
                                    value={this.state.id} onChange={this.idHandler} />
                                   </div>    */}
                                   <div className="form-group">
                                      <label>Menu Title: </label>
                                      <input placeholder= "Title" name="title" className="form-control"
                                      value={this.state.title} onChange={this.titleHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Menu Category: </label>
                                      <input placeholder="Category" name="category" className="form-control" 
                                        value={this.state.category} onChange={this.categoryHandler}
                                      />
                                   </div> 
                                   <div className="form-group">
                                      <label>Menu Price: </label>
                                      <input placeholder= "Price" name="price" className="form-control"
                                      value={this.state.price} onChange={this.priceHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label>Menu Image: </label>
                                      <input placeholder= "Image" name="image" className="form-control"
                                      value={this.state.image} onChange={this.imageHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label>Menu Description: </label>
                                      <input placeholder= "Description" name="description" className="form-control"
                                      value={this.state.description} onChange={this.descriptionHandler} />
                                   </div>  

                                     <button className="btn btn-success" onClick={this.saveMenu}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                                
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddMenu;