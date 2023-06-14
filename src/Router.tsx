import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { BlogPost } from './pages/BlogPost'
import { DefaultLayout } from './layouts/DefaultLayout'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
