// Write your code here
import './index.css'

const Denomination = prop => {
  const {denominationsDetails, updateBalance} = prop
  const {value} = denominationsDetails

  const onDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="button-card">
      <button onClick={onDenomination} className="button" type="button">
        {value}
      </button>
    </li>
  )
}
export default Denomination
