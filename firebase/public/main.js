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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forecast/forecast.component */ "./src/app/components/forecast/forecast.component.ts");
/* harmony import */ var _pipes_sort_cities_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/sort-cities.pipe */ "./src/app/pipes/sort-cities.pipe.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _states_app_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./states/app.state */ "./src/app/states/app.state.ts");
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
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_10__["ForecastComponent"], _pipes_sort_cities_pipe__WEBPACK_IMPORTED_MODULE_11__["SortCitiesPipe"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                _modules_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_7__["LayoutsModules"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_12__["NgxsModule"].forRoot([
                    _states_app_state__WEBPACK_IMPORTED_MODULE_15__["AppUserState"],
                ]),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_13__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_14__["NgxsLoggerPluginModule"].forRoot()
            ],
            exports: [],
            providers: [_pipes_sort_cities_pipe__WEBPACK_IMPORTED_MODULE_11__["SortCitiesPipe"]],
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

module.exports = ".forecast-card {\n  height: 95vh;\n  padding: 5px;\n  background-color: rgb(132, 162, 243);\n}\n\n.content {\n  font-size: 16px;\n}\n\n.scroll-this {\n  overflow: auto;\n}\n\n.table-data_cell_empty-background {\n  min-width: 115px;\n  margin: 2px;\n}\n\n.table-header-background {\n  min-width: 115px;\n  margin: 2px;\n  background-color: rgba(119, 139, 255, 0.575);\n}\n\n.table-00-background {\n  padding: 5px 2px;\n}\n\n.table-date_cell-background {\n  margin: 2px;\n  padding: 5px 2px;\n}\n\n.table-data_cell-background {\n  min-width: 115px;\n  margin: 2px;\n  padding: 2px 0 2px 0;\n  /* background-color: rgb(100, 141, 253); */\n}\n\n.table-secondary_data_line {\n  margin: 2px 0 2px 0;\n}\n\n.table-secondary_data_icon img {\n    width: 60%;\n    height: auto;\n  }\n\n.table-secondary_data-opacity {\n  opacity: 0.6;\n  /* margin: 2px 0 2px 0; */\n}\n\n@media only screen {\n  .content {\n    font-size: 60%;\n  }\n\n  img {\n    width: 25%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .content {\n    font-size: 70%;\n  }\n\n  img {\n    width: 40%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 1000px) {\n  .content {\n    font-size: 75%;\n  }\n\n  img {\n    width: 50%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 1300px) {\n  .content {\n    font-size: 80%;\n  }\n\n  img {\n    width: 75%;\n    height: auto;\n  }\n}\n\n@media only screen and (max-height: 400px) {\n  .content {\n    font-size: 40%;\n  }\n\n  img {\n    width: 10%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 400px) {\n  .content {\n    font-size: 60%;\n  }\n\n  img {\n    width: 15%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 600px) {\n  .content {\n    font-size: 80%;\n  }\n\n  img {\n    width: 20%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 700px) {\n  .content {\n    font-size: auto;\n  }\n\n  img {\n    width: 30%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 800px) {\n  img {\n    width: 35%;\n    height: auto;\n  }\n}\n\n@media only screen and (min-height: 900px) {\n  img {\n    width: 40%;\n    height: auto;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/forecast/forecast.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"forecast-card\">\n  <div fxLayout=\"column\" fxFill class=\"content\">\n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n      <span\n        fxFlex=\"1 1\"\n        fxLayoutAlign=\"start center\"\n        *ngIf=\"!loadingCities && !loading\"\n        fxFlexOrder.xs=\"3\"\n      >\n        <span [fxHide]=\"loading\">\n          {{ weatherData?.updated ? 'Updated:' : 'Sample:' }}\n          {{\n            weatherData?.updated || (weatherData?.list)[0].dt * 1000\n              | date: 'EEE dd MMM HH:mm'\n          }}\n          <br />\n          {{ 'Forecast time slots: ' + weatherData?.cnt }} <br />\n          {{ ip ? 'IP: ' + ip : '' }}\n        </span>\n      </span>\n      <span\n        fxFlex=\"1 1\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"center center\"\n        fxFlexOrder.xs=\"1\"\n      >\n        <h4>OWM Forecast</h4>\n      </span>\n      <span\n        fxFlex=\"1 1\"\n        fxLayoutAlign=\"center end\"\n        fxLayoutAlign.xs=\"center start\"\n        [fxHide]=\"loadingCities || loading\"\n        fxFlexOrder.xs=\"2\"\n      >\n        <span fxFlex fxFlexOrder.xs=\"2\"></span>\n        <mat-form-field fxFlexOrder.xs=\"1\">\n          <mat-select\n            placeholder=\"City\"\n            [(value)]=\"selectedCityId\"\n            (selectionChange)=\"onChange()\"\n          >\n            <mat-option\n              *ngFor=\"let city of (cities$ | async | keyvalue | sortCities)\"\n              [value]=\"city.key\"\n            >\n              <span fxFlex> {{ city.value.name }} </span>\n              <span fxFlex fxLayoutAlign=\"end center\">\n                {{ city.value.iso2 }}\n              </span>\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </span>\n    </div>\n\n    <div\n      fxFlex\n      fxLayout=\"row\"\n      [fxHide]=\"loading || loadingCities\"\n      class=\"scroll-this\"\n    >\n      <div fxFlex=\"8%\" fxLayout=\"column\" fxFill>\n        <div\n          fxFlex=\"10%\"\n          fxFlex.gt-sm=\"7%\"\n          fxLayout=\"column\"\n          class=\"table-00-background\"\n        >\n          <span fxLayoutAlign=\"end center\">Hour</span>\n          <div fxFlex></div>\n          <span fxLayoutAlign=\"start start\">Date</span>\n        </div>\n\n        <div fxFlex fxLayout=\"column\" fxFill>\n          <div\n            fxFlex\n            fxLayoutAlign=\"start center\"\n            class=\"table-date_cell-background\"\n            *ngFor=\"\n              let dataDaily of (weatherData?.listByDate | keyvalue);\n              index as $index\n            \"\n          >\n            <span fxLayout=\"column\" fxLayout.gt-md=\"row\">\n              <span> {{ dataDaily.key | date: 'EEE' }}&nbsp; </span>\n              <span> {{ dataDaily.key | date: 'dd MMM' }} </span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div fxFlex fxLayout=\"column\" class=\"scroll-this\">\n        <div fxFlex=\"10%\" fxFlex.gt-sm=\"7%\" fxLayout=\"row\">\n          <span\n            fxFlex\n            fxLayoutAlign=\"center center\"\n            class=\"table-header-background\"\n            *ngFor=\"let timeSlot of timeTemplate; index as ind\"\n            [ngStyle]=\"{\n              'background-color': timeTemplate[ind].bgColor,\n              color: timeTemplate[ind].textColor\n            }\"\n          >\n            {{ (timeSlot.hour > 9 ? '' : '0') + timeSlot.hour + ':00' }}\n          </span>\n        </div>\n\n        <div\n          fxFlex\n          *ngFor=\"\n            let dataDaily of (weatherData?.listByDate | keyvalue);\n            index as $index\n          \"\n        >\n          <span\n            fxFlex\n            fxLayout=\"row\"\n            *ngFor=\"let timeSlot of timeTemplate; index as ind\"\n          >\n            <span\n              fxFlex\n              class=\"table-data_cell_empty-background\"\n              *ngIf=\"!dataDaily.value[timeSlot.hour]\"\n            ></span>\n            <span\n              fxFlex\n              *ngIf=\"dataDaily.value[timeSlot.hour]\"\n              class=\"table-data_cell-background\"\n              [ngStyle]=\"{\n                'background-color': timeTemplate[ind].bgColor,\n                color: timeTemplate[ind].textColor\n              }\"\n              fxLayout=\"column\"\n              fxLayoutAlign=\"center center\"\n            >\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <img\n                  [src]=\"\n                    iconsUrl +\n                    dataDaily.value[timeSlot.hour].weather[0].icon +\n                    '.png'\n                  \"\n                />\n                {{ dataDaily.value[timeSlot.hour].weather[0].main }}\n                {{\n                  dataDaily.value[timeSlot.hour].main.temp | number: '1.0-0'\n                }}&#176;C\n              </div>\n\n              <span fxLayout=\"column\">\n                <span\n                  fxFlex=\"25%\"\n                  fxLayout=\"row\"\n                  fxLayoutAlign=\"start end\"\n                  class=\"table-secondary_data_line\"\n                >\n                  <img [src]=\"iconPressure\" />\n                  <span fxFill class=\"table-secondary_data-opacity\">\n                    <span fxFlex=\"50%\" fxLayoutAlign=\"end end\">\n                      &nbsp;{{\n                        dataDaily.value[timeSlot.hour].main.pressure\n                          | number: '1.0-0'\n                      }}\n                    </span>\n                    <span fxFlex fxLayoutAlign=\"start end\">\n                      &nbsp;<small>mm</small>\n                    </span>\n                  </span>\n                </span>\n\n                <span\n                  fxFlex=\"25%\"\n                  fxLayout=\"row\"\n                  fxLayoutAlign=\"start end\"\n                  class=\"table-secondary_data_line\"\n                >\n                  <img [src]=\"iconWind\" />\n                  <span fxFill class=\"table-secondary_data-opacity\">\n                    <span fxFlex=\"50%\" fxLayoutAlign=\"end end\">\n                      &nbsp;{{\n                        dataDaily.value[timeSlot.hour].wind.speed\n                          | number: '1.0-0'\n                      }}\n                    </span>\n                    <span fxFlex fxLayoutAlign=\"start end\">\n                      &nbsp;<small>m/s</small>\n                    </span>\n                  </span>\n                </span>\n\n                <span\n                  fxFlex=\"25%\"\n                  fxLayout=\"row\"\n                  fxLayoutAlign=\"start end\"\n                  class=\"table-secondary_data_line\"\n                >\n                  <img [src]=\"iconHumidity\" />\n                  <span fxFill class=\"table-secondary_data-opacity\">\n                    <span fxFlex=\"50%\" fxLayoutAlign=\"end end\">\n                      &nbsp;{{\n                        dataDaily.value[timeSlot.hour].main.humidity\n                          | number: '1.0-0'\n                      }}\n                    </span>\n                    <span fxFlex fxLayoutAlign=\"start end\">\n                      &nbsp;<small>%</small>&nbsp;\n                    </span>\n                  </span>\n                </span>\n              </span>\n            </span>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div fxLayout=\"row\">\n      <span fxFlex fxLayoutAlign=\"start center\">\n        <span *ngIf=\"!loadingStats\">\n          OWM Requests:{{ stats.r || 0 }} Updates:{{ stats.u || 0 }}\n        </span>\n      </span>\n      <span fxFlex></span>\n      <span fxFlex fxLayoutAlign=\"end center\">\n        <span *ngIf=\"!loadingCities && !loading\" fxLayoutAlign=\"end center\">\n          {{ cities[selectedCityId].name + ' ' }} Requests:{{\n            cities[selectedCityId].r || 0\n          }}\n          Updates:{{ cities[selectedCityId].u || 0 }}\n        </span>\n      </span>\n    </div>\n    <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"loading\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </div>\n</mat-card>\n"

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
/* harmony import */ var _services_owm_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/owm-stats.service */ "./src/app/services/owm-stats.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _states_app_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../states/app.actions */ "./src/app/states/app.actions.ts");
/* harmony import */ var src_app_services_get_browser_ip_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/get-browser-ip.service */ "./src/app/services/get-browser-ip.service.ts");
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
    function ForecastComponent(_cities, _data, _owmStats, _store, _ip) {
        this._cities = _cities;
        this._data = _data;
        this._owmStats = _owmStats;
        this._store = _store;
        this._ip = _ip;
        this.selectedCityId = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].defaultCityId;
        this.timeTemplate = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].timeTemplate;
        this.iconsUrl = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].owmIconsUrl;
        this.iconWind = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].windIconsUrl;
        this.iconHumidity = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].humidityIconsUrl;
        this.iconPressure = _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].pressureIconsUrl;
    }
    ForecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingCities = true;
        this.cities$ = this._cities.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (cities) {
            _this.cities = cities;
            _this.loadingCities = false;
        }));
        this.loadingStats = true;
        this._owmStats.getData().subscribe(function (stats) {
            _this.stats = stats;
            _this.loadingStats = false;
        });
        this._ip.getIP().subscribe(function (ip) {
            _this.ip = ip;
        });
        this.onChange();
    };
    ForecastComponent.prototype.onChange = function () {
        var _this = this;
        this.loading = true;
        this.weatherDataSubscription$ = this._data
            .getData(this.selectedCityId)
            .subscribe(function (data) {
            _this.weatherData = data;
            _this.weatherDataSubscription$.unsubscribe();
            _this.loading = false;
            _this._store.dispatch(new _states_app_actions__WEBPACK_IMPORTED_MODULE_7__["SetUserState"]({ cityId: _this.selectedCityId }));
        }, function (err) { return console.log('ForecastComponent data Error:', err); });
    };
    ForecastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forecast',
            template: __webpack_require__(/*! ./forecast.component.html */ "./src/app/components/forecast/forecast.component.html"),
            styles: [__webpack_require__(/*! ./forecast.component.css */ "./src/app/components/forecast/forecast.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cities_service__WEBPACK_IMPORTED_MODULE_3__["CitiesService"],
            _services_owm_data_service__WEBPACK_IMPORTED_MODULE_1__["OwmDataService"],
            _services_owm_stats_service__WEBPACK_IMPORTED_MODULE_4__["OwmStatsService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            src_app_services_get_browser_ip_service__WEBPACK_IMPORTED_MODULE_8__["GetBrowserIpService"]])
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

/***/ "./src/app/pipes/sort-cities.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/sort-cities.pipe.ts ***!
  \*******************************************/
/*! exports provided: SortCitiesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortCitiesPipe", function() { return SortCitiesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortCitiesPipe = /** @class */ (function () {
    function SortCitiesPipe() {
    }
    SortCitiesPipe.prototype.transform = function (cities) {
        return cities ? cities.sort(function (a, b) { return (a.value.name < b.value.name ? -1 : 1); }) : [];
    };
    SortCitiesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortCities'
        })
    ], SortCitiesPipe);
    return SortCitiesPipe;
}());



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this._db.object('/cities').valueChanges()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    CitiesService.prototype.updateReads = function (cityId) {
        var ref = this._db.object("/cities/" + cityId);
        return ref.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (city) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(ref.update({ 'r': ((city.r || 0) + 1) }));
        }));
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
    ConstantsService.owmData = 'owm';
    ConstantsService.default5DayForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    ConstantsService.defaultUnits = 'metric';
    ConstantsService.defaultCityId = '2643743'; // London, UK
    ConstantsService.defaultAPPID = 'a354c550c575036102a4dce8d36e75d1';
    ConstantsService.owmFallbackData = 'assets/owm-fallback-data.json';
    ConstantsService.getIpUrl = 'https://us-central1-owm-a6-fb.cloudfunctions.net/getip';
    ConstantsService.ipv4RE = new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
    ConstantsService.ipv6RE = new RegExp("/^s*((\n    ([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}\n    (:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|\n    (([0-9A-Fa-f]{1,4}:){5}\n    (((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|\n    (([0-9A-Fa-f]{1,4}:){4}\n    (((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|\n    (([0-9A-Fa-f]{1,4}:){3}\n    (((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|\n    (([0-9A-Fa-f]{1,4}:){2}\n    (((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|\n    (([0-9A-Fa-f]{1,4}:){1}\n    (((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|\n    (:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)\n    (.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))(%.+)?s*$/", 'i');
    ConstantsService.owmIconsUrl = 'https://openweathermap.org/img/w/';
    ConstantsService.windIconsUrl = 'assets/icons8-windsock-16.png';
    ConstantsService.pressureIconsUrl = 'assets/icons8-atmospheric-pressure-16.png';
    ConstantsService.humidityIconsUrl = 'assets/icons8-hygrometer-16.png';
    ConstantsService.timeTemplate = [
        { hour: 0, bgColor: '#4060bb', textColor: 'white' },
        { hour: 3, bgColor: '#4060bb', textColor: 'white' },
        { hour: 6, bgColor: '#5080dd', textColor: 'white' },
        { hour: 9, bgColor: '#70b0ff', textColor: 'black' },
        { hour: 12, bgColor: '#90c0ff', textColor: 'black' },
        { hour: 15, bgColor: '#90c0ff', textColor: 'black' },
        { hour: 18, bgColor: '#70b0ff', textColor: 'black' },
        { hour: 21, bgColor: '#5080dd', textColor: 'white' }
    ];
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



