import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from './models/responseType';
@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  // public url: string = 'http://192.168.1.8:3000';
  public url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  async addParty(body) {
    let data;
    const req = await this.http.post(`${this.url}/party/add_new`, body);
    req.subscribe((res: ResponseType) => {
      console.log(res);
      data = res;
    });
    return data;
  }
  nameAvailability(arg) {
    this.http
      .get(`${this.url}/party/check_availability?name=${arg}`)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  autoCompleteName(keyword, type) {
    let p = new Promise((response, rej) => {
      this.http
        .get(
          `${this.url}/party/autocomplete_name?keyword=${keyword}&limit=5&${type}`
        )
        .subscribe((res: { status; message; title }) => {
          response(res.message);
        });
    });
    return p;
  }
  addPurchase(body) {
    this.http
      .post(`${this.url}/purchase/add_new`, body)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  checkNameavail(val) {
    this.http
      .get(`${this.url}/party/check_availability?name=${val}`)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  editPartyName(val) {
    this.http
      .get(`${this.url}/party/edit_party?partyId=${val}`)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  addNewPurchase(body) {
    this.http
      .post(`${this.url}/purchase/add_new`, body)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  // Get Bill
  getBillbyNum(val) {
    this.http
      .get(`${this.url}/purchase/by_bill_no?bill_no=${val}`)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  getBillbyDate(fd, fm, fy, td, tm, ty) {
    let p = new Promise((res, rej) => {
      this.http
        .get(
          `${
            this.url
          }/purchase/by_date?fdd=${fd}&fmm=${fm}&fyyyy=${fy}&tdd=${td}&tmm=${tm}&tyyyy=${ty}&limit=${1}&page=${1}`
        )
        .subscribe((resp: ResponseType) => {
          res(resp.message);
        });
    });
    return p;
  }
  getBillbyParty(id, page) {
    let p = new Promise((res, rej) => {
      this.http
        .get(
          `${this.url}/purchase/by_party?party_id=${id}&limit=10&page=${page}`
        )
        .subscribe((data: ResponseType) => {
          res(data.message);
        });
    });
    return p;
  }
  // crate party connector
  newCrateTransaction(body) {
    this.http
      .post(`${this.url}/crate_transaction/add_new`, body)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  cratePartnameAvail(val) {
    this.http
      .get(`${this.url}/crate_party/check_availability?name=${val}`)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  crateAutoCompleteName(keyword) {
    let p = new Promise((response, rej) => {
      this.http
        .get(
          `${this.url}/crate_party/autocomplete_name?keyword=${keyword}&limit=5`
        )
        .subscribe((res: { status; message; title }) => {
          response(res.message);
        });
    });
    return p;
  }
  addCrateParty(body) {
    this.http
      .post(`${this.url}/crate_party/add_new`, body)
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }

  getLedger(d, m, y) {
    let p = new Promise((response, rej) => {
      this.http
        .get(`${this.url}/transaction/ledger?dd=${d}&mm=${m}&yyyy=${y}`)
        .subscribe((arr: ResponseType) => {
          response(arr.message);
        });
    });
    return p;
  }
  getConstants() {
    let p = new Promise((response, rej) => {
      this.http.get(`${this.url}/constant`).subscribe((arr: ResponseType) => {
        response(arr.message);
      });
    });
    return p;
  }

  findParty(name) {
    let p = new Promise((response, rej) => {
      this.http
        .get(`${this.url}/party/find?name=${name}`)
        .subscribe((arr: ResponseType) => {
          response(arr.message);
        });
    });
    return p;
  }
  partyHistory(partyId, fd, fm, fy, td, tm, ty) {
    let p = new Promise((response, rej) => {
      this.http
        .get(
          `${this.url}/transaction/party_transaction_history?partyId=${partyId}&fdd=${fd}&&fmm=${fm}&fyyyy=${fy}&tdd=${td}&tmm=${tm}&tyyyy=${ty}`
        )
        .subscribe((arr: ResponseType) => {
          response(arr.message);
        });
    });
    return p;
  }
  addVasuli(id, amount, date) {
    this.http
      .post(
        `${this.url}/transaction/add_vasuli?partyId=${id}&amount=${amount}&date=${date}`,
        'body'
      )
      .subscribe((res: ResponseType) => {
        console.log(res);
      });
  }
  editParty(obj, id) {
    let p = new Promise((res, rej) => {
      this.http
        .post(`${this.url}/party/edit_party?partyId=${id}`, obj)
        .subscribe((result: ResponseType) => {
          console.log(result);
          res(result.message);
        });
    });
    return p;
  }
  editPurchase(obj, id) {
    let p = new Promise((res, rej) => {
      this.http
        .post(`${this.url}/purchase/edit?id=${id}`, obj)
        .subscribe((result: ResponseType) => {
          console.log(result);
          res(result.message);
        });
    });
    return p;
  }
  sellTransaction(obj) {
    console.log(obj);

    let p = new Promise((res, rej) => {
      this.http
        .post(`${this.url}/transaction/add_new`, obj)
        .subscribe((result: ResponseType) => {
          console.log(result);
          res(result.message);
        });
    });
    return p;
  }
  autocompleteBillno(keyword) {
    let r = this.http.get(
      `${this.url}/purchase/autocomplete_bill_no?${keyword}=k&limit=4`
    );

    return r;
    // console.log(r);
  }
}
