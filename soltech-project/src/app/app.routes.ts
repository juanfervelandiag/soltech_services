import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Favorites } from './pages/favorites/favorites';
import { Administration } from './pages/admin/admin';
import { Services } from './pages/services/services';
import { ServiceDetail } from './pages/service-detail/service-detail';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'favorites', component: Favorites },
    { path: 'contact', component: Contact },
    { path: 'admin', component: Administration },
    { path: 'services', component: Services },
    {path: 'service/:id', component: ServiceDetail}
];
