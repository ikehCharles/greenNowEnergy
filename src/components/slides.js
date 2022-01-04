import React, {useEffect, useState} from "react";
import './slides.css'

export default function Slides({children}){
    const [active, setActive] = useState(0)
    const [percentage, setPercentage] = useState(`${-100 * active}%`)


  const prev = ()=>{
    if(active > 0) setActive(prevState =>  prevState - 1)
  }
  const next = ()=>{
    if(active < children.length - 1) {
      setActive(prevState =>  prevState + 1)
    }
  }


  useEffect(()=>{
    setPercentage(`${-100 * active}%`)
  }, [active])


  function addEffect(e){
    if (e.deltaY < 0)
        {
            setPercentage(`${-10 * active}%`)
            // if(active < children.length - 1) setActive(prevState =>  prevState + 1)
        }else{
            if(active > 0) setActive(prevState =>  prevState - 1)
            console.log(e, "down")
        }
        console.log(active)
  }

  useEffect(()=>{
      window.addEventListener('wheel',addEffect)
      return ()=>{
        window.removeEventListener('wheel',addEffect)
      }
  },[])
  

  return (
      <>
      
      <div>
          <div className="slides" style={{ transform: `translate3d(0, ${percentage}, 0)` }}>
            {children.map((child, index) => {
              if (index === active) {
                return React.cloneElement(
                  child,
                  { className: child.props.className + ' active' }
                )
              }
              return child
            })}
          </div>
          <div className="buttons">
            <button
            className="btnSlide"  
              onClick={prev}
              disabled={active === 0}
            >
              &uarr; Previous Slide
            </button>
            <button
              className="btnSlide"  
              onClick={next}
              disabled={active === children.length - 1}
            >
              Next Slide &darr;
            </button>
          </div>
          <ul className="dots">
            {children.map((child, index) => (
              <li className={index === active ? 'active' : ''}>
                <button onClick={() => setActive(index)}>{index + 1}</button>
              </li>
            ))}
          </ul>
        </div>
      </>
  )


}


// class Slides extends React.Component {
//     constructor() {
//       super()
//       this.state = {
//         active: 0
//       }
//       this.goPrev = this.goPrev.bind(this)
//       this.goNext = this.goNext.bind(this)
//     }
    
//     goPrev() {
//       if (this.state.active > 0) {
//         this.setState(prevState => ({
//           active: prevState.active - 1
//         }))
//       }
//     }
    
//     goNext() {
//       if (this.state.active < this.props.children.length - 1) {
//         this.setState(prevState => ({
//           active: prevState.active + 1
//         }))
//       }
//     }
    
//     render() {
//       const percentage = -100 * this.state.active + '%'
//       return (
//         <div>
//           <div className="slides" style={{ transform: `translate3d(0, ${percentage}, 0)` }}>
//             {this.props.children.map((child, index) => {
//               if (index === this.state.active) {
//                 return React.cloneElement(
//                   child,
//                   { className: child.props.className + ' active' }
//                 )
//               }
//               return child
//             })}
//           </div>
//           <div className="buttons">
//             <button
//               onClick={this.goPrev}
//               disabled={this.state.active === 0}
//             >
//               &uarr; Previous Slide
//             </button>
//             <button
//               onClick={this.goNext}
//               disabled={this.state.active === this.props.children.length - 1}
//             >
//               Next Slide &darr;
//             </button>
//           </div>
//           <ul className="dots">
//             {this.props.children.map((child, index) => (
//               <li className={index === this.state.active ? 'active' : ''}>
//                 <button onClick={() => this.setState({ active: index })}>{index + 1}</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )
//     }
//   }