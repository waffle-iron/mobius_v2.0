import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { FlowchartService } from '../data/flowchart.service';
import { Subscription } from 'rxjs/Subscription';

interface IViewer{
	update(): void;
}

export class Viewer implements OnInit, OnDestroy, IViewer{

	private _name: string;
	private _description: string;
	private _author: string;

	private _subscription: Subscription;
	private _message: any;

	protected flowchartService: FlowchartService; 

	constructor(injector: Injector, name?: string, description?: string, author?: string) { 
		this._name = name;
		this._description = description; 
		this._author = author;
		
		this.flowchartService = injector.get(FlowchartService);
		this._subscription = this.flowchartService.getMessage().subscribe(message => { 
			this._message = message; 
			this.update();
		});
  	}

  	getService(): FlowchartService{
  		return this.flowchartService;
  	}

	ngOnInit() { this.update(); }

	ngOnDestroy() {
	    // unsubscribe to ensure no memory leaks
	    this._subscription.unsubscribe();
	}

	update(){
		console.log(this._name + " has not implemented the update function!");
	}
}