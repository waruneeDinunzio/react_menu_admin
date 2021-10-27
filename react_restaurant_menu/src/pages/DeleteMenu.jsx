import React, { Component } from 'react';
import MenuService from '../services/MenuService';

class DeleteMenu extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            
                id: this.props.match.params.id,
                menu:{}
              
        //     id:'',
        //    title:'',
        //    category:'',
        //    price:'',
        //    image:'',
        //    description:''
        }
        //this.deleteMenu = this.deleteMenu.bind(this);
    }// closing constructor

    componentDidMount()
    {
       MenuService.getMenuById(this.state.id).then((res) =>{
         let menu = res.data;
         this.setState({
                id:menu.id,
                title:menu.title,
                 category:menu.category,
                 price:menu.price,
                 image:menu.image,
                 description:menu.description
               });
       });
          
    }// closing componentDidMount

    deleteMenu = (e) => {
        e.preventDefault();
        let menu={
            id: this.state.id,
            title: this.state.title,
            category: this.state.category,
            price: Number(this.state.price),
            image: this.state.image,
            description: this.state.description
        };

        console.log(menu);
        MenuService.deleteMenu(this.state.id).then(res => {
            
            this.props.history.push('/listMenu');
        })
    }//closing deleteMenu()

    cancel(){
        this.props.history.push('/listMenu');
    }

    render() {
        return (
            <div>
            <div className="container">
               <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                      <h3 className="text-center">View Menu Details</h3>
                      <div className="card-body">
                          <form>  
                              <div className="form-group">
                                <label>Menu ID: </label>
                                <input placeholder={this.state.id} readOnly={true} name="id" className="form-control" />
                               </div>   
                               <div className="form-group">
                                  <label>Menu Title: </label>
                                  <input placeholder={this.state.title} readOnly={true} name="title" className="form-control" />
                               </div>   
                               <div className="form-group">
                                  <label>Menu Category: </label>
                                  <input placeholder={this.state.category} readOnly={true} name="category" className="form-control" />
                               </div> 
                               <div className="form-group">
                                  <label>Menu Price: </label>
                                  <input placeholder={this.state.price} readOnly={true} name="price" className="form-control" />
                               </div> 
                               <div className="form-group">
                                  <label>Menu Image: </label>
                                  <input placeholder={this.state.image} readOnly={true} name="image" className="form-control" />
                               </div>
                               <div className="form-group">
                                  <label>Menu Description: </label>
                                  <input placeholder={this.state.description} readOnly={true} name="description" className="form-control" />
                               </div>  
                                <button className="btn btn-success" onClick={this.deleteMenu}> Delete </button>
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

export default DeleteMenu;