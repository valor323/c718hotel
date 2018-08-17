

class Customer{
	constructor( occupentsName ){
		this.name = occupentsName;
		this.room = null; //room we are currently
		this.isHungry = false;
	}
	orderRoomService( food ){
		this.room.getRoomService(food);
	}
	eat( food ){
		
	}
}
