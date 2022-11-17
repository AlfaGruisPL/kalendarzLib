import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { TerminalService } from "./terminal.service";
import * as i0 from "@angular/core";
export declare class TerminalComponent implements OnInit {
    service: TerminalService;
    _textArea: ElementRef | undefined;
    executeCommand: EventEmitter<string>;
    constructor(service: TerminalService);
    ngOnInit(): void;
    eventHandler(event: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TerminalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TerminalComponent, "k-terminal", never, {}, { "executeCommand": "executeCommand"; }, never, never>;
}
