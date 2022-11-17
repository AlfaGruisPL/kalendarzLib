import { CookieService } from "ngx-cookie-service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export declare class TerminalService {
    private cookieService;
    protected sanitizer: DomSanitizer;
    terminalDiv: string;
    terminalDivSafe: SafeHtml;
    terminal: string;
    commandHistory: Array<string>;
    commandHistoryPosition: number;
    disabledTextArea: boolean;
    constructor(cookieService: CookieService, sanitizer: DomSanitizer);
    terminalInit(): void;
    dispalyStart(): void;
    termilalAddText(text: string): void;
    termilalAddTextAsync(text: string): void;
    terminalAsyncComplete(): void;
    executeCommand(): Promise<string | undefined>;
    historyBack(): void;
    historyNext(): void;
    private syncTerminalDiv;
    private clear;
    private displayHelp;
    private clearHistory;
    private displayHistory;
    static ɵfac: i0.ɵɵFactoryDeclaration<TerminalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TerminalService>;
}
