import { Input, Component, OnInit } from '@angular/core';
import { FunctionalTest } from './../../model/functional-test.model';

@Component({
    moduleId: module.id,
    selector: 'fuctional-test',
    templateUrl: 'functional-test.component.html'
})
export class FunctionalTestComponent implements OnInit {
    constructor() { }
    item: FunctionalTest = new FunctionalTest();
    options: any;
    data: any;
    @Input() ProcessId: number;
    ngOnInit() {
        this.getFunctionalTest(this.ProcessId);
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
                color: ['#82CEAC', '#F9B295']
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

    getFunctionalTest(processId: number) {
        this.item.Id = 1;
        this.item.Name = "Unit Test";
        this.item.CoveragePercentage = "45%";
        this.item.Passed = 75;
        this.item.Failed = 25;
        this.item.PassedPercentage = "75%";
    }
}