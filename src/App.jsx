import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/MainLayout'
import { HomePage } from '@/pages/HomePage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<div>Forbidden</div>} />
          <Route path="/add-question" element={<div>Add Question</div>} />
          <Route path="*" element={<div>Not Found Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
