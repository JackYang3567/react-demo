import React, { Component } from 'react';
//import Preloader  from '../../components/pages/home/preloader'
// <Preloader />
//import Header from '../../components/nav/header';
//import Footer from '../../components/nav/footer';
import Sidebar from '../../components/nav/sidebar';
import $ from 'jquery'
import './Master.css';

class Master extends Component {
  constructor (props){
    super(props)

  }

  componentDidMount(){
    // $(".preloader").fadeOut();
    
  }

  render() {
    return (
      <div>
         
          <Header />
          <main>
               <Sidebar />
              {this.props.children}
          </main>
          <Footer />
        {
          /*
          <NavFloatFooterBar id="navfloat" />
          <BackToTop />
          */
        } 
      </div>
      );
    }
  }
  
export default Master;




