import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IFeature } from 'src/app/files/interface';
import { MapboxService } from 'src/app/service/mapbox/mapbox.service';
import { map } from "rxjs/operators";

declare var mapboxgl;
@Component({
  selector: 'app-del-location',
  templateUrl: './del-location.page.html',
  styleUrls: ['./del-location.page.scss'],
})
export class DelLocationPage implements OnInit {

  
  coords;
	orderOk = false;

	address: string[] = [];
	selectedAddress = null;
	
	constructor(
		public modalController: ModalController,
		private mapboxService: MapboxService
	) { }
	
	ngOnInit() {

		navigator.geolocation.getCurrentPosition((position)=>{

			const lng = position.coords.longitude;
			const lat = position.coords.latitude;
			this.coords = {"lng": lng, "lat": lat};
			mapboxgl.accessToken = 'pk.eyJ1Ijoia2dvdGhhdHNvIiwiYSI6ImNraGtnanhyNDA2Z2kyem95aGZmbXZvZXAifQ.Ma7M1pVmTfEcOiBRD93vFw';
				var map = new mapboxgl.Map({
					container: 'map',
					style: 'mapbox://styles/mapbox/streets-v11',
					center: [ lng, lat],
					zoom: 6
				});
	 
		
		 
			map.on('load', () => {
				map.resize();
			});
		
			this.getGeocoding(lng, lat);
		});
	}
	
	locate() {

		
	 
	}
	
	dismiss() {
		this.modalController.dismiss({
		'dismissed': true
		});
	}


	search(event: any){
		const searchTerm = event.target.value.toLowerCase();

		if (searchTerm && searchTerm.length > 0) {
			this.mapboxService.search(searchTerm)
			.subscribe(
				(features: IFeature[]): void => {
					this.address = features.map(feat => feat.place_name);
				}
			);
		}
		else{
			this.address = [];
		}
	}

	onSelect(address: string){
		this.selectedAddress = address;
		this.address = [];
	}

	getGeocoding(longitude: number, latitude: number){
		this.mapboxService.reverseGeocode(longitude, latitude).subscribe((response: IFeature[])=> {
			response.map(feature => {
				console.log(feature.place_name);
			});
		});
	}


}

