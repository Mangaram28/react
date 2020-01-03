import React from 'react';
import './flatplan-dropdown.styles.scss';


const FlatplanDropdown = ({users,DropdownChange}) => {
    const {id,fp_type} = users;
    return(
    <div className='col-xs-2' style={{marginBottom: '-27px',color:'white'}}>
        <button type="button" class="dropdown-toggle" data-toggle="dropdown">
        
    </button>{id}
    

    <div class="dropdown-menu">
      {(fp_type) ? 
           (<li onClick={DropdownChange} class="dropdown-item" data-id={id} id=''>Delect Page Marker</li>) : 
           (<div><li onClick={DropdownChange} class="dropdown-item" data-id={id} id='ad'>Ad</li><li onClick={DropdownChange} class="dropdown-item" data-id={id} id='ed'>Ed</li></div>)}
    </div>
      
  </div>
  
    )
}

export default FlatplanDropdown;