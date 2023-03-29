import { useState } from 'react' 
import Home from './component/Home/Home'
import SlideCart from './component/SlideCart/SlideCart'
 

function App() {
  const [watch, setWatch] = useState("")

  const handleWatch = (time) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime',time))
    // console.log(previousWatchTime)

    // if(previousWatchTime){

    // }else{
    //   localStorage.setItem("watchTime",time)
    // }
    // console.log('time')
    if(previousWatchTime){
      const sum = previousWatchTime + time
      localStorage.setItem('watchTime',sum)
      setWatch(sum)
    }else{
      localStorage.setItem('watchTime',time)
      setWatch(time)
    }
  }
  return (
    <>
      <div className='main container m-auto mt-5 row'>
          <div className="home-container col-md-8">
          <Home handleWatch={handleWatch} />
          </div>
          <div className="cart-container col-md-4">
            <SlideCart watch={watch} />
          </div>
      </div>
    </>
  )
}

export default App
