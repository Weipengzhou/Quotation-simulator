
'use strict';

import routes from './routes'
import React from 'react';
import { render } from 'react-dom';


const root = document.getElementById('app');
//引入样式文件
import './styles/app.scss';


//引入组件
import './routes/index';

render(routes, root)
