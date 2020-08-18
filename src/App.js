import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={()=>{console.log("I am clicked.")}} />
//     </React.Fragment>
//   )
// }
// class App extends Comment{
//   render(){
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange{() => {console.log("I am clicked")}}/>
//       </React.Fragment>
//     )
//   }
// }
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Dog />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>Meow</div>
}
let Dog = () => {
  return <div>Won</div>
}
export default App;
