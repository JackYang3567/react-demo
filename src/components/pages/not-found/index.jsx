import React from 'react'

import Master from '../../master'

export const NotFound = ({ location }) =>
  <Master>
    
    <div className="page-not-found">
        <div className="container">
            <div className="link-back">
                <a href="index.html"><i className="fas fa-times"></i></a>
            </div>
            <div className="content">
                <h2>404</h2>
                <h4>Page Not Found</h4>
                <h1>=没找到请求的页面资源 '{location.pathname}'</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni, reprehenderit ex et ipsum, eius sunt non praesentium, atque quos dolor amet dolorem</p>
            </div>
        </div>
    </div>
 </Master>
