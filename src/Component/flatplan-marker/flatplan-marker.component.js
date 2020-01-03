import React from 'react';
import './flatplan-marker.styles.scss';


const FlatplanMarker = ({users,DropdownChange,EditMarker}) => {
    //backgroundColor:'#C2C2C2'
    return(
      <React.Fragment>
    <div className='col-xs-2' style={{marginBottom: '5px',backgroundColor : (users.fp_type === 'ad') ? '#91E0ED' : (users.fp_type === 'ed') ?  '#C2C2C2'  : '#676767'}}>
           <button type="button" class="dropdown-toggle" data-toggle="dropdown"></button>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Edit Marker</a>
            <a class="dropdown-item" href="#">Delete Marker</a>



                  <button type="submit" class="dropdown-item" data-toggle="modal" data-target="#setMarker" >Edit Marker</button>
            </div>
               


          <div class="modal fade" id="setMarker" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <input type="text" class="form-control" name='marker' value='ok' id="recipient-name"/>
                      </div> 
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Ok</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  </div>
                </form> 
              </div>
            </div>
          </div>

    
       
    </div>
    </React.Fragment>
    )
}

export default FlatplanMarker;