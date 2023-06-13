import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { BlogPost } from './pages/BlogPost'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<BlogPost />} />
      </Route>
    </Routes>
  )
}
