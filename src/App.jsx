import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/forbidden' element={<div>Forbidden</div>} />
          <Route path='/add-question' element={<div>Add Question</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
