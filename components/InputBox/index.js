import React,{Component} from 'react';
import './index.less'
export default class InputBox extends Component{
    constructor(){
        super();
        this.state={
            flag:true,//判定是明文显示还是密文显示
            iphoneShow:false,//输入手机号码输入框的状态
            seeShow:false,//密码框的状态
            nextStep:false
        }
    }
    showExpress=()=>{

        this.setState({flag:!this.state.flag});
        if(this.refs.true.type==='text'){
            this.refs.true.type='password'
        }else{
            this.refs.true.type='text'
        }
    };
    determine=()=>{
        if(this.refs.iphone.value!==''&&this.refs.true.value!==''){
            this.setState({nextStep:true})
        }
    }
    iphoneShowIcon=(event)=>{
        this.setState({seeShow:false});
        if(event.target.value!==''){
            this.setState({iphoneShow:true
            });
        }
        this.determine();
    };
    seeShowIcon=(event)=>{
        if(event.target.value!==''){
            this.setState({seeShow:true});
        }
        this.determine();
    };
    iphoneShowIconSee=(event)=>{
        this.setState({iphoneShow:false});
        this.seeShowIcon(event);
    };
    hiddenRemove=()=>{
        this.refs.iphone.value='';
    };
    propsClickLogin=()=>{
        this.props.onfont();
    }
    render(){
        return (
            <div>
                <div className="user_div">
                    <i className="iconfont icon-shouji iphone_icon"/>
                    {this.props.numBer?<span>{this.props.numBer}</span>:null}
                    <input type="text" className="user_input" onChange={this.iphoneShowIcon} onFocus={this.iphoneShowIcon} ref="iphone" placeholder={this.props.user}/>
                    {
                        this.state.iphoneShow?<i className="iconfont icon-iconfonttianjia remove_icon" onClick={this.hiddenRemove}/>:null
                    }

                </div>
                <div className="user_div">
                    <i className="iconfont icon-iconset0114 iphone_icon"/>
                    <input type="password" className="user_input" onChange={this.seeShowIcon} onFocus={this.iphoneShowIconSee} ref placeholder={this.props.password}/>
                    {
                        this.state.seeShow?<i className={`iconfont ${this.state.flag?"icon-yanjing":"icon-yanjing1"} remove_icon`} onClick={this.showExpress}/>:null
                    }

                </div>
                <button className={`NextStep ${this.state.nextStep?'d43':'a43'}`} onClick={this.propsClickLogin}>{this.props.button}</button>
            </div>
        )
    }
}