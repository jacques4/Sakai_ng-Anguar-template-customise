import {Component, computed, inject, input} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import {CommonModule} from "@angular/common";
import { Configurator } from '../configurator/configurator';
import { LayoutService } from '../../service/layout';

@Component({
    selector: 'app-floating-configurator',
    standalone: true,
    imports: [CommonModule, ButtonModule, StyleClassModule, Configurator],
    templateUrl: './floating-configurator.html',
    styleUrl: './floating-configurator.scss',
})
export class FloatingConfigurator {
    LayoutService = inject(LayoutService);

    float = input<boolean>(true);

    isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

    toggleDarkMode() {
        this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

}
