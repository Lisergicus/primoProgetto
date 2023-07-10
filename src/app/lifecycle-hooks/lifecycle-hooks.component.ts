import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent {
  
  ngOnChanges(oggetto : SimpleChanges){
    console.log('ngOnChanges')
  }
 
  // corsista = {
  //   nome: '',
  //   cognome: ''
  // }

  // corsisti: any[]=[
    
  // ]

  // onClickPushCor(nome: string, cognome: string){
  //   this.corsisti.push({nome: nome, cognome: cognome});
  // }

  ngOnInit() {
    console.log('ngOnInit')
    // console.log('corsisti')
  }
  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterCheched')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

}
