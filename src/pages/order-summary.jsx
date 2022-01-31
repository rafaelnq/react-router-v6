import {useNavigate} from 'react-router-dom'

export function OrderSummaryPage() {
  const navigate = useNavigate()

  function handleClick() {
    navigate(-1)
  }

  return (
    <>
      <div>Order confimed!</div>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </>
  )
}
