import { NgFor } from '@angular/common';
import { Component, WritableSignal, effect, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { QuicklinkDirective } from 'ngx-quicklink'

const DATA = [
    {

        name: 'John Doe',
        DoB: '24/05/1995',
        role: 'Web Developer',
        salary: '$120,000'
    },
    {

        name: 'Jane Doe',
        DoB: '04/11/1980',
        role: 'Web Designer',
        salary: '$100,000'
    },
    {

        name: 'Gary Barlow',
        DoB: '24/05/1995',
        role: 'Singer',
        salary: '$20,000'
    }
]

@Component({
    standalone: true,
    imports: [RouterLink, QuicklinkDirective, NgFor],
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    readonly count: WritableSignal<number> = signal(0);
    readonly data = signal(DATA);
    constructor(){
        effect(() => {
            console.log(`data ${this.data()}`)
            // console.log(`data ${this.data()}`)
        })
    }

    add(value: number) {
        this.count.update(count => count + value)
    }
    
    update(): void {
        this.data.update(list => {
            list.push({
                name: 'Gary Barlow (update)',
                DoB: '24/05/1995',
                role: 'Singer',
                salary: '$20,000'
            })
            return list
        })
    };

    mutate(): void {
        this.data.mutate(list => {list.push({
            name: 'Gary Barlow (mutate)',
            DoB: '24/05/1995',
            role: 'Singer',
            salary: '$20,000'
        })})
    };
}
