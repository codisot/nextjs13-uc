'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
  mode: string
  setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export default function ThemeProvider ({ children }: {
  children: React.ReactNode
}): React.JSX.Element {
  const [mode, setMode] = useState('')

  const handleThemeChange = (): void => {
    if (mode === 'dark') {
      setMode('light')
      document.documentElement.classList.add('light')
    } else {
      setMode('dark')
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    handleThemeChange()
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme (): ThemeContextType {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
