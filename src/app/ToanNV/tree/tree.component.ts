import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() question: any;
  @Input() form: FormGroup;
  @Input() objectToFill: any;

  @ViewChild('input', {static: false}) input: TemplateRef<any>;
  @ViewChild('checkbox', {static: false}) checkbox: TemplateRef<any>;
  @ViewChild('empty', {static: false}) empty: TemplateRef<any>;
  @ViewChild('select', {static: false}) select: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  resolveTemplate(question) {
    if(question == null) return this.empty;

    let template_name: string  = question.type;
    return {
      'input': this.input,
      'checkbox': this.checkbox,
      'select': this.select
    }[template_name];
  }
}
