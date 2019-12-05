import { Component, OnInit } from '@angular/core';
import { MasterService } from '../shared/services/masterservice';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

   usuariosAr: any;
   usuario: any;

  constructor(private masterservice: MasterService) {

   }

  ngOnInit() {
    this.masterservice.fuicionarios()
    .subscribe(resposta => console.log(this.usuariosAr = resposta));
  }

  deletarUsuario(id: number) {
    this.masterservice.deletarUsuario(id)
    .subscribe(resposta => console.log('sucesso:', resposta),
                erro => console.log('erro:', erro));
    }
  }


