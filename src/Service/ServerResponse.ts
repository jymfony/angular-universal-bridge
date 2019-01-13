import { Inject, Optional } from '@angular/core';
import { Cookie } from './Cookie';
import Http = require('../Injection/Http');

declare var Jymfony: any;

export class ServerResponse {
    constructor(@Optional() @Inject(Http.RESPONSE) private _serverResponse: any) { }

    /**
     * Adds an header to the response.
     */
    public setHeader(name: string, content: string, replace: boolean = true): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.headers.set(name, content, replace);
    }

    /**
     * Adds a cookie to the response (or to the document).
     */
    public setCookie(cookie: Cookie): void {
        if (! this._serverResponse) {
            this._setCookie(cookie);
            return;
        }

        this._serverResponse.headers.setCookie(
            new Jymfony.Component.HttpFoundation.Cookie(
                cookie.name,
                cookie.value,
                cookie.expire,
                cookie.path,
                cookie.domain,
                cookie.secure,
                cookie.httpOnly,
                cookie.raw,
                cookie.sameSite
            )
        );
    }

    /**
     * Sets the response status code and text.
     */
    public setStatusCode(code: number, text: string = undefined): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setStatusCode(code, text);
    }

    /**
     * Marks the response as "private".
     * It makes the response ineligible for serving other clients.
     *
     * @final
     */
    public setPrivate(): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setPrivate();
    }

    /**
     * Marks the response as "public".
     * It makes the response eligible for serving other clients.
     *
     * @final
     */
    setPublic(): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setPublic();
    }

    /**
     * Marks the response as "immutable".
     *
     * @final
     */
    setImmutable(immutable = true): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setImmutable(immutable);
    }

    /**
     * Returns true if the response is marked as "immutable".
     *
     * @final
     */
    get immutable(): boolean {
        if (! this._serverResponse) {
            return false;
        }

        return this._serverResponse.immutable;
    }

    /**
     * Returns the Date header as a unix time.
     *
     * @final
     */
    get date(): number|undefined {
        if (! this._serverResponse) {
            return -1;
        }

        return this._serverResponse.date.unixTime;
    }

    /**
     * Sets the Date header.
     *
     * @final
     */
    setDate(date: number): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setDate(date);
    }

    /**
     * Returns the age of the response in seconds.
     *
     * @final
     */
    get age(): number|undefined {
        if (! this._serverResponse) {
            return 0;
        }

        return this._serverResponse.age;
    }

    /**
     * Marks the response stale by setting the Age header to be equal to the maximum age of the response.
     */
    expire(): void {
        if (! this._serverResponse) {
            return;
        }

        return this._serverResponse.expire();
    }

    /**
     * Returns the value of the Expires header as a DateTime instance.
     *
     * @final
     */
    get expires(): number|undefined {
        if (! this._serverResponse) {
            return 0;
        }

        return this._serverResponse.expires.unixTime;
    }

    /**
     * Sets the Expires HTTP header with a DateTime instance.
     * Passing null as value will remove the header.
     *
     * @final
     */
    setExpires(date: number = undefined): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setExpires(date);
    }

    /**
     * Returns the number of seconds after the time specified in the response's Date
     * header when the response should no longer be considered fresh.
     *
     * First, it checks for a s-maxage directive, then a max-age directive, and then it falls
     * back on an expires header. It returns undefined when no maximum age can be established.
     *
     * @final
     */
    get maxAge(): number|undefined {
        if (! this._serverResponse) {
            return;
        }

        return this._serverResponse.maxAge;
    }

    /**
     * Sets the number of seconds after which the response should no longer be considered fresh.
     * This methods sets the Cache-Control max-age directive.
     *
     * @final
     */
    setMaxAge(value: number): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setMaxAge(value);
    }

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
    setSharedMaxAge(value: number): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setSharedMaxAge(value);
    }

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
    get ttl(): number|undefined {
        if (! this._serverResponse) {
            return;
        }

        return this._serverResponse.ttl;
    }

    /**
     * Sets the response's time-to-live for shared caches in seconds.
     * This method adjusts the Cache-Control/s-maxage directive.
     *
     * @final
     */
    setTtl(seconds: number|undefined): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setTtl(seconds);
    }

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
    setClientTtl(seconds: number|undefined): void {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.setClientTtl(seconds);
    }

    /**
     * Returns the Last-Modified HTTP header as a DateTime instance.
     *
     * @final
     */
    get lastModified(): number {
        if (! this._serverResponse) {
            return ~~(new Date().valueOf());
        }

        return this._serverResponse.lastModified;
    }

    /**
     * Sets the Last-Modified HTTP header with a DateTime instance.
     * Passing undefined as value will remove the header.
     *
     * @final
     */
    set lastModified(date: number) {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.lastModified = date;
    }

    /**
     * Returns the literal value of the ETag HTTP header.
     *
     * @final
     */
    get etag(): string|undefined {
        if (! this._serverResponse) {
            return undefined;
        }

        return this._serverResponse.etag;
    }

    /**
     * Sets the ETag value.
     *
     * @param etag The ETag unique identifier or null to remove the header
     * @param weak Whether you want a weak ETag or not
     *
     * @final
     */
    setEtag(etag: string|undefined = undefined, weak: boolean = false): void {
        if (! this._serverResponse) {
            return undefined;
        }

        return this._serverResponse.setEtag(etag, weak);
    }

    /**
     * Returns true if the response includes a Vary header.
     *
     * @final
     */
    hasVary(): boolean {
        if (! this._serverResponse) {
            return false;
        }

        return this._serverResponse.hasVary();
    }

    /**
     * Returns an array of header names given in the Vary header.
     *
     * @returns {string[]}
     *
     * @final
     */
    get vary(): string[] {
        if (! this._serverResponse) {
            return [];
        }

        return this._serverResponse.vary;
    }

    /**
     * Sets the Vary header.
     *
     * @param {string|string[]} headers
     * @param {boolean} [replace = true] Whether to replace the actual value or not (true by default)
     *
     * @final
     */
    setVary(headers: string|string[], replace: boolean = true): void {
        if (! this._serverResponse) {
            return;
        }

        return this._serverResponse.setVary(headers, replace);
    }

    /**
     * Retrieves the response charset.
     */
    get charset(): undefined|string {
        if (! this._serverResponse) {
            return undefined;
        }

        return this._serverResponse.charset;
    }

    /**
     * Sets the response charset.
     */
    set charset(charset: undefined|string) {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.charset = charset;
    }

    /**
     * Sets the HTTP protocol version (1.0 or 1.1).
     *
     * @final
     */
    set protocolVersion(version: string) {
        if (! this._serverResponse) {
            return;
        }

        this._serverResponse.protocolVersion = version;
    }

    /**
     * Gets the HTTP protocol version.
     *
     * @final
     */
    get protocolVersion() {
        if (! this._serverResponse) {
            return;
        }

        return this._serverResponse.protocolVersion;
    }

    private _setCookie(cookie: Cookie) {
        let str = (cookie.raw ? cookie.name : encodeURIComponent(cookie.name)) + '=';

        if ('' === cookie.value) {
            const date = new Date();
            date.setTime(date.valueOf() - 31536001000);
            str += 'deleted; expires=' + date.toUTCString() + '; Max-Age=0';
        } else {
            str += cookie.raw ? cookie.value : encodeURIComponent(cookie.value);

            if (0 !== cookie.expire) {
                const date = new Date();
                const maxAge = Math.max(0, cookie.expire * 1000 - date.valueOf());

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
    }
}
