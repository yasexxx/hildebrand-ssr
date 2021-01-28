import { NgModule } from '@angular/core';
import { AppShellNoRenderDirective, AppShellRenderDirective } from '../directive/app-shell-render.directive';

@NgModule({
    declarations: [
        AppShellNoRenderDirective,
        AppShellRenderDirective
    ],
    imports: [ ],
    exports: [
        AppShellNoRenderDirective,
        AppShellRenderDirective
    ],
    providers: [],
})
export class SharedModule {}