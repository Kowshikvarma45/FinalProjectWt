import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { Nav } from './components/Nav'
import { CreateArticle } from './components/CreateArticle'
import { AllArticles } from './components/AllArticles'
import { EditArticle } from './components/EditArticle'
import { Readmore } from './components/Readmore'
import { Aboutus } from './components/Aboutus'

function App() {

  return (

      <RecoilRoot>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>
            <Nav></Nav>
            <center><h1 style={{color:'whitesmoke'}}>Created Articles</h1></center>
            <AllArticles></AllArticles>
          </div>
          }></Route>
          <Route path = '/ReadMore' element={<Readmore/>}></Route>
          <Route path = '/CreateArticle' element={<CreateArticle/>}></Route>
          <Route path = '/EditArticle' element={<EditArticle />}></Route>
          <Route path = '/Aboutus' element={<Aboutus/>}></Route>
        </Routes>
        </BrowserRouter>
      </RecoilRoot>
    
  )

  
}

export default App
