class Hotel {
  constructor(name) {
    this.name = name;
    this.rooms = [];
    this.bookings = [];
  }

  addRooms(rooms) {
    for (const room of rooms) {
      this.rooms.push(room);
    }
    return Object.assign([], rooms);
  }

  removeRooms(rooms) {
    for (const room of rooms) {
      this.rooms.splice(this.rooms.indexOf(room), 1);
    }
    return Object.assign([], rooms);
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
    for (const guest of guests) {
      if (room.awaitingGuests.includes(guest)) {
        room.guests.push(guest);
        room.awaitingGuests.splice(this.awaitingGuests.indexOf(guest), 1);
      }
    }
  }

  checkOut(guests, room) {
    for (const guest of guests) {
      room.guests.splice(this.guest.indexOf(guest), 1);
      if (room.guests.length === 0) {
        room.available = true;
      }
    }
  }

  searchRoomByType(type) {
    const roomMatch = [];
    for (const room of this.rooms) {
      if (room.roomType === type) {
        roomMatch.push(room);
      }
    }
    return roomMatch;
  }

  getAvailableRooms() {
    const availableRoom = [];
    for (const room of this.rooms) {
      if (room.isAvailable()) {
        availableRoom.push(room);
      }
    }
    return availableRoom;
  }

  getAllGuests() {
    const allGuests = [];
    for (const room of this.rooms) {
      allGuests.concat(room.guests);
    }
    return allGuests;
  }
}

class Room {
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

class Single extends Room {
  constructor(roomNo) {
    super(roomNo);
    this.roomType = 'single';
    this.price = 10000;
  }

  canBook(guest) {
    if (this.isAvailable() && guest.length === 1) {
      return true;
    }
    return false;
  }
}

class DoubleRoom extends Room {
  constructor(roomNo) {
    super(roomNo);
    this.roomType = 'double';
    this.price = 20000;
  }

  canBook(guest) {
    if (this.isAvailable() && guest.length <= 2) {
      return true;
    }
    return false;
  }
}

class Suite extends Room {
  constructor(roomNo) {
    super(roomNo);
    this.roomType = 'suite';
    this.price = 50000;
  }

  canBook(guest) {
    if (this.isAvailable() && guest.length <= 3) {
      return true;
    }
    return false;
  }
}

class Guest {
  constructor(title, name) {
    this.title = title;
    this.name = name;
    this.balance = 0;
  }
  cashOut(amount) {
    this.balance = amount;
  }
}

class Booking {
  constructor(guests, nights, room) {
    this.guests = guests;
    this.nights = nights;
    this.room = room;
    this.cashedIn = false;
    this.isProcessed = false;
  }

  calculateCost() {
    return this.room.price * this.nights;
  }

  isValid() {
    return this.room.canBook(this.guests);
  }

  cashIn(guest) {
    const cost = this.calculateCost();
    if (this.guests.includes(guest) && guest.balance >= cost) {
      guest.balance -= cost;
      this.cashedIn = true;
      return this.cashedIn;
    } else if (!this.guests.includes(guest)) {
      return 'Guest cannot cash-in on this booking';
    }
    return 'Guest"s balance is not sufficient for cost';
  }

  process() {
    if (this.isValid() && this.cashedIn) {
      this.room.book(this.guests);
      this.isProcessed = true;
    }
  }
}

module.exports = {
  Hotel: Hotel,
  Room: Room,
  Single: Single,
  DoubleRoom: DoubleRoom,
  Suite: Suite,
  Guest: Guest,
  Booking: Booking,
};
