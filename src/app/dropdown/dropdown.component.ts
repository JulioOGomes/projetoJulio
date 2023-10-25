import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {  
  select1: any ={};
  select2 ="Selecione";
  cidade: string = "";
  cidades: any =[]; 
  pais: any=[]; 
  imagens: any =[]; 
  imagem: string = "";
  paises = [
    {
      id:0,
      nome:"Selecione",
      cidades:["Selecione"],
      imagens:"../../assets/Hamburguer de siris.jpg",
    },
    {
      id:1,
      nome:"Camarão",
      cidades:["Molho rose", "barbecue", "Potato"],
      imagens:"../../assets/Camarão-ao-Alho-e-Óleo.jpg",
    },
    {
      id:2,
      nome:"Hamburguer de Siri",
      cidades:["Molho rose", "barbecue", "Potato"],
      imagens:"../../assets/Lanche.png",
    },
    {
      id:3,
      nome:"Firecracker Shrimp Burger",
      cidades:["Molho rose", "barbecue", "Potato"],
      imagens:"../../assets/Firecracker-Shrimp-Burger.png",
    },
    {
      id:4,
      nome:"Onions",
      cidades:["Molho rose", "barbecue", "Potato"],
      imagens:"../../assets/onion-rings.jpg",
    },
  ];
  constructor(){}

  ngOnInit() {
    this.select1 = 0;
    this.cidades = this.paises.filter((x)=> x.id == this.select1)[0].cidades;
    this.imagem = "../../assets/Hamburguer de siris.jpg";
  }

  onChange(){
    this.select2 = "";
    this.cidades = this.paises.filter((x)=> x.id == this.select1)[0].cidades;
  }

  clickButton(){
    this.pais = this.paises.find((x)=> x.id == this.select1)?.nome;
    this.cidade = this.select2;
    this.imagem =  this.paises.filter((x)=> x.id == this.select1)[0].imagens;
  }


}

