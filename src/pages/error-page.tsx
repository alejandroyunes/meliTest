import { useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: any = useRouteError()
  const navigate = useNavigate()
  return (
    <div>
      <h1>Oops!</h1>
      <p>Tenemos un error, por favor vuelve al inicio <span className='error' onClick={() => navigate('/')}>aquí</span>.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}