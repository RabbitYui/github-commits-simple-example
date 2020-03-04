import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  GET_REPO = environment.GET_REPO;

  constructor(private http: HttpClient) { }

  getCommits(branchSha: string): Observable<any> {
   return this.http.get(this.GET_REPO + '/commits', {params: {sha: branchSha}});
  }
}
