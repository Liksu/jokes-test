import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Joke } from '../../../interfaces'
import { JokeDialogComponent } from '../joke-dialog/joke-dialog.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
    selector: 'app-joke-card',
    templateUrl: './joke-card.component.html',
    styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {
    @Input() joke!: Joke
    @Input() slim: boolean = false
    @Output() onOpen = new EventEmitter<Joke>()

    constructor(
        private dialog: MatDialog
    ) {}

    openJoke(joke: Joke) {
        let dialogRef = this.dialog.open(JokeDialogComponent, {
            height: '642px',
            width: '516px',
            data: joke
        })

        this.onOpen.emit(joke)
    }
}
