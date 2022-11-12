import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class KalendarzService {
    constructor() { }
}
KalendarzService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
KalendarzService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class KalendarzComponent {
    constructor() { }
    ngOnInit() {
    }
}
KalendarzComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
KalendarzComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: KalendarzComponent, selector: "lib-kalendarz", ngImport: i0, template: `
    <p>
      kalendarz works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-kalendarz',
                    template: `
    <p>
      kalendarz works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class KalendarzModule {
}
KalendarzModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KalendarzModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, declarations: [KalendarzComponent], exports: [KalendarzComponent] });
KalendarzModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        KalendarzComponent
                    ],
                    imports: [],
                    exports: [
                        KalendarzComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of kalendarz
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KalendarzComponent, KalendarzModule, KalendarzService };
//# sourceMappingURL=kalendarz.mjs.map
