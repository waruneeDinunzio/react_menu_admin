import React, { Component } from 'react';
import MenuService from '../services/MenuService';

class ViewMenu extends Component {
    
        constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 menu:{}

             }  
        
    }// close constructor

     componentDidMount()
     {
        MenuService.getMenuById(this.state.id).then((res) =>{
            this.setState({menu:res.data})
         });
     }

     viewMenu(){
        this.props.history.push('/listMenu');
      
    }

     render() {
        return (
            <div>
                <div className="container">
                   <div className="row">
                      {/* <div className="card col-md-6 offset-md-3 offset-md-3"> */}
                      <div>
                          <h3 className="text-center">View Menu Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>Menu ID: </label>
                                    <input placeholder={this.state.menu.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Menu Title: </label>
                                      <input placeholder={this.state.menu.title} readOnly={true} name="title" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Menu Category: </label>
                                      <input placeholder={this.state.menu.category} readOnly={true} name="category" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>Menu Price: </label>
                                      <input placeholder={this.state.menu.price} readOnly={true} name="price" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>Menu Image: </label>
                                      <input placeholder={this.state.menu.image} readOnly={true} name="image" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                      <label>Menu Description: </label>
                                      <input placeholder={this.state.menu.description} readOnly={true} name="description" className="form-control" />
                                   </div>  
                                   <button className="btn btn-success" onClick={this.viewMenu.bind(this)}> Back to Menu Admin </button>                                 
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewMenu;