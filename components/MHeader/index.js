import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './index.less'
class MHeader extends Component{
    back=()=>{
        this.props.history.goBack();
    }
    render(){
        return (
            <div className="m_header">
                <i className="iconfont icon-fanhui" onClick={this.back}></i>
                {this.props.title}
            </div>
        )
    }
}
export default withRouter(MHeader)