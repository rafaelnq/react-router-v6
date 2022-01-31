import {useNavigate} from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/order-summary')
    // navigate('/order-summary', {replace: true})
  }

  return (
    <>
      <div>Home Page</div>
      <button type="button" onClick={handleClick}>
        Place order
      </button>
    </>
  )
}
