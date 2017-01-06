import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ShiftScheduleFilter } from './../model/shift-schedule.model';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DashboardService {
    constructor(private http: Http, private slimLoadingBarService:SlimLoadingBarService) {
    }
}