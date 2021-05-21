import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  public url: string = '192.168.1.8:3000';

  constructor(private http: HttpClient) {}

  addParty(body) {
    this.http.post(`${this.url}/party/addparty`, body).subscribe((res) => {
      console.log(res);
    });
  }
  findParty(arg) {
    this.http.get(`${this.url}/party/find?name=${arg}`).subscribe((res) => {
      console.log(res);
    });
  }
  nameAvailability(arg) {
    this.http
      .get(`${this.url}/party/check_availability?name=${arg}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
  autoCompleteName(keyword, limit, type) {
    this.http
      .get(
        `${this.url}/party/autocomplete_name?keyword=${keyword}&limit=${limit}&types=${type}`
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  addPurchase(body) {
    this.http.post(`${this.url}/purchase/add_new`, body).subscribe((res) => {
      console.log(res);
    });
  }
  checkNameavail(val) {
    this.http
      .get(`${this.url}/party/check_availability?name=${val}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
  editPartyName(val) {
    this.http
      .get(`${this.url}/party/edit_party?partyId=${val}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
  addNewPurchase(body) {
    this.http.post(`${this.url}/purchase/add_new`, body).subscribe((res) => {
      console.log(res);
    });
  }
  getBillbyNum(val) {
    this.http
      .get(`${this.url}/purchase/by_bill_no?bill_no=${val}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
  getBillbyDate(toDate, fromDate) {
    this.http
      .get(
        `${this.url}/purchase/by_date?to_date=${toDate}&from_date=${fromDate}`
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  getBillbyParty(limit, page) {
    this.http
      .get(`${this.url}/purchase/by_party?limit=${limit}&page=${page}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
