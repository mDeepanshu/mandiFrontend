import { PurchaseTable } from './purchaseTable.model';
export interface Purchase {
  date: any;
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
  items: PurchaseTable[];
  strDate: String;
}
