(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~done-done-module~main-main-module"],{

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<ion-title padding>\n  <div style=\"float: left;\">\n    {{user.displayName}}'s Todo List ({{items.length}})\n    <a style=\"font-size: 13px;\" (click)=\"signOut()\">sign out</a>\n  </div>\n  <a style=\"float: right; position: absolute; left: 93%\" class=\"btn-floating waves-effect waves-light blue\" (click)=\"add()\"><i class=\"material-icons\">add</i></a>\n  <!--<ion-button style=\"float: right;\" (click)=\"add()\"><ion-icon slot=\"icon-only\" name=\"add\"></ion-icon></ion-button>-->\n</ion-title>\n<br>\n<ion-spinner *ngIf=\"loading\" color=\"primary\"></ion-spinner>\n  <ion-item-sliding *ngFor=\"let item of items; let i = index\">\n    <ion-item (click)=\"edit(item)\">\n      <ion-label>{{item.text}}</ion-label>\n    </ion-item>\n\n    <ion-item-options side=\"start\" (ionSwipe)=\"complete(item)\">\n      <ion-item-option color=\"success\" (click)=\"complete(item)\" *ngIf=\"allowDone\" [expandable]=\"allowDone\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n      </ion-item-option>\n      <ion-item-option color=\"secondary\" (click)=\"crit(item)\" *ngIf=\"allowCrit\">\n        <ion-icon name=\"flash\"></ion-icon>\n      </ion-item-option>\n      <ion-item-option color=\"secondary\" (click)=\"later(item)\" *ngIf=\"allowLater\">\n        <ion-icon name=\"moon\"></ion-icon>\n      </ion-item-option>\n      <ion-item-option color=\"secondary\" (click)=\"moveByOffset(i, -1)\" *ngIf=\"i !== 0\">\n        <ion-icon name=\"arrow-up\"></ion-icon>\n      </ion-item-option>\n      <ion-item-option color=\"secondary\" (click)=\"moveByOffset(i, 1)\" *ngIf=\"i !== items.length-1\">\n        <ion-icon name=\"arrow-down\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n    \n    <ion-item-options side=\"end\" (ionSwipe)=\"delete(item)\">\n      <ion-item-option color=\"danger\" (click)=\"delete(item)\" expandable>\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n\n  </ion-item-sliding>\n  <a style=\"position: absolute; left: 93%; top: 90%;\" class=\"btn-floating waves-effect waves-light red\" (click)=\"navDone()\"><i class=\"material-icons\">swap_horiz</i></a>\n\n\n"

/***/ }),

/***/ "./src/app/components/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-spinner {\n  margin-left: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3RvZG8vc3JjL2FwcC9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc3Bpbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(afAuth, db, alertCtrl, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.user = {};
        this.items = [];
        this.loading = true;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
            }
        });
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                return;
            }
            _this.db.collection("users/" + _this.afAuth.auth.currentUser.uid + "/" + _this.name, function (ref) {
                return ref.orderBy('pos', 'desc');
            }).snapshotChanges().subscribe(function (colSnap) {
                _this.items = [];
                colSnap.forEach(function (a) {
                    var item = a.payload.doc.data();
                    item['id'] = a.payload.doc.id;
                    _this.items.push(item);
                });
                _this.loading = false;
            });
        });
    };
    ListComponent.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.addOrEdit('New Task', function (val) { return _this.handleAddItem(val.task, val.date); });
                return [2 /*return*/];
            });
        });
    };
    ListComponent.prototype.edit = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.addOrEdit('Edit Task', function (val) { return _this.handleEditItem(val.task, item); }, item);
                return [2 /*return*/];
            });
        });
    };
    ListComponent.prototype.addOrEdit = function (header, handler, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: header,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: handler,
                                }
                            ],
                            inputs: [
                                {
                                    name: 'task',
                                    type: 'text',
                                    placeholder: 'My task',
                                    value: item ? item.text : '',
                                },
                                {
                                    name: 'date',
                                    type: 'date',
                                    min: '2019-05-24',
                                    max: '2055-01-12',
                                    value: item ? item.date : ''
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        alert.getElementsByTagName('input')[0].focus();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListComponent.prototype.handleAddItem = function (text, date) {
        if (!text.trim().length) {
            return;
        }
        var now = new Date();
        var nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
        this.db.collection("users/" + this.afAuth.auth.currentUser.uid + "/" + this.name).add({
            text: text,
            date: date,
            pos: this.items.length ? this.items[0].pos + 1 : 0,
            created: nowUtc,
        });
    };
    ListComponent.prototype.handleEditItem = function (text, item) {
        this.db.doc("users/" + this.afAuth.auth.currentUser.uid + "/" + this.name + "/" + item.id).set({
            text: text,
        }, { merge: true });
    };
    ListComponent.prototype.delete = function (item) {
        this.db.doc("users/" + this.afAuth.auth.currentUser.uid + "/" + this.name + "/" + item.id).delete();
    };
    ListComponent.prototype.crit = function (item) {
        this.moveItem(item, 'crit');
    };
    ListComponent.prototype.complete = function (item) {
        this.moveItem(item, 'done');
    };
    ListComponent.prototype.later = function (item) {
        this.moveItem(item, 'later');
    };
    ListComponent.prototype.moveItem = function (item, list) {
        var _this = this;
        this.db.doc("users/" + this.afAuth.auth.currentUser.uid + "/" + this.name + "/" + item.id).delete();
        var id = item.id;
        delete item.id;
        this.db.collection("users/" + this.afAuth.auth.currentUser.uid + "/" + list, function (ref) {
            return ref.orderBy('pos', 'desc').limit(1);
        }).get().toPromise().then(function (qSnap) {
            item.pos = 0;
            qSnap.forEach(function (a) {
                item.pos = a.data().pos + 1;
            });
            _this.db.doc("users/" + _this.afAuth.auth.currentUser.uid + "/" + list + "/" + id).set(item);
        });
    };
    ListComponent.prototype.signOut = function () {
        this.afAuth.auth.signOut().then(function () {
            location.reload();
        });
    };
    ListComponent.prototype.navDone = function () {
        if (this.router.url === '/main') {
            this.router.navigateByUrl('/done');
        }
        else if (this.router.url === '/done') {
            this.router.navigateByUrl('/main');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('name'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('allowDone'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ListComponent.prototype, "allowDone", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/components/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~done-done-module~main-main-module.js.map