import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

import './index.less';
export default class Middle extends Component{
    render(){
        return (
            <div className="login_All">
                <span className="iconfont icon-shanchu icon_content" onClick={this.props.history.goBack}></span>
                <div className="login_Logo">
                    <img src="http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg" alt="#" className="logo_Img"/>
                    <div className="iphone_input">
                        <Link to='/Login/index' className="user_button">手机号登录</Link>
                        <Link to='/logon/index' className="user_button">注册</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}