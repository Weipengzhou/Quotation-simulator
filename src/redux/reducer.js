const initialState = {
  people:0,
  area:{
    value:0
  }
}

//用户输入面积  area  //剩余面积 afterarea //折算后面积 lastarea
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_AREA':
      return Object.assign({}, state, {
        area: {
          value: action.text
        }
      });
      case 'AFTER_AREA':
      return Object.assign({}, state, {
        afterarea: {
          value: action.text
        }
      });
      case 'LAST_AREA':
      return Object.assign({}, state, {
        lastArea: {
          value: action.text
        }
      });
    case 'USER_PEOPLE':
      return Object.assign({}, state, {
        people: action.text
      });
    case 'BUTTON_CLICK_ONE':
      return Object.assign({}, state, {
        todos1: action.text.checked
      });
    case 'BUTTON_CLICK_TWO':
      return Object.assign({}, state, {
        todos2: action.text.checked
      });
    case "FEACH_PRICE":
      return Object.assign({}, state, {
        price: action.text
      });
    case 'OFFICE_SELECT':
      return Object.assign({}, state, {
        select: action.text
      });
    case 'OFFICE_ADD':
      return Object.assign({}, state, {
        afterarea: action.text.afterarea,
        price: action.text.price
      });
    case 'LAST_PRICE':
      return Object.assign({}, state, {
        lastPrice:action.text
      });
  
    default:
      return state;
  }
}

export default reducer;
