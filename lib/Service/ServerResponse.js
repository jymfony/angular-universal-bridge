"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Http = require("../Injection/Http");
var ServerResponse = /** @class */ (function () {
    function ServerResponse(_serverResponse) {
        this._serverResponse = _serverResponse;
    }
    /**
     * Adds an header to the response.
     */
    ServerResponse.prototype.setHeader = function (name, content, replace) {
        if (replace === void 0) { replace = true; }
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.headers.set(name, content, replace);
    };
    /**
     * Adds a cookie to the response (or to the document).
     */
    ServerResponse.prototype.setCookie = function (cookie) {
        if (!this._serverResponse) {
            this._setCookie(cookie);
            return;
        }
        this._serverResponse.headers.setCookie(new Jymfony.Component.HttpFoundation.Cookie(cookie.name, cookie.value, cookie.expire, cookie.path, cookie.domain, cookie.secure, cookie.httpOnly, cookie.raw, cookie.sameSite));
    };
    /**
     * Sets the response status code and text.
     */
    ServerResponse.prototype.setStatusCode = function (code, text) {
        if (text === void 0) { text = undefined; }
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setStatusCode(code, text);
    };
    /**
     * Marks the response as "private".
     * It makes the response ineligible for serving other clients.
     *
     * @final
     */
    ServerResponse.prototype.setPrivate = function () {
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setPrivate();
    };
    /**
     * Marks the response as "public".
     * It makes the response eligible for serving other clients.
     *
     * @final
     */
    ServerResponse.prototype.setPublic = function () {
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setPublic();
    };
    /**
     * Marks the response as "immutable".
     *
     * @final
     */
    ServerResponse.prototype.setImmutable = function (immutable) {
        if (immutable === void 0) { immutable = true; }
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setImmutable(immutable);
    };
    Object.defineProperty(ServerResponse.prototype, "immutable", {
        /**
         * Returns true if the response is marked as "immutable".
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return false;
            }
            return this._serverResponse.immutable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerResponse.prototype, "date", {
        /**
         * Returns the Date header as a unix time.
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return -1;
            }
            return this._serverResponse.date.unixTime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the Date header.
     *
     * @final
     */
    ServerResponse.prototype.setDate = function (date) {
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setDate(date);
    };
    Object.defineProperty(ServerResponse.prototype, "age", {
        /**
         * Returns the age of the response in seconds.
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return 0;
            }
            return this._serverResponse.age;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Marks the response stale by setting the Age header to be equal to the maximum age of the response.
     */
    ServerResponse.prototype.expire = function () {
        if (!this._serverResponse) {
            return;
        }
        return this._serverResponse.expire();
    };
    Object.defineProperty(ServerResponse.prototype, "expires", {
        /**
         * Returns the value of the Expires header as a DateTime instance.
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return 0;
            }
            return this._serverResponse.expires.unixTime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the Expires HTTP header with a DateTime instance.
     * Passing null as value will remove the header.
     *
     * @final
     */
    ServerResponse.prototype.setExpires = function (date) {
        if (date === void 0) { date = undefined; }
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setExpires(date);
    };
    Object.defineProperty(ServerResponse.prototype, "maxAge", {
        /**
         * Returns the number of seconds after the time specified in the response's Date
         * header when the response should no longer be considered fresh.
         *
         * First, it checks for a s-maxage directive, then a max-age directive, and then it falls
         * back on an expires header. It returns undefined when no maximum age can be established.
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return;
            }
            return this._serverResponse.maxAge;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the number of seconds after which the response should no longer be considered fresh.
     * This methods sets the Cache-Control max-age directive.
     *
     * @final
     */
    ServerResponse.prototype.setMaxAge = function (value) {
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setMaxAge(value);
    };
    /**
     * Sets the number of seconds after which the response should no longer be considered fresh by shared caches.
     *
     * This methods sets the Cache-Control s-maxage directive.
     *
     * @param {int} value
     *
     * @returns {Jymfony.Component.HttpFoundation.Response}
     *
     * @final
     */
    ServerResponse.prototype.setSharedMaxAge = function (value) {
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setSharedMaxAge(value);
    };
    Object.defineProperty(ServerResponse.prototype, "ttl", {
        /**
         * Returns the response's time-to-live in seconds.
         * It returns undefined when no freshness information is present in the response.
         *
         * When the responses TTL is <= 0, the response may not be served from cache without first
         * revalidating with the origin.
         *
         * @returns {undefined|int}
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return;
            }
            return this._serverResponse.ttl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the response's time-to-live for shared caches in seconds.
     * This method adjusts the Cache-Control/s-maxage directive.
     *
     * @final
     */
    ServerResponse.prototype.setTtl = function (seconds) {
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setTtl(seconds);
    };
    /**
     * Sets the response's time-to-live for private/client caches in seconds.
     *
     * This method adjusts the Cache-Control/max-age directive.
     *
     * @param {int} seconds
     *
     * @returns {Jymfony.Component.HttpFoundation.Response}
     *
     * @final
     */
    ServerResponse.prototype.setClientTtl = function (seconds) {
        if (!this._serverResponse) {
            return;
        }
        this._serverResponse.setClientTtl(seconds);
    };
    Object.defineProperty(ServerResponse.prototype, "lastModified", {
        /**
         * Returns the Last-Modified HTTP header as a DateTime instance.
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return ~~(new Date().valueOf());
            }
            return this._serverResponse.lastModified;
        },
        /**
         * Sets the Last-Modified HTTP header with a DateTime instance.
         * Passing undefined as value will remove the header.
         *
         * @final
         */
        set: function (date) {
            if (!this._serverResponse) {
                return;
            }
            this._serverResponse.lastModified = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerResponse.prototype, "etag", {
        /**
         * Returns the literal value of the ETag HTTP header.
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return undefined;
            }
            return this._serverResponse.etag;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the ETag value.
     *
     * @param etag The ETag unique identifier or null to remove the header
     * @param weak Whether you want a weak ETag or not
     *
     * @final
     */
    ServerResponse.prototype.setEtag = function (etag, weak) {
        if (etag === void 0) { etag = undefined; }
        if (weak === void 0) { weak = false; }
        if (!this._serverResponse) {
            return undefined;
        }
        return this._serverResponse.setEtag(etag, weak);
    };
    /**
     * Returns true if the response includes a Vary header.
     *
     * @final
     */
    ServerResponse.prototype.hasVary = function () {
        if (!this._serverResponse) {
            return false;
        }
        return this._serverResponse.hasVary();
    };
    Object.defineProperty(ServerResponse.prototype, "vary", {
        /**
         * Returns an array of header names given in the Vary header.
         *
         * @returns {string[]}
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return [];
            }
            return this._serverResponse.vary;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the Vary header.
     *
     * @param {string|string[]} headers
     * @param {boolean} [replace = true] Whether to replace the actual value or not (true by default)
     *
     * @final
     */
    ServerResponse.prototype.setVary = function (headers, replace) {
        if (replace === void 0) { replace = true; }
        if (!this._serverResponse) {
            return;
        }
        return this._serverResponse.setVary(headers, replace);
    };
    Object.defineProperty(ServerResponse.prototype, "charset", {
        /**
         * Retrieves the response charset.
         */
        get: function () {
            if (!this._serverResponse) {
                return undefined;
            }
            return this._serverResponse.charset;
        },
        /**
         * Sets the response charset.
         */
        set: function (charset) {
            if (!this._serverResponse) {
                return;
            }
            this._serverResponse.charset = charset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerResponse.prototype, "protocolVersion", {
        /**
         * Gets the HTTP protocol version.
         *
         * @final
         */
        get: function () {
            if (!this._serverResponse) {
                return '1.1';
            }
            return this._serverResponse.protocolVersion;
        },
        /**
         * Sets the HTTP protocol version (1.0 or 1.1).
         *
         * @final
         */
        set: function (version) {
            if (!this._serverResponse) {
                return;
            }
            this._serverResponse.protocolVersion = version;
        },
        enumerable: true,
        configurable: true
    });
    ServerResponse.prototype._setCookie = function (cookie) {
        var str = (cookie.raw ? cookie.name : encodeURIComponent(cookie.name)) + '=';
        if ('' === cookie.value) {
            var date = new Date();
            date.setTime(date.valueOf() - 31536001000);
            str += 'deleted; expires=' + date.toUTCString() + '; Max-Age=0';
        }
        else {
            str += cookie.raw ? cookie.value : encodeURIComponent(cookie.value);
            if (0 !== cookie.expire) {
                var date = new Date();
                var maxAge = Math.max(0, cookie.expire * 1000 - date.valueOf());
                date.setTime(cookie.expire * 1000);
                str += '; expires=' + date.toUTCString() + '; Max-Age=' + ~~(maxAge / 1000);
            }
        }
        if (cookie.path) {
            str += '; path=' + cookie.path;
        }
        if (cookie.domain) {
            str += '; domain=' + cookie.domain;
        }
        if (true === cookie.secure) {
            str += '; secure';
        }
        if (true === cookie.httpOnly) {
            str += '; httponly';
        }
        if (cookie.sameSite) {
            str += '; samesite=' + cookie.sameSite;
        }
        document.cookie = str;
    };
    ServerResponse = __decorate([
        __param(0, core_1.Optional()), __param(0, core_1.Inject(Http.RESPONSE)),
        __metadata("design:paramtypes", [Object])
    ], ServerResponse);
    return ServerResponse;
}());
exports.ServerResponse = ServerResponse;
