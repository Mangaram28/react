import React from 'react';

import SearchBox from '../SearchBox/Searchcomponent';
import FlatplanGrid from '../flatplan-grid/flatplan-grid.component';
import Userdata from '../../Userdata';


class FlatPlan extends React.Component{
constructor(props){
    super(props);

    this.state= {
        Users: Userdata,
        searchField:'',
    };

    console.log(props);

}


 
  

  handlechange = (e) => {

    {console.log(this.state.Users[0].author)}
    
    const {name,value} = e.target;
    this.setState({
      [name]: value
    });
  } 

  saveChanges = (e) => {
    
    const {dataset,id} = e.currentTarget;
    console.log(dataset.id);
    console.log(id);
   

    this.setState(prevState => {
      const newItems = [...prevState.Users];
      newItems[dataset.id].fp_type = id;
      return {Users: newItems};  
    });

    console.log(this.state);
    
  } 


  handleEditMarketChange(event) {
    this.setState({value: event.target.value});
  }

  handleEditMarket = (e) => {
    alert('A name was submitted: ' + e.currentTarget.value);
    e.preventDefault();
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
                                     
                      <div class="container-fluid">
                          <div class='row'>
                                <div class='col-xs-2'>
                                      <SearchBox handlechange={this.handlechange}/>
                                </div>
                                <div class='col-sm-10'>
                                      <FlatplanGrid Users={Filteruser} DropdownChange={this.saveChanges} EditMarker={this.handleEditMarket}></FlatplanGrid>
                                </div>
                         
                          </div>
                       </div>
            
            </div> 
            
        )
    }
}



export default FlatPlan;