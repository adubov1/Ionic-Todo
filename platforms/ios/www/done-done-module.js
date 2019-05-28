(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["done-done-module"],{

/***/ "./src/app/done/done.module.ts":
/*!*************************************!*\
  !*** ./src/app/done/done.module.ts ***!
  \*************************************/
/*! exports provided: DonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonePageModule", function() { return DonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _done_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./done.page */ "./src/app/done/done.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]
    }
];
var DonePageModule = /** @class */ (function () {
    function DonePageModule() {
    }
    DonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]]
        })
    ], DonePageModule);
    return DonePageModule;
}());



/***/ }),

/***/ "./src/app/done/done.page.html":
/*!*************************************!*\
  !*** ./src/app/done/done.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <app-list [title]=\"'Completed List'\" [name]=\"'done'\" [allowDone]=\"false\"></app-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/done/done.page.scss":
/*!*************************************!*\
  !*** ./src/app/done/done.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmUvZG9uZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/done/done.page.ts":
/*!***********************************!*\
  !*** ./src/app/done/done.page.ts ***!
  \***********************************/
/*! exports provided: DonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonePage", function() { return DonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DonePage = /** @class */ (function () {
    function DonePage() {
    }
    DonePage.prototype.ngOnInit = function () {
    };
    DonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-done',
            template: __webpack_require__(/*! ./done.page.html */ "./src/app/done/done.page.html"),
            styles: [__webpack_require__(/*! ./done.page.scss */ "./src/app/done/done.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DonePage);
    return DonePage;
}());



/***/ })

}]);
//# sourceMappingURL=done-done-module.js.map