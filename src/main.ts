import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterComponent } from './app/pages/register/register.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { UsuarioComponent } from './app/pages/components/usuario/usuario.component';
import { CardCarouselComponent } from './app/pages/components/card-carousel/card-carousel.component';

bootstrapApplication(AppComponent,{
    providers:[
        provideRouter([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'usuario', component: UsuarioComponent },
            { path: 'dashboard', component: DashboardComponent, 
                children: [
                    {
                        path: '', component: UsuarioComponent
                    },
                    {
                        path: 'login', component: LoginComponent
                    },
                    {
                        path: 'register', component: RegisterComponent
                    },
                    {
                        path: 'usuario', component: UsuarioComponent
                    },
                    
                    {
                        path: 'card', component: CardCarouselComponent
                    },
                ]
            },
          ]),
        provideAnimations(),
        provideHttpClient()
    ]
}).catch(err => console.error(err));