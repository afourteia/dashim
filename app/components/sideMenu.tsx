import { useState } from 'react'
import { Button } from './_primitive/button.tsx'
// import { Collapsible, Button } from '@radix-ui/react'

export default function SideMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative', width: 200 }}>
      <Button onClick={() => setOpen(!open)}>Open Menu</Button>
      <button
        onClick={() => setOpen(!open)}
        className='butt'
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1em',
        }}
      >
        {open ? 'Close Menu' : 'Open Menu'}
      </button>
      <div
        style={{
          position: 'absolute',
          top: '100%',
          width: open ? '100%' : 0,
          transition: 'width 0.2s ease',
          overflow: 'hidden',
        }}
      >
        <div style={{ width: 200, padding: 20, background: 'lightgray' }}>
          <h2>Menu</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
