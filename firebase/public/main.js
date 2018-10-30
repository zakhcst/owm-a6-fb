(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-forecast></app-forecast>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'owm-a6-fb';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/angular-material/angular-material.module */ "./src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var _modules_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/layouts/layouts.module */ "./src/app/modules/layouts/layouts.module.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forecast/forecast.component */ "./src/app/components/forecast/forecast.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_10__["ForecastComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                _modules_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_7__["LayoutsModules"]
            ],
            exports: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/forecast/forecast.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forecast-card {\n  height: 95vh;\n  padding: 5px;\n  background-color: rgb(153, 180, 255);\n}\n\n.content {\n  font-size: 16px;\n}\n\n.scroll-this {\n  overflow: auto;\n}\n\n.table-data_cell_empty-background {\n  min-width: 115px;\n  margin: 2px;\n}\n\n.table-header-background {\n  min-width: 115px;\n  margin: 2px;\n  background-color: rgba(119, 139, 255, 0.575);\n}\n\n.table-00-background {\n  padding: 5px 2px;\n}\n\n.table-date_cell-background {\n  margin: 2px;\n  padding: 5px 2px;\n}\n\n.table-data_cell-background {\n  min-width: 115px;\n  margin: 2px;\n  padding: 2px 0 0 0;\n  background-color: rgb(100, 141, 253);\n}\n\n.table-secondary_data-opacity {\n  opacity: 0.6;\n  margin: 2px 0 2px 0;\n}\n\n@media only screen {\n  .content {\n    font-size: 60%;\n  }\n\n  img {\n    width: 10%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .content {\n    font-size: 70%;\n  }\n\n  img {\n    width: 40%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 1000px) {\n  .content {\n    font-size: 75%;\n  }\n\n  img {\n    width: 50%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 1300px) {\n  .content {\n    font-size: 80%;\n  }\n\n  img {\n    width: 75%;\n    height: auto;\n  }\n}\n\n@media only screen and (max-height: 400px) {\n  .content {\n    font-size: 50%;\n  }\n\n  img {\n    width: 10%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 400px) {\n  img {\n    width: 15%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 600px) {\n  img {\n    width: 20%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 700px) {\n  img {\n    width: 25%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 800px) {\n  img {\n    width: 30%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 900px) {\n  img {\n    width: 50%;\n    height: auto;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/forecast/forecast.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"forecast-card\">\n  <div fxLayout=\"column\" fxFill class=\"content\">\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <span fxFlex=\"1 1\" fxLayoutAlign=\"start center\">\n        <span [fxHide]=\"loading\">\n          {{weatherData?.updated ? 'Updated:' : 'Sample:'}} {{(weatherData?.updated || weatherData?.list[0].dt * 1000)\n          |\n          date: 'EEE dd MMM HH:mm'}}\n          <br>\n          {{'Time slots: ' + weatherData?.cnt}}\n        </span>\n      </span>\n      <h4 fxFlex=\"1 1\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        OWM Forecast\n        <mat-spinner *ngIf=\"loading\"></mat-spinner>\n      </h4>\n      <span fxFlex=\"1 1\" fxLayoutAlign=\"end center\">\n        <mat-form-field [fxHide]=\"loading\">\n          <mat-select placeholder=\"City\" [(value)]=\"selectedCityId\" (selectionChange)=\"onChange()\">\n            <mat-option *ngFor=\"let city of cities$ | async\" [value]=\"city.id\">\n              <span fxFlex>\n                {{city.name}}\n              </span>\n              <span fxFlex fxLayoutAlign=\"end center\">\n                {{city.iso2}}\n              </span>\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </span>\n    </div>\n\n    <div fxFlex fxLayout=\"row\" [fxHide]=\"loading\" class=\"scroll-this\">\n\n      <div fxFlex=\"10%\" fxLayout=\"column\" fxFill>\n        <div fxFlex=\"5%\" fxLayout=\"column\" class=\"table-00-background\">\n          <span fxLayoutAlign=\"end center\">Hour</span>\n          <div fxFlex></div>\n          <span fxLayoutAlign=\"start start\">Date</span>\n        </div>\n\n        <div fxFlex fxLayout=\"column\" fxFill>\n          <div fxFlex fxLayoutAlign=\"start center\" class=\"table-date_cell-background\" *ngFor=\"let dataDaily of weatherData?.listByDate | keyvalue; index as $index;\">\n            <span fxLayout=\"column\" fxLayout.gt-md=\"row\">\n              <span>\n                {{dataDaily.key | date: 'EEE'}}&nbsp;\n              </span>\n              <span>\n                {{dataDaily.key | date: 'dd MMM'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div fxFlex fxLayout=\"column\" class=\"scroll-this\">\n\n        <div fxFlex=\"5%\" fxLayout=\"row\">\n          <span fxFlex fxLayoutAlign=\"center center\" class=\"table-header-background\" *ngFor=\"let hour of hoursTemplate\">\n            {{(hour > 9 ? '' : '0' ) + hour + ':00' }}\n          </span>\n        </div>\n\n        <div fxFlex *ngFor=\"let dataDaily of weatherData?.listByDate | keyvalue; index as $index;\">\n\n          <span fxFlex fxLayout=\"row\" *ngFor=\"let hour of hoursTemplate\">\n            <span fxFlex class=\"table-data_cell_empty-background\" *ngIf=\"!dataDaily.value[hour]\"></span>\n            <span fxFlex *ngIf=\"dataDaily.value[hour]\" class=\"table-data_cell-background\" fxLayout=\"column\"\n              fxLayoutAlign=\"center center\">\n\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <img fxHide.xs [src]=\"iconsUrl + dataDaily.value[hour].weather[0].icon + '.png'\">\n                {{dataDaily.value[hour].weather[0].main }} {{dataDaily.value[hour].main.temp | number:'1.0-0'}}&#176;C\n              </div>\n\n              <div fxLayout=\"column\">\n                <span fxFlex=\"33%\" fxLayout=\"row\" fxHide.xs class=\"table-secondary_data-opacity\" fxLayoutAlign=\"start end\">\n                  <img fxHide.xs [src]=\"iconPressure\">\n                  <span fxFlex=\"50%\" fxLayoutAlign=\"end end\">\n                    &nbsp;{{dataDaily.value[hour].main.pressure | number:'1.0-0'}}\n                  </span>\n                  <span fxFlex fxLayoutAlign=\"start end\">\n                    &nbsp;<small>mm</small>\n                  </span>\n                </span>\n\n                <span fxFlex=\"33%\" fxLayout=\"row\" fxHide.xs class=\"table-secondary_data-opacity\" fxLayoutAlign=\"start end\">\n                  <img fxHide.xs [src]=\"iconWind\">\n\n                  <span fxFlex=\"50%\" fxLayoutAlign=\"end end\">\n                    &nbsp;{{dataDaily.value[hour].wind.speed | number:'1.0-0'}}\n                  </span>\n                  <span fxFlex fxLayoutAlign=\"start end\">\n                    &nbsp;<small>m/s</small>\n                  </span>\n                </span>\n\n                <span fxFlex=\"33%\" fxLayout=\"row\" fxHide.xs class=\"table-secondary_data-opacity\" fxLayoutAlign=\"start end\">\n                  <img fxHide.xs [src]=\"iconHumidity\">\n\n                  <span fxFlex=\"50%\" fxLayoutAlign=\"end end\">\n                    &nbsp;{{dataDaily.value[hour].main.humidity | number:'1.0-0'}}\n                  </span>\n                  <span fxFlex fxLayoutAlign=\"start end\">\n                    &nbsp;<small>%</small>&nbsp;\n                  </span>\n                </span>\n              </div>\n            </span>\n          </span>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/forecast/forecast.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.ts ***!
  \***********************************************************/
/*! exports provided: ForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastComponent", function() { return ForecastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_owm_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/owm-data.service */ "./src/app/services/owm-data.service.ts");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _services_cities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cities.service */ "./src/app/services/cities.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForecastComponent = /** @class */ (function () {
    function ForecastComponent(_cities, _data) {
        this._cities = _cities;
        this._data = _data;
        this.cities$ = _cities.getData();
        this.selectedCityId = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].defaultCityId;
        this.hoursTemplate = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].hoursTemplate;
        this.iconsUrl = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].owmIconsUrl;
        this.iconTemp = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].tempIconsUrl;
        this.iconWind = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].windIconsUrl;
        this.iconPressure = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].pressureIconsUrl;
        this.iconHumidity = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].humidityIconsUrl;
        this.data = _data;
        this.onChange();
    }
    ForecastComponent.prototype.ngOnInit = function () { };
    ForecastComponent.prototype.onChange = function () {
        var _this = this;
        this.loading = true;
        this.weatherDataSubscription = this._data
            .getData(this.selectedCityId)
            .subscribe(function (data) {
            _this.weatherData = data;
            _this.weatherDataSubscription.unsubscribe();
            _this.loading = false;
        });
    };
    ForecastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forecast',
            template: __webpack_require__(/*! ./forecast.component.html */ "./src/app/components/forecast/forecast.component.html"),
            styles: [__webpack_require__(/*! ./forecast.component.css */ "./src/app/components/forecast/forecast.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cities_service__WEBPACK_IMPORTED_MODULE_3__["CitiesService"], _services_owm_data_service__WEBPACK_IMPORTED_MODULE_1__["OwmDataService"]])
    ], ForecastComponent);
    return ForecastComponent;
}());



/***/ }),

/***/ "./src/app/modules/angular-material/angular-material.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/angular-material/angular-material.module.ts ***!
  \*********************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/layouts/layouts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/layouts/layouts.module.ts ***!
  \***************************************************/
/*! exports provided: LayoutsModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModules", function() { return LayoutsModules; });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");

var LayoutsModules = [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"]];


/***/ }),

/***/ "./src/app/services/cities.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cities.service.ts ***!
  \********************************************/
/*! exports provided: CitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesService", function() { return CitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CitiesService = /** @class */ (function () {
    function CitiesService(_db) {
        this._db = _db;
    }
    CitiesService.prototype.getData = function () {
        return this._db
            .list('/eu-capitals')
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (arr) {
            return arr.sort(function (a, b) { return (a.name < b.name ? -1 : 1); });
        }));
        // error handling
    };
    CitiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CitiesService);
    return CitiesService;
}());



/***/ }),

/***/ "./src/app/services/constants.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/constants.service.ts ***!
  \***********************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstantsService = /** @class */ (function () {
    function ConstantsService() {
    }
    ConstantsService.default5DayForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    ConstantsService.defaultUnits = 'metric';
    ConstantsService.defaultCityId = 2643743; // London, UK
    ConstantsService.defaultAPPID = 'a354c550c575036102a4dce8d36e75d1';
    ConstantsService.owmIconsUrl = 'http://openweathermap.org/img/w/';
    ConstantsService.tempIconsUrl = 'assets/icons8-temperature-24.png';
    ConstantsService.windIconsUrl = 'assets/icons8-windsock-24.png';
    ConstantsService.pressureIconsUrl = 'assets/icons8-atmospheric-pressure-24.png';
    ConstantsService.humidityIconsUrl = 'assets/icons8-hygrometer-24.png';
    ConstantsService.hoursTemplate = [0, 3, 6, 9, 12, 15, 18, 21];
    ConstantsService.defaultOwmData = 'assets/owm-data-sample.json';
    ConstantsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConstantsService);
    return ConstantsService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(_db) {
        this._db = _db;
    }
    DataService.prototype.getData = function (cityId) {
        return this._db.object(cityId).valueChanges();
    };
    DataService.prototype.setData = function (cityId, data) {
        var ref = this._db.object(cityId);
        return ref.set(data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/owm-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/owm-data.service.ts ***!
  \**********************************************/
/*! exports provided: OwmDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwmDataService", function() { return OwmDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _owm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owm.service */ "./src/app/services/owm.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OwmDataService = /** @class */ (function () {
    function OwmDataService(_owm, _data) {
        this._owm = _owm;
        this._data = _data;
    }
    OwmDataService.prototype.setListByDate = function (data) {
        data = data || { list: [] };
        data.listByDate = data.list.reduce(function (accumulator, item) {
            var dateObj = new Date(item.dt * 1000);
            var hour = dateObj.getUTCHours();
            var date = dateObj.setHours(0);
            if (accumulator[date]) {
                accumulator[date][hour] = item;
            }
            else {
                accumulator[date] = {};
                accumulator[date][hour] = item;
            }
            return accumulator;
        }, {});
        data.updated = new Date().valueOf();
        return data;
    };
    OwmDataService.prototype.isExpired = function (data) {
        // expired data is when [0] is older than 3 hours
        var now = new Date().valueOf();
        var firstSample = data.list[0].dt * 1000;
        var diff = now - (data.updated || firstSample);
        return diff > 3 * 3600 * 1000; // 3 hours
    };
    OwmDataService.prototype.getData = function (cityId) {
        var _this = this;
        console.log('getData OwmDataService');
        return this._data.getData(cityId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (fbdata) {
            if (fbdata === null || _this.isExpired(fbdata)) {
                // return this._owm.getDefaultData(cityId).pipe(
                return _this._owm.getData(cityId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this.setListByDate(res)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this._data.setData(cityId, res)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this._data.getData(cityId); }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(fbdata);
        }
        // Error handling...
        // ,
        // catchError(e => {
        //   console.log('ERR switchMap 1', e);
        //   return of(e);
        // }
        // )
        ));
    };
    OwmDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_owm_service__WEBPACK_IMPORTED_MODULE_3__["OwmService"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], OwmDataService);
    return OwmDataService;
}());



/***/ }),

/***/ "./src/app/services/owm.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/owm.service.ts ***!
  \*****************************************/
/*! exports provided: OwmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwmService", function() { return OwmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.service */ "./src/app/services/constants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwmService = /** @class */ (function () {
    function OwmService(_http) {
        this._http = _http;
    }
    OwmService.prototype.getDefaultData = function (cityId) {
        console.log('owm getDefaultData');
        return this._http.get(_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].defaultOwmData);
    };
    OwmService.prototype.getData = function (cityId) {
        console.log('owm getData');
        var fullUrl = _constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].default5DayForecastUrl +
            '?id=' +
            cityId +
            '&units=' +
            _constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].defaultUnits +
            '&APPID=' +
            _constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].defaultAPPID;
        return this._http.get(fullUrl);
    };
    OwmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OwmService);
    return OwmService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBWFkpsktPetQerfNSIOl2Es67OCFdlGUI',
        authDomain: 'owm-a6-fb.firebaseapp.com',
        databaseURL: 'https://owm-a6-fb.firebaseio.com',
        projectId: 'owm-a6-fb',
        storageBucket: 'owm-a6-fb.appspot.com',
        messagingSenderId: '976333526482'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sdr/tests/owm-a6-fb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map