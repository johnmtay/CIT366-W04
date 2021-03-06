import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelected = new EventEmitter<Document>();
  documents: Document[] =[
    new Document('1', "CIT365 - .NET Software Development", " Learn about the .NET framework and how to program in C#", "byui.edu", "none")
,   new Document('2', "CIT325 - Database Programming", " Learn about Database programming using PLSQL", "byui.edu", "none")     ]
  constructor() { }
  onDocumentSelected(document: Document){
    this.documentWasSelected.emit(document);
  }
  ngOnInit() {
  }

}
