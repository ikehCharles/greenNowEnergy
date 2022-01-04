import React from "react";
import Landing from "../components/Landing";
import AboutUsHome from "../components/AboutUsHome";
import ServicesHome from "../components/servicesHome";
import "./Home.css";
import ProjectHome from "../components/projectHome";
import Testimonial from "../components/testimonial";
import Slides from '../components/slides';
import {appCTA} from '../appCrendentials'
import {useState} from 'react'

export default function Home() {
  

  return (
    <div>
      {/* <Landing /> */}
      {/* <AboutUsHome learnMore={true} /> */}
      {/* <ProductHome /> */}
      {/* <ServicesHome /> */}
      {/* <ProjectHome /> */}
      {/* <Testimonial /> */}
      <Slides>
      <div className="slide" style={{ backgroundImage: 'url(https://images.pexels.com/photos/9875673/pexels-photo-9875673.jpeg?cs=srgb&dl=pexels-kindel-media-9875673.jpg&fm=jpg)' }}>
      <h2 style={{fontSize:60, marginTop:'-300px', color:'goldenrod'}}>{appCTA.main.text} {appCTA.main.highlighted}</h2>
    </div>
    <div className="slide" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1637417494521-78b4d1d33029?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)' }}>
    <h2 style={{fontSize:60, marginTop:'-300px', color:'goldenrod'}}>{appCTA.main.text} {appCTA.main.highlighted}</h2>
    </div>
    <div className="slide" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)' }}>
    <h2 style={{fontSize:60, marginTop:'-300px', color:'goldenrod'}}>{appCTA.main.text} {appCTA.main.highlighted}</h2>
    </div>
    <div className="slide" style={{ backgroundImage: 'url(https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?cs=srgb&dl=pexels-kindel-media-9875418.jpg&fm=jpg)' }}>
    <h2 style={{fontSize:60, marginLeft:'-600px', width:400, lineHeight: 1.5, color:'goldenrod'}}>{appCTA.main.text} {appCTA.main.highlighted}</h2>
    </div>
    <div className="slide" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)' }}>
      <h2>Together We Can Save This Planet</h2>
    </div>
      </Slides>
    </div>
  );
}
// class Slides extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       active: 0
//     }
//     this.goPrev = this.goPrev.bind(this)
//     this.goNext = this.goNext.bind(this)
//   }
  
//   goPrev() {
//     if (this.state.active > 0) {
//       this.setState(prevState => ({
//         active: prevState.active - 1
//       }))
//     }
//   }
  
//   goNext() {
//     if (this.state.active < this.props.children.length - 1) {
//       this.setState(prevState => ({
//         active: prevState.active + 1
//       }))
//     }
//   }
  
//   render() {
//     const percentage = -100 * this.state.active + '%'
//     return (
//       <div>
//         <div className="slides" style={{ transform: `translate3d(0, ${percentage}, 0)` }}>
//           {this.props.children.map((child, index) => {
//             if (index === this.state.active) {
//               return React.cloneElement(
//                 child,
//                 { className: child.props.className + ' active' }
//               )
//             }
//             return child
//           })}
//         </div>
//         <div className="buttons">
//           <button
//             onClick={this.goPrev}
//             disabled={this.state.active === 0}
//           >
//             &uarr; Previous Slide
//           </button>
//           <button
//             onClick={this.goNext}
//             disabled={this.state.active === this.props.children.length - 1}
//           >
//             Next Slide &darr;
//           </button>
//         </div>
//         <ul className="dots">
//           {this.props.children.map((child, index) => (
//             <li className={index === this.state.active ? 'active' : ''}>
//               <button onClick={() => this.setState({ active: index })}>{index + 1}</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// const element = (
//   <Slides>
//     <div className="slide" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501876991173-f9c47cd28268?auto=format&fit=crop&w=1606&q=80)' }}>
//       <h2>Awesome Slide Title 1</h2>
//     </div>
//     <div className="slide" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1650&q=80)' }}>
//       <h2>Awesome Slide Title 2</h2>
//     </div>
//     <div className="slide" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)' }}>
//       <h2>Awesome Slide Title 3</h2>
//     </div>
//     <div className="slide" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)' }}>
//       <h2>Awesome Slide Title 4</h2>
//     </div>
//     <div className="slide" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)' }}>
//       <h2>Awesome Slide Title 5</h2>
//     </div>
//   </Slides>
// )

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )