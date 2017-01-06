import { Component, OnInit,Input } from '@angular/core';
import { UnitTest } from './../../model/unit-test.model';

@Component({
    moduleId: module.id,
    selector: 'unit-test',
    templateUrl: 'unit-test.component.html'
})
export class UnitTestComponent implements OnInit {
    constructor() { }
    item: UnitTest = new UnitTest();
    options: any;
    data: any;
    @Input() ProcessId:number;
    ngOnInit() {
        this.item.Id = 1;
        this.item.Name = "Unit Test";
        this.item.CoveragePercentage = "45%";
        this.item.Passed = 75;
        this.item.Failed = 25;
        this.item.PassedPercentage = "75%";
        this.options = {
            chart: {
                type: 'pieChart',
                height: 100,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                showLegend: false,
                showControls: false,
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                color: ['#82CEAC','#F9B295']
            }
        };
        this.data = [
            {
                key: "Passed",
                y: this.item.Passed
            },
            {
                key: "Failed",
                y: this.item.Failed
            }
        ];
    }
}