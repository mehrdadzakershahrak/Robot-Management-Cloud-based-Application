import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class HideService {
	//public _toggle = new Subject();
	//toggle$ = this._toggle.asObservable();
	
	//toggle(todo) {
		//this._toggle.next(todo);
	//}






	showTelemetry : boolean = true;

	showIt() {
		this.showTelemetry = true;
	}
	hideIt() {
		this.showTelemetry = false;
	}
	
	getIt(){
		return this.showTelemetry;
	}

}
