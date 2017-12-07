webpackJsonp([1,4],{

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 123;


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(142);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(inventoryService, userService) {
        this.inventoryService = inventoryService;
        this.userService = userService;
        this.items = this.inventoryService.getItems();
        this.users = this.userService.getUsers();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(209)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_service__["a" /* InventoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router_testing__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_google_chart_directives_angular2_google_chart_directive__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inventory_inventory_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__inventory_inventory_list_inventory_list_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__inventory_inventory_list_inventory_item_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__inventory_detail_detail_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__inventory_location_location_add_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dropdown_directive__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__inventory_inventory_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__inventory_location_location_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__default_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routes__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__inventory_inventory_default_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__inventory_edit_edit_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_register_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_login_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_user_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__user_auth_guard__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_logout_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__inventory_summary_summary_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__footer_component__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__inventory_inventory_component__["a" /* InventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_13__inventory_inventory_list_inventory_list_component__["a" /* InventoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__inventory_inventory_list_inventory_item_component__["a" /* InventoryItemComponent */],
            __WEBPACK_IMPORTED_MODULE_15__inventory_detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__inventory_location_location_add_component__["a" /* LocationAddComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_20__default_component__["a" /* DefaultComponent */],
            __WEBPACK_IMPORTED_MODULE_22__inventory_inventory_default_component__["a" /* InventoryDefaultComponent */],
            __WEBPACK_IMPORTED_MODULE_23__inventory_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_24__user_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_25__user_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_28__user_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_29__inventory_summary_summary_component__["a" /* SummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_google_chart_directives_angular2_google_chart_directive__["a" /* GoogleChart */],
            __WEBPACK_IMPORTED_MODULE_30__footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router_testing__["a" /* RouterTestingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBdk0PDffbHCf0Q3Rb5R6TuwIcnSRNDjHo' })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__inventory_inventory_service__["a" /* InventoryService */], __WEBPACK_IMPORTED_MODULE_19__inventory_location_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_26__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_27__user_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25__user_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterOutlet */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__["Md5"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inventory_inventory_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory_inventory_default_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory_detail_detail_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_edit_edit_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_register_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_login_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_logout_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inventory_summary_summary_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_auth_guard__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__default_component__["a" /* DefaultComponent */] },
    {
        path: 'inwentarz',
        component: __WEBPACK_IMPORTED_MODULE_0__inventory_inventory_component__["a" /* InventoryComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inventory_inventory_default_component__["a" /* InventoryDefaultComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__user_auth_guard__["a" /* AuthGuard */]] },
            { path: 'dodaj', component: __WEBPACK_IMPORTED_MODULE_4__inventory_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__user_auth_guard__["a" /* AuthGuard */]] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__inventory_detail_detail_component__["a" /* DetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__user_auth_guard__["a" /* AuthGuard */]] },
            { path: ':id/edytuj', component: __WEBPACK_IMPORTED_MODULE_4__inventory_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__user_auth_guard__["a" /* AuthGuard */]] }
        ]
    },
    { path: 'zestawienie', component: __WEBPACK_IMPORTED_MODULE_8__inventory_summary_summary_component__["a" /* SummaryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__user_auth_guard__["a" /* AuthGuard */]] },
    { path: 'rejestracja', component: __WEBPACK_IMPORTED_MODULE_5__user_register_component__["a" /* RegisterComponent */] },
    { path: 'logowanie', component: __WEBPACK_IMPORTED_MODULE_6__user_login_component__["a" /* LoginComponent */] },
    { path: 'wylogowanie', component: __WEBPACK_IMPORTED_MODULE_7__user_logout_component__["a" /* LogoutComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
    }
    Object.defineProperty(DropdownDirective.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.open = function () {
        this.isOpen = true;
    };
    DropdownDirective.prototype.close = function () {
        this.isOpen = false;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], DropdownDirective.prototype, "opened", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "open", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "close", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[dropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(211)
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(212)
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryItemComponent = (function () {
    function InventoryItemComponent() {
        this._id = 1;
    }
    return InventoryItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__item__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__item__["a" /* Item */]) === "function" && _a || Object)
], InventoryItemComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InventoryItemComponent.prototype, "_id", void 0);
InventoryItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inventory-item',
        template: __webpack_require__(215)
    }),
    __metadata("design:paramtypes", [])
], InventoryItemComponent);

var _a;
//# sourceMappingURL=inventory-item.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryListComponent = (function () {
    function InventoryListComponent(fb, router, iS) {
        this.fb = fb;
        this.router = router;
        this.iS = iS;
        this.items = this.iS.getItems();
        //this.iS.postItemsAPI().subscribe(
        //  data => console.log(data),
        //  error => console.error(error)
        //);
        this.items = this.iS.getItems();
        //console.log('push');
    }
    InventoryListComponent.prototype.ngOnInit = function () {
        this.searchForm = this.fb.group({
            name: ['']
        });
    };
    InventoryListComponent.prototype.onSearch = function () {
        var pom = this.searchForm.controls['name'].value;
        for (var i = 0; i < this.items.length; i++)
            if (this.items[i].name.toLowerCase().includes(pom.toLowerCase())) {
                var linkurl = 'inwentarz/' + i;
                this.router.navigate([linkurl]);
            }
    };
    return InventoryListComponent;
}());
InventoryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inventory-list',
        template: __webpack_require__(216)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__inventory_service__["a" /* InventoryService */]) === "function" && _c || Object])
], InventoryListComponent);

var _a, _b, _c;
//# sourceMappingURL=inventory-list.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(name, description, imagePath, locations, lastMod) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.locations = locations;
        this.lastMod = lastMod;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationAddComponent = (function () {
    function LocationAddComponent(formBuilder, router, route, locService, invService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.locService = locService;
        this.invService = invService;
        this.locations = [];
        // google maps zoom level
        this.zoom = 17;
        // initial center position for the map
        this.lat = 50.0263882;
        this.lng = 21.9845842;
        this.markers = [];
    }
    LocationAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.itemIndex = params['id'];
                _this.item = _this.invService.getItem(_this.itemIndex);
            }
            else {
                _this.item = null;
            }
            _this.initForm();
        });
    };
    LocationAddComponent.prototype.clickedMarker = function (label, index) {
        // console.log(`clicked the marker: ${label || index}`)
    };
    LocationAddComponent.prototype.onAddLocation = function (quantity, building, room) {
        this.locationForm.controls['locations'].push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
            quantity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](quantity, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].max(1000)]),
            building: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](building.toUpperCase(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
            room: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](room.toUpperCase(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
        }));
    };
    LocationAddComponent.prototype.onRemoveLocation = function (index) {
        this.locationForm.controls['locations'].removeAt(index);
    };
    LocationAddComponent.prototype.onSubmit = function () {
        var newItem = this.locationForm.value;
        this.invService.editItem(this.item, newItem);
        this.invService.postItemsAPI().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.invService.getItems();
        this.router.navigate(['inwentarz']);
    };
    LocationAddComponent.prototype.onCancel = function () {
        this.router.navigate(['inwentarz']);
    };
    LocationAddComponent.prototype.initForm = function () {
        this.markers.splice(0);
        var itemName = '';
        var itemDescription = '';
        var itemImagePath = '';
        var itemLastMod = '';
        var itemLocations = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormArray */]([]);
        if (this.item.hasOwnProperty('locations')) {
            for (var i = 0; i < this.item.locations.length; i++) {
                this.locations[i] = this.item.locations[i];
                var w1 = void 0;
                var w2 = void 0;
                var r1 = ((Math.random() * 0.0000800) + 0.0000001);
                var r2 = ((Math.random() * 0.0000500) + 0.0000301);
                switch (this.locations[i].building) {
                    case 'A':
                        w1 = 50.0268308 + r1;
                        w2 = 21.9852123 + r2;
                        break;
                    case 'B':
                        w1 = 50.0267851 + r1;
                        w2 = 21.9844563 + r2;
                        break;
                    case 'C':
                        w1 = 50.0262283 + r1;
                        w2 = 21.9837789 + r2;
                        break;
                    case 'D':
                        w1 = 50.0258283 + r1;
                        w2 = 21.9837178 + r2;
                        break;
                    case 'E':
                        w1 = 50.0263219 + r1;
                        w2 = 21.9846742 + r2;
                        break;
                    case 'F':
                        w1 = 50.0259665 + r1;
                        w2 = 21.9835222 + r2;
                        break;
                    default:
                        break;
                }
                this._marker = {
                    lat: w1,
                    lng: w2,
                    label: this.locations[i].quantity + ", " + this.locations[i].building + ": " + this.locations[i].room,
                    draggable: false
                };
                this.markers.push(this._marker);
                itemLocations.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
                    quantity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](this.item.locations[i].quantity, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
                    building: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](this.item.locations[i].building, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
                    room: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](this.item.locations[i].room, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
                }));
            }
        }
        itemName = this.item.name;
        itemDescription = this.item.description;
        itemImagePath = this.item.imagePath;
        var _a = sessionStorage.getItem('currentUser').split('|'), username = _a[0], password = _a[1];
        itemLastMod = username;
        this.locationForm = this.formBuilder.group({
            name: [itemName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: [itemDescription, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            imagePath: [itemImagePath, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            locations: itemLocations,
            lastMod: [itemLastMod]
        });
        ////////////////
        /*if (this.item.hasOwnProperty('locations')) {
          for (let j = 0; j < this.locations.length;j++){
            switch (this.locations[j].builing)
            {
              case 'A':
                this._marker.lat = 50.0268308;
                this._marker.lng = 21.9852123;
                break;
              default:
                break;
            }
            this._marker.label = (j+1).toString();
            this._marker.draggable = false;
    
            this.markers.push(this._marker)
          }
        }
      
    
          this.markers = [
          {
            lat: e,
            lng: 21.9852123,
            label: 'A',
            draggable: false
          },
        ];
        this._marker.lat = 50.0268308;
                
    
        console.log(this.markers[2].label);
      */
    };
    return LocationAddComponent;
}());
LocationAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locations',
        template: __webpack_require__(218)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__inventory_service__["a" /* InventoryService */]) === "function" && _e || Object])
], LocationAddComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=location-add.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryService = (function () {
    function InventoryService(_http) {
        var _this = this;
        this._http = _http;
        this.getItemsAPI()
            .subscribe(function (res) { return _this.items = res; });
    }
    InventoryService.prototype.ngOnInit = function () {
        this.postItemsAPI().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    InventoryService.prototype.getItems = function () {
        return this.items;
    };
    InventoryService.prototype.getItem = function (id) {
        return this.items[id];
    };
    InventoryService.prototype.deleteItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        return this.items;
    };
    InventoryService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    InventoryService.prototype.editItem = function (oldItem, newItem) {
        this.items[this.items.indexOf(oldItem)] = newItem;
    };
    //Funkcje związanie z API
    InventoryService.prototype.getItemsAPI = function () {
        return this._http.get("/api/items")
            .map(function (result) { return result.json().data; });
    };
    InventoryService.prototype.postItemsAPI = function () {
        var body = JSON.stringify(this.items);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this._http.post('/api/items', body, { headers: headers });
    };
    return InventoryService;
}());
InventoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InventoryService);

var _a;
//# sourceMappingURL=inventory.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = " <a [routerLink]=\"['logowanie']\">\r\n  <div *ngIf=\"!this.isLogged\" class=\"bs-callout bs-callout-info\" style=\"text-align:center;position:center;\">\r\n    <h2 class=\"display-2\">Witaj na stronie Inwentaryzacja sprzętu</h2>\r\n    <img src=\"/assets/images/lock.png\"  title=\"Zaloguj się\" alt=\"Zaloguj się\">\r\n    <h3 class=\"lead\">Aby móc korzystać z inwentarza, zaloguj się.</h3>\r\n  </div>\r\n</a>\r\n\r\n<div *ngIf=\"this.isLogged && !this.isImgUploaded\" class=\"bs-callout bs-callout-info\" style=\"text-align:center;position:center;\">\r\n    <h2>Witaj,</h2>\r\n    <h3>zalogowano jako <b>{{this.user}}.</b></h3><br/>\r\n    <h4><i>Za pomocą menu nawigacyjnego możesz wybrać, co chcesz zrobić.</i></h4>\r\n</div>\r\n\r\n<div *ngIf=\"this.isImgUploaded\" class=\"bs-callout bs-callout-info\" style=\"text-align:center;position:center;\">\r\n    <h3>Zdjęcie zostało pomyślnie zuploadowane</h3>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\" class=\"navbar navbar-fixed-bottom\" style=\"\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n    background-color: #fff;\r\n    border-color:#e7e7e7;\r\n    padding-top: 15px;\r\n    text-align: center;\r\n    bottom: 0;\r\n    \">\r\n   Powered by <a href=\"mailto:michalpsliwka@gmail.com\" style=\"text-decoration: underline;\">Michał Śliwka</a></div>"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a href=\"./\"><img src=\"/assets/images/logo.jpg\" class=\"img-responsive\" alt=\"Inwentaryzacja\"/></a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"dropdown\" dropdown>\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Sprzęt <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a [routerLink]=\"['inwentarz/dodaj']\">Dodaj</a></li>\r\n            <li><a [routerLink]=\"['inwentarz']\">Przeglądaj</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a [routerLink]=\"['zestawienie']\">Zestawienie</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n     <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\" dropdown>\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Użytkownik<span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a [routerLink]=\"['logowanie']\">Logowanie</a></li>\r\n            <li><a [routerLink]=\"['rejestracja']\">Rejestracja</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a [routerLink]=\"['wylogowanie']\">Wyloguj</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-8\">\r\n    <div class=\"bs-callout bs-callout-warning\">\r\n      <h3 style=\"margin-top:-2%;\">{{selectedItem?.name}}</h3>\r\n      {{selectedItem?.description}}<br/>\r\n    </div>\r\n    <div style=\"margin-top: 2%;margin-bottom: 2%;\">\r\n      <i>Ostatnio zmodyfikowany przez {{selectedItem?.lastMod}}</i>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-success\" (click)=\"onEdit()\">Edytuj</button>\r\n      <button class=\"btn btn-danger\" (click)=\"onDelete(i)\">Usuń</button>\r\n    </div>\r\n  </div>\r\n    <div class=\"col-xs-4\" style=\"margin-top:3.5%;\">\r\n    <img src=\"{{selectedItem?.imagePath}}\" class=\"img-responsive\" style=\"max-height:200px;\">\r\n  </div>\r\n</div>\r\n<hr/>\r\n\r\n<app-locations></app-locations>\r\n\r\n\r\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<div class=\"bs-callout code\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"itemForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Nazwa</label>\r\n            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Opis</label>\r\n            <input type=\"text\" id=\"description\" class=\"form-control\" formControlName=\"description\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" style=\"\r\n                              background-color: rgb(248,248,248);\r\n                              padding-bottom: 1%;\r\n                              border-style:dotted;\r\n                              border-width: 2px;\r\n                              border-radius: 5px;\r\n                              border-color:  rgb(91,192,222);\r\n                              \"> \r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <br/>\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"imagePath\">Obrazek</label>\r\n                  <img src=\"{{imgurl}}\" img class=\"img-responsive\" style=\"max-height:150px;\">\r\n                  <br/>\r\n                </div>\r\n                      \r\n                <div class=\"col-sm-3\" style=\"margin-bottom: 2%;\">\r\n                  <label class=\"btn btn-default\" for=\"imagePath1\">\r\n                    <input type=\"file\" (change)=\"fileChangeEvent($event)\" id=\"imagePath1\" style=\"display:none;\"/>\r\n                    Wybierz...\r\n                  </label>      \r\n                </div>\r\n                <div class=\"col-sm-6\" *ngIf=\"this.isImgSelected\">\r\n                    <div class=\"bs-callout bs-callout-success\" style=\"margin-top:-5%;\">Wybrano <b>nowe</b> zdjęcie. Aby było widoczne, zapisz zmiany.</div>\r\n                </div>\r\n               <!-- <input type=\"text\" name=\"imagePath\" id=\"imagePath\" class=\"form-control\" formControlName=\"imagePath\">-->\r\n            </div>\r\n          </div>       \r\n      </div>\r\n\r\n      <br/>\r\n      <div class=\"row\" style=\"font-weight: bold;font-size:15px;\">\r\n        <div class=\"col-xs-12\">\r\n         <div class=\"col-sm-3\">Ilość</div>\r\n         <div class=\"col-sm-3\">Budynek</div>\r\n         <div class=\"col-sm-3\">Sala</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <ul class=\"list-group\" formArrayName=\"locations\">\r\n            <div\r\n              class=\"row\"\r\n              *ngFor=\"let location of itemForm.controls['locations'].controls; let i = index\">\r\n              <div formGroupName=\"{{i}}\">\r\n                <div class=\"col-sm-3\">\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"quantity\">\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"building\">\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"room\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <button class=\"btn btn-danger\" (click)=\"onRemoveLocation(i)\">X</button>\r\n                </div>\r\n          </div>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n     \r\n      <div class=\"row\">\r\n        <div class=\"bs-callout bs-callout-primary\" style=\"margin-left: -1%;margin-top: 0%;\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-3\"><input type=\"number\" class=\"form-control\" #locationQuantity></div>\r\n              <div class=\"col-md-3\"><input type=\"text\" class=\"form-control\" #locationBuilding></div>\r\n              <div class=\"col-md-3\"><input type=\"text\" class=\"form-control\" #locationRoom></div>\r\n                <div class=\"col-md-2\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-primary\"\r\n                    style=\"width: 75%;\"\r\n                    (click)=\"onAddLocation(locationQuantity.value, locationBuilding.value, locationRoom.value)\">+</button>\r\n               </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n \r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!itemForm.valid\">Zapisz</button>\r\n          <button type=\"submit\" class=\"btn btn-info\" (click)=\"onCancel()\">Anuluj</button>\r\n        </div>\r\n      </div>\r\n     </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=_id class=\"list-group-item clearfix\" style=\"margin-bottom: 1%;\" routerLinkActive=\"active\">\r\n  <span class=\"pull-left\">\r\n    <h3 class=\"list-group-item-heading\">{{item.name}}</h3>\r\n    <div *ngIf=\"item.description.length>45;then short else normal\"></div>\r\n    <ng-template #short><p><em>{{item.description | slice:0:45}}(...)</em></p></ng-template>\r\n    <ng-template #normal><p><em>{{item.description}}</em></p></ng-template>\r\n  </span>\r\n  <span class=\"pull-right\">\r\n    <img src=\"{{item.imagePath}}\" class=\"img-responsive\" style=\"max-height: 50px;\"/>\r\n  </span>\r\n</a>"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-2\">\r\n     <a class=\"btn btn-success\" [routerLink]=\"['dodaj']\">Dodaj</a>\r\n  </div>\r\n  <div class=\"col-xs-10\" style=\"margin-top: -1.7%;\">\r\n    <form [formGroup]=\"searchForm\" class=\"navbar-form navbar-right\"  (ngSubmit)=\"onSearch()\">\r\n      <input formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Co szukasz?\">\r\n      <button type=\"submit\" class=\"btn btn-default\">Szukaj</button>\r\n    </form>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <ul class=\"list-group\">\r\n      <app-inventory-item *ngFor=\"let item of items; let i = index\" [item]=\"item\" [_id]=\"i\"></app-inventory-item>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-inventory-list></app-inventory-list>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<sebm-google-map \r\n      [latitude]=\"lat\"\r\n      [longitude]=\"lng\"\r\n      [zoom]=\"zoom\"\r\n      [disableDefaultUI]=\"false\"\r\n      [zoomControl]=\"false\"\r\n      (mapClick)=\"mapClicked($event)\"\r\n      style=\"height: 230px;width:80%;\">\r\n    \r\n      <sebm-google-map-marker \r\n          *ngFor=\"let m of markers; let i = index\"\r\n          (markerClick)=\"clickedMarker(m.label, i)\"\r\n          [latitude]=\"m.lat\"\r\n          [longitude]=\"m.lng\">\r\n        <sebm-google-map-info-window>\r\n          <strong>{{m.label}}</strong>\r\n        </sebm-google-map-info-window> \r\n      </sebm-google-map-marker>\r\n     \r\n</sebm-google-map>\r\n<br/>\r\n<!--\r\n<ul>\r\n    <li *ngFor=\"let location of item.locations\">{{ location.building }}</li>\r\n </ul>\r\n-->\r\n<form [formGroup]=\"locationForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\"> \r\n        <table class=\"table table-striped table-hover\" style=\"max-width: 60%;cursor:pointer;\">\r\n          <thead>\r\n            <tr>\r\n              <th>Ilość</th>\r\n              <th>Budynek</th>\r\n              <th>Sala</th>        \r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"list-group\" formArrayName=\"locations\" *ngFor=\"let location of locationForm.controls['locations'].controls; let i = index\">\r\n              <tr formGroupName=\"{{i}}\">\r\n                <td>\r\n                  <input\r\n                    class=\"add-location\"\r\n                    formControlName=\"quantity\"\r\n                    disabled\r\n                    >\r\n                </td>\r\n                <td>\r\n                  <input\r\n                    class=\"add-location\"\r\n                    formControlName=\"building\"\r\n                    disabled>\r\n                </td>\r\n                <td style=\"width:30%;\">\r\n                  <input   \r\n                    class=\"add-location\"\r\n                    formControlName=\"room\"\r\n                    disabled>\r\n                </td>\r\n                <button class=\"btn btn-danger\" style=\"margin-top:5%;\" (click)=\"onRemoveLocation(i)\">X</button>      \r\n             </tr>\r\n          </tbody>\r\n      </table>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"bs-callout bs-callout-default\" style=\"max-width: 70%;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3 form-group\">\r\n            <label for=\"quantity\">Ilość</label>\r\n            <input \r\n              type=\"number\"\r\n              id=\"quantity\"\r\n              required\r\n              class=\"form-control\"\r\n              #locationQuantity     \r\n              >\r\n          </div>\r\n\r\n          <div class=\"col-sm-3 form-group\">\r\n            <label for=\"building\">Budynek</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"building\"\r\n              required\r\n              class=\"form-control\"\r\n              #locationBuilding      \r\n              >\r\n          </div>\r\n\r\n          <div class=\"col-sm-3 form-group\">\r\n            <label for=\"room\">Sala</label>\r\n            <input \r\n              type=\"text\"\r\n              id=\"room\"\r\n              required\r\n              class=\"form-control\"\r\n              #locationRoom\r\n              >\r\n          </div>\r\n          <div class=\"col-sm-3 form-group\">\r\n            <label for=\"add\" style=\"color:white;\">Add</label>\r\n              <button class=\"btn btn-success\" type=\"button\"  (click)=\"onAddLocation(locationQuantity.value, locationBuilding.value, locationRoom.value)\">Dodaj</button>\r\n          </div>\r\n        </div>\r\n          \r\n      \r\n    </div>  \r\n  </div>\r\n  <div class=\"row\" style=\"margin-bottom: 5%;\">\r\n    <div class=\"col-xs-12\">       \r\n      <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!locationForm.valid\" (click)=\"onSubmit()\">Zapisz</button>\r\n      <button class=\"btn btn-info\" type=\"button\" (click)=\"onCancel()\">Powrót</button>\r\n    </div>\r\n  </div> \r\n</form> "

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<h2>Wybierz budynek:</h2>\r\n<div class=\"well\">\r\n  <button class=\"btn btn-success\" style=\"width: 10%; margin-right: 1%;\" (click)=\"showSummary('A')\"><b><h4>A</h4></b></button> \r\n  <button class=\"btn btn-success\" style=\"width: 10%; margin-right: 1%;\" (click)=\"showSummary('B')\"><b><h4>B</h4></b></button>\r\n  <button class=\"btn btn-success\" style=\"width: 10%; margin-right: 1%;\" (click)=\"showSummary('C')\"><b><h4>C</h4></b></button>\r\n  <button class=\"btn btn-success\" style=\"width: 10%; margin-right: 1%;\" (click)=\"showSummary('D')\"><b><h4>D</h4></b></button> \r\n  <button class=\"btn btn-success\" style=\"width: 10%; margin-right: 1%;\" (click)=\"showSummary('E')\"><b><h4>E</h4></b></button> \r\n  <button class=\"btn btn-success\" style=\"width: 10%; margin-right: 1%;\" (click)=\"showSummary('F')\"><b><h4>F</h4></b></button> \r\n</div>\r\n<div *ngIf=\"this.selected\" class=\"bs-callout bs-callout-default\">\r\n  <div [chartData]=\"pie_ChartData\" [chartOptions] = \"pie_ChartOptions\" chartType=\"PieChart\" (click)=\"this.selected = false\" GoogleChart></div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"!this.isLogged\">Logowanie</h2>\r\n\r\n<div *ngIf=\"!this.isLogged\" class=\"bs-callout bs-callout-primary\" style=\"max-width: 600px;\">\r\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignin()\">\r\n      <div class=\"form-group\">\r\n          <label for=\"login\">Login</label>\r\n          <input formControlName=\"login\" type=\"text\" id=\"login\"  #login class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"password\">Hasło</label>\r\n          <input formControlName=\"password\" type=\"password\" id=\"password\" #password class=\"form-control\">\r\n      </div>\r\n      <button type=\"submit\" [disabled]=\"!signupForm.valid || !this.pom\" class=\"btn btn-primary\">Zaloguj</button>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"!this.pom;\" class=\"alert alert-success\" style=\"max-width: 600px;\">\r\n        <strong>Sukces!</strong> Zalogowano pomyślnie.\r\n</div>\r\n<div *ngIf=\"!this.ifSuccess && this.pom\" class=\"alert alert-danger\" style=\"max-width: 600px;\">\r\n        <strong>Niepowodzenie!</strong> Niepoprawny login/hasło.\r\n</div>\r\n<div *ngIf=\"this.isLogged\" class=\"alert alert-info\" style=\"max-width: 600px;\">\r\n        <strong>Uwaga!</strong> Jesteś już zalogowany jako {{this.isLoggedAs}}. Jeśli to nie Ty, <a [routerLink]=\"['../wylogowanie']\">wyloguj się.</a>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"!this.isLogged\">Rejestracja</h2>\r\n\r\n<div *ngIf=\"!this.isLogged\" class=\"bs-callout bs-callout-primary\" style=\"max-width: 600px;\">\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"login\">Login</label>\r\n            <input formControlName=\"login\" type=\"text\" id=\"login\" placeholder='minimum 7 znaków, bez znaków specjalnych' #login class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Hasło</label>\r\n            <input formControlName=\"password\" type=\"password\" id=\"password\" placeholder='minimum 7 znaków' #password class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"confirm-password\">Potwierdź hasło</label>\r\n            <input formControlName=\"confirmPassword\" type=\"password\" id=\"confirm-password\" #confirmPassword class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"pin\">PIN</label>\r\n            <input formControlName=\"pin\" type=\"number\" ng-maxlength=\"4\" id=\"pin\" #pin placeholder='4-PIN' class=\"form-control\" style=\"-webkit-text-security: square;font-size:17px;max-width:17.5%;\">\r\n        </div>\r\n        <button type=\"submit\" [disabled]=\"!signupForm.valid || !this.pom\" class=\"btn btn-primary\">Zarejestruj</button>\r\n    </form>\r\n </div>\r\n\r\n<div *ngIf=\"!this.pom;\" class=\"alert alert-success\" style=\"max-width: 600px;\">\r\n        <strong>Sukces!</strong> Teraz możesz się <a [routerLink]=\"['../logowanie']\">zalogować</a> z loginem {{this.registeredUser}}.\r\n</div>\r\n<div *ngIf=\"!this.ifSuccess\" class=\"alert alert-danger\" style=\"max-width: 600px;\">\r\n        <strong>Niepowodzenie!</strong> Login jest już zajęty.\r\n</div>\r\n<div *ngIf=\"this.isLogged\" class=\"alert alert-info\" style=\"max-width: 600px;\">\r\n        <strong>Uwaga!</strong> Jesteś już zalogowany jako {{this.isLoggedAs}}. Jeśli to nie Ty, <a [routerLink]=\"['../wylogowanie']\">wyloguj się.</a>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        var _this = this;
        this._http = _http;
        this.pom = true;
        this.getUsersAPI()
            .subscribe(function (res) { return _this.users = res; });
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.getUsersAPI = function () {
        return this._http.get("/api/users")
            .map(function (result) { return result.json().data; });
    };
    UserService.prototype.registerUserAPI = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this._http.post('/api/users', body, { headers: headers });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var LocationService = (function () {
    function LocationService() {
        this.locations = [];
    }
    LocationService.prototype.getLocations = function () {
        return this.locations;
    };
    LocationService.prototype.addLocation = function (location) {
        this.locations.push(location);
    };
    LocationService.prototype.deleteLocation = function (location) {
        this.locations.splice(this.locations.indexOf(location), 1);
    };
    return LocationService;
}());

//Umiejscowienie danego przedmiotu. Jeden rodzaj przedmiotu może się oczywiście znajdować w wielu salach. 
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultComponent = (function () {
    function DefaultComponent(router) {
        this.router = router;
        this.isLogged = false;
        this.isImgUploaded = false;
        if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('currentUser').indexOf("|") != -1) {
            var _a = sessionStorage.getItem('currentUser').split('|'), username = _a[0], password = _a[1];
            this.user = username;
            this.isLogged = true;
        }
    }
    DefaultComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('img')) {
            this.router.navigate([sessionStorage.getItem('img')]);
            sessionStorage.removeItem('img');
            this.isImgUploaded = true;
        }
    };
    return DefaultComponent;
}());
DefaultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-default',
        template: __webpack_require__(210)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], DefaultComponent);

var _a;
//# sourceMappingURL=default.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = (function () {
    function DetailComponent(router, route, invService, locService) {
        this.router = router;
        this.route = route;
        this.invService = invService;
        this.locService = locService;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.itemIndex = params['id'];
            _this.selectedItem = _this.invService.getItem(_this.itemIndex);
        });
    };
    DetailComponent.prototype.onEdit = function () {
        this.router.navigate(['/inwentarz', this.itemIndex, 'edytuj']);
    };
    DetailComponent.prototype.onDelete = function (index) {
        this.invService.deleteItem(this.selectedItem);
        this.invService.postItemsAPI().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.router.navigate(['/inwentarz']);
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(213)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__inventory_service__["a" /* InventoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__location_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_location_service__["a" /* LocationService */]) === "function" && _d || Object])
], DetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(is, route, router, formBuilder, _http) {
        this.is = is;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this._http = _http;
        this.isNew = true;
        this.filesToUpload = [];
        this.isImgSelected = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.isNew = false;
                _this.itemIndex = params['id'];
                _this.item = _this.is.getItem(_this.itemIndex);
            }
            else {
                _this.isNew = true;
                _this.item = null;
            }
            _this.initForm();
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var pom = this.itemForm.controls['name'].value.charAt(0).toUpperCase();
        ;
        for (var j = 1; j < this.itemForm.controls['name'].value.length; j++)
            pom += this.itemForm.controls['name'].value.charAt(j);
        this.itemForm.controls['name'].setValue(pom);
        if (this.itemForm.controls['imagePath'].value == (null || ''))
            this.itemForm.controls['imagePath'].setValue("/assets/images/items/none.png");
        var _a = sessionStorage.getItem('currentUser').split('|'), username = _a[0], password = _a[1];
        this.itemForm.controls['lastMod'].setValue(username);
        if (this.isImgSelected) {
            this.upload();
            //if (!this.isNew) this.linkurl = 'inwentarz/' +this.itemIndex; else this.linkurl = 'inwentarz';
            this.itemForm.controls['imagePath'].setValue("/assets/images/items/" + this.imgurl);
            //window.location.href='#';
        }
        var newItem = this.itemForm.value;
        if (this.isNew) {
            this.is.addItem(newItem);
        }
        else {
            this.is.editItem(this.item, newItem);
        }
        this.is.postItemsAPI().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.is.getItems();
        if (this.isImgSelected) {
            if (!this.isNew)
                this.linkurl = 'inwentarz/' + this.itemIndex;
            else
                this.linkurl = 'inwentarz';
            sessionStorage.setItem('img', this.linkurl);
            window.location.href = '#';
        }
        else
            this.navigateBack();
    };
    EditComponent.prototype.navigateBack = function () {
        if (!this.isNew)
            this.linkurl = 'inwentarz/' + this.itemIndex;
        else
            this.linkurl = 'inwentarz';
        this.router.navigate([this.linkurl]);
    };
    EditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EditComponent.prototype.onAddLocation = function (quantity, building, room) {
        this.itemForm.controls['locations'].push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
            quantity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](quantity, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].max(1000)]),
            building: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](building.toUpperCase(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
            room: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](room.toUpperCase(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
        }));
    };
    EditComponent.prototype.onRemoveLocation = function (index) {
        this.itemForm.controls['locations'].removeAt(index);
    };
    EditComponent.prototype.upload = function () {
        var formData = new FormData();
        var files = this.filesToUpload;
        this.imgurl = Date.now() + files[0]['name'];
        formData.append("uploads[]", files[0], this.imgurl);
        //console.log(this.imgurl);
        this._http.post('/api/upload', formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) { return console.log('files', files); });
        //
    };
    EditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.imagePom = fileInput.target.files[0]['name'];
        this.isImgSelected = true;
    };
    EditComponent.prototype.initForm = function () {
        var itemName = '';
        var itemDescription = '';
        var itemImagePath = '';
        var itemLastMod = '';
        var itemLocations = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormArray */]([]);
        if (!this.isNew) {
            if (this.item.hasOwnProperty('locations')) {
                for (var i = 0; i < this.item.locations.length; i++) {
                    itemLocations.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
                        quantity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](this.item.locations[i].quantity, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
                        building: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](this.item.locations[i].building, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
                        room: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](this.item.locations[i].room, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
                    }));
                }
            }
            itemName = this.item.name;
            itemDescription = this.item.description;
            itemImagePath = this.item.imagePath;
            itemLastMod = this.item.lastMod;
            this.imgurl = this.item.imagePath;
        }
        this.itemForm = this.formBuilder.group({
            name: [itemName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: [itemDescription, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            imagePath: [itemImagePath],
            locations: itemLocations,
            lastMod: [itemLastMod]
        });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(214)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__inventory_service__["a" /* InventoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _e || Object])
], EditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryDefaultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InventoryDefaultComponent = (function () {
    function InventoryDefaultComponent() {
    }
    return InventoryDefaultComponent;
}());
InventoryDefaultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inventory-default',
        template: "\n  <h2>Wybierz przedmiot z listy</h2>\n  "
    })
], InventoryDefaultComponent);

//# sourceMappingURL=inventory-default.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = (function () {
    function InventoryComponent() {
    }
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inventory',
        template: __webpack_require__(217)
    }),
    __metadata("design:paramtypes", [])
], InventoryComponent);

//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inventory_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = (function () {
    function SummaryComponent(iS) {
        this.iS = iS;
        this.pom_array = [];
        this.selected = false;
        this.items = this.iS.getItems();
    }
    SummaryComponent.prototype.ngOnInit = function () { };
    SummaryComponent.prototype.showSummary = function (b) {
        this.selected = true;
        for (var i = 0; i < this.items.length; i++) {
            for (var j = 0; j < this.items[i].locations.length; j++) {
                if (this.items[i].locations[j].building == b) {
                    this._pom_array = {
                        name: this.items[i].name,
                        quantity: Number(this.items[i].locations[j].quantity)
                    };
                    this.pom_array.push(this._pom_array);
                }
            }
        }
        for (var i = 0; i < this.pom_array.length - 1; i++) {
            if (this.pom_array[i].name == this.pom_array[i + 1].name) {
                this.pom_array[i + 1].quantity += this.pom_array[i].quantity;
            }
        }
        var obj = {};
        for (var i = 0, len = this.pom_array.length; i < len; i++) {
            obj[this.pom_array[i]['name']] = this.pom_array[i];
        }
        var pom_array1 = new Array();
        for (var key in obj) {
            pom_array1.push(obj[key]);
        }
        this.pom_array = pom_array1;
        this.pie_ChartData = [['Nazwa', 'Ilość']];
        this.pie_ChartOptions = {
            title: 'Zestawienie dla budynku ' + b,
            width: 800,
            height: 400
        };
        for (var i = 0; i < this.pom_array.length; i++) {
            var singleItem = [this.pom_array[i].name, this.pom_array[i].quantity];
            //console.log(singleItem);
            this.pie_ChartData.push(singleItem);
        }
        //console.log(this.pom_array);
        this.pom_array = [];
    };
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summary',
        template: __webpack_require__(219)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__inventory_service__["a" /* InventoryService */]) === "function" && _a || Object])
], SummaryComponent);

var _a;
//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(router, md5, us, _http) {
        var _this = this;
        this.router = router;
        this.md5 = md5;
        this.us = us;
        this._http = _http;
        this.pom = false;
        if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('currentUser').indexOf("|") != -1) {
            this.us.getUsersAPI()
                .subscribe(function (res) { return _this.users = res; });
            this.users = this.us.getUsers();
        }
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('currentUser').indexOf("|") != -1) {
            var _a = sessionStorage.getItem('currentUser').split('|'), username = _a[0], password = _a[1];
            this.md5.start();
            var passHash = this.md5.appendStr(password).end();
            for (var i = 0; i < this.users.length; i++)
                if (username == this.users[i].login && passHash == this.users[i].password)
                    return true;
            passHash = "";
        }
        else {
            this.router.navigate(['logowanie']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object])
], AuthGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, us, md5) {
        var _this = this;
        this.fb = fb;
        this.us = us;
        this.md5 = md5;
        this.error = false;
        this.errorMessage = '';
        this.pom = true;
        this.ifSuccess = true;
        this.isLogged = false;
        this.us.getUsersAPI()
            .subscribe(function (res) { return _this.users = res; });
        this.users = this.us.getUsers();
        if (sessionStorage.getItem('currentUser')) {
            var _a = sessionStorage.getItem('currentUser').split('|'), username = _a[0], password = _a[1];
            this.isLoggedAs = username;
            this.isLogged = true;
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    this.isLong
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    this.isLong
                ])],
        });
    };
    LoginComponent.prototype.isLong = function (control) {
        if (control.value.length < 7) {
            return { isLong: true };
        }
    };
    LoginComponent.prototype.onSignin = function () {
        this.md5.start();
        var passHash = this.md5.appendStr(this.signupForm.controls['password'].value).end();
        var token = this.signupForm.controls['login'].value + "|" + this.signupForm.controls['password'].value;
        for (var i = 0; i < this.users.length; i++) {
            if (this.signupForm.controls['login'].value == this.users[i].login && passHash == this.users[i].password) {
                this.pom = false;
                this.ifSuccess = true;
                sessionStorage.setItem('currentUser', token);
                window.location.href = '#';
            }
            else {
                this.ifSuccess = false;
            }
        }
        passHash = "";
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(220)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
        if (sessionStorage.getItem('currentUser')) {
            sessionStorage.removeItem('currentUser');
        }
        this.router.navigate(['/']);
    }
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(fb, us, md5) {
        var _this = this;
        this.fb = fb;
        this.us = us;
        this.md5 = md5;
        this.error = false;
        this.errorMessage = '';
        this.pom = true;
        this.ifSuccess = true;
        this.isLogged = false;
        this.us.getUsersAPI()
            .subscribe(function (res) { return _this.users = res; });
        this.users = this.us.getUsers();
        if (sessionStorage.getItem('currentUser')) {
            var _a = sessionStorage.getItem('currentUser').split('|'), username = _a[0], password = _a[1];
            this.isLoggedAs = username;
            this.isLogged = true;
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    this.isLong,
                    this.haveSeperator
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    this.isLong,
                    this.haveSeperator
                ])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    this.isEqualPassword.bind(this)
                ])],
            pin: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    this.correctPIN
                ])],
        });
    };
    RegisterComponent.prototype.isEqualPassword = function (control) {
        if (!this.signupForm) {
            return { passwordsNotMatch: true };
        }
        if (control.value !== this.signupForm.controls['password'].value) {
            return { passwordsNotMatch: true };
        }
    };
    RegisterComponent.prototype.haveSeperator = function (control) {
        //if (!control.value.match(/^\w+@[a-zA-Z_0-9]+?\.[a-zA-Z]{2,3}$/)) {
        if (control.value.match(/.*[|].*/)) {
            return { noEmail: true };
        }
    };
    RegisterComponent.prototype.correctPIN = function (control) {
        if (control.value != 5541) {
            return { incorrectPIN: true };
        }
    };
    RegisterComponent.prototype.isLong = function (control) {
        if (control.value.length < 7) {
            return { isLong: true };
        }
    };
    RegisterComponent.prototype.onSignup = function () {
        this.pom = false;
        for (var i = 0; i < this.users.length; i++)
            if (this.signupForm.controls['login'].value == this.users[i].login) {
                this.pom = true;
                this.ifSuccess = false;
            }
        if (!this.pom) {
            this.registeredUser = this.signupForm.controls['login'].value;
            this.md5.start();
            this.signupForm.controls['password'].setValue(this.md5.appendStr(this.signupForm.controls['password'].value).end());
            this.signupForm.controls['confirmPassword'].setValue("OK");
            this.signupForm.controls['pin'].setValue("OK");
            var only_once = true;
            if (only_once) {
                this.us.registerUserAPI(this.signupForm.value).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            }
            only_once = false;
            //this.users = this.us.getUsers();
            this.signupForm.controls['password'].setValue("");
            this.signupForm.controls['confirmPassword'].setValue("");
            this.signupForm.controls['pin'].setValue("");
            this.ifSuccess = true;
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(221)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.bundle.js.map