import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaProvaComponent } from './prima-prova/prima-prova.component';
import { SecondaProvaComponent } from './seconda-prova/seconda-prova.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { Eser1Component } from './eser1/eser1.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TemplateControllComponent } from './template-controll/template-controll.component';
import { ProgressControllComponent } from './progress-controll/progress-controll.component';
import { IncrementoContatoreComponent } from './incremento-contatore/incremento-contatore.component';
import { ContatoreComponent } from './contatore/contatore.component';
import { CompUnoComponent } from './content-projection/comp-uno/comp-uno.component';
import { CompDueComponent } from './content-projection/comp-due/comp-due.component';
import { ScompostoComponent } from './eser2/scomposto/scomposto.component';
import { OrdinatoComponent } from './eser2/ordinato/ordinato.component';
import { DirettivePredefiniteComponent } from './direttive-predefinite/direttive-predefinite.component';
import { HeaderComponent } from './header/header.component';
import { PipePredefiniteComponent } from './pipe-predefinite/pipe-predefinite.component';
import { Eser3Component } from './eser3/eser3.component';
import { PersonalizataPipe } from './personalizata.pipe';
import { FizzBuzzPipe } from './fizz-buzz.pipe';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { EserInputParentComponent } from './input/eser-input-parent/eser-input-parent.component';
import { EserInputChildComponent } from './input/eser-input-child/eser-input-child.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { combineLatest } from 'rxjs';
import { ElencoStudentiComponent } from './studenti/elenco-studenti/elenco-studenti.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TamplateDrivenFromComponent } from './form/tamplate-driven-from/tamplate-driven-from.component';
import { AggiungiStudenteComponent } from './studenti/aggiungi-studente/aggiungi-studente.component';
import { AggiungiProfessoreComponent } from './professori/aggiungi-professore/aggiungi-professore.component';
import { HttpClientModule } from '@angular/common/http';
import { ModificaStudenteComponent } from './studenti/modifica-studente/modifica-studente.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ElencoProfessoriComponent } from './professori/elenco-professori/elenco-professori.component';
import { ModificaProfessoreComponent } from './professori/modifica-professore/modifica-professore.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ElencoAuleComponent } from './aura/elenco-aule/elenco-aule.component';
import { AggiungiAulaComponent } from './aura/aggiungi-aula/aggiungi-aula.component';
import { ModificaAulaComponent } from './aura/modifica-aula/modifica-aula.component';



const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'string-interpolation',
    component: StringInterpolationComponent,
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent,
  },
  {
    path: 'event-binding',
    component: EventBindingComponent,
  },
  {
    path: 'incremento-contatore',
    component: IncrementoContatoreComponent,
  },
  {
    path: 'template-controll',
    component: TemplateControllComponent,
  },
  {
    path: 'direttive-predefinite',
    component: DirettivePredefiniteComponent,
  },
  {
    path: 'elenco-studenti',
    component: ElencoStudentiComponent,
  },
  {
    path: 'aggiungi-studente',
    component: AggiungiStudenteComponent,
  },
  {
    path: 'modifica-studente/:id',
    component: ModificaStudenteComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'elenco-professori',
    component: ElencoProfessoriComponent,
  },{
    path: 'aggiungi-professore',
    component: AggiungiProfessoreComponent,
  },
  {
    path: 'modifica-professore/:id',
    component: ModificaProfessoreComponent,
  },
  {
    path: 'elenco-aule',
    component: ElencoAuleComponent,
  },
  {
    path: 'aggiungi-aula',
    component: AggiungiAulaComponent,
  },
  {
    path: 'modifica-aula/:id',
    component: ModificaAulaComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PrimaProvaComponent,
    SecondaProvaComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    Eser1Component,
    TemplateReferenceVariableComponent,
    TemplateControllComponent,
    ProgressControllComponent,
    IncrementoContatoreComponent,
    ContatoreComponent,
    CompUnoComponent,
    CompDueComponent,
    ScompostoComponent,
    OrdinatoComponent,
    DirettivePredefiniteComponent,
    HeaderComponent,
    PipePredefiniteComponent,
    Eser3Component,
    PersonalizataPipe,
    FizzBuzzPipe,
    LifecycleHooksComponent,
    EserInputParentComponent,
    EserInputChildComponent,
    HomePageComponent,
    ElencoStudentiComponent,
    TamplateDrivenFromComponent,
    AggiungiStudenteComponent,
    AggiungiProfessoreComponent,
    ModificaStudenteComponent,
    ReactiveFormComponent,
    ModificaProfessoreComponent,
    ElencoProfessoriComponent,
    ElencoAuleComponent,
    AggiungiAulaComponent,
    ModificaAulaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
