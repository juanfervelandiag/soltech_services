import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Favorites } from './pages/favorites/favorites';
import { Administration } from './pages/admin/admin';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'favorites', component: Favorites },
    { path: 'contact', component: Contact },
    { path: 'admin', component: Administration }
];