var DataService = /** @class */ (function () {
    function DataService(_db) {
        this._db = _db;
    }
    DataService.prototype.getData = function (cityId) {
        return this._db.object(_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].owmData + '/' + cityId).valueChanges();
    };
    DataService.prototype.setData = function (cityId, data) {
        var ref = this._db.object(_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].owmData + '/' + cityId);
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

/***/ "./src/app/services/get-browser-ip.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/get-browser-ip.service.ts ***!
  \****************************************************/
/*! exports provided: GetBrowserIpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBrowserIpService", function() { return GetBrowserIpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetBrowserIpService = /** @class */ (function () {
    function GetBrowserIpService(_http) {
        this._http = _http;
        this.countCache = 0;
        this.countRequests = 0;
    }
    GetBrowserIpService.prototype.getIP = function () {
        var _this = this;
        if (!this._cache$) {
            this._cache$ = this.requestIP().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (ipString) {
                if (_this.validateIP(ipString)) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(ipString);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        return this._cache$;
    };
    GetBrowserIpService.prototype.requestIP = function () {
        return this._http
            .get(_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].getIpUrl, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3));
    };
    GetBrowserIpService.prototype.validateIP = function (testString) {
        return (_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].ipv4RE.test(testString) ||
            _constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].ipv6RE.test(testString));
    };
    GetBrowserIpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetBrowserIpService);
    return GetBrowserIpService;
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
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cities.service */ "./src/app/services/cities.service.ts");
/* harmony import */ var _owm_fallback_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owm-fallback-data.service */ "./src/app/services/owm-fallback-data.service.ts");
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
    function OwmDataService(_owm, _data, _cities, _owmFallback) {
        this._owm = _owm;
        this._data = _data;
        this._cities = _cities;
        this._owmFallback = _owmFallback;
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
        // 'data.list' is kept for testing only, otherwise is not needed anymore
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
    // Caching the data for 3h
    // in order to prevent exceeding OWM requsts dev quote.
    OwmDataService.prototype.getData = function (cityId) {
        var _this = this;
        return this._cities.updateReads(cityId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this._data.getData(cityId)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (fbdata) {
            if (fbdata === null || _this.isExpired(fbdata)) {
                return _this._owm.getData(cityId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this.setListByDate(res)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this._data.setData(cityId, res)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this._data.getData(cityId); }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(fbdata);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log('ERROR: OwmDataService:', err);
            return _this._owmFallback.getData();
        }));
    };
    OwmDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_owm_service__WEBPACK_IMPORTED_MODULE_3__["OwmService"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _cities_service__WEBPACK_IMPORTED_MODULE_5__["CitiesService"],
            _owm_fallback_data_service__WEBPACK_IMPORTED_MODULE_6__["OwmFallbackDataService"]])
    ], OwmDataService);
    return OwmDataService;
}());



