import React, { useState } from 'react';
import './flatplan-marker.styles.scss';


const FlatplanMarker = ({users ,EditMarker ,DropdownChange }) => {
  const {id ,fp_type ,marker} = users;

  const [state, setState] = useState(true);

  function toggle() {

    setTimeout(() => {
      setState(!state);
      console.log('okay');
    }, 2000);
    
  }
    
    return(
    
    <div className='col-xs-2' style={{marginBottom: '5px',backgroundColor : (fp_type === 'ad') ? '#91E0ED' : (fp_type === 'ed') ?  '#C2C2C2'  : '#676767'}}>
           <button type="button" class="dropdown-toggle" data-toggle="dropdown"></button><small>{marker}</small>

              <div class="dropdown-menu">
                  <button type="submit" class="dropdown-item" data-toggle="modal" data-target={`#popupCall${id}`} >Edit Marker</button>
                  <li onClick={DropdownChange} class="dropdown-item" data-id={id} id=''>Delect Page Marker</li>
                  
              </div>
               

             
                  {/*--- PopUp marker ---*/}
                  <div class="modal fade" id={`popupCall${id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Edit Marker</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                              <form onSubmit={EditMarker}>
                                <div class="modal-body">
                                    <div class="form-group">
                                      <label htmlFor="recipient-name" class="col-form-label">Name:</label>
                                      <input type="text" class="form-control" name={id} id="recipient-name" />
                                    </div> 
                                </div>
                                <div class="modal-footer">
                                  <button type="submit" class="btn btn-primary" onClick={toggle}  >Ok</button>
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                </div>
                              </form> 
                      </div>
                    </div>
                  </div>
                  {/* -------------- */}

    
       
    </div>
    
    )
}

export default FlatplanMarker;