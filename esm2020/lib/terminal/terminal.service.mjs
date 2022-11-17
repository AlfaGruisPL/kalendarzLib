import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-cookie-service";
import * as i2 from "@angular/platform-browser";
export class TerminalService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2thbGVuZGFyei9zcmMvbGliL3Rlcm1pbmFsL3Rlcm1pbmFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQU96QyxNQUFNLE9BQU8sZUFBZTtJQVExQixZQUFvQixhQUE0QixFQUFZLFNBQXVCO1FBQS9ELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVksY0FBUyxHQUFULFNBQVMsQ0FBYztRQVBuRixnQkFBVyxHQUFXLDRCQUE0QixDQUFDO1FBQ25ELG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLDJCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFHekIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtTQUNyRTtJQUNILENBQUM7SUFFTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFDcEMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFZO1FBQ2pDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUE7UUFDdEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FB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LENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLDhCQUE4QixHQUFHLEVBQUUsRUFBRSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMvRSxDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7OzRHQWxLVSxlQUFlO2dIQUFmLGVBQWUsY0FGZCxNQUFNOzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29va2llU2VydmljZX0gZnJvbSBcIm5neC1jb29raWUtc2VydmljZVwiO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVIdG1sfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUZXJtaW5hbFNlcnZpY2Uge1xuICB0ZXJtaW5hbERpdjogc3RyaW5nID0gXCI8aDE+V2l0YWogdyB0ZXJtaW5hbHU8L2gxPlwiO1xuICB0ZXJtaW5hbERpdlNhZmU6IFNhZmVIdG1sID0gXCJcIjtcbiAgdGVybWluYWw6IHN0cmluZyA9IFwiXCI7XG4gIGNvbW1hbmRIaXN0b3J5OiBBcnJheTxzdHJpbmc+ID0gW107XG4gIGNvbW1hbmRIaXN0b3J5UG9zaXRpb24gPSAwO1xuICBkaXNhYmxlZFRleHRBcmVhID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLCBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIHRlcm1pbmFsSW5pdCgpIHtcbiAgICB0aGlzLnN5bmNUZXJtaW5hbERpdigpXG4gICAgaWYgKHRoaXMuY29va2llU2VydmljZS5jaGVjaygnaGlzdG9yaWEnKSkge1xuICAgICAgdGhpcy5jb21tYW5kSGlzdG9yeSA9IEpTT04ucGFyc2UodGhpcy5jb29raWVTZXJ2aWNlLmdldCgnaGlzdG9yaWEnKSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzcGFseVN0YXJ0KCkge1xuICAgIHRoaXMudGVybWluYWwgPSAnJztcbiAgICB0aGlzLnRlcm1pbmFsID0gXCJQb2xlY2VuaWUgwrsgICAgXCI7XG4gIH1cblxuICBwdWJsaWMgdGVybWlsYWxBZGRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMudGVybWluYWxEaXYgKz0gXCJcIiArIHRleHQgKyBcIjxicj5cIlxuICAgIHRoaXMuc3luY1Rlcm1pbmFsRGl2KClcbiAgICB0aGlzLmRpc2FibGVkVGV4dEFyZWEgPSBmYWxzZTtcblxuICB9XG5cbiAgcHVibGljIHRlcm1pbGFsQWRkVGV4dEFzeW5jKHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMudGVybWluYWxEaXYgKz0gXCJcIiArIHRleHQgKyBcIjxicj5cIlxuICAgIHRoaXMuc3luY1Rlcm1pbmFsRGl2KClcbiAgfVxuXG4gIHB1YmxpYyB0ZXJtaW5hbEFzeW5jQ29tcGxldGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZFRleHRBcmVhID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZXhlY3V0ZUNvbW1hbmQoKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgICB0aGlzLmRpc2FibGVkVGV4dEFyZWEgPSB0cnVlO1xuICAgIGNvbnN0IGsgPSB0aGlzLnRlcm1pbmFsLnNwbGl0KCfCuycpO1xuICAgIHZhciBjb21tYW5kID0ga1trLmxlbmd0aCAtIDFdXG4gICAgaWYgKGNvbW1hbmQudHJpbVN0YXJ0KCkubGVuZ3RoID49IDEpIHRoaXMuY29tbWFuZEhpc3RvcnkucHVzaChjb21tYW5kLnRyaW1TdGFydCgpKTtcbiAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KFwiaGlzdG9yaWFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb21tYW5kSGlzdG9yeSkpXG4gICAgY29tbWFuZCA9IGNvbW1hbmQudHJpbVN0YXJ0KClcbiAgICBjb25zdCBjb21tYW5kQXJyYXkgPSBjb21tYW5kLnNwbGl0KCcgJylcbiAgICBjb21tYW5kID0gY29tbWFuZEFycmF5WzBdO1xuICAgIHRoaXMudGVybWluYWxEaXYgKz0gY29tbWFuZCArIFwiIMK7Jm5ic3A7ICZuYnNwO1wiXG4gICAgdGhpcy50ZXJtaW5hbCA9ICco77+jb++/oykgLiB6IFonXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGNvbW1hbmQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICdoZWonOlxuICAgICAgICAgIHRoaXMudGVybWlsYWxBZGRUZXh0KFwiV2l0YWosIHRvIGphIHRlcm1pbmFsXCIpXG4gICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlJ2NsZWFyaGlzdG9yeSc6XG4gICAgICAgICAgdGhpcy5jbGVhckhpc3RvcnkoKTtcbiAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UnY2xlYXInOlxuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmRpc3BhbHlTdGFydCgpXG4gICAgICAgICAgcmVzb2x2ZSgnY2xlYXInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSdoZWxwJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlIZWxwKCk7XG4gICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlJ2hpc3RvcnknOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUhpc3RvcnkoKTtcbiAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UndGltZSc6XG4gICAgICAgICAgdGhpcy50ZXJtaWxhbEFkZFRleHQobmV3IERhdGUoKS50b1N0cmluZygpKVxuICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSdrb3JuZWxpaWEnOlxuICAgICAgICBjYXNlJ2FzeW5jJzpcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZXJtaWxhbEFkZFRleHRBc3luYyhcIjxzcGFuIHN0eWxlPSdmb250LXdlaWdodDogYm9sZCc+S3LDs2xpY3playBqZXN0IHBpxJlrbnkgPC9zcGFuPjxzcGFuIHN0eWxlPSdmb250LXdlaWdodDogYm9sZDtjb2xvcjpyZWQnPiDinaQ8L3NwYW4+XCIpXG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsQXN5bmNDb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMudGVybWlsYWxBZGRUZXh0KFwiUG9sZWNlbmllIG5pZSB6b3N0YcWCbyBvZG5hbGV6aW9uZVwiKVxuICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIHJlc29sdmUoY29tbWFuZCk7XG4gICAgfSlcblxuICB9XG5cbiAgcHVibGljIGhpc3RvcnlCYWNrKCkge1xuICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLmNvbW1hbmRIaXN0b3J5W3RoaXMuY29tbWFuZEhpc3RvcnkubGVuZ3RoIC0gMSAtICh0aGlzLmNvbW1hbmRIaXN0b3J5UG9zaXRpb24pXTtcbiAgICBpZiAoY29tbWFuZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29tbWFuZEhpc3RvcnlQb3NpdGlvbisrO1xuICAgIH1cbiAgICBpZiAoY29tbWFuZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHdoaWxlICh0aGlzLnRlcm1pbmFsW3RoaXMudGVybWluYWwubGVuZ3RoIC0gMV0gIT0gJ8K7Jykge1xuICAgICAgICB0aGlzLnRlcm1pbmFsID0gdGhpcy50ZXJtaW5hbC5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgICB0aGlzLnRlcm1pbmFsICs9ICcgICdcbiAgICAgIHRoaXMudGVybWluYWwgKz0gY29tbWFuZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlzdG9yeU5leHQoKSB7XG4gICAgd2hpbGUgKHRoaXMudGVybWluYWxbdGhpcy50ZXJtaW5hbC5sZW5ndGggLSAxXSAhPSAnwrsnKSB7XG4gICAgICB0aGlzLnRlcm1pbmFsID0gdGhpcy50ZXJtaW5hbC5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIHRoaXMudGVybWluYWwgKz0gJyAgJ1xuICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLmNvbW1hbmRIaXN0b3J5W3RoaXMuY29tbWFuZEhpc3RvcnkubGVuZ3RoIC0gKHRoaXMuY29tbWFuZEhpc3RvcnlQb3NpdGlvbiAtIDEpXTtcbiAgICBpZiAoY29tbWFuZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29tbWFuZEhpc3RvcnlQb3NpdGlvbi0tO1xuICAgIH1cbiAgICBpZiAoY29tbWFuZCAhPSB1bmRlZmluZWQgJiYgY29tbWFuZCAhPSAnJykge1xuXG4gICAgICB0aGlzLnRlcm1pbmFsICs9IGNvbW1hbmQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVGVybWluYWxEaXYoKSB7XG4gICAgdGhpcy50ZXJtaW5hbERpdlNhZmUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnRlcm1pbmFsRGl2KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgY29uc3QgdGVybWluYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlcm1pbmFsTWFpblwiKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRlcm1pbmFsLnNjcm9sbFRvcCA9IHRlcm1pbmFsLnNjcm9sbEhlaWdodDtcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpIHtcbiAgICB0aGlzLnRlcm1pbmFsRGl2ID0gJydcbiAgICB0aGlzLnN5bmNUZXJtaW5hbERpdigpXG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlIZWxwKCkge1xuICAgIHRoaXMudGVybWlsYWxBZGRUZXh0KCcgPHNwYW4gc3R5bGU9XCJjb2xvcjpncmVlblwiPkRvc3TEmXBuZSBrb21lbmR5Ojwvc3Bhbj4gPGJyLz4nICsgJycgK1xuICAgICAgJyZuYnNwOyZuYnNwOzEuJm5ic3A7Y2xlYXJIaXN0b3J5IC0gV3ljenlzemN6ZW5pZSBoaXN0b3JpaSBrb21lbmQgIDxici8+JyArXG4gICAgICAnJm5ic3A7Jm5ic3A7Mi4mbmJzcDtjbGVhciAtIE9jenlzemN6ZW5pZSBva25hPGJyLz4nICtcbiAgICAgICcmbmJzcDsmbmJzcDszLiZuYnNwO2hpc3RvcnkgLSBIaXN0b3JpYSBwb2xlY2XFhCcpXG4gIH1cblxuICBwcml2YXRlIGNsZWFySGlzdG9yeSgpIHtcbiAgICB0aGlzLmNvbW1hbmRIaXN0b3J5ID0gW107XG4gICAgdGhpcy5jb29raWVTZXJ2aWNlLmRlbGV0ZSgnaGlzdG9yaWEnKVxuICAgIHRoaXMudGVybWlsYWxBZGRUZXh0KFwiSGlzdG9yaWEgem9zdGHFgmEgd3ljenlzemN6b25hXCIpXG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlIaXN0b3J5KCkge1xuICAgIHZhciBrayA9IDE7XG4gICAgdGhpcy50ZXJtaWxhbEFkZFRleHQoXCI8c3BhbiBzdHlsZT0nY29sb3I6IzEwNjUwMCc+SGlzdG9yaWEgcG9sZWNlxYQ6PC9zcGFuPlwiKVxuICAgIHRoaXMuY29tbWFuZEhpc3RvcnkuZm9yRWFjaChrID0+IHtcbiAgICAgIHRoaXMudGVybWlsYWxBZGRUZXh0KFwiPHNwYW4gc3R5bGU9J2NvbG9yOiMwMDEyMjYnPlwiICsga2srKyArIFwiLjwvc3Bhbj4gXCIgKyBrKVxuICAgIH0pXG5cbiAgfVxufVxuIl19