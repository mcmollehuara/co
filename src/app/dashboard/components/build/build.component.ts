import { Component, OnInit, Input } from '@angular/core';
import { Build } from './../../model/build.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'build',
    templateUrl: 'build.component.html'
})
export class BuildComponent implements OnInit {
    constructor() { }
    @Input() ProcessId: number;
    item: Build = new Build();
    list: Array<Build>;
    ngOnInit() {
        this.getBuild(this.ProcessId);
    }

    getBuild(processId: number) {
        this.item.Name = "Build";
        this.item.Datetime = new Date();
        this.item.DebugStatus = "danger";
        this.item.ReleaseStatus = "success";
    }
}