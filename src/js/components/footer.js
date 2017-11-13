/*
* @Author: Administrator
* @Date:   2017-11-05 09:57:01
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-05 16:42:40
*/
import React from 'react';
import { Input } from 'antd';
//var footerCss  =  require("../../css/footer.css");
export default class ComponentFooter extends React.Component{
  render(){ 
    var footerStyle = {
          "miniFooter": {
            "backgroundColor": "red"
          },
          "miniFooter_h1": {
            "fontSize": "8px",
            "color": "#000"
        }
    }
    return (
      <footer style={footerStyle.miniFooter}>
        <Input placeholder="基本使用" />
        <h1 style={footerStyle.miniFooter_h1}>这里是页脚，放置版权的一些信息。</h1>
      </footer>
    )
  }
}
