
import './App.css'
import { Card } from './components/card/card'
import { FoodData } from './interface/FoodData'

function App() {
  const data: FoodData[] =[];

  return (
    <>
      <div className="container">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data.map(foodData => 
          <Card 
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
          )}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
