import { InjectionToken } from '@angular/core';

declare var Http: {
    REQUEST: InjectionToken<any>;
    RESPONSE: InjectionToken<any>;
};

export = Http;
