import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router';
import action from '../redux/action';
import {connect} from 'react-redux';
import HeaderBackground from '../components/HeaderBackground';
import {LastList} from '../components/List';
import gg1 from '../img/gg1.png'
import gg2 from '../img/gg2.png'
import gg3 from '../img/gg3.png'
import gg4 from '../img/gg4.png'
import gg5 from '../img/gg5.png'
import gg6 from '../img/gg6.png'
import gg7 from '../img/gg7.png'
class Pricesheet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {select, people, area, lastPrice, lastArea} = this.props;
    return (
      <div className='Pricesheet'>
        <div className='header-top'>
          <span>
            <Link to='/Adjustment'>＜</Link>
          </span>
          <p>基础报价单
          </p>
          <HeaderBackground/>
        </div>
        <h5>
          <b>{lastPrice}</b>元</h5>
        <h6>（报价含税根据实际情况增减，幅度10%以内）</h6>
        <h2>
          预计工期
        </h2>
        <div className='day'>
          <p>
            <b>18</b>
            天</p>
          <p>（初步预算实际情况根据现场）</p>
        </div>
        <div className='center'>
          <div>
            <p>建筑面积</p>
            <b>{area.value}</b>
          </div>
          <div>
            <p>实际装修面积</p>
            <b>{lastArea.value}</b>
          </div>
          <div>
            <p>员工人数</p>
            <b>{people}</b>
          </div>
        </div>
        <div className='title'>
          <i className='yi'></i>
          <p>功能区面积</p>
        </div>
        <LastList list={select}/>
        <div className='title'>
          <i className='er'></i>
          <p>施工材料</p>
        </div>
        <ul className='gg clearfix'>
          <li>
            <span></span>
            <p>矿棉板</p>
          </li>
          <li>
            <span></span>
            <p>石膏板</p>
          </li>
          <li>
            <span></span>
            <p>开关插座</p>
          </li>
          <li>
            <span></span>
            <p>照明</p>
          </li>
          <li>
            <span></span>
            <p>电线</p>
          </li>
          <li>
            <span></span>
            <p>墙面漆</p>
          </li>
          <li>
            <span></span>
            <p>玻璃高隔</p>
          </li>
        </ul>
        <div className='button'>
          <Link to='/'>重新报价</Link>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {select: state.select, people: state.people, area: state.area, lastPrice: state.lastPrice, lastArea: state.lastArea}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricesheet);
