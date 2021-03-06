(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('socket.io-client')) :
    typeof define === 'function' && define.amd ? define('socket-front-update', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'socket.io-client'], factory) :
    (global = global || self, factory(global['socket-front-update'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.io.client));
}(this, (function (exports, core, rxjs, operators, io__default) { 'use strict';

    var io__default__default = 'default' in io__default ? io__default['default'] : io__default;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /***********************************************************
     **  @project ngx-front-live-update                              **
     **  @file default                                         **
     **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
     **  @Date 26/03/2021                                         **
     ***********************************************************/
    var DefaultSocketConfig = {
        url: '',
        path: '/socket.io',
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        randomizationFactor: 0.5,
        timeout: 20000,
        autoConnect: true,
        query: {},
        transports: ['polling', 'websocket'],
        extraHeaders: {}
    };

    //import {SOCKET_CONFIG_TOKEN} from './socket-front-update.module';
    // @dynamic
    var SocketWrapper = /** @class */ (function () {
        function SocketWrapper(Config) {
            var _this = this;
            this.Config = Config;
            this.tokenUpdater = new core.EventEmitter();
            this.subscribersCounter = 0;
            this.roomList = [];
            this.SocketConfig = DefaultSocketConfig;
            this.Config = Config;
            if (!this.SocketConfig) {
                this.SocketConfig = {};
            }
            for (var key in Config) {
                if (key.includes('socket_')) {
                    this.SocketConfig[key.replace('socket_', '')] = Config[key];
                }
            }
            this.url = (!Config || Config && !Config.url) ? '' : Config.url;
            this.socket = this.connect();
            if ((Config && !Config.auth || !Config)) {
                this.onReconnect();
            }
            else {
                this.tokenUpdater.subscribe(function (token) {
                    var e_1, _a;
                    if (_this.socket) {
                        _this.disconnect();
                    }
                    if (token) {
                        if (!_this.SocketConfig.extraHeaders) {
                            _this.SocketConfig.extraHeaders = {};
                        }
                        if (!_this.SocketConfig.transportOptions) {
                            _this.SocketConfig.transportOptions = {};
                        }
                        try {
                            for (var _b = __values(_this.SocketConfig.transports), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var en = _c.value;
                                _this.SocketConfig.transportOptions[en] = {
                                    extraHeaders: {
                                        Authorization: "Baerer " + token
                                    }
                                };
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        _this.SocketConfig.extraHeaders.Authorization = "Baerer " + token;
                        _this.SocketConfig.query.token = "" + token;
                        _this.socket = _this.connect();
                        if (Config && Config.loginPage) {
                            _this.redirectLogin(Config.loginPage);
                        }
                        _this.onReconnect();
                    }
                });
            }
        }
        SocketWrapper.prototype.unsubscribe = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var index;
                return __generator(this, function (_a) {
                    this.socket.emit('unsubscribe', name);
                    index = this.roomList.findIndex(function (room) { return room === name; });
                    if (index > -1) {
                        this.roomList.splice(index, 1);
                        console.log('unsubscribe room %s', name);
                    }
                    else {
                        console.log('no joined room');
                    }
                    return [2 /*return*/];
                });
            });
        };
        SocketWrapper.prototype.unsubscribeAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (this.roomList.length) {
                        this.roomList.forEach(function (room) {
                            _this.unsubscribe(room);
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        SocketWrapper.prototype.subscribe = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.roomList.indexOf(name) > -1)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.unsubscribe(name)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (this.roomList.indexOf(name) === -1) {
                                this.roomList.push(name);
                            }
                            console.log('subscribe room %s', name);
                            return [4 /*yield*/, this.socket.emit('subscribe', name)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SocketWrapper.prototype.of = function (namespace) {
            this.socket.of(namespace);
        };
        SocketWrapper.prototype.on = function (eventName, callback) {
            this.socket.on(eventName, callback);
        };
        ;
        SocketWrapper.prototype.once = function (eventName, callback) {
            this.socket.once(eventName, callback);
        };
        ;
        SocketWrapper.prototype.connect = function () {
            console.log('Config', this.SocketConfig);
            var ioSocket = io__default__default ? io__default__default : io__default;
            return ioSocket(this.url, this.SocketConfig).connect();
        };
        SocketWrapper.prototype.disconnect = function (close) {
            return this.socket.disconnect.apply(this.socket, arguments);
        };
        SocketWrapper.prototype.emit = function (eventName, data, callback) {
            this.socket.emit(eventName, data, callback);
        };
        ;
        SocketWrapper.prototype.removeListener = function (eventName, callback) {
            return this.socket.removeListener.apply(this.socket, arguments);
        };
        ;
        SocketWrapper.prototype.removeAllListeners = function (eventName) {
            return this.socket.removeAllListeners.apply(this.socket, arguments);
        };
        ;
        SocketWrapper.prototype.fromEvent = function (eventName) {
            var _this = this;
            this.subscribersCounter++;
            return new rxjs.Observable(function (observer) {
                _this.socket.on(eventName, function (data) {
                    observer.next(data);
                });
                return function () {
                    if (_this.subscribersCounter === 1) {
                        _this.socket.removeListener(eventName);
                    }
                };
            }).pipe(operators.share());
        };
        ;
        SocketWrapper.prototype.fromOneTimeEvent = function (eventName) {
            var _this = this;
            return new Promise(function (resolve) { return _this.once(eventName, resolve); });
        };
        ;
        SocketWrapper.prototype.onReconnect = function () {
            var _this = this;
            if (this.socket) {
                this.socket.on('reconnect', function () {
                    if (_this.roomList && _this.roomList.length) {
                        _this.roomList.forEach(function (name) {
                            _this.subscribe(name).catch(function (err) { return console.log('error socket reconnect', err); });
                        });
                    }
                    else {
                        console.log('room is empty');
                    }
                });
            }
            else {
                console.log('socket does not exist');
            }
        };
        SocketWrapper.prototype.redirectLogin = function (loginPage) {
            if (this.socket && loginPage) {
                this.socket.on('session-time-out', function (msg) {
                    console.log('session-time-out');
                });
            }
        };
        SocketWrapper.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['__SocketWrapper__',] }] }
        ]; };
        SocketWrapper = __decorate([
            core.Injectable(),
            __param(0, core.Inject('__SocketWrapper__')),
            __metadata("design:paramtypes", [Object])
        ], SocketWrapper);
        return SocketWrapper;
    }());

    // tslint:disable-next-line:max-line-length
    function SocketFactory(config) {
        return (config);
    }
    //export const SOCKET_CONFIG_TOKEN = new InjectionToken<SocketIoConfig>('__SocketWrapper__');
    var SocketIoModule = /** @class */ (function () {
        function SocketIoModule(parentModule) {
            if (parentModule) {
                throw new Error('SocketFrontUpdateModule is already loaded. Import it in the AppModule only');
            }
        }
        SocketIoModule_1 = SocketIoModule;
        SocketIoModule.forRoot = function (config) {
            return {
                ngModule: SocketIoModule_1,
                providers: [
                    //SocketWrapper,
                    { provide: '__SocketWrapper__', useValue: config },
                    SocketWrapper
                ]
            };
        };
        var SocketIoModule_1;
        SocketIoModule.ctorParameters = function () { return [
            { type: SocketIoModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        SocketIoModule = SocketIoModule_1 = __decorate([
            core.NgModule({
                providers: [SocketWrapper]
            }),
            __param(0, core.Optional()), __param(0, core.SkipSelf()),
            __metadata("design:paramtypes", [SocketIoModule])
        ], SocketIoModule);
        return SocketIoModule;
    }());

    exports.Socket = SocketWrapper;
    exports.SocketFactory = SocketFactory;
    exports.SocketIoModule = SocketIoModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=socket-front-update.umd.js.map
