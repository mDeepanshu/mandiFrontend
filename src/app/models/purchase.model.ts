export interface Purchase {
  date: Date;
  bill_no: Number;
  partyId: String;
  bhada_rate: Number;
  bhada: Number;
  hammali: Number;
  cash: Number;
  commission: Number;
  commission_rate: Number;
  station_charge: Number;
  tax: Number;
  driver: Number;
  bill_total: Number;
  to_exp: Number;
  net_amount: Number;
  items: [
    {
      item_name: String;
      bag: Number;
      quantity: Number;
      rate: Number;
      amount: Number;
    }
  ];
}
