import React from 'react'
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import  Login  from './components/Login'
import Dashboard from './components/Dashboard'
import { PrivateRoute } from './components/PrivateRoute'
import NewBlog from './components/NewBlog'
import EditBlog from './components/EditBlog'
import BlogDetail from './components/BlogDetail'
// import Blog from './components/Blog'
const LazyBlog =React.lazy(()=>import('./components/Blog'))




function App() {
  return (
    
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog' element={
      <React.Suspense fallback='Loading ... '>
        <LazyBlog/>
        </React.Suspense>} />

      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/edit/:id" element={<PrivateRoute><EditBlog/></PrivateRoute>} />
        <Route path="/new" element={<PrivateRoute><NewBlog/></PrivateRoute> }/>
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path='*' element={<Navigate to='/' />} />
      
    </Routes>
    <Footer />
    </Router>
  
  )
}

export default App


