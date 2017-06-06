import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private dStorageServ: DataStorageService,
        private authService: AuthService) { }
    onSaveData() {
        this.dStorageServ.storeAcoes().subscribe(
            (response: Response) => console.log(response)
        );
    }
    onFetchData() {
        this.dStorageServ.getAcoes();
    }
    
    onLogOut() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}