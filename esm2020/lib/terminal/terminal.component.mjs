import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./terminal.service";
import * as i2 from "@angular/forms";
export class TerminalComponent {
    constructor(service) {
        this.service = service;
        this.executeCommand = new EventEmitter();
    }
    ngOnInit() {
        this.service.terminalInit();
        this.service.dispalyStart();
    }
    eventHandler(event) {
        const terminal = document.getElementById("terminalMain");
        // @ts-ignore
        terminal.scrollTop = terminal.scrollHeight;
        const textArea = this._textArea?.nativeElement;
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
TerminalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TerminalComponent, deps: [{ token: i1.TerminalService }], target: i0.ɵɵFactoryTarget.Component });
TerminalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TerminalComponent, selector: "k-terminal", outputs: { executeCommand: "executeCommand" }, viewQueries: [{ propertyName: "_textArea", first: true, predicate: ["terminalTextArea"], descendants: true }], ngImport: i0, template: "<div class=\"terminal\" id=\"terminalMain\">\n  <div [innerHTML]=\"service.terminalDivSafe\" class=\"terminalDiv\"\n       id=\"terminalDiv\">\n\n  </div>\n  <textarea #terminalTextArea (keydown)=\"eventHandler($event)\" [(ngModel)]=\"service.terminal\"\n            [disabled]=\"service.disabledTextArea\"\n            id=\"terminalTextArea\"\n            spellcheck=\"false\">\n\n</textarea>\n\n</div>\n", styles: [".terminal{height:500px;width:1200px;border:1px solid black;background-color:#e5e5e5;margin:20px;border-radius:10px;overflow-y:auto}.terminal .terminalDiv{padding-bottom:4px;box-shadow:0 1px #fff;border-bottom:3px dashed white;width:100%;height:min-content;font-size:20px;padding-left:10px;line-height:25px}.terminal .terminalDiv h1{margin:0;text-align:center;color:#001226}.terminal textarea{font-size:20px;border:0;width:100%;resize:none;min-height:100px;background-color:transparent;padding:5px 10px 0}.terminal textarea:focus-visible{outline:none!important;border:0px solid #000000;box-shadow:none}\n"], directives: [{ type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TerminalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'k-terminal', encapsulation: ViewEncapsulation.None, template: "<div class=\"terminal\" id=\"terminalMain\">\n  <div [innerHTML]=\"service.terminalDivSafe\" class=\"terminalDiv\"\n       id=\"terminalDiv\">\n\n  </div>\n  <textarea #terminalTextArea (keydown)=\"eventHandler($event)\" [(ngModel)]=\"service.terminal\"\n            [disabled]=\"service.disabledTextArea\"\n            id=\"terminalTextArea\"\n            spellcheck=\"false\">\n\n</textarea>\n\n</div>\n", styles: [".terminal{height:500px;width:1200px;border:1px solid black;background-color:#e5e5e5;margin:20px;border-radius:10px;overflow-y:auto}.terminal .terminalDiv{padding-bottom:4px;box-shadow:0 1px #fff;border-bottom:3px dashed white;width:100%;height:min-content;font-size:20px;padding-left:10px;line-height:25px}.terminal .terminalDiv h1{margin:0;text-align:center;color:#001226}.terminal textarea{font-size:20px;border:0;width:100%;resize:none;min-height:100px;background-color:transparent;padding:5px 10px 0}.terminal textarea:focus-visible{outline:none!important;border:0px solid #000000;box-shadow:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TerminalService }]; }, propDecorators: { _textArea: [{
                type: ViewChild,
                args: ['terminalTextArea']
            }], executeCommand: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2FsZW5kYXJ6L3NyYy9saWIvdGVybWluYWwvdGVybWluYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2FsZW5kYXJ6L3NyYy9saWIvdGVybWluYWwvdGVybWluYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxZQUFZLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVNoSCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRmpDLG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHcEUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUE7SUFHN0IsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsYUFBYTtRQUNiLFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMzQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLGFBQW9DLENBQUM7UUFDdEUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7UUFFdkYsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUMzQixPQUFPLEtBQUssQ0FBQTtTQUNiO1FBQ0QsSUFBSSxRQUFRLENBQUMsWUFBWSxHQUFHLEVBQUUsRUFBRTtZQUM5QixRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sS0FBSyxDQUFBO1NBQ2I7UUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNkLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdCO2dCQUNELElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRTtpQkFFakI7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUM3QixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFBO1NBQ2I7UUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUNELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUMxQixPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsRUFBRTtZQUMvRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs4R0ExRFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsZ05DVDlCLHVaQWFBOzJGREphLGlCQUFpQjtrQkFON0IsU0FBUzsrQkFDRSxZQUFZLGlCQUdQLGlCQUFpQixDQUFDLElBQUk7c0dBR04sU0FBUztzQkFBdkMsU0FBUzt1QkFBQyxrQkFBa0I7Z0JBQ25CLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rlcm1pbmFsU2VydmljZX0gZnJvbSBcIi4vdGVybWluYWwuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrLXRlcm1pbmFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rlcm1pbmFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVybWluYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUZXJtaW5hbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3Rlcm1pbmFsVGV4dEFyZWEnKSBfdGV4dEFyZWE6IEVsZW1lbnRSZWYgfCB1bmRlZmluZWRcbiAgQE91dHB1dCgpIGV4ZWN1dGVDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogVGVybWluYWxTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UudGVybWluYWxJbml0KCk7XG4gICAgdGhpcy5zZXJ2aWNlLmRpc3BhbHlTdGFydCgpXG5cblxuICB9XG5cbiAgZXZlbnRIYW5kbGVyKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB0ZXJtaW5hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVybWluYWxNYWluXCIpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0ZXJtaW5hbC5zY3JvbGxUb3AgPSB0ZXJtaW5hbC5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgdGV4dEFyZWEgPSB0aGlzLl90ZXh0QXJlYT8ubmF0aXZlRWxlbWVudCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHRleHRBcmVhLmZvY3VzKClcbiAgICBjb25zb2xlLmxvZyhldmVudFsnc3JjRWxlbWVudCddWydzZWxlY3Rpb25TdGFydCddLCBldmVudFsnc3JjRWxlbWVudCddWydzZWxlY3Rpb25FbmQnXSlcblxuICAgIGlmIChldmVudFsnc3JjRWxlbWVudCddWydzZWxlY3Rpb25TdGFydCddIDwgMTUpIHtcbiAgICAgIHRoaXMuc2VydmljZS5kaXNwYWx5U3RhcnQoKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICh0ZXh0QXJlYS5zZWxlY3Rpb25FbmQgPCAxNSkge1xuICAgICAgdGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMTUsIDE1KTtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChldmVudC5jb2RlID09IFwiRW50ZXJcIikge1xuICAgICAgdGhpcy5zZXJ2aWNlLmV4ZWN1dGVDb21tYW5kKCkudGhlbihrID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaylcbiAgICAgICAgaWYgKGsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5leGVjdXRlQ29tbWFuZC5uZXh0KGspO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrID09ICdjbGVhcicpIHtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VydmljZS5kaXNwYWx5U3RhcnQoKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHRoaXMuc2VydmljZS5oaXN0b3J5QmFjaygpO1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChldmVudC5jb2RlID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIHRoaXMuc2VydmljZS5oaXN0b3J5TmV4dCgpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnNlcnZpY2UuY29tbWFuZEhpc3RvcnlQb3NpdGlvbiA9IDA7XG4gICAgaWYgKHRoaXMuc2VydmljZS50ZXJtaW5hbC5sZW5ndGggPD0gMTUgJiYgKGV2ZW50LmNvZGUgPT0gXCJCYWNrc3BhY2VcIiB8fCBldmVudC5jb2RlID09IFwiRGVsZXRlXCIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0ZXJtaW5hbFwiIGlkPVwidGVybWluYWxNYWluXCI+XG4gIDxkaXYgW2lubmVySFRNTF09XCJzZXJ2aWNlLnRlcm1pbmFsRGl2U2FmZVwiIGNsYXNzPVwidGVybWluYWxEaXZcIlxuICAgICAgIGlkPVwidGVybWluYWxEaXZcIj5cblxuICA8L2Rpdj5cbiAgPHRleHRhcmVhICN0ZXJtaW5hbFRleHRBcmVhIChrZXlkb3duKT1cImV2ZW50SGFuZGxlcigkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJzZXJ2aWNlLnRlcm1pbmFsXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJzZXJ2aWNlLmRpc2FibGVkVGV4dEFyZWFcIlxuICAgICAgICAgICAgaWQ9XCJ0ZXJtaW5hbFRleHRBcmVhXCJcbiAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuXG48L3RleHRhcmVhPlxuXG48L2Rpdj5cbiJdfQ==