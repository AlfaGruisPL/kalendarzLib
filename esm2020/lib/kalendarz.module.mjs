import { NgModule } from '@angular/core';
import { KalendarzComponent } from './kalendarz.component';
import { TerminalComponent } from "./terminal/terminal.component";
import { TerminalService } from "./terminal/terminal.service";
import { CookieService } from "ngx-cookie-service";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export class KalendarzModule {
}
KalendarzModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KalendarzModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, declarations: [KalendarzComponent,
        TerminalComponent], imports: [BrowserModule,
        FormsModule], exports: [KalendarzComponent, TerminalComponent] });
KalendarzModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, providers: [CookieService,
        TerminalService
    ], imports: [[
            BrowserModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        KalendarzComponent,
                        TerminalComponent
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule
                    ],
                    exports: [
                        KalendarzComponent, TerminalComponent
                    ],
                    providers: [CookieService,
                        TerminalService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsZW5kYXJ6Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2thbGVuZGFyei9zcmMvbGliL2thbGVuZGFyei5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7O0FBb0J4RCxNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQWR4QixrQkFBa0I7UUFDbEIsaUJBQWlCLGFBR2pCLGFBQWE7UUFDYixXQUFXLGFBR1gsa0JBQWtCLEVBQUMsaUJBQWlCOzZHQU0zQixlQUFlLGFBSmhCLENBQUMsYUFBYTtRQUN0QixlQUFlO0tBQ2hCLFlBVFE7WUFDUCxhQUFhO1lBQ2IsV0FBVztTQUNaOzJGQVFVLGVBQWU7a0JBaEIzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsV0FBVztxQkFDWjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCLEVBQUMsaUJBQWlCO3FCQUNyQztvQkFDRCxTQUFTLEVBQUMsQ0FBQyxhQUFhO3dCQUN0QixlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLYWxlbmRhcnpDb21wb25lbnQgfSBmcm9tICcuL2thbGVuZGFyei5jb21wb25lbnQnO1xuaW1wb3J0IHtUZXJtaW5hbENvbXBvbmVudH0gZnJvbSBcIi4vdGVybWluYWwvdGVybWluYWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1Rlcm1pbmFsU2VydmljZX0gZnJvbSBcIi4vdGVybWluYWwvdGVybWluYWwuc2VydmljZVwiO1xuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEthbGVuZGFyekNvbXBvbmVudCxcbiAgICBUZXJtaW5hbENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgS2FsZW5kYXJ6Q29tcG9uZW50LFRlcm1pbmFsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczpbQ29va2llU2VydmljZSxcbiAgICBUZXJtaW5hbFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBLYWxlbmRhcnpNb2R1bGUgeyB9XG4iXX0=