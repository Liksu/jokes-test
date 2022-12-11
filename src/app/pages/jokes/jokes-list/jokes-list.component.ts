import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Joke, Jokes } from '../../../interfaces'

@Component({
    selector: 'app-jokes-list',
    templateUrl: './jokes-list.component.html',
    styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent {
    @Input() jokes: Jokes = []
    @Input() slim: boolean = false
}
