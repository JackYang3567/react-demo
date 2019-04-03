import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
        <div className="container">
          <div className="slide">
            <div className="slider-slide owl-carousel owl-theme">
                <div className="content">
                <div className="mask"></div>
                <img src="images/slider1.jpg" alt=""/>
                <div className="slider-caption">
                    <span>WELCOME TO UVEN</span>
                    <h2>NATURAL PLACE</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.</p>
                </div>
                </div>
                <div className="content">
                    <div className="mask2"></div>
                    <img src="images/slider2.jpg" alt=""/>
                    <div className="slider-caption">
                        <span>WELCOME TO UVEN</span>
                        <h2>SECURE PLACE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.</p>
                    </div>
                </div>
                <div className="content">
                    <div className="mask"></div>
                    <img src="images/slider3.jpg" alt=""/>
                    <div className="slider-caption">
                        <span>WELCOME TO UVEN</span>
                        <h2>COMFORTABLE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
export default Slider;