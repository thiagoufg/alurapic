import { Component, Input, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;
    private elemento: ElementRef;

    constructor(elemento: ElementRef) {
        this.elemento = elemento;
    }

    ngOnInit() {
        this.titulo = this.titulo.length > 7
            ? `${this.titulo.substr(0, 7)}...`
            : this.titulo;
    }

    fadeOut(cb) {
        // Erro de compilação! Não reconhece o $ do jQuery!
        // Resolver: 
        // npm run typings search jquery
        // node ./node_modules/typings/dist/bin install dt~jquery --global --save
        // A pasta client/typings será criada para conter a declaração da api do jquery.
        // Rodar `typing install` sempre ao final de `npm start` para baixar as declarações
        // Sugestão: (criar script `postinstall` no package.json)
        $(this.elemento.nativeElement).fadeOut(cb);
    }

}