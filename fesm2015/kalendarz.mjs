import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, ViewEncapsulation, ViewChild, Output, NgModule } from '@angular/core';
import * as i1 from 'ngx-cookie-service';
import { CookieService } from 'ngx-cookie-service';
import * as i2 from '@angular/platform-browser';
import * as i2$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';

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

class TerminalService {
    constructor(cookieService, sanitizer) {
        this.cookieService = cookieService;
        this.sanitizer = sanitizer;
        this.terminalDiv = "<h1>Witaj w terminalu</h1>";
        this.terminalDivSafe = "";
        this.terminal = "";
        this.commandHistory = [];
        this.commandHistoryPosition = 0;
        this.disabledTextArea = false;
    }
    terminalInit() {
        this.syncTerminalDiv();
        if (this.cookieService.check('historia')) {
            this.commandHistory = JSON.parse(this.cookieService.get('historia'));
        }
    }
    dispalyStart() {
        this.terminal = '';
        this.terminal = "Polecenie »    ";
    }
    termilalAddText(text) {
        this.terminalDiv += "" + text + "<br>";
        this.syncTerminalDiv();
        this.disabledTextArea = false;
    }
    termilalAddTextAsync(text) {
        this.terminalDiv += "" + text + "<br>";
        this.syncTerminalDiv();
    }
    terminalAsyncComplete() {
        this.disabledTextArea = false;
    }
    executeCommand() {
        this.disabledTextArea = true;
        const k = this.terminal.split('»');
        var command = k[k.length - 1];
        if (command.trimStart().length >= 1)
            this.commandHistory.push(command.trimStart());
        this.cookieService.set("historia", JSON.stringify(this.commandHistory));
        command = command.trimStart();
        const commandArray = command.split(' ');
        command = commandArray[0];
        this.terminalDiv += command + " »&nbsp; &nbsp;";
        this.terminal = '(￣o￣) . z Z';
        return new Promise((resolve) => {
            switch (command.toLowerCase()) {
                case 'hej':
                    this.termilalAddText("Witaj, to ja terminal");
                    resolve(undefined);
                    break;
                case 'clearhistory':
                    this.clearHistory();
                    resolve(undefined);
                    break;
                case 'clear':
                    this.clear();
                    this.dispalyStart();
                    resolve('clear');
                    break;
                case 'help':
                    this.displayHelp();
                    resolve(undefined);
                    break;
                case 'history':
                    this.displayHistory();
                    resolve(undefined);
                    break;
                case 'time':
                    this.termilalAddText(new Date().toString());
                    resolve(undefined);
                    break;
                case 'korneliia':
                case 'async':
                    setTimeout(() => {
                        this.termilalAddTextAsync("<span style='font-weight: bold'>Króliczek jest piękny </span><span style='font-weight: bold;color:red'> ❤</span>");
                        this.terminalAsyncComplete();
                        resolve(undefined);
                    }, 3000);
                    break;
                default:
                    this.termilalAddText("Polecenie nie zostało odnalezione");
                    resolve(undefined);
                    break;
            }
            // resolve(command);
        });
    }
    historyBack() {
        const command = this.commandHistory[this.commandHistory.length - 1 - (this.commandHistoryPosition)];
        if (command != undefined) {
            this.commandHistoryPosition++;
        }
        if (command != undefined) {
            while (this.terminal[this.terminal.length - 1] != '»') {
                this.terminal = this.terminal.slice(0, -1);
            }
            this.terminal += '  ';
            this.terminal += command;
        }
    }
    historyNext() {
        while (this.terminal[this.terminal.length - 1] != '»') {
            this.terminal = this.terminal.slice(0, -1);
        }
        this.terminal += '  ';
        const command = this.commandHistory[this.commandHistory.length - (this.commandHistoryPosition - 1)];
        if (command != undefined) {
            this.commandHistoryPosition--;
        }
        if (command != undefined && command != '') {
            this.terminal += command;
        }
    }
    syncTerminalDiv() {
        this.terminalDivSafe = this.sanitizer.bypassSecurityTrustHtml(this.terminalDiv);
        setTimeout(() => {
            const terminal = document.getElementById("terminalMain");
            // @ts-ignore
            terminal.scrollTop = terminal.scrollHeight;
        });
    }
    clear() {
        this.terminalDiv = '';
        this.syncTerminalDiv();
    }
    displayHelp() {
        this.termilalAddText(' <span style="color:green">Dostępne komendy:</span> <br/>' + '' +
            '&nbsp;&nbsp;1.&nbsp;clearHistory - Wyczyszczenie historii komend  <br/>' +
            '&nbsp;&nbsp;2.&nbsp;clear - Oczyszczenie okna<br/>' +
            '&nbsp;&nbsp;3.&nbsp;history - Historia poleceń');
    }
    clearHistory() {
        this.commandHistory = [];
        this.cookieService.delete('historia');
        this.termilalAddText("Historia została wyczyszczona");
    }
    displayHistory() {
        var kk = 1;
        this.termilalAddText("<span style='color:#106500'>Historia poleceń:</span>");
        this.commandHistory.forEach(k => {
            this.termilalAddText("<span style='color:#001226'>" + kk++ + ".</span> " + k);
        });
    }
}
TerminalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TerminalService, deps: [{ token: i1.CookieService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable });
TerminalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TerminalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TerminalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.CookieService }, { type: i2.DomSanitizer }]; } });

