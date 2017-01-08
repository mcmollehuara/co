import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Process } from './../model/process.model';
import { ProcessDetail } from './../model/process-detail.model';

@Injectable()
export class DashboardService {

    public value = 'Angular 2';

    constructor(
        public http: Http
    ) { }

    public getData() {
        console.log('Dashboard#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    }

    public getProcesses(): Array<Process> {
        console.log('Dashboard#getProcesses(): Get Pipeline');
        let list: Array<Process>;
        list = require('../../../assets/mock-data/mock-process-data.json');
        return list;
        // With promises
        // setTimeout(() => {
        // System.import('../../assets/mock-data/mock-process-data.json')
        //     .then((json) => {
        //         console.log('async process', json);
        //         let list : Array<Process>;
        //         list = json;
        //         return list;
        //     });

        // });
    }

    public getProcessDetail(processId: number): ProcessDetail {
        console.log('Dashboard#getProcessDetail(): Get process detail');
        let detail: ProcessDetail;
        detail = require(`../../../assets/mock-data/mock-process-data${processId}.json`);
        return detail;
        // With promises
        // setTimeout(() => {
        // System.import('../../assets/mock-data/mock-process-data.json')
        //     .then((json) => {
        //         console.log('async process', json);
        //         let list : Array<Process>;
        //         list = json;
        //         return list;
        //     });

        // });
    }
}