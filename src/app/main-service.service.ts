import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  public url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addParty(body) {
    this.http.post(`${this.url}/party/add_new`, body).subscribe((res) => {
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
  async autoCompleteName(keyword, type) {
    let p = new Promise((response, rej) => {
      this.http
        .get(
          `${this.url}/party/autocomplete_name?keyword=${keyword}&limit=5&types=${type}`
        )
        .subscribe((res: { status; message; title }) => {
          response(res.message);
        });
    });
    return p;
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
  // crate party connector
  newCrateTransaction(body) {
    this.http
      .post(`${this.url}/crate_transaction/add_new`, body)
      .subscribe((res) => {
        console.log(res);
      });
  }
  cratePartnameAvail(val) {
    this.http
      .get(`${this.url}/crate_party/check_availability?name=${val}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
  async crateAutoCompleteName(keyword, type) {
    let p = new Promise((response, rej) => {
      this.http
        .get(
          `${this.url}/crate_party/autocomplete_name?keyword=${keyword}&limit=5&types=${type}`
        )
        .subscribe((res: { status; message; title }) => {
          response(res.message);
        });
    });
    return p;
  }
  addCrateParty(body) {
    this.http.post(`${this.url}/crate_party/add_new`, body).subscribe((res) => {
      console.log(res);
    });
  }

  async getLedger(d, m, y) {
    let p = new Promise((response, rej) => {
      this.http
        .get(`${this.url}/transaction/ledger?dd=${d}&mm=${m}&yyyy=${y}`)
        .subscribe((arr: { status; message; title }) => {
          response(arr.message);
        });
    });
    return p;
  }
  async getConstants() {
    let p = new Promise((response, rej) => {
      this.http
        .get(`${this.url}/constant`)
        .subscribe((arr: { status; message; title }) => {
          response(arr.message);
        });
    });
    return p;
  }

  async findParty(name) {
    let p = new Promise((response, rej) => {
      this.http
        .get(`${this.url}/party/find?name=${name}`)
        .subscribe((arr: { status; message; title }) => {
          response(arr.message);
        });
    });
    return p;
  }
}
