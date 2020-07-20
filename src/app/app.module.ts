import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Bootstrap

import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {  } from '@ng-bootstrap/ng-bootstrap';
//Angular Material

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatInputModule} from '@angular/material/input';
import {CdkTreeModule} from '@angular/cdk/tree';



//lOCAL MODULES
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { CarouselComponent } from './body/carousel/carousel.component';
import { HomepageComponent } from './body/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//HTTP module
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginCardComponent } from './Authentification/login-card/login-card.component';
import { DropdownFormComponent } from './header/dropdown-form/dropdown-form.component';
import { DropdownformSignUpComponent } from './header/dropdownform-sign-up/dropdownform-sign-up.component';
import { SignUpCardComponent } from './Authentification/sign-up-card/sign-up-card.component';
import { ProductsBodyComponent } from './body/products/products-body/products-body.component';
import { Product1Component } from './body/products/product1/product1.component';
import { Product2Component } from './body/products/product2/product2.component';
import { Product3Component } from './body/products/product3/product3.component';
import { LoginModalComponent } from './Authentification/login-modal/login-modal.component';
import { ProjectBodyComponent } from './body/Projects/project-body/project-body.component';
import { ProjectTreeComponent } from './body/Projects/project-tree/project-tree.component';
import { ProjectNavRealComponent } from './body/Project/project-nav-real/project-nav-real.component';
import { ProjectPresentationRealComponent } from './body/Project/project-presentation-real/project-presentation-real.component';
import { LoadedDirective } from './Directives/loaded.directive';
import { ModelMComponent } from './body/model-m/model-m.component';
import { PrevisualiseComponent } from './body/previsualise/previsualise.component';
import { ProjectsNavigationComponent } from './body/projects-navigation/projects-navigation.component';
import { DropdownformLogInComponent } from './header/dropdownform-log-in/dropdownform-log-in.component';
import { DropdownformToolbarComponent } from './header/dropdownform-toolbar/dropdownform-toolbar.component';
import { DropdownToolbarConnectedComponent } from './header/dropdown-toolbar-connected/dropdown-toolbar-connected.component';
import { LinkTestFirstComponent } from './link-test/link-test-first/link-test-first.component';
import { LinkTestSecondComponent } from './link-test/link-test-second/link-test-second.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CarouselComponent,
    HomepageComponent,
    LoginCardComponent,
    DropdownFormComponent,
    DropdownformSignUpComponent,
    SignUpCardComponent,
    ProductsBodyComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    LoginModalComponent,
    ProjectBodyComponent,
    ProjectTreeComponent,
    ProjectNavRealComponent,
    ProjectPresentationRealComponent,
    LoadedDirective,
    ModelMComponent,
    PrevisualiseComponent,
    ProjectsNavigationComponent,
    DropdownformLogInComponent,
    DropdownformToolbarComponent,
    DropdownToolbarConnectedComponent,
    LinkTestFirstComponent,
    LinkTestSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAlertModule,
    NgbCarouselModule,
    NgbTabsetModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MatCardModule,
    NgbModule,
    FormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatRadioModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule,
    CdkTreeModule



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
