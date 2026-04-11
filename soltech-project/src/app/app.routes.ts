import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Favorites } from './pages/favorites/favorites';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'favorites', component: Favorites },
    { path: 'contact', component: Contact },
    { path: 'admin', component: AdminComponent }
];
