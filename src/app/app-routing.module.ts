import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { CultureComponent } from './culture/culture.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignComponent } from './design/design.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginVelidationComponent } from './login-velidation/login-velidation.component';
import { OpinionComponent } from './opinion/opinion.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PoliticsComponent } from './politics/politics.component';
import { ProductsComponent } from './products/products.component';
import { ScienceComponent } from './science/science.component';
import { AuthGurd } from './service/auth.gurd';
import { SignFormComponent } from './sign-form/sign-form.component';
import { SouthAfricaComponent } from './south-africa/south-africa.component';
import { StyleComponent } from './style/style.component';
import { TechnologyComponent } from './technology/technology.component';
import { TravelComponent } from './travel/travel.component';
import { WorldComponent } from './world/world.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login-velidation', pathMatch: 'full'},
  {path: 'login-velidation', component: LoginVelidationComponent, canActivate: [AuthGurd]},
  {path: 'home', component: HomeComponent },
  {path: 'world', component: WorldComponent},
  {path: 'south-africa', component: SouthAfricaComponent},
  {path: 'technology', component: TechnologyComponent},
  {path: 'design', component: DesignComponent},
  {path: 'culture', component: CultureComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'politics', component: PoliticsComponent},
  {path: 'opinion', component: OpinionComponent},
  {path: 'science', component: ScienceComponent},
  {path: 'health', component: ScienceComponent},
  {path: 'style', component: StyleComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'sign-form', component: SignFormComponent},
  {path: 'login-form', component: LoginFormComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
