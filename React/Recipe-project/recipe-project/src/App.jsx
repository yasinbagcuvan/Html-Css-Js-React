import Navi from './components/Navi'
import HeadMain from './components/HeadMain'
import CardList from './components/CardList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardDetail from './components/CardDetail'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='platform' element={<Navi/>}>
            <Route path='home' element={<HomePage />}/>
            <Route path='add' element={<HeadMain />}/>
            <Route path='recipes' element={<CardList />}/>
            <Route path='recipes/:recipeId' element={<CardDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
