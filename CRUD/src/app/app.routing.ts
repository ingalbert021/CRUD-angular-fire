//Importar los modulos del router de angular

import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule, Router } from '@angular/router';

/*importar componentes a los cuales les quiero hacer una pagina exclusiva*/

import { InicioComponent } from './components/inicio/inicio.component';
import { ListCustomersComponent} from './components/list-customers/list-customers.component';

import { ErrorComponent } from './components/error/error.component';


//Array de rutas

const appRoutes: Routes = [

{ path: '', component: InicioComponent},
{ path: 'list', component: ListCustomersComponent},
{path: '**', component: ErrorComponent}

];

//Exportar el modulo de rutas 
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
