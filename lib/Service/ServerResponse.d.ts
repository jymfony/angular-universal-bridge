import { Cookie } from './Cookie';
export declare class ServerResponse {
    private _serverResponse;
    constructor(_serverResponse: any);
    /**
     * Adds an header to the response.
     */
    setHeader(name: string, content: string, replace?: boolean): void;
    /**
     * Adds a cookie to the response (or to the document).
     */
    setCookie(cookie: Cookie): void;
    /**
     * Sets the response status code and text.
     */
    setStatusCode(code: number, text?: string | undefined): void;
    /**
     * Marks the response as "private".
     * It makes the response ineligible for serving other clients.
     *
     * @final
     */
    setPrivate(): void;
    /**
     * Marks the response as "public".
     * It makes the response eligible for serving other clients.
     *
     * @final
     */
    setPublic(): void;
    /**
     * Marks the response as "immutable".
     *
     * @final
     */
    setImmutable(immutable?: boolean): void;
    /**
     * Returns true if the response is marked as "immutable".
     *
     * @final
     */
    readonly immutable: boolean;
    /**
     * Returns the Date header as a unix time.
     *
     * @final
     */
    readonly date: number | undefined;
    /**
     * Sets the Date header.
     *
     * @final
     */
    setDate(date: number): void;
    /**
     * Returns the age of the response in seconds.
     *
     * @final
     */
    readonly age: number | undefined;
    /**
     * Marks the response stale by setting the Age header to be equal to the maximum age of the response.
     */
    expire(): void;
    /**
     * Returns the value of the Expires header as a DateTime instance.
     *
     * @final
     */
    readonly expires: number | undefined;
    /**
     * Sets the Expires HTTP header with a DateTime instance.
     * Passing null as value will remove the header.
     *
     * @final
     */
    setExpires(date?: number | undefined): void;
    /**
     * Returns the number of seconds after the time specified in the response's Date
     * header when the response should no longer be considered fresh.
     *
     * First, it checks for a s-maxage directive, then a max-age directive, and then it falls
     * back on an expires header. It returns undefined when no maximum age can be established.
     *
     * @final
     */
    readonly maxAge: number | undefined;
    /**
     * Sets the number of seconds after which the response should no longer be considered fresh.
     * This methods sets the Cache-Control max-age directive.
     *
     * @final
     */
    setMaxAge(value: number): void;
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
    setSharedMaxAge(value: number): void;
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
    readonly ttl: number | undefined;
    /**
     * Sets the response's time-to-live for shared caches in seconds.
     * This method adjusts the Cache-Control/s-maxage directive.
     *
     * @final
     */
    setTtl(seconds: number | undefined): void;
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
    setClientTtl(seconds: number | undefined): void;
    /**
     * Returns the Last-Modified HTTP header as a DateTime instance.
     *
     * @final
     */
    /**
    * Sets the Last-Modified HTTP header with a DateTime instance.
    * Passing undefined as value will remove the header.
    *
    * @final
    */
    lastModified: number;
    /**
     * Returns the literal value of the ETag HTTP header.
     *
     * @final
     */
    readonly etag: string | undefined;
    /**
     * Sets the ETag value.
     *
     * @param etag The ETag unique identifier or null to remove the header
     * @param weak Whether you want a weak ETag or not
     *
     * @final
     */
    setEtag(etag?: string | undefined, weak?: boolean): void;
    /**
     * Returns true if the response includes a Vary header.
     *
     * @final
     */
    hasVary(): boolean;
    /**
     * Returns an array of header names given in the Vary header.
     *
     * @returns {string[]}
     *
     * @final
     */
    readonly vary: string[];
    /**
     * Sets the Vary header.
     *
     * @param {string|string[]} headers
     * @param {boolean} [replace = true] Whether to replace the actual value or not (true by default)
     *
     * @final
     */
    setVary(headers: string | string[], replace?: boolean): void;
    /**
     * Retrieves the response charset.
     */
    /**
    * Sets the response charset.
    */
    charset: undefined | string;
    /**
     * Sets the HTTP protocol version (1.0 or 1.1).
     *
     * @final
     */
    /**
    * Gets the HTTP protocol version.
    *
    * @final
    */
    protocolVersion: string;
    private _setCookie;
}
