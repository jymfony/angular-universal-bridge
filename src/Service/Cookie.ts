export interface Cookie {
    /**
     * The name of the cookie.
     */
    name: string;

    /**
     * The value of the cookie.
     */
    value?: string;

    /**
     * The time the cookie expires (unix time).
     */
    expire?: number;

    /**
     * The path on the server in which the cookie will be available on.
     */
    path?: string;

    /**
     * The domain that the cookie is available to.
     */
    domain?: string;

    /**
     * Whether the cookie should only be transmitted over a secure HTTPS connection from the client.
     */
    secure?: boolean;

    /**
     * Whether the cookie will be made accessible only through the HTTP protocol.
     */
    httpOnly?: boolean;

    /**
     * Whether the cookie value should be sent with no url encoding.
     */
    raw?: boolean;

    /**
     * Whether the cookie will be available for cross-site requests.
     */
    sameSite?: string;
}
