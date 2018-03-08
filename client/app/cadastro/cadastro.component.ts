import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http'; // importou a classe Header também
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    http: Http;

    constructor(http: Http) {
        this.http = http;
    } 

    cadastrar() {
        console.log(this.foto);

        // cria uma instância de Headers
        let headers = new Headers();
        // Adiciona o tipo de conteúdo application/json 
        headers.append('Content-Type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso');
            }, erro =>  console.log(erro));
    }
}