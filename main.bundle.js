webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Lato;\r\n  }\r\n  \r\n  .active {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .link {\r\n    color: #3312cc;\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .link:hover {\r\n    color: #3312cc;\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div>\n    <input type=\"text\" placeholder=\"Search by\" [(ngModel)]=\"searchPhrase\" />\n    <button type=\"button\" (click)=\"search(searchPhrase)\" [disabled]=\"searchPhrase === ''\">Search</button>\n\n    <button type=\"button\" (click)=\"clear()\" [disabled]=\"searchPhrase === ''\">Clear</button>\n  </div>\n\n  <br/>\n  \n\t<div>\n\t\tSort by:\n\t\t<span class=\"link active\" (click)=\"sortBy('name')\">name</span> |\n\t\t<span class=\"link\" (click)=\"sortBy('price')\">price</span>\n  </div>\n  <div>\n      <button type=\"button\" (click)=\"addProduct('add')\">Add</button>\n  </div>\n</header>\n\n<br/>\n\n<section *ngIf=\"!isFormAppeared\">\n  <div><input type=\"checkbox\" (change)=\"selectAll()\" [checked]=\"isAllSelected\"/> Select all <button [hidden]=\"!isAllSelected\" (click)=\"removeAll()\">removeAll</button></div>\n  <br/>\n  <div *ngFor=\"let product of products\" [hidden]=\"showLoad\">\n    <input type=\"checkbox\" (change)=\"selectChange(product)\" [checked]=\"product.checked\"/>\n    {{ product.name }}\n    <b>{{ product.price }}$</b>\n    <button [hidden]=\"!product.checked || isAllSelected\" (click)=\"removeProduct(product)\">remove</button>\n    <button [hidden]=\"!product.checked || isAllSelected\" (click)=\"editProduct(product, 'edit')\">Edit</button>\n  </div>\n\n  <div *ngIf=\"showLoad\">Loading...</div>\n</section>\n\n<form *ngIf=\"isFormAppeared || showAddProductForm\" (ngSubmit)=\"onSubmit(productObj)\" #editForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"title\">Name</label>\n    <input type=\"text\" class=\"form-control\" required name=\"name\" [(ngModel)]=\"productObj.name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"author\">Price</label>\n    <input type=\"text\" class=\"form-control\" required name=\"price\" [(ngModel)]=\"productObj.price\">\n  </div>\n  <button class=\"btn btn-default\" (click)=\"cancelEdit()\">Cancel</button>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n </form>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_interface__ = __webpack_require__("./src/app/models/product.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("./src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("./src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(productsService, sharedService) {
        this.productsService = productsService;
        this.sharedService = sharedService;
        this.showLoad = true;
        this.searchPhrase = '';
        this.isNameToggle = true;
        this.isPriceToggle = true;
        this.isAllSelected = false;
        this.productObj = new __WEBPACK_IMPORTED_MODULE_1__models_product_interface__["a" /* IProduct */]('', 0, false);
        this.isFormAppeared = false;
        this.productIndex = 0;
        this.showAddProductForm = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.fetchProducts();
    };
    AppComponent.prototype.fetchProducts = function () {
        var _this = this;
        this.productsService
            .fetch()
            .subscribe(function (products) {
            _this.parseProducts(products);
        });
    };
    AppComponent.prototype.parseProducts = function (products) {
        this.products = products;
        this.products.forEach(function (element) {
            element.checked = false;
        });
        this.showLoad = false;
    };
    AppComponent.prototype.search = function (phrase) {
        var _this = this;
        this.showLoad = true;
        this.productsService.search(phrase).subscribe(function (searchRes) {
            _this.parseProducts(searchRes);
        });
    };
    AppComponent.prototype.clear = function () {
        this.searchPhrase = '';
        this.showLoad = true;
        this.fetchProducts();
    };
    AppComponent.prototype.sortBy = function (propertyName) {
        if (propertyName === 'name') {
            this.isPriceToggle = !this.isPriceToggle;
            if (this.isPriceToggle) {
                this.products.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                });
            }
            else {
                this.products.sort(function (a, b) {
                    return b.name.localeCompare(a.name);
                });
            }
        }
        else if (propertyName === 'price') {
            this.isNameToggle = !this.isNameToggle;
            if (this.isNameToggle) {
                this.products.sort(function (a, b) { return b.price - a.price; });
            }
            else {
                this.products.sort(function (a, b) { return a.price - b.price; });
            }
        }
    };
    AppComponent.prototype.selectChange = function (product) {
        product.checked = !product.checked;
    };
    AppComponent.prototype.removeProduct = function (product) {
        var productIndex = this.products.indexOf(product);
        this.products.splice(productIndex, 1);
    };
    AppComponent.prototype.selectAll = function () {
        this.isAllSelected = !this.isAllSelected;
        if (this.isAllSelected) {
            this.products.forEach(function (element) {
                element.checked = true;
            });
        }
        else {
            this.products.forEach(function (element) {
                element.checked = false;
            });
        }
    };
    AppComponent.prototype.removeAll = function () {
        this.products = [];
        this.isAllSelected = false;
    };
    AppComponent.prototype.editProduct = function (product, type) {
        this.formChangeStatus = type;
        this.isFormAppeared = true;
        this.productObj = new __WEBPACK_IMPORTED_MODULE_1__models_product_interface__["a" /* IProduct */](product.name, product.price, !product.checked);
        this.productIndex = this.products.indexOf(product);
    };
    AppComponent.prototype.onSubmit = function (product) {
        this.isFormAppeared = false;
        this.showAddProductForm = false;
        if (this.formChangeStatus === 'edit') {
            this.products[this.productIndex].name = product.name;
            this.products[this.productIndex].price = product.price;
            this.products[this.productIndex].checked = product.checked;
        }
        else {
            this.products.push(product);
        }
        this.sharedService.storeToSession('MOCK_PRODUCTS', this.products);
    };
    AppComponent.prototype.cancelEdit = function () {
        this.isFormAppeared = false;
    };
    AppComponent.prototype.addProduct = function (type) {
        this.formChangeStatus = type;
        this.showAddProductForm = true;
        this.productObj = new __WEBPACK_IMPORTED_MODULE_1__models_product_interface__["a" /* IProduct */]('', 0, false);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_service__ = __webpack_require__("./src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("./src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__products_service__["a" /* ProductsService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/product.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IProduct; });
var IProduct = /** @class */ (function () {
    function IProduct(name, price, checked) {
        this.name = name;
        this.price = price;
        this.checked = checked;
    }
    return IProduct;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("./src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MOCK_PRODUCTS = [
    { name: 'Hammer', price: 5, checked: false },
    { name: 'Screwdriver', price: 12, checked: false },
    { name: 'Pliers', price: 25, checked: false },
    { name: 'Wrench', price: 7, checked: false }
];
var ProductsService = /** @class */ (function () {
    function ProductsService(sharedService) {
        this.sharedService = sharedService;
        this.sharedService.storeToSession('MOCK_PRODUCTS', MOCK_PRODUCTS);
    }
    /**
     * will return full list of mocked products
     * Delayed operation
     */
    ProductsService.prototype.fetch = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */]
            .of(this.sharedService.getFromSession('MOCK_PRODUCTS').slice())
            .delay(Math.random() * 5000);
    };
    /**
     * will return mocked products, filtered by input phrase
     * Delayed operation
     */
    ProductsService.prototype.search = function (phrase) {
        var filtered = this.sharedService.getFromSession('MOCK_PRODUCTS')
            .filter(function (p) { return (new RegExp(phrase, 'ig')).test(p.name); });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */]
            .of(filtered)
            .delay(Math.random() * 5000);
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService.prototype.storeToSession = function (key, value) {
        if (sessionStorage) {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    };
    SharedService.prototype.getFromSession = function (key) {
        if (sessionStorage.getItem(key) !== '') {
            return JSON.parse(sessionStorage.getItem(key));
        }
    };
    SharedService.prototype.removeSessionItem = function (key) {
        sessionStorage.removeItem(key);
    };
    SharedService.prototype.clearSession = function () {
        sessionStorage.clear();
    };
    return SharedService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map