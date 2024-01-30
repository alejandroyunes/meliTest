import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error: any = useRouteError()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Tenemos un error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}