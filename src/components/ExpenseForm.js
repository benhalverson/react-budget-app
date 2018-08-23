import React, { Component } from 'react'

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  }

  // onAmountChange = (e) => {
  //   const amount = e.target.value;
  //   if(amount.match(/^\d*(\.\d{0,2}?$)/)) {
  //     this.setState(() => ({ amount }));
  //   }
  // }

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  render() {
    return(
      <div>
        <form>
          <input 
            type="text"
            placeholder="description"
            autoFocus 
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;