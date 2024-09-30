/* import Proptypes from 'prop-types'

export function Seo ({ title, description }) {
    return (
        <>
        <title> {title} </title>
        <meta name="description" content={description} />
        </>
    )
}

Seo.propTypes = {   // X ya no funciona mas en la version 19
    title: PropTypes.string
}
*/

/* export function Seo ({ title, description }) {
  return (
    <>
      <title> {title} </title>
      <meta name='description' content={description} />
    </>
  )
}
Seo.propTypes = {   // X ya no funciona mas en la version 19 y lo ignora
    title: 'Hola, react 19',
    description: ' Hola , 19'
}
*/
export function Seo ({
  title = 'Hola, React 19',
  description = 'Hola, React 19'
}) {
  return (
    <>
      <title> {title} </title>
      <meta name='description' content={description} />
    </>
  )
}
