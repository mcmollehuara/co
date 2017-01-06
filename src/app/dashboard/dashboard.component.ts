import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { DashboardService } from './services/dashboard.service'
import { Subject } from 'rxjs/Subject';
import { Process } from './model/process.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]

})
export class DashboardComponent implements OnInit {
    constructor(private dashboardService: DashboardService) {

    }

    list: Array<Process>;
    ngOnInit(): void {
        this.list = new Array<Process>();
        let process = new Process();
        process.Id = 1
        process.Type = 1
        process.Name = "Tenrox-R1_1235"
        process.OwnerId = 0
        process.OwnerName = ""
        process.DataTime = null;
        process.StatusId = 1;
        process.Status = "pending";
        process.StatusName = "Pending";
        process.MetricStatus = "Pending";
        process.MetricValue = "0%";
        process.BuildStatus = "pending";
        process.BuildValue = "0%";
        process.UnitTestStatus = "pending";
        process.UnitTestValue = "0%";
        process.FunctionalTestStatus = "pending";
        process.FunctionalTestValue = "0%";
        process.Result = "Auto-Merged";
        process.Expanded = false;

        this.list.push(process);

        let process1 = new Process();
        process1.Id = 2
        process1.Type = 2
        process1.Name = "434264"
        process1.OwnerId = 100
        process1.OwnerName = "jtuck"
        process1.DataTime = new Date();
        process1.StatusId = 2;
        process1.Status = "info";
        process1.StatusName = "Running";
        process1.MetricStatus = "info";
        process1.MetricValue = "54%";
        process1.BuildStatus = "pending";
        process1.BuildValue = "0%";
        process1.UnitTestStatus = "pending";
        process1.UnitTestValue = "0%";
        process1.FunctionalTestStatus = "pending";
        process1.FunctionalTestValue = "0%";
        process1.Result = "Auto-Merged";
        process1.Expanded = false;
        this.list.push(process1);

        let process2 = new Process();
        process2.Id = 3
        process2.Type = 2
        process2.Name = "231344"
        process2.OwnerId = 101
        process2.OwnerName = "samy"
        process2.DataTime = new Date();
        process2.StatusId = 2;
        process2.Status = "danger";
        process2.StatusName = "Rejected";
        process2.MetricStatus = "danger";
        process2.MetricValue = "80%";
        process2.BuildStatus = "success";
        process2.BuildValue = "100%";
        process2.UnitTestStatus = "info";
        process2.UnitTestValue = "90%";
        process2.FunctionalTestStatus = "success";
        process2.FunctionalTestValue = "100%";
        process2.Result = "Auto-Merged";
        process2.Expanded = false;
        this.list.push(process2);

        let process3 = new Process();
        process3.Id = 4
        process3.Type = 1
        process3.Name = "Tenrox-R1_1234"
        process3.OwnerId = 102
        process3.OwnerName = "micom"
        process3.DataTime = new Date();
        process3.StatusId = 2;
        process3.Status = "success";
        process3.StatusName = "Completed";
        process3.MetricStatus = "success";
        process3.MetricValue = "100%";
        process3.BuildStatus = "success";
        process3.BuildValue = "100%";
        process3.UnitTestStatus = "success";
        process3.UnitTestValue = "100%";
        process3.FunctionalTestStatus = "success";
        process3.FunctionalTestValue = "100%";
        process3.Result = "Auto-Merged";
        process3.Expanded = false;
        this.list.push(process3);

 let process4 = new Process();
        process4.Id = 5
        process4.Type = 2
        process4.Name = "432460"
        process4.OwnerId = 103
        process4.OwnerName = "samy"
        process4.DataTime = new Date();
        process4.StatusId = 3;
        process4.Status = "danger";
        process4.StatusName = "Rejected";
        process4.MetricStatus = "danger";
        process4.MetricValue = "54%";
        process4.BuildStatus = "success";
        process4.BuildValue = "100%";
        process4.UnitTestStatus = "success";
        process4.UnitTestValue = "100%";
        process4.FunctionalTestStatus = "success";
        process4.FunctionalTestValue = "100%";
        process4.Result = "Auto-Merged";
        process4.Expanded = false;
        this.list.push(process4);


 let process5 = new Process();
        process5.Id = 6
        process5.Type = 2
        process5.Name = "432459"
        process5.OwnerId = 100
        process5.OwnerName = "samy"
        process5.DataTime = new Date();
        process5.StatusId = 2;
        process5.Status = "success";
        process5.StatusName = "Running";
        process5.MetricStatus = "success";
        process5.MetricValue = "100%";
        process5.BuildStatus = "success";
        process5.BuildValue = "100%";
        process5.UnitTestStatus = "pending";
        process5.UnitTestValue = "45%";
        process5.FunctionalTestStatus = "pending";
        process5.FunctionalTestValue = "54%";
        process5.Result = "Auto-Merged";
        process5.Expanded = false;
        this.list.push(process5);
    }

    private onExpandPanel(process: Process) {
        this.list.forEach(element => {
            if (element.Id == process.Id) {
                element.Expanded = true;
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
}
