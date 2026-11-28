import Button from "./Components/Button";
import Product from './Components/Product'



function App(){
  return(
    <>
    <h1>Children Props</h1>
    <Button color ='warning'> view more</Button>
    <section className="container-fluid mt-3" >
      <Product/>
    </section>
    </>
  )
}
export default App;