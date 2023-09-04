import './App.css'
import { useEffect, useState } from 'react';
import DetailsBox from './components/DetailsBox';
import ListItem from './components/ListItem';
import { data } from './components/Data'
import store from './store';


function App() {

  const [state, setState] = useState(store.getState());
  const [id, setId] = useState();

  const handleClick=(dataId)=>{
    setId(dataId);
  }

  store.subscribe(() => {
    setState(store.getState())
  })

  return (
    <>
      <h2> Termékek </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita exercitationem officia ab nisi sit velit necessitatibus accusantium, quo, quae dolores provident repellendus praesentium eaque, placeat consequuntur? Vel, perferendis harum?</p>
      <div className='flex-parent'>
        {data.products.map((item, index) => {
          return <div className='list-item' key={index}>
            <ListItem item={item} handleClick={handleClick}/>
          </div>
        })}

        {state.showdb === true && <div className='app-div'>
          <div className='details-holder'>
            <DetailsBox id={id}/>
          </div>
        </div>}
      </div>
    </>
  )
}

export default App;