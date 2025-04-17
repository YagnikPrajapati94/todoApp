import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { BrowserRouter as Router , Routes ,  Route } from 'react-router-dom'
import Edit from './views/pages/Edit.jsx'
import Form from './views/pages/Form.jsx'
import { Toaster } from 'react-hot-toast'
import UserShow from './views/pages/UserShow.jsx'


function App() {
 
  return (
    <>
    <Toaster position='top-centert'/>
      <Router>
       <main>
       <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/show' element={<UserShow/>}/>
        </Routes>
       </main>
      </Router>
    </>
  )
}

export default App
