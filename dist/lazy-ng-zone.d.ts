import { EventEmitter, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
export declare class LazyNgZone implements NgZone {
    private ngZone;
    private constructor();
    hasPendingMacrotasks: boolean;
    hasPendingMicrotasks: boolean;
    isStable: boolean;
    onUnstable: EventEmitter<any>;
    onMicrotaskEmpty: EventEmitter<any>;
    onStable: EventEmitter<any>;
    onError: EventEmitter<any>;
    run<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
    runTask<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[], name?: string): T;
    runGuarded<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
    runOutsideAngular<T>(fn: (...args: any[]) => T): T;
    private static lazyNgZone;
    static create(loader$?: Observable<any>, ngZoneEventCoalescing?: boolean): LazyNgZone;
    static get: LazyNgZone;
}
