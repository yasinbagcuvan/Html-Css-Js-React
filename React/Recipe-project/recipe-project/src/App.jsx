import HeadMain from './components/HeadMain'
import CardList from './components/CardList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardDetail from './components/CardDetail'
import HomePage from './components/HomePage'
import { AuthProvider } from './Context/AuthContext'
import PrivateRoute from './services/PrivateRoute'
import LoginPage from './components/LoginPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About'

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<HeadMain />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<CardList />} />
      <Route path="/recipes/:recipeId" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
