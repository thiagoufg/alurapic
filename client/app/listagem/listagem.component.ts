import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent { 

    fotos: FotoComponent[] = [];
    service: FotoService;

    constructor(service: FotoService) {
        this.service = service;
        service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

    // código anterior omitido 
    remove(foto: FotoComponent): void {
        this.service.remove(foto)
             .subscribe(
                fotos => {
                    console.log('Foto removida com sucesso');
                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    novasFotos.splice(indice, 1);
                    this.fotos = novasFotos;
                },
                erro => console.log(erro));
    }
}