/***/ }),

/***/ "./src/app/services/owm-fallback-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/owm-fallback-data.service.ts ***!
  \*******************************************************/
/*! exports provided: OwmFallbackDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwmFallbackDataService", function() { return OwmFallbackDataService; });
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



var OwmFallbackDataService = /** @class */ (function () {
    function OwmFallbackDataService(_http) {
        this._http = _http;
    }
    OwmFallbackDataService.prototype.getData = function () {
        return this._http.get(_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].owmFallbackData);
    };
    OwmFallbackDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OwmFallbackDataService);
    return OwmFallbackDataService;
}());



/***/ }),

/***/ "./src/app/services/owm-stats.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/owm-stats.service.ts ***!
  \***********************************************/
/*! exports provided: OwmStatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwmStatsService", function() { return OwmStatsService; });
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


var OwmStatsService = /** @class */ (function () {
    function OwmStatsService(_db) {
        this._db = _db;
    }
    OwmStatsService.prototype.getData = function () {
        return this._db.object('/stats').valueChanges();
    };
    OwmStatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], OwmStatsService);
    return OwmStatsService;
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
        return this._http.get(_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].defaultOwmData);
    };
    OwmService.prototype.getData = function (cityId) {
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

/***/ "./src/app/states/app.actions.ts":
/*!***************************************!*\
  !*** ./src/app/states/app.actions.ts ***!
  \***************************************/
/*! exports provided: SetUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserState", function() { return SetUserState; });
var SetUserState = /** @class */ (function () {
    function SetUserState(payload) {
        this.payload = payload;
    }
    SetUserState.type = '[activity] set';
    return SetUserState;
}());



/***/ }),

