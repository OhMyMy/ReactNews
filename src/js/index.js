/*
* @Author: Administrator
* @Date:   2017-11-02 12:30:56
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-06 17:06:59
*/
var React = require('react');
var ReactDOM = require('react-dom');

import ComponentFooter from './components/footer';

class Index extends React.Component{
    render(){
        return(
            <div>
                <ComponentFooter/>
            </div>
        );       
    }
}
    


ReactDOM.render(<Index/>,document.getElementById('example'));