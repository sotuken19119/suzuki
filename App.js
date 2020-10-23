import React  from 'react';
import './App.css';

let i=0;
const items= [1,1,1,0,1,9,1,0,1,2,2,1,0,1,9,1];
function renderScreen(item){
  i++;
  if(i%4!=0){
      return(
        <div className="main">{item}</div>
      );
  }
  else{
    return(
      <div>
        <div className="main">{item}</div>
        <br/>
      </div>
    )
  }
}
class App extends React.Component{
    render() {
      return (
        <div>
          <div className="maincontent">
            {items.map((item) => (
              renderScreen(item)
            ))}
          </div>
        </div>
      );
    }
}

export default App;
