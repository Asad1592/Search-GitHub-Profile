import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent { 
    user:any;
    repos:any[];
    username:string;

    constructor(private _githubService: GithubService){
        //Done this bcz in the beginging I was setting my github profile but now it will be search base
        // this._githubService.getUser().subscribe(user => {
        //     this.user = user;
        // });

        // this._githubService.getRepos().subscribe(repos => {
        //     this.repos = repos;
        // });
        this.user=false;
    }

    searchUser()
    {
        this._githubService.updateUser(this.username);
         this._githubService.getUser().subscribe(user => 
        {
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos => 
        {
            this.repos = repos;
        });

    }
}
