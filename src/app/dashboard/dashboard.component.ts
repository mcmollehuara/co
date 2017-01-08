import { Component, OnInit, Input, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Process } from './model/process.model';
import { ProcessDetail } from './model/process-detail.model';

import { DashboardService } from './services/dashboard.service';
import { ToastyService } from 'ng2-toasty';
@Component({
    moduleId: module.id.toString(),
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]

})
export class DashboardComponent implements OnInit {

    public list: Array<Process>;
    public detail: ProcessDetail = new ProcessDetail();
    public localState: any;
    @Input() pipelineName: string = "main";
    @Input() pipelineId: number = 1;
    constructor(public dashboardService: DashboardService, public toastyService: ToastyService) {
    }

    ngOnInit(): void {
        console.log('hello `Dashboard` component');
        this.toastyService.success({ title: "Success", msg: "Welcome to Crossover pipeline!" });
        this.asyncDataWithWebpack();
    }
    //////////////////////////////////////////
    private onExpandPanel(process: Process) {
        this.list.forEach(element => {
            if (element.Id == process.Id) {
                element.Expanded = true;
                this.asyncDataDetailWithWebpack(process.Id);
            }
            else {
                element.Expanded = false;
            }
        });
    }

    private onCollapsePanel(process: Process) {
        this.list.forEach(element => {
            element.Expanded = false;
        });
    }

    //////////////////////////////////
    private asyncDataWithWebpack() {
        this.list = this.dashboardService.getProcesses();
        // with promises
        // setTimeout(() => {
        //     System.import('../../assets/mock-data/mock-process-data.json')
        //         .then((json) => {
        //             console.log('async process', json);
        //             this.list = json;
        //         });

        // });
    }

    private asyncDataDetailWithWebpack(processId: number) {
        this.detail = this.dashboardService.getProcessDetail(processId);
        // with detail
        // setTimeout(() => {
        //     System.import(`../../assets/mock-data/mock-process-data${processId}.json`)
        //         .then((json) => {
        //             console.log('async process detail', json);
        //             this.detail = json;
        //         });

        // });
    }
}
