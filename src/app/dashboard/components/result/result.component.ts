import { Component, OnInit, Input } from '@angular/core';
import { Result } from './../../model/result.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'result',
    templateUrl: 'result.component.html'
})
export class ResultComponent implements OnInit {
    constructor() { }
    item: Result;
    @Input() ProcessId: number;
    ngOnInit() {
        this.getResult(this.ProcessId);
    }

    getResult(processId: number) {
        let result = new Result();
        result.Id = 1;
        result.Status = "Change Rejected";
        result.Mesage = "Metrics Reduction";
        result.CorrectiveAction = "Find Issues";
        this.item = result;
    }
}