import { EventEmitter, isDevMode, NgZone } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export class LazyNgZone implements NgZone {

    private ngZone: NgZone;

    private constructor(loader$: Observable<any>, ngZoneEventCoalescing: boolean) {
      loader$.pipe(
        switchMap(() => from(import('zone.js/dist/zone')))
      ).subscribe(() => {
        this.ngZone = new NgZone({
          enableLongStackTrace: isDevMode(),
          shouldCoalesceEventChangeDetection: ngZoneEventCoalescing
        });
      })
    }

    public get hasPendingMacrotasks(): boolean {
        return this.ngZone ? this.ngZone.hasPendingMacrotasks : false;
    };
    public get hasPendingMicrotasks(): boolean {
      return this.ngZone ? this.ngZone.hasPendingMicrotasks : false;
    }
    public get isStable(): boolean {
      return this.ngZone ? this.ngZone.isStable : true;
    }
    public get onUnstable(): EventEmitter<any> {
      return this.ngZone ? this.ngZone.onUnstable : new EventEmitter();
    }
    public get onMicrotaskEmpty(): EventEmitter<any> {
      return this.ngZone ? this.ngZone.onMicrotaskEmpty : new EventEmitter();
    }
    public get onStable(): EventEmitter<any> {
      return this.ngZone ? this.ngZone.onStable : new EventEmitter();
    }
    public get onError(): EventEmitter<any> {
      return this.ngZone ? this.ngZone.onError : new EventEmitter();
    }

    run<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T {
        return this.ngZone ? this.ngZone.run(fn, applyThis, applyArgs) : fn.apply(applyThis, applyArgs);
    }
    runTask<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[], name?: string): T {
        return this.ngZone ? this.ngZone.runTask(fn, applyThis, applyArgs, name) : fn.apply(applyThis, applyArgs);
    }
    runGuarded<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T {
        return this.ngZone ? this.ngZone.runGuarded(fn, applyThis, applyArgs) : fn.apply(applyThis, applyArgs);
    }
    runOutsideAngular<T>(fn: (...args: any[]) => T): T {
        return this.ngZone ? this.ngZone.runOutsideAngular(fn) : fn();
    }

    private static lazyNgZone: LazyNgZone;

    public static create(loader$: Observable<any> = of(null), ngZoneEventCoalescing: boolean = false): LazyNgZone {
      LazyNgZone.lazyNgZone = new LazyNgZone(loader$, ngZoneEventCoalescing);

      return LazyNgZone.lazyNgZone;
    }

    public static get get(): LazyNgZone {
      return this.lazyNgZone || LazyNgZone.create();
    }
}
