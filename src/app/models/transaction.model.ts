export interface Transaction {
  date: String;
  item_name: String;
  parties: [
    {
      id: String;
      amount: Number;
    }
  ];
}
