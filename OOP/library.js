class hotel {
  constructor(name) {
    this.name = name;
    this.rooms = [];
    this.bookings = [];
  }

  addRooms(rooms) {
    for (let room of rooms) {
      this.rooms.push(room);
    }
    return Object.assign([], rooms);
  }

  removeRooms(rooms) {
    for (let room of rooms) {
      return this.rooms.splice(this.rooms.indexOf(room), 1);
    }
  }

  bookRoom(booking) {
    if (this.rooms.includes(booking.room)) {
      this.bookings.push(booking);
    }
    return Object.assign({}, booking);
  }

  checkIn(guests, room) {
    if (!room.hasOwnProperty('awaitingGuests')) {
      return `Room ${room.roomNo} has not been booked for any guests`;
    }
    for (let guest of guests) {
      if (room.awaitingGuests.includes(guest)) {
        this.guests.push(guest);
        this.awaitingGuests.splice(this.awaitingGuests.indexOf(guest), 1);
      }
    }
  }

  checkOut(guests, room) {
    for (let guest of guests) {
      this.guests.splice(this.guest.indexOf(guest), 1);
      if (this.guests.length === 0) {
        this.available = true;
      }
    }
  }

  searchRoomByType(type) {
    let roomMatch = [];
    for (let room of this.rooms) {
      if (room.type === type) {
        roomMatch.push(room);
      }
    }
    return roomMatch;
  }

  getAvailableRooms() {
    let availableRoom = [];
    for (let room of this.rooms) {
      if (room.isAvailable()) {
        availableRoom.push(room);
      }
    }
    return availableRoom;
  }

  getAllGuests() {
    let allGuests = [];
    for (let room of this.rooms) {
      allGuests.concat(room.guests);
    }
    return allGuests;
  }
}

class room {
  constructor(roomNo) {
    this.roomNo = roomNo;
    this.available = true;
    this.roomType = 'general';
    this.guests = [];
  }

  isAvailable() {
    return this.available;
  }

  book(guests) {
    this.awaitingGuests = guests;
    this.available = false;
  }

  getGuests() {
    return Object.assign([], this.guests);
  }
}

class single extends room {
  constructor(roomNo) {
    super(roomNo);
    this.roomType = 'single';
    this.price = 10000;
  }

  canBook(guest) {
    if (this.isAvailable() && guest.length === 1) {
      return true;
    }
    else {
      return false;
    }
  }
}

class doubleRoom extends room {
  constructor(roomNo) {
    super(roomNo);
    this.roomType = 'double';
    this.price = 20000;
  }

  canBook(guest) {
    if (this.isAvailable() && guest.length <= 2) {
      return true;
    }
    else {
      return false;
    }
  }
}

class suite extends room {
  constructor(roomNo) {
    super(roomNo);
    this.roomType = 'suite';
    this.price = 50000;
  }

  canBook(guest) {
    if (this.isAvailable() && guest.length <= 3) {
      return true;
    }
    else {
      return false;
    }
  }
}

class guest {
  constructor(title, name) {
    this.title = title;
    this.name = name;
    this.balance = 0;
  }
  cashOut(amount) {
    this.balance = amount;
  }
}

class booking {
  constructor(guests, nights, room) {
    this.guests = guests;
    this.nights = nights;
    this.room = room;
    this.cashIn = false;
    this.isProcessed = false
  }

  calculateCost() {
    return this.room.price * this.nights;
  }

  isValid() {
    return this.room.canBook(this.guests)
  }

  cashIn(guest) {
    let cost = this.calculateCost()
    if (this.guests.include(guest) && guest.balance >= cost ) {
      guest.balance -= cost;
      this.cashIn = true;
    }
    else if (!this.guests.include(guest)) {
      return "Guest cannot cash-in on this booking";
    }
    else {
      return "Guest's balance is not sufficient for cost";
    }
  }

  process() {
    if (this.isValid() && this.cashIn) {
      this.room.book(this.guests);
      this.isProcessed = true;
    }
  }
}

module.exports = {
  hotel: hotel,
  room: room,
  single: single,
  doubleRoom: doubleRoom,
  suite: suite,
  guest: guest,
  booking: booking
};