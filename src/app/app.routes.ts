import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleComponent } from './main/single/single.component';

export const routes: Routes = [    
    { 
        path: '',
        title: 'Niceskin',   
        component:HomeComponent,
    },
    { 
        path: 'products', 
        title:'Products', 
        component: ProductsComponent
            
    },
    {
        path:'products/:id', 
        component: SingleComponent,
    },    
    { 
        path: '**', 
        title:'404 Not Found', 
        component: NotfoundComponent 
    },
];

