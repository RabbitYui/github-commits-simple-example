import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BranchModel} from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  GET_REPO = environment.GET_REPO;

  constructor(private http: HttpClient) { }

  getBranches(): Observable<BranchModel[]> {
    return this.http.get<BranchModel[]>(this.GET_REPO + '/branches');
  }
}
