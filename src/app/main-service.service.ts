import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ResponseType } from './models/responseType';
import { ErrMsgModuleComponent } from './err-msg-module/err-msg-module.component';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  // public url: string = 'http://192.168.1.8:3000';
  public url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, public dialog: MatDialog) {}
  purchasePrint = new Subject<boolean>();

  addParty(body) {
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/party/add_new`, body)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  nameAvailability(arg) {
    this.http
      .get(`${this.url}/party/check_availability?name=${arg}`)
      .subscribe((responseData) => {});
  }
  autoCompleteName(keyword, type) {
    return new Promise((response, reject) => {
      this.http
        .get(
          `${this.url}/party/autocomplete_name?keyword=${keyword}&limit=5&${type}`
        )
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }

  addPurchase(body) {
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/purchase/add_new`, body)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  checkNameavail(val) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/party/check_availability?name=${val}`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }

  editPartyName(val) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/party/edit_party?partyId=${val}`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  addNewPurchase(body) {
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/purchase/add_new`, body)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  // Get Bill
  getBillbyNum(val) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/purchase/by_bill_no?bill_no=${val}`)
        // .pipe(
        //   map((resData: ResponseType) => {
        //     console.log('resData.message', resData.message);

        //       let date = new Date(resData.message.date);
        //       resData.message.date = `${date.getDate()}/${
        //         date.getMonth() + 1
        //       }/${date.getFullYear()}`;
        //     return resData;
        //   })
        // )
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  getBillbyDate(fd, fm, fy, td, tm, ty) {
    return new Promise((response, reject) => {
      this.http
        .get(
          `${
            this.url
          }/purchase/by_date?fdd=${fd}&fmm=${fm}&fyyyy=${fy}&tdd=${td}&tmm=${tm}&tyyyy=${ty}&limit=${1}&page=${1}`
        )
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  getBillbyParty(id, page) {
    return new Promise((response, reject) => {
      this.http
        .get(
          `${this.url}/purchase/by_party?party_id=${id}&limit=10&page=${page}`
        )
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  // crate party connector
  newCrateTransaction(body) {
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/crate_transaction/add_new`, body)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  cratePartnameAvail(val) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/crate_party/check_availability?name=${val}`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  crateAutoCompleteName(keyword) {
    return new Promise((response, reject) => {
      this.http
        .get(
          `${this.url}/crate_party/autocomplete_name?keyword=${keyword}&limit=5`
        )
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  addCrateParty(body) {
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/crate_party/add_new`, body)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }

  getLedger(d, m, y) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/transaction/ledger?dd=${d}&mm=${m}&yyyy=${y}`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  getConstants() {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/constant`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }

  findParty(name) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/party/find?name=${name}`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  partyHistory(partyId, fd, fm, fy, td, tm, ty) {
    return new Promise((response, reject) => {
      this.http
        .get(
          `${this.url}/transaction/party_transaction_history?partyId=${partyId}&fdd=${fd}&&fmm=${fm}&fyyyy=${fy}&tdd=${td}&tmm=${tm}&tyyyy=${ty}`
        )
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  addVasuli(id, amount, date) {
    return new Promise((response, reject) => {
      this.http
        .post(
          `${this.url}/transaction/add_vasuli?partyId=${id}&amount=${amount}&date=${date}`,
          'body'
        )
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  editParty(obj, id) {
    console.log(obj, id);
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/party/edit_party?partyId=${id}`, obj)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  editPurchase(obj, id) {
    console.log(obj);
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/purchase/edit?id=${id}`, obj)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  sellTransaction(obj) {
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/transaction/add_new`, obj)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  autocompleteBillno(keyword) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/purchase/autocomplete_bill_no?${keyword}=k&limit=4`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  getCrateTransaction(Id, d, m, y) {
    return new Promise((response, reject) => {
      this.http
        .get(
          `${this.url}/crate_transaction/transactions?partyId=${Id}&dd=${d}&mm=${m}&yyyy=${y}`
        )
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  addNewItem(itemName) {
    return new Promise((response, reject) => {
      this.http
        .post(`${this.url}/item/add_new`, { itemName: itemName })
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  sendSMS() {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/transaction/send_sms`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  getTodaysItem(item_name) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/item/sell_of_item_today?item_name=${item_name}`)
        .subscribe((responseData: ResponseType) => {
          let isError = this.checkForErr(
            responseData.status,
            responseData.message
          );
          if (isError) {
            reject('http request failed' + responseData.message);
          } else {
            response(responseData.message);
          }
        });
    });
  }
  getTroublers() {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/party/troubler_list`)
        .subscribe((responseData: ResponseType) => {
          console.log(responseData);
          // let isError = this.checkForErr(
          //   responseData.status,
          //   responseData.message
          // );
          // if (isError) {
          //   reject('http request failed' + responseData.message);
          // } else {
          response(responseData);
          // }
        });
    });
  }
  checkForErr(statusCode, message) {
    console.log(statusCode, message);

    if (statusCode != 200) {
      this.dialog.open(ErrMsgModuleComponent, { data: message });
      return true;
    } else {
      return false;
    }
  }

  // async abcd(keyword, type) {
  //   let data = await this.http.get(
  //     `${this.url}/party/autocomplete_name?keyword=${keyword}&limit=5&${type}`
  //   );
  //   console.log(data);
  //   // let json = await data.
  // }
  // async CompleteName(keyword, type) {
  //   let val;
  //   let data = await this.http.get(
  //     `${this.url}/party/autocomplete_name?keyword=${keyword}&limit=5&${type}`
  //   );

  //  data.subscribe((result) => (val = result));
  //   return val;
  // }
}
// 24 functions

//  trying
