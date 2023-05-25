// Write your code here
import {Component} from 'react'

import Denomination from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.prop
    const {balance} = this.state
    const name = 'Sarah williams'
    const initial = name.slice(0, 1)

    return (
      <div className="container">
        <div className="cash-container">
          <div className="name-card">
            <div className="name-icon">
              <p className="initial"> {initial}</p>
            </div>
            <h1 className="title"> {name}</h1>
          </div>
          <div className="balance-card">
            <p className="your-balance"> Your Balance </p>
            <div>
              <h1 className="balance"> {balance}</h1>
              <p className="rupees"> In Rupees</p>
            </div>
          </div>
          <div className="withdraw-card">
            <h1 className="balance"> Withdraw </h1>
            <p className="in-rupee"> CHOOSE SUM (IN RUPESS)</p>
          </div>

          <ul className="denominations">
            {denominationsList.map(eachDenomination => (
              <Denomination
                key={eachDenomination.id}
                denominationsDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
