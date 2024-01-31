import './error.scss'

interface ErrorMessageProps {
  msg: string | undefined;
}

export default function ErrorMsg({ msg }: ErrorMessageProps) {
  return (
    <div className='error-wrapper'>
      <div className="error-content">
        <p>Error: {msg}</p>
      </div>
    </div>
  )
}