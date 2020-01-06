import React, {Component} from 'react';
import './loaderHOC.scss';


const LoaderHOC = (props) => (WrappedComponent) => {
    class LoaderHOC extends Component{
        
        render(){

            
          return  <WrappedComponent/>

        }
    }

   return LoaderHOC;
}

export default LoaderHOC;