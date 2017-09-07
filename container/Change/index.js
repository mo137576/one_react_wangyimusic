import React,{Component} from 'react';
import MHeader from '../../components/MHeader/index';
import InputBox from '../../components/InputBox/index';
import './index.less'
export default class Change extends Component{

    render(){
        return (
            <div>
                <MHeader title="修改密码"/>
                <InputBox user="输入手机号" password="设置登录密码，不少于6位" numBer="+86" button="下一步"/>
            </div>
        )
    }
}