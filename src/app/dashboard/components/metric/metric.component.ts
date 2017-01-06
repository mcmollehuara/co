import { Input, Component, OnInit } from '@angular/core';
import { Metric } from './../../model/metric.model';

@Component({
    moduleId: module.id,
    selector: 'metric',
    templateUrl: 'metric.component.html'
})
export class MetricComponent implements OnInit {
    constructor() { }
    item: Metric = new Metric();
    @Input() ProcessId: number;
    ngOnInit() {
        this.getMetric(this.ProcessId);
    }

    getMetric(processId: number) {
        this.item.Id = 1;
        this.item.Name = "Metric";
        this.item.Status = "danger";
        this.item.Maintainability = 32;
        this.item.MaintainabilityStatus = "danger";
        this.item.Test = 53;
        this.item.TestStatus = "success";
        this.item.Security = 46;
        this.item.SecurityStatus = "warning";
        this.item.Workmanship = 87;
        this.item.WorkmanshipStatus = "warning";
    }
}