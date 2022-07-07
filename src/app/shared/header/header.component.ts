import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
	providers: []
})
export class HeaderComponent implements OnInit {
	
	toggleChat: boolean = true;
	toggleSingle: boolean = true;
	@Input() clientNumber: any;
	listLang: string[] = [];
	
	settingItem: any;
	checkoutDelivery: boolean = false;
	constructor(
		
		) { 			
	}
	
	ngOnInit(): void {
		
	}

	 

	
}
