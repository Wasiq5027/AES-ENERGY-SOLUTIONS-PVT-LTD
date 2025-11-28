import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">AES</div>
      </header>
      {children}
      <footer className="site-footer">© {new Date().getFullYear()} AES</footer>
    </div>
  )
}
