import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductComponent } from './components/product/product.component';
import { FocusDirective } from './directives/focus.directive';
import { AboutComponent } from './pages/about/about.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        GlobalErrorComponent,
        FilterProductsPipe,
        ModalComponent,
        CreateProductComponent,
        FocusDirective,
        ProductPageComponent,
        AboutComponent,
        NavigationComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
