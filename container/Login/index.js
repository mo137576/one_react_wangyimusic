import React,{Component} from 'react';
import MHeader from '../../components/MHeader/index';
import InputBox from '../../components/InputBox/index';
import {Link} from 'react-router-dom';
import './index.less'
export default class Login extends Component{
    clickLogin=()=>{
        console.log('手机登录')
    }
    render(){
        return (
            <div>
                <MHeader title="手机登录"/>
                <InputBox user="手机号" password="密码" button="登录" onfont={this.clickLogin}/>
                <Link to='/Login/Change' className="change_password">重&nbsp;置&nbsp;密&nbsp;码</Link>
            </div>
        )
    }
}