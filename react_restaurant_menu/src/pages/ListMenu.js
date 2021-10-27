import React, { Component } from 'react';
import MenuService from '../services/MenuService';

class ListMenu extends Component {
    constructor(props)
      {
          super(props)
          this.state={
                menus:[] 
          }
          this.addMenu=this.addMenu.bind(this);
          this.editMenu=this.editMenu.bind(this);
          this.deleteMenu=this.deleteMenu.bind(this);
          this.viewMenu=this.viewMenu.bind(this);
      }
    
     componentDidMount() {
         MenuService.getMenus().then((res) => {
             this.setState({menus:res.data});
         });
     }
     
     addMenu()
     {
        console.log(this.props)
        this.props.history.push(`/add-menu`);
     }

     editMenu(id)
     {
        this.props.history.push(`/update-menu/${id}`);
        
     }

     deleteMenu(id)
     {
        this.props.history.push(`/delete-menu/${id}`);
        
     }

     viewMenu(id)
     {
        this.props.history.push(`/view-menu/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Menus List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addMenu}> Add Menu</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Menu Id</th>
                                <th>Menu Title</th>
                                <th>Menu Category</th>
                                <th>Menu Price</th>
                                <th>Menu Image</th>
                                <th>Menu Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.menus.map(
                                     menu =>
                                     <tr key={menu.id}>
                                         <td>{menu.id}</td>
                                         <td>{menu.title}</td>
                                         <td>{menu.category}</td>
                                         <td>{menu.price}</td>
                                         <td>{menu.image}</td>
                                         <td>{menu.description}</td>
                                         <td>
                                            <button onClick={() =>this.editMenu(menu.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteMenu(menu.id)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() =>this.viewMenu(menu.id)} className="btn btn-primary">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListMenu;