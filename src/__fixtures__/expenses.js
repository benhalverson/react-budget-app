import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Gum',
    note: '',
    category: 'food',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    category: 'bill',
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Credit Card',
    note: '',
    category: 'bill',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
