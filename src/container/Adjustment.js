import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router';
import action from '../redux/action';
import {connect} from 'react-redux';
import HeaderBackground from '../components/HeaderBackground';
import Text from '../components/Text';
import ajax from '../components/ajaxGet'
import grep from '../components/Grep';
import CountPrice from '../components/CountPrice';
import Price from '../components/Price';
class Adjustment extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    let abc = this.props.area; //初始面积
    var _this = this;
    ajax({
      url: "http://www.51ddo.com/app_dev.php/api/price", //请求地址
      type: "GET", //请求方式
      data: {
        area: abc
      }, //请求参数
      dataType: "json",
      success: function(response, xml) {
        _this.props.feachPrice(JSON.parse(response))

      },
      fail: function(status) {
        console.log(erro)
      }
    });
    let shengyu =   this.props.lastArea;
    let str = 0;
    for (var i in  this.props.select) {
      if(i <   this.props.select.length-1)
      str += parseInt(  this.props.select[i].value);
    }

    const jieguo = shengyu - str;

      this.props.addList({
      afterarea: {
        value: jieguo
      }
    })

  }

  onChange(e) {
    if(e.value == ''){
      e.value = 0
    }
    console.log(this.props.afterarea,'222')
    this.props.select[e.id].value = e.value;
    Price(this.props);
    // this.props.select[this.props.select.length-1].value = this.props.afterarea;
  }

  onClick(){
      // Price(this.props)
      // this.props.select[this.props.select.length-1].value = this.props.afterarea;
  }
  render() {
    const {select, onBande, afterarea, area, lastArea,todos1,todos2} = this.props;
    return (
      <div className='Adjustment'>
        <div className='header-top'>
          <span>
            <Link to='/Configuration'>＜</Link>
          </span>
          <p>功能区面积调整
          </p>
          <HeaderBackground/>
          <h5>剩余<b>{afterarea}</b>平方米</h5>
        </div>
        <Text list={select} onHande={this.onChange}  area={afterarea}/>
        <h3>注:(剩余面积均默认为敞开办公区)</h3>
        <div className='button'>
          <Link to='/Pricesheet' onClick={this.onClick.bind(this)}>下一步</Link>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {select: state.select, area: state.area.value, afterarea: state.afterarea.value, price: state.price, lastArea: state.lastArea.value,todos1:state.todos1,todos2:state.todos2}
}

function mapDispatchToProps(dispatch) {
  return {
    addList: (event) => dispatch(action.addList(event)),
    lastPrice: (event) => dispatch(action.lastPrice(event)),
    feachPrice: (event) => dispatch(action.feachPrice(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adjustment);
