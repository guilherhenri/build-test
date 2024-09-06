import { createBrowserRouter } from 'react-router-dom'

import { Auth } from './auth'
import { Dashboard } from './dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])
