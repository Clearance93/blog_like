import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginVelidationComponent } from './login-velidation/login-velidation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignFormComponent } from './sign-form/sign-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { AuthGurd } from './service/auth.gurd';
import { WorldComponent } from './world/world.component';
import { SouthAfricaComponent } from './south-africa/south-africa.component';
import { TechnologyComponent } from './technology/technology.component';
import { DesignComponent } from './design/design.component';
import { CultureComponent } from './culture/culture.component';
import { BusinessComponent } from './business/business.component';
import { PoliticsComponent } from './politics/politics.component';
import { OpinionComponent } from './opinion/opinion.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { StyleComponent } from './style/style.component';
import { TravelComponent } from './travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    LoginVelidationComponent,
    SignFormComponent,
    LoginFormComponent,
    WorldComponent,
    SouthAfricaComponent,
    TechnologyComponent,
    DesignComponent,
    CultureComponent,
    BusinessComponent,
    PoliticsComponent,
    OpinionComponent,
    ScienceComponent,
    HealthComponent,
    StyleComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGurd],
  bootstrap: [MainComponent]
})
export class AppModule { }
