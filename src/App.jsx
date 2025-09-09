// rfce,rfc,fafce,rafc
import{ BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './views/Home'
import SquareCal from './views/SquareCal'
import CraCal from './views/CraCal'
import BrmCal from './views/BmrCal'
import MoneyCal from './views/MoneyCal'
import NotFound from './views/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/square' element={<SquareCal/>}/>
          <Route path='/craCal' element={<CraCal/>}/>
          <Route path='/brmCal' element={<BrmCal/>}/>
          <Route path='/moneyCal' element={<MoneyCal/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
