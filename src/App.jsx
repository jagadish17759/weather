import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Weather from './pages/Weatherdata'
import "./App.css"
import ErrorPage from './pages/ErrorPage'
let App=()=>{
   return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Weather></Weather>}></Route>
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
   </Routes>
   </BrowserRouter>
   )
}
export default App