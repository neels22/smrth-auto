import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"






function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>


    <Route path="/home" element={<Home/>}/>
    {/* <Route path="/home" element={<Address/>}/> */}
    {/* <Route path="/home" element={<Contact/>}/> */}


    </Routes>
    
    
    
    
    </BrowserRouter>
     
    </>
  )
}

export default App
