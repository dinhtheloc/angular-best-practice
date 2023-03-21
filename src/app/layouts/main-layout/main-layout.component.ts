import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from 'src/app/components/footer/footer.component'
import { HeaderComponent } from 'src/app/components/header/header.component'

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {}
