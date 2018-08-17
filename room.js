

class Room{
	constructor(currentHotel){
		this.occupant = null; //a customer
		this.hotel = currentHotel;
		this.isOccupied = false;
	}
	addOccupant( customer ){
		this.occupant = customer;
	}
	checkIfOccupied(){
		if(this.isOccupied===false){
			return false;
		} else {
			return true;
		}
	}
	removeOccupant(){

	}
	getRoomService(food){
		this.hotel.getKitchenService();
	}
}