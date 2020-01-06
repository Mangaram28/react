import React from 'react';

import SearchBox from '../SearchBox/Searchcomponent';
import FlatplanGrid from '../flatplan-grid/flatplan-grid.component';
import Userdata from '../../Userdata';




class FlatPlan extends React.Component{
constructor(props){
    super(props);

    this.state = {
        Users: Userdata,
        searchField:'',
    };

}

  handlechange = (e) => {
    const {name,value} = e.target;
    this.setState({
      [name]: value
    });
  } 

  saveChanges = (e) => {
    
    const {dataset,id} = e.currentTarget;
    
    this.setState(prevState => {
      const newItems = [...prevState.Users];
      newItems[dataset.id].fp_type = id;

      const markercheck = (id) ? '' : newItems[dataset.id].marker ='';  

      return {Users: newItems};  
    });

  } 


  handleEditMarketChange(e) {
    const {value} = e.currentTarget;

    //this.setState({value: e.target.value});
  }

  handleEditMarket = (e) => {
    e.preventDefault();

    const{value ,name} = e.target[0];

  

    this.setState(prevState => {
      const newItems = [...prevState.Users];
      newItems[name].marker = value;
      return {Users: newItems};  
    });
  }


  

  /*callback and prevState check*/
  /*handlecheck = (e) => {
    this.setState((prevState) => {
        return {'Check': !prevState.Check}
    },() => console.log(this.state.Check))
  }*/
 
    render(){
        const {Users,searchField} = this.state;
        //filter to find state
        const Filteruser = Users.filter(users => 
            users.marker.toLowerCase().includes(searchField.toLowerCase())
        )
         

        return(
            <div>
                     
                       {/*<input type="search" placeholder="name" onChange={e => 
                        this.setState({searchField: e.target.value})
                                        }/>*/}  
                                     
                      <div className="container-fluid">
                          <div className='row'>
                                <div className='col-xs-2'>
                                      <SearchBox handlechange={this.handlechange}/>
                                </div>
                                <div className='col-sm-10'>
                                      <FlatplanGrid Users={Filteruser} DropdownChange={this.saveChanges} EditMarker={this.handleEditMarket} ChangeEditMarker={this.handleEditMarketChange}></FlatplanGrid>
                                </div>
                         
                          </div>
                      </div>
            </div>    
        )
    }
}



export default FlatPlan;