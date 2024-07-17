import Navi from './components/Navi'
import Anasayfa from './components/Anasayfa'
import Blog from './components/Blog'
import Galeri from './components/Galeri'
import Iletisim from './components/Iletisim'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetay from './components/BlogDetay'
import Loading from './components/Loading'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Loading/>}/>
              <Route path='ank-16' element={<Navi/>}>
                <Route path='anasayfa' element={<Anasayfa/>}/>
                <Route path='blog' element={<Blog/>}/>
                <Route path='blog/:blogId' element={<BlogDetay/>}/>
                <Route path='galeri' element={<Galeri/>}/>
                <Route path='iletisim' element={<Iletisim/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
