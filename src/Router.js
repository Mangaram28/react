import React from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';

import Header from '../src/Component/header/header.component';
import FlatPlan from '../src/Component/flatplan-root/flatplan.component';

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
       
        this.state=({
           currentUser : null
        });
    }

    render() {
   
        return (
            <div>
                  
                <Router>
                <Header/>
                    <Switch>
                            <Route path="/" exact component={FlatPlan} />
                          {/*  <Route path="/Profile/:id" exact component={}  />
                               <Route path="/SignUp" exact component={} />
                               <Route path="/UserPreview" exact component={} />  */}
                    </Switch>
                </Router>
            </div>
        );
    }
}