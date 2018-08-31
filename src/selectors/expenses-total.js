export default (expenses) => {
  debugger;
  console.log(expenses);
  return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
};