class TerminalComponent {
    constructor(service) {
        this.service = service;
        this.executeCommand = new EventEmitter();
    }
    ngOnInit() {
        this.service.terminalInit();
        this.service.dispalyStart();
    }
    eventHandler(event) {
        var _a;
        const terminal = document.getElementById("terminalMain");
        // @ts-ignore
        terminal.scrollTop = terminal.scrollHeight;
        const textArea = (_a = this._textArea) === null || _a === void 0 ? void 0 : _a.nativeElement;
        textArea.focus();
        console.log(event['srcElement']['selectionStart'], event['srcElement']['selectionEnd']);
        if (event['srcElement']['selectionStart'] < 15) {
            this.service.dispalyStart();
            return false;
        }
        if (textArea.selectionEnd < 15) {
            textArea.setSelectionRange(15, 15);
            return false;
        }
        if (event.code == "Enter") {
            this.service.executeCommand().then(k => {
                console.log(k);
                if (k != undefined) {
                    this.executeCommand.next(k);
                }
                if (k == 'clear') {
                }
                this.service.dispalyStart();
            });
            return false;
        }
        if (event.code == "ArrowUp") {
            this.service.historyBack();
            return false;
        }
        if (event.code == "ArrowDown") {
            this.service.historyNext();
            return false;
        }
        this.service.commandHistoryPosition = 0;
        if (this.service.terminal.length <= 15 && (event.code == "Backspace" || event.code == "Delete")) {
            return false;
        }
        return true;
    }
}
TerminalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TerminalComponent, deps: [{ token: TerminalService }], target: i0.ɵɵFactoryTarget.Component });
TerminalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TerminalComponent, selector: "k-terminal", outputs: { executeCommand: "executeCommand" }, viewQueries: [{ propertyName: "_textArea", first: true, predicate: ["terminalTextArea"], descendants: true }], ngImport: i0, template: "<div class=\"terminal\" id=\"terminalMain\">\n  <div [innerHTML]=\"service.terminalDivSafe\" class=\"terminalDiv\"\n       id=\"terminalDiv\">\n\n  </div>\n  <textarea #terminalTextArea (keydown)=\"eventHandler($event)\" [(ngModel)]=\"service.terminal\"\n            [disabled]=\"service.disabledTextArea\"\n            id=\"terminalTextArea\"\n            spellcheck=\"false\">\n\n</textarea>\n\n</div>\n", styles: [".terminal{height:500px;width:1200px;border:1px solid black;background-color:#e5e5e5;margin:20px;border-radius:10px;overflow-y:auto}.terminal .terminalDiv{padding-bottom:4px;box-shadow:0 1px #fff;border-bottom:3px dashed white;width:100%;height:min-content;font-size:20px;padding-left:10px;line-height:25px}.terminal .terminalDiv h1{margin:0;text-align:center;color:#001226}.terminal textarea{font-size:20px;border:0;width:100%;resize:none;min-height:100px;background-color:transparent;padding:5px 10px 0}.terminal textarea:focus-visible{outline:none!important;border:0px solid #000000;box-shadow:none}\n"], directives: [{ type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TerminalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'k-terminal', encapsulation: ViewEncapsulation.None, template: "<div class=\"terminal\" id=\"terminalMain\">\n  <div [innerHTML]=\"service.terminalDivSafe\" class=\"terminalDiv\"\n       id=\"terminalDiv\">\n\n  </div>\n  <textarea #terminalTextArea (keydown)=\"eventHandler($event)\" [(ngModel)]=\"service.terminal\"\n            [disabled]=\"service.disabledTextArea\"\n            id=\"terminalTextArea\"\n            spellcheck=\"false\">\n\n</textarea>\n\n</div>\n", styles: [".terminal{height:500px;width:1200px;border:1px solid black;background-color:#e5e5e5;margin:20px;border-radius:10px;overflow-y:auto}.terminal .terminalDiv{padding-bottom:4px;box-shadow:0 1px #fff;border-bottom:3px dashed white;width:100%;height:min-content;font-size:20px;padding-left:10px;line-height:25px}.terminal .terminalDiv h1{margin:0;text-align:center;color:#001226}.terminal textarea{font-size:20px;border:0;width:100%;resize:none;min-height:100px;background-color:transparent;padding:5px 10px 0}.terminal textarea:focus-visible{outline:none!important;border:0px solid #000000;box-shadow:none}\n"] }]
        }], ctorParameters: function () { return [{ type: TerminalService }]; }, propDecorators: { _textArea: [{
                type: ViewChild,
                args: ['terminalTextArea']
            }], executeCommand: [{
                type: Output
            }] } });

class KalendarzModule {
}
KalendarzModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KalendarzModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, declarations: [KalendarzComponent,
        TerminalComponent], imports: [FormsModule], exports: [KalendarzComponent] });
KalendarzModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KalendarzModule, providers: [CookieService,
        TerminalService
    ], imports: [[
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
                        FormsModule
                    ],
                    exports: [
                        KalendarzComponent
                    ],
                    providers: [CookieService,
                        TerminalService
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
