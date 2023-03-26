/* eslint-disable prettier/prettier */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import GlboalStyled from './styles/Global'
import { Theme } from './styles/theme/theme'
import { ThemeProvider } from 'styled-components'

import { router } from './routes/routes'
import { SearchProvider } from './contexts/SearchContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchProvider>
        <ThemeProvider theme={Theme}>
            <GlboalStyled />
            <RouterProvider router={router} />
        </ThemeProvider>
    </SearchProvider>
  </React.StrictMode>
)
