import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-direttive-predefinite',
  templateUrl: './direttive-predefinite.component.html',
  styleUrls: ['./direttive-predefinite.component.css'],
})
export class DirettivePredefiniteComponent {
  showClass: boolean = true;

  onClickCambio() {
    this.showClass = !this.showClass;
    this.oggettoNgClass = {
      'testo-rosso': this.showClass,
      'sfondo-giallo': this.showClass,
    };
    // if(this.showClass == true){
    //   this.showClass=false
    // } else{
    //   this.showClass=true
    // }
  }

  oggettoNgClass = {
    'testo-rosso': this.showClass,
    'sfondo-giallo': this.showClass,
  };

  coloreTesto: string = '';
  coloreSfondo: string = '';

  onClickCambia(testo: string, sfondo: string) {
    this.coloreTesto = testo;
    this.coloreSfondo = sfondo;
  }

  onTxtInput(event: Event) {
    console.log('evento txtinput: ', event);
  }

  // 3 variabili

  larghezza: string = '';
  altezza: string = '';
  bg: string = '';

  onClickCambiaStyle(altezza: string, larghezza: string, bg: string) {
    this.altezza = altezza;
    this.larghezza = larghezza;
    this.bg = bg;
  }

  // object

  figura: any = {
    h: '',
    b: '',
    bgc: '',
  };
  onClickCambiaObject(altezza: string, larghezza: string, bg: string) {
    this.figura = {
      h: altezza,
      b: larghezza,
      bgc: bg,
    };
  }

  // direttive

  mostraParagrafo: boolean = false;
  onClickParagrafo() {
    this.mostraParagrafo = !this.mostraParagrafo;
  }

  listaSpesa: string[] = [
    'Pere',
    'Patate',
    'zucchine',
    'Cocomero',
    'Guanciale',
  ];

  @ViewChild('txtInput') input!: ElementRef<HTMLInputElement>;

  onClickAdd(alimento: string) {
    this.listaSpesa.push(alimento);
    this.input.nativeElement.value = '';
  }

  onClickDeleteEle(i: number) {
		// delete this.listaSpesa[i];
    this.listaSpesa.splice(i, 1);
  }

  verdelime() {
    'verdelime';
  }

  viola() {
    'viola';
  }

	// ngSwitch
	scelta: number = 0;
	OnBtnClick(numero: number){
		this.scelta = numero;
		
	}
}