/***/ "./src/app/states/app.state.ts":
/*!*************************************!*\
  !*** ./src/app/states/app.state.ts ***!
  \*************************************/
/*! exports provided: AppUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserState", function() { return AppUserState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.actions */ "./src/app/states/app.actions.ts");
/* harmony import */ var _services_get_browser_ip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/get-browser-ip.service */ "./src/app/services/get-browser-ip.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppUserState = /** @class */ (function () {
    function AppUserState(_ip) {
        this._ip = _ip;
    }
    AppUserState.prototype.setUserState = function (_a, action) {
        var patchState = _a.patchState;
        console.log('payload:', action.payload);
        return this._ip.getIP()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (ip) {
            action.payload.ip = ip;
            action.payload.time = new Date().valueOf();
            patchState(action.payload);
        }));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["SetUserState"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_actions__WEBPACK_IMPORTED_MODULE_1__["SetUserState"]]),
        __metadata("design:returntype", void 0)
    ], AppUserState.prototype, "setUserState", null);
    AppUserState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'activity',
            defaults: {
                cityId: '',
                time: new Date().valueOf(),
                ip: ''
            }
        }),
        __metadata("design:paramtypes", [_services_get_browser_ip_service__WEBPACK_IMPORTED_MODULE_2__["GetBrowserIpService"]])
    ], AppUserState);
    return AppUserState;
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

module.exports = __webpack_require__(/*! /home/sdr/projects/owm-a6-fb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map