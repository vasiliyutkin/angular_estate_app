(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AccountComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.passwordNotification, " ");
} }
function AccountComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.passwordError, " ");
} }
function AccountComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Curent Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountComponent_div_15_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.pf.currPassword.errors.required);
} }
function AccountComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountComponent_div_18_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.pf.newPassword.errors.required);
} }
function AccountComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password Confirmation is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountComponent_div_21_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.pf.confirmPassword.errors.required);
} }
function AccountComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passwords doesn't match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AccountComponent {
    constructor(formBuilder, accountService) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.loading = false;
        this.passwordFormSubmitted = false;
        this.passwordError = '';
        this.passwordNotification = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = sessionStorage.getItem('user');
            this.userData = JSON.parse(user);
            this.passwordForm = this.formBuilder.group({
                currPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        });
    }
    get pf() {
        return this.passwordForm.controls;
    }
    get passwordsMatch() {
        return this.pf.newPassword.value === this.pf.confirmPassword.value;
    }
    updatePassword() {
        this.passwordFormSubmitted = true;
        if (this.passwordForm.invalid || !this.passwordsMatch) {
            return;
        }
        this.accountService
            .passwordChange(this.pf.currPassword.value, this.pf.newPassword.value, this.userData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe((_) => {
            this.passwordError = null;
            this.passwordNotification = 'Password successfully updated!';
            this.passwordForm.reset();
            this.passwordFormSubmitted = false;
            setTimeout(() => {
                this.passwordNotification = null;
            }, 3000);
        }, (err) => {
            this.passwordError = err;
        });
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["ng-component"]], decls: 26, vars: 17, consts: [[1, "main-wrapper"], [1, "heading"], [1, "col-md-6", "update-info-card"], [1, "card"], [1, "card-body"], ["class", "info alert alert-info mx-auto mb-3", 4, "ngIf"], ["class", "error alert alert-danger mx-auto mb-3", 4, "ngIf"], [1, "text-bold", "pb-1"], [1, "mx-auto", 3, "formGroup", "ngSubmit"], [1, "form-group", "mt-5", "mb-5"], ["type", "password", "formControlName", "currPassword", "placeholder", "Curent Password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "newPassword", "placeholder", "New Password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password", 1, "form-control", 3, "ngClass"], ["class", "confirmation-failed", 4, "ngIf"], [1, "row", "justify-content-center", "align-self-center"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], [1, "info", "alert", "alert-info", "mx-auto", "mb-3"], [1, "error", "alert", "alert-danger", "mx-auto", "mb-3"], [1, "invalid-feedback"], [4, "ngIf"], [1, "confirmation-failed"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AccountComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AccountComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "New password must contain at least 8 characters. New password must include at least one symbol and one number.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AccountComponent_Template_form_ngSubmit_12_listener() { return ctx.updatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AccountComponent_div_15_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AccountComponent_div_18_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AccountComponent_div_21_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AccountComponent_div_22_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Update Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.passwordFormSubmitted && ctx.pf.currPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordFormSubmitted && ctx.pf.currPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.passwordFormSubmitted && ctx.pf.newPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordFormSubmitted && ctx.pf.newPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.passwordFormSubmitted && ctx.pf.confirmPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordFormSubmitted && ctx.pf.confirmPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passwordsMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".heading[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%], .update-info-card[_ngcontent-%COMP%] {\n  margin: 32px;\n  padding: 0;\n}\n\n.error[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.confirmation-failed[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ED4320;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZF9qb2huc29uL0Rlc2t0b3AvcmVhbF9lc3RhdGVfbWFuYWdlbWVudC9jbGllbnQvc3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbmRfam9obnNvbi9EZXNrdG9wL3JlYWxfZXN0YXRlX21hbmFnZW1lbnQvY2xpZW50L3NyYy9hcHAvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7O0VBR0UsWUM0RFc7RUQzRFgsVUFBQTtBRURGOztBRktBO0VBQ0Usa0JBQUE7QUVGRjs7QUZLQTtFQUNFLFVBQUE7QUVGRjs7QUZLQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQ2RNO0FDWVIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXBwL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5oZWFkaW5nLFxuLmFjdGlvbnMsXG4udXBkYXRlLWluZm8tY2FyZCB7XG4gIG1hcmdpbjogJGRlZi1tYXJnaW47XG4gIHBhZGRpbmc6IDA7XG59XG5cblxuLmVycm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmNvbmZpcm1hdGlvbi1mYWlsZWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAkZGFuZ2VyO1xufVxuIiwiXG5cblxuJHByaW1hcnk6ICM2NkNCRkY7XG4kc3VjY2VzczogICMyOUNDOTc7XG4kc2Vjb25kYXJ5OiAjNzY3ODgzO1xuJGluZm86ICMzNzUxRkY7XG4kd2FybmluZzogI0ZFQzQwMDtcbiRkYW5nZXI6I0VENDMyMDtcbiRsaWdodDogI0Y4RjhGODtcbiRkYXJrOiAjNTE1MTUxO1xuXG4kYmxhY2stMTA6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiRibGFjay0yMDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuJGJsYWNrLTMwOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4kYmxhY2stNDA6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiRibGFjay01MDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuJGJsYWNrLTYwOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kYmxhY2stNzA6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiRibGFjay04MDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuJGJsYWNrLTkwOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4kd2hpdGUtMTA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiR3aGl0ZS0yMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuJHdoaXRlLTMwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4kd2hpdGUtNDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiR3aGl0ZS01MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuJHdoaXRlLTYwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4kd2hpdGUtNzA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiR3aGl0ZS04MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJHdoaXRlLTkwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4kd2hpdGU6ICNmZmY7XG4kbGlnaHQtMTAwOiNFQkVCRUI7XG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICBcImluZm9cIjogICAgICAgJGluZm8sXG4gIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gIFwiZGFya1wiOiAgICAgICAkZGFya1xuKTtcblxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNztcbiRsaW5lLWhlaWdodHM6IChcbiAgMTA6IDEwICogJGxpbmUtaGVpZ2h0LWJhc2UsXG4gIDE1OiAxNSAqICRsaW5lLWhlaWdodC1iYXNlLFxuICAyMDogMjAgKiAkbGluZS1oZWlnaHQtYmFzZSxcbiAgMjU6IDI1ICogJGxpbmUtaGVpZ2h0LWJhc2Vcbik7XG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgMzogJHNwYWNlcixcbiAgICA0OiAoJHNwYWNlciAqIDEuNSksXG4gICAgNTogKCRzcGFjZXIgKiAxMClcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG4kZGVmLW1hcmdpbjogMzJweDtcblxuIiwiLmhlYWRpbmcsXG4uYWN0aW9ucyxcbi51cGRhdGUtaW5mby1jYXJkIHtcbiAgbWFyZ2luOiAzMnB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZXJyb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogNzAlO1xufVxuXG4uY29uZmlybWF0aW9uLWZhaWxlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNFRDQzMjA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'account.component.html',
                styleUrls: ['./account.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account/index.ts":
/*!**********************************!*\
  !*** ./src/app/account/index.ts ***!
  \**********************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return _account_component__WEBPACK_IMPORTED_MODULE_0__["AccountComponent"]; });




/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");






const routes = [
    {
        path: '',
        component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: 'admin',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'bankingAdmin',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'dashboard',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'files',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'files/:state/:id',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'folders',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'folders/:id',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'mtl-info/:id',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'subscriptions',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'api',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'account',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'help',
                component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
        ],
    },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '**', redirectTo: 'dashboard' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 2, vars: 0, consts: [[1, "container-fluid", "pl-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account */ "./src/app/account/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _account__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _account__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/helpers/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            const currentData = this.authenticationService.currentUserInfo;
            if (currentData) {
                sessionStorage.setItem('user', JSON.stringify(currentData));
                return true;
            }
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");





class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            if (err.status === 401) {
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/helpers/index.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        const currentUser = this.authenticationService
            .currentUserValue;
        const isLoggedIn = currentUser && currentUser.accessToken;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.accessToken}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.meetingInfo, " ");
} }
function LoginComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.scheduleError, " ");
} }
function LoginComponent_div_12_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_12_div_12_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.sf.name.errors.required);
} }
function LoginComponent_div_12_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Email format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_12_div_15_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_12_div_15_div_2_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.sf.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.sf.email.errors.email);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_12_div_3_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_12_div_4_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Schedule Demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter your name email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_12_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.scheduleDemo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_div_12_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_12_div_15_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.meetingInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scheduleError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.scheduleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.scheduleFormSubmitted && ctx_r0.sf.name.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scheduleFormSubmitted && ctx_r0.sf.name.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.scheduleFormSubmitted && ctx_r0.sf.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scheduleFormSubmitted && ctx_r0.sf.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loading);
} }
function LoginComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.loginError, " ");
} }
function LoginComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.passwordNotification, " ");
} }
function LoginComponent_div_13_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_13_div_12_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.lf.username.errors.required);
} }
function LoginComponent_div_13_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_13_div_15_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.lf.password.errors.required);
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_13_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_13_div_4_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter your username/email and password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_13_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_13_div_12_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_13_div_15_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_13_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.forgotPassword = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Log In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passwordNotification);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r1.loginFormSubmitted && ctx_r1.lf.username.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginFormSubmitted && ctx_r1.lf.username.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r1.loginFormSubmitted && ctx_r1.lf.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginFormSubmitted && ctx_r1.lf.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.loading);
} }
function LoginComponent_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.loginError, " ");
} }
function LoginComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.passwordNotification, " ");
} }
function LoginComponent_div_14_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_12_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.ff.username.errors.required);
} }
function LoginComponent_div_14_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_15_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.ff.newPassword.errors.required);
} }
function LoginComponent_div_14_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password Confirmation is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_18_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.ff.confirmPassword.errors.required);
} }
function LoginComponent_div_14_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords doesn't match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_14_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_14_div_4_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter your username/email and new password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_14_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.resetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_14_div_12_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_14_div_15_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_14_div_18_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_14_div_19_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Reset Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loginError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.passwordNotification);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r2.forgotFormSubmited && ctx_r2.ff.username.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.forgotFormSubmited && ctx_r2.lf.username.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r2.forgotFormSubmited && ctx_r2.ff.newPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.forgotFormSubmited && ctx_r2.ff.newPassword.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r2.forgotFormSubmited && ctx_r2.ff.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.forgotFormSubmited && ctx_r2.ff.confirmPassword.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.passwordsMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.loading);
} }
const _c1 = function (a0) { return { "btn-light-blue": a0 }; };
class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.scheduleFormSubmitted = false;
        this.forgotFormSubmited = false;
        this.forgotPassword = false;
        this.loginFormSubmitted = false;
        this.scheduleDemoMode = true;
        this.loginError = '';
        this.scheduleError = '';
        this.passwordNotification = '';
        this.meetingInfo = '';
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    ngOnInit() {
        this.scheduleForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
        });
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.forgotForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.returnUrl =
            this.route.snapshot.queryParams.returnUrl !== '/'
                ? this.route.snapshot.queryParams.returnUrl
                : '/dashboard';
    }
    get sf() {
        return this.scheduleForm.controls;
    }
    get lf() {
        return this.loginForm.controls;
    }
    get ff() {
        return this.forgotForm.controls;
    }
    get passwordsMatch() {
        return this.ff.newPassword.value === this.ff.confirmPassword.value;
    }
    resetPassword() {
        this.forgotFormSubmited = true;
        if (this.forgotForm.invalid || !this.passwordsMatch) {
            return;
        }
        this.authenticationService
            .resetPassword(this.ff.username.value, this.ff.newPassword.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe((_) => {
            this.loginError = null;
            this.passwordNotification = 'Password successfully reset';
            this.forgotForm.reset();
            this.forgotPassword = false;
            setTimeout(() => {
                this.passwordNotification = null;
            }, 3000);
        }, (err) => {
            this.loginError = err;
        });
    }
    scheduleDemo() {
        this.scheduleFormSubmitted = true;
        if (this.scheduleForm.invalid) {
            return;
        }
        this.authenticationService
            .sendEmail(this.sf.email.value, this.sf.name.value, '', 'Meeting')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe((sent) => {
            if (sent) {
                this.scheduleError = null;
                this.meetingInfo = `Meeting for ${this.sf.name.value}: ${this.sf.email.value} was successfully scheduled!`;
                this.scheduleFormSubmitted = false;
                this.scheduleForm.reset();
                setTimeout(() => {
                    this.meetingInfo = null;
                    this.scheduleFormSubmitted = false;
                }, 3000);
            }
            else {
                this.meetingInfo = null;
                this.scheduleError = 'Meeting was not sceduled';
                setTimeout(() => {
                    this.scheduleFormSubmitted = null;
                }, 3000);
            }
        });
    }
    login() {
        this.loginFormSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService
            .login(this.lf.username.value, this.lf.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe((_) => {
            this.router.navigate(['/dashboard']);
        }, (error) => {
            this.loginError = error;
            setTimeout(() => {
                this.loginError = null;
            }, 10000);
            this.loading = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 15, vars: 9, consts: [[1, "container", "mx-auto", "mt-3"], [1, "d-flex", "flex-column"], ["alt", "logo", 1, "mx-auto"], [1, "mx-auto", "mt-3"], [1, "mx-auto", "mt-n3", "pt-3"], [1, "d-flex", "justify-content-center", "mt-4"], [1, "btn", "btn-sm", "mr-4", "btn-light", "border-0", 3, "ngClass", "click"], [1, "btn", "btn-sm", "btn-light", "border-0", 3, "ngClass", "click"], ["class", "col-md-6 offset-md-3 mt-4", 4, "ngIf"], ["class", "col-md-6 offset-md-3 mt-4 mb-2", 4, "ngIf"], [1, "col-md-6", "offset-md-3", "mt-4"], [1, "card"], [1, "card-body"], ["class", "info alert alert-info mx-auto mb-3", 4, "ngIf"], ["class", "error alert alert-danger mx-auto mb-3", 4, "ngIf"], [1, "mx-auto", 3, "formGroup", "ngSubmit"], [1, "form-group", "mt-5", "mb-5"], ["type", "text", "formControlName", "name", "placeholder", "Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], [1, "row", "justify-content-center", "align-self-center"], ["type", "submit", 1, "btn", "btn-sm", "btn-light-blue", 3, "disabled"], [1, "info", "alert", "alert-info", "mx-auto", "mb-3"], [1, "error", "alert", "alert-danger", "mx-auto", "mb-3"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", "formControlName", "username", "placeholder", "Email Address", 1, "form-control", 3, "ngClass"], [1, "form-group", "mt-5", "mb-3"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "text-right", 3, "click"], [1, "btn", "color-secondary", "pr-0", 2, "font-size", "14px"], [1, "col-md-6", "offset-md-3", "mt-4", "mb-2"], [1, "form-group", "mt-4", "mb-3"], ["type", "password", "formControlName", "newPassword", "placeholder", "New Password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password", 1, "form-control", 3, "ngClass"], ["class", "confirmation-failed", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], [1, "confirmation-failed"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Crypto Compliance Made Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Introducing a groundbreaking state money transmitter license tool.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_8_listener() { return ctx.scheduleDemoMode = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Schedule Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_10_listener() { ctx.scheduleDemoMode = false; return ctx.forgotPassword = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Login to Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 19, 12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 22, 12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 23, 17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.scheduleDemoMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, !ctx.scheduleDemoMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scheduleDemoMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.scheduleDemoMode && !ctx.forgotPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgotPassword);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.btn-light-blue[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #66CBFF;\n  border-color: #66CBFF;\n}\n\n.btn-light-blue[_ngcontent-%COMP%]:hover {\n  background-color: #66CBFF;\n  border-color: #66CBFF;\n}\n\n.error[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.bitImage[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZF9qb2huc29uL0Rlc2t0b3AvcmVhbF9lc3RhdGVfbWFuYWdlbWVudC9jbGllbnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbmRfam9obnNvbi9EZXNrdG9wL3JlYWxfZXN0YXRlX21hbmFnZW1lbnQvY2xpZW50L3NyYy9hcHAvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSwrQkVxQlM7RUZwQlQseUJFTFE7RUZNUixxQkVOUTtBREtWOztBREdFO0VBQ0UseUJFVE07RUZVTixxQkVWTTtBRFNWOztBREtBO0VBQ0Usa0JBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hcHAvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuZm9ybSB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5idG4tbGlnaHQtYmx1ZSB7XG4gIGNvbG9yOiAkd2hpdGUtODA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gIH1cbn1cblxuLmVycm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYml0SW1hZ2V7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuIiwiZm9ybSB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5idG4tbGlnaHQtYmx1ZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NkNCRkY7XG4gIGJvcmRlci1jb2xvcjogIzY2Q0JGRjtcbn1cbi5idG4tbGlnaHQtYmx1ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NkNCRkY7XG4gIGJvcmRlci1jb2xvcjogIzY2Q0JGRjtcbn1cblxuLmVycm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYml0SW1hZ2Uge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNzBweDtcbn0iLCJcblxuXG4kcHJpbWFyeTogIzY2Q0JGRjtcbiRzdWNjZXNzOiAgIzI5Q0M5NztcbiRzZWNvbmRhcnk6ICM3Njc4ODM7XG4kaW5mbzogIzM3NTFGRjtcbiR3YXJuaW5nOiAjRkVDNDAwO1xuJGRhbmdlcjojRUQ0MzIwO1xuJGxpZ2h0OiAjRjhGOEY4O1xuJGRhcms6ICM1MTUxNTE7XG5cbiRibGFjay0xMDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuJGJsYWNrLTIwOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4kYmxhY2stMzA6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiRibGFjay00MDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuJGJsYWNrLTUwOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kYmxhY2stNjA6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRibGFjay03MDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuJGJsYWNrLTgwOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4kYmxhY2stOTA6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiR3aGl0ZS0xMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuJHdoaXRlLTIwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4kd2hpdGUtMzA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiR3aGl0ZS00MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuJHdoaXRlLTUwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4kd2hpdGUtNjA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiR3aGl0ZS03MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuJHdoaXRlLTgwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kd2hpdGUtOTA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiR3aGl0ZTogI2ZmZjtcbiRsaWdodC0xMDA6I0VCRUJFQjtcblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4pO1xuXG4kbGluZS1oZWlnaHQtYmFzZTogMS43O1xuJGxpbmUtaGVpZ2h0czogKFxuICAxMDogMTAgKiAkbGluZS1oZWlnaHQtYmFzZSxcbiAgMTU6IDE1ICogJGxpbmUtaGVpZ2h0LWJhc2UsXG4gIDIwOiAyMCAqICRsaW5lLWhlaWdodC1iYXNlLFxuICAyNTogMjUgKiAkbGluZS1oZWlnaHQtYmFzZVxuKTtcblxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAwOiAwLFxuICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAyOiAoJHNwYWNlciAqIC41KSxcbiAgICAzOiAkc3BhY2VyLFxuICAgIDQ6ICgkc3BhY2VyICogMS41KSxcbiAgICA1OiAoJHNwYWNlciAqIDEwKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcbiRkZWYtbWFyZ2luOiAzMnB4O1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AccountService {
    constructor(http) {
        this.http = http;
    }
    passwordChange(oldPassword, newPassword, user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/auth/password-change`, {
            oldPassword,
            newPassword,
            user
        });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    get currentUserInfo() {
        return this.currentUser;
    }
    get headers() {
        const updateHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: `Bearer ${this.currentUserValue}`,
            'Content-Type': 'application/json'
        });
        return updateHeaders;
    }
    getUsers() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth`, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            return user;
        }));
    }
    getUserById(userId) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth/user/${userId}`, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            return user;
        }));
    }
    deactivateUserById(userId, status) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth/deactivate`, { userId, status })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            return user;
        }));
    }
    deleteUserById(userId) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth/delete/${userId}`, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            return user;
        }));
    }
    signUpUser(userData) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth/signUp`, {
            userData,
        });
    }
    login(username, password) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth/signin`, {
            username,
            password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            const { accessToken, userData } = data;
            localStorage.setItem('currentUser', JSON.stringify(accessToken));
            localStorage.setItem('user', JSON.stringify(userData));
            sessionStorage.setItem('user', JSON.stringify(userData));
            this.currentUserSubject.next(data);
            return data;
        }));
    }
    resetPassword(username, newPassword) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth/resetPassword`, {
            username,
            newPassword,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        this.currentUserSubject.next(null);
    }
    passwordChange(oldPassword, newPassword, user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth/password-change`, {
            oldPassword,
            newPassword,
            user
        });
    }
    sendEmail(email, name, message, location) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/auth/sendEmail`, {
            name,
            email,
            message,
            location
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.ok));
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/files.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/files.service.ts ***!
  \*******************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");






class FilesService {
    constructor(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    getAllFiles() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/files/`, { headers: this.authenticationService.headers });
    }
    getFilesByOrgIdAndState(orgId, state) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/files/${orgId}/${state}`, { headers: this.authenticationService.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((files) => {
            return files;
        }));
    }
    createFolder(state, name, orgId) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/files/create-folder`, {
            state,
            name,
            orgId
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
    updateFolder(fileData, orgId) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/files/update-folder`, {
            fileData,
            orgId
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
    copyToAcrchive(orgId, state, fileData) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/files/copyToAcrchive`, {
            orgId,
            state,
            fileData,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
    deleteFolder(fileData, orgId) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/files/delete-folder`, {
            fileData,
            orgId
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
    uploadFile(formData) {
        const postData = new FormData();
        Object.keys(formData).forEach((key) => {
            postData.append(key, formData[key]);
        });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/files/upload`, postData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
    deleteFile(fileData) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/files/delete-file`, {
            fileData
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
}
FilesService.ɵfac = function FilesService_Factory(t) { return new (t || FilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
FilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilesService, factory: FilesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: FilesService, SubscriptionService, MtlStateService, AuthenticationService, AccountService, StateSitesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files.service */ "./src/app/services/files.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return _files_service__WEBPACK_IMPORTED_MODULE_0__["FilesService"]; });

/* harmony import */ var _subscriptions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscriptions.service */ "./src/app/services/subscriptions.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return _subscriptions_service__WEBPACK_IMPORTED_MODULE_1__["SubscriptionService"]; });

/* harmony import */ var _mtlStates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mtlStates.service */ "./src/app/services/mtlStates.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MtlStateService", function() { return _mtlStates_service__WEBPACK_IMPORTED_MODULE_2__["MtlStateService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]; });

/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.service */ "./src/app/services/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]; });

/* harmony import */ var _stateSites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateSites.service */ "./src/app/services/stateSites.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateSitesService", function() { return _stateSites_service__WEBPACK_IMPORTED_MODULE_5__["StateSitesService"]; });









/***/ }),

/***/ "./src/app/services/mtlStates.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/mtlStates.service.ts ***!
  \***********************************************/
/*! exports provided: MtlStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtlStateService", function() { return MtlStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");






class MtlStateService {
    constructor(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    getMtlStates() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlstates`, { headers: this.authenticationService.headers });
    }
    getStatesLinks() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlstates/statelinks/`, { headers: this.authenticationService.headers });
    }
    getUserAlertStatus(userId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlstates/alertStatus/${userId}`, { headers: this.authenticationService.headers });
    }
    getMtlStateById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlstates/getstate/${id}`, { headers: this.authenticationService.headers });
    }
    uploadXLSX(fileInfo) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlStates/upload-xlsx`, {
            fileData: [...fileInfo]
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    upsertAlertStatus(alertData) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlStates/upsertAlertStatus`, {
            alertData
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    updateStatesRenewal(renewalData) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlStates/updateStatesRenewal`, {
            renewalData
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    getNotesByOrgAndStateId(orgId, stateName) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlstates/stateNotes/${orgId}/${stateName}`, { headers: this.authenticationService.headers });
    }
    upsertNote(noteData, isNewNote) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlStates/stateNotes`, { headers: this.authenticationService.headers,
            noteData,
            isNewNote
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
}
MtlStateService.ɵfac = function MtlStateService_Factory(t) { return new (t || MtlStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
MtlStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MtlStateService, factory: MtlStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MtlStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/stateSites.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/stateSites.service.ts ***!
  \************************************************/
/*! exports provided: StateSitesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateSitesService", function() { return StateSitesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class StateSitesService {
    constructor(http) {
        this.http = http;
    }
    getCheckedLinks() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlstates/siteLinks`);
    }
    getCheckedLinksByDate(date) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlstates/siteLinks/${date}`);
    }
    postStateLinks(siteData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/mtlstates/postLinks`, {
            siteData
        });
    }
}
StateSitesService.ɵfac = function StateSitesService_Factory(t) { return new (t || StateSitesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StateSitesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateSitesService, factory: StateSitesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateSitesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/subscriptions.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/subscriptions.service.ts ***!
  \***************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");






class SubscriptionService {
    constructor(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    getsubs() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/`, { headers: this.authenticationService.headers });
    }
    getsubByUserId(userId) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/${userId}`, { headers: this.authenticationService.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((subs) => {
            return subs;
        }));
    }
    getUserEntities(userId) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/banking/${userId}`, { headers: this.authenticationService.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((subs) => {
            return subs;
        }));
    }
    getEntityByNumber(identificationNumber) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/entities/${identificationNumber}`, { headers: this.authenticationService.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((subs) => {
            return subs;
        }));
    }
    signUpEntities(entityData) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/signUpEntity`, {
            entityData,
        });
    }
    addEntitySubs(entityData) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/addEntitySub`, {
            entityData
        });
    }
    removeEntityById(bankId, identificationNumber) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/removeEntityById/${bankId}/${identificationNumber}`, { headers: this.authenticationService.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
    subscribeToState(state, userId) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/subscribeToState`, {
            state,
            userId
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
    updateSub(sub) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/updateSub`, {
            sub
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
    deleteSub(id, stateKey) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/subscriptions/deleteSub/${id}/${stateKey}`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }));
    }
}
SubscriptionService.ɵfac = function SubscriptionService_Factory(t) { return new (t || SubscriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
SubscriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubscriptionService, factory: SubscriptionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


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
const environment = {
    production: false,
    apiUrl: 'localhost:4200'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then((ref) => {
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
})
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nd_johnson/Desktop/real_estate_management/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map