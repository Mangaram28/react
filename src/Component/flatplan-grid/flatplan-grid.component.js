import React from 'react';

import FlatplanDropdown from '../flatplan-dropdown/flatplan-dropdown.component';
import FlatplanMarker from '../flatplan-marker/flatplan-marker.component';
import './flatplan-grid.styles.scss';

const FlatplanGrid = ({Users, ...otherProps}) => {

        return(
                <div class="container-fluid">
                    <div className='row'>
                        {Users.map((user,index) =>(
                            <React.Fragment key={index}>
                                
                                    <div className="card col-xs-2 mt-3 mb-3 mr-2 pr-0 pl-0 imageSet" style={{height:'160px',width:'95px',backgroundColor:'#676767' }} >
                                        
                                       {(user.fp_type) ? <FlatplanMarker users={user} {...otherProps}></FlatplanMarker> : <div style={{marginTop:'31px'}}></div> } 
                                      
                                        
                                        
                                            { /*<img className="card-img-top " src='https://i.picsum.photos/id/0/100/200.jpg' alt="Card image" style={{height:'180px',}}/> */ }
                                            <div className="fp_img" style={{backgroundColor :(user.fp_type === 'ad') ? '#91E0ED' : (user.fp_type === 'ed') ?  '#C2C2C2'  : '#676767'}}>
                                                 <img className="gridImg" src=''/> 
                                            </div>

                                        <FlatplanDropdown users={user} {...otherProps}></FlatplanDropdown>
                                    </div>
                        
                                    
                            </React.Fragment>
                        ))}       
                    </div>    
                </div>         
        )
};



export default FlatplanGrid;