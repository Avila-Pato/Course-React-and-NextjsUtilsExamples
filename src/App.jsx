import { version } from 'react'
import './App.css'
import { Seo } from './components/Sero'
// import Form from './components/Form'
import { preload } from 'react-dom'
import { Logo } from './components/Logo'
// import { UseFetchExample } from './clase/useExample'
import { UserContextExample } from './clase/UseContextExample'

function App () {
  // const [show, setShow] = useState(false)
  preload('https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css', {
    as: 'style',
    priority: 'low'
  })
  preload('https://img.freepik.com/free-vector/cute-astronaut-thinking-rock-cartoon-vector-icon-illustration-science-technology-isolated-flat_138676-11414.jpg?w=740&t=st=1716487442~exp=1716488042~hmac=12dabe7085d0cde3af27b0713fde47df24cb95f756b5997b6517036ac8ba6747', {
    as: 'img'
  })
  return (
    <>
      <Seo title='Hola, React 19' description='Hola, React 19' />
      <link rel='icon' href='./assets/react.svg' />
      <div>
        <Logo />
        <h3 style={{ marginBotton: 0 }}> Hola,React 19 </h3>
        <small style={{ color: 'yellow', fontSize: '10px' }}> La version es {version}</small>
      </div>
      {/* <UseFetchExample /> */}
      <UserContextExample />
      {/* <button onClick={() => setShow(!show)}>Click</button>
      {show && <Form />} */}
    </>
  )
}

export default App
