/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { useRef } from 'react'

function Input ({ ref }) {
  return <input ref={ref} placeholder='Ej. texto' type='text' />
}

export function Form () {
  const inputRef = useRef()

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
  }
}

return (
  <div>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css'
      />

      <form>
        <input ref={inputRef} />
      </form>

      <button onClick={focusInput}> focus input</button>
  </div>
  )
}

export default Form
