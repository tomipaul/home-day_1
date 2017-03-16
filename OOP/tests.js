const classes = require('./library.js');

describe('hotel, room, single, doubleRoom, suite, guest and booking classes', function() {

  describe("create an hotel with a name", function() {
    let Hotel = new classes.Hotel('Premier');
    it("Hotel should be of type `object` and an instance of the hotel class", function() {
      expect(typeof Hotel).toEqual(typeof {});
      expect(Hotel instanceof classes.Hotel).toBeTruthy();
    });

    it("name, rooms and bookings should be a property of the hotel", function() {
      expect(Hotel.name).toBeDefined();
      expect(Hotel.rooms).toBeDefined();
      expect(Hotel.bookings).toBeDefined();
    });

    it("Hotel should have methods addRooms and removeRoom`", function() {
      expect(Hotel.addRooms).toBeDefined();
      expect(Hotel.removeRooms).toBeDefined();
    });

    it("Hotel should addRoom and removeRoom", function() {
      let Room1 = new classes.Room(12);
      let Room2 = new classes.Room(13);
      Hotel.addRooms([Room1, Room2]);
      expect(Hotel.rooms).toEqual([Room1, Room2]);
      Hotel.removeRooms([Room1]);
      expect(Hotel.rooms).toEqual([Room2]);
    });

    it("searchRoomByType should return all rooms with type `type`", function() {
      let Single = new classes.Single(1);
      let Double = new classes.DoubleRoom(2);
      let Suite = new classes.Suite(3)
      Hotel.addRooms([Single, Double, Suite]);
      expect(Hotel.searchRoomByType('single')).toEqual([Single]);
      expect(Hotel.searchRoomByType('double')).toEqual([Double]);
      expect(Hotel.searchRoomByType('suite')).toEqual([Suite]);
      expect(Hotel.searchRoomByType('general').length).toEqual(1);
    })

    it("Hotel should have methods checkIn and checkOut`", function() {
      expect(Hotel.checkIn).toBeDefined();
      expect(Hotel.checkOut).toBeDefined();
    });

  });


  describe("create a room with a roomNo", function() {
    let Room = new classes.Room(12);
    it("Room should be of type `object` and an instance of the room class", function() {
      expect(typeof Room).toEqual(typeof {});
      expect(Room instanceof classes.Room).toBeTruthy();
    });

    it("roomNo, roomType, guests should be properties of the room", function() {
      expect(Room.roomNo).toEqual(12);
      expect(Room.roomType).toEqual('general');
      expect(Room.available).toBe(true);
      expect(Room.guests).toEqual([]);
    });

    it("isAvailable, book, getGuests should be methods of the room", function() {
      expect(Room.isAvailable).toBeDefined();
      expect(Room.book).toBeDefined();
      expect(Room.getGuests).toBeDefined();
    });


  });

  describe("create a guest with a title and name", function() {

    let Guest = new classes.Guest('chief', 'Lakotun');

    it("the Guest should be of type `object` and an instance of the guest class", function() {
      expect(typeof Guest).toEqual(typeof {});
      expect(Guest instanceof classes.Guest).toBeTruthy();
    });

    it('the guest should have properties `title` and `name` and method `cashOut`', function() {
      expect(Guest.title).toEqual('chief');
      expect(Guest.name).toEqual('Lakotun');
      expect(Guest.cashOut).toBeDefined();
    });

    it('guest.cashOut should update the balance property', function() {
      Guest.cashOut(60000);
      expect(Guest.balance).toEqual(60000);
    });

  });

  describe("create a booking with guests, nights and room", function() {

    let Guest = new classes.Guest('chief', 'Lakotun');
    let Single = new classes.Single(10);
    let Booking = new classes.Booking([Guest], 3, Single);

    it("the Booking should be of type `object` and an instance of the booking class", function() {
      expect(typeof Booking).toEqual(typeof {});
      expect(Booking instanceof classes.Booking).toBeTruthy();
    });

    it('the booking should have properties `guests`, `nights` and method `cashIn`', function() {
      expect(Booking.guests).toEqual([Guest]);
      expect(Booking.nights).toEqual(3);
      expect(Booking.cashIn).toBeDefined();
      expect(typeof Booking.cashIn).toEqual('function');
    });

    it('Booking.calculateCost should return `30000` for cost', function() {
      expect(Booking.calculateCost()).toEqual(30000);
    });

    it('Booking.isValid should return `true`', function() {
      expect(Booking.isValid()).toBe(true);
    });

    it('Booking.cashIn should return `Guest"s balance is not sufficient for cost`', function() {
      expect(Booking.cashIn(Guest)).toEqual('Guest"s balance is not sufficient for cost');
      expect(Booking.cashedIn).toBe(false);
    });

    it('Booking.cashIn`', function() {
      Guest.cashOut(100000);
      it('should update Guest.balance to 70000', function() {
        expect(Guest.balance).toEqual(70000);
      })
      it('should update Booking.cashedIn to true', function() {
        expect(Booking.cashedIn).toBe(true);  
      });
    });

  });

  describe("single, doubleRoom and suite classes", function() {

    describe("create a single with roomNo", function() {
       let Single = new classes.Single(10);

      it("Single should be of type `object` and an instance of the room and single class", function() {
        expect(typeof Single).toEqual(typeof {});
        expect(Single instanceof classes.Single).toBeTruthy();
        expect(Single instanceof classes.Room).toBeTruthy();
      });

      it("roomNo, roomType, guests should be properties of the room", function() {
        expect(Single.roomNo).toEqual(10);
        expect(Single.roomType).toEqual('single');
        expect(Single.available).toBe(true);
        expect(Single.price).toEqual(10000);
      });

      it("isAvailable, book, canBook should be methods of the room", function() {
        expect(Single.isAvailable).toBeDefined();
        expect(Single.book).toBeDefined();
        expect(Single.canBook).toBeDefined();
      });
    });

    describe("create a doubleRoom with roomNo", function() {
      let Double = new classes.DoubleRoom(9);

      it("Double should be of type `object` and an instance of the room and doubleRoom class", function() {
        expect(typeof Double).toEqual(typeof {});
        expect(Double instanceof classes.DoubleRoom).toBeTruthy();
        expect(Double instanceof classes.Room).toBeTruthy();
      });;

      it("roomNo, roomType, guests should be properties of the room", function() {
        expect(Double.roomNo).toEqual(9);
        expect(Double.roomType).toEqual('double');
        expect(Double.available).toBe(true);
        expect(Double.price).toEqual(20000);
      });

      it("isAvailable, book, canBook should be methods of the room", function() {
        expect(Double.isAvailable).toBeDefined();
        expect(Double.book).toBeDefined();
        expect(Double.canBook).toBeDefined();
      });
    });

    describe("create a suite with roomNo", function() {
      let Suite = new classes.Suite(8);

      it("Suite should be of type `object` and an instance of the room and doubleRoom class", function() {
        expect(typeof Suite).toEqual(typeof {});
        expect(Suite instanceof classes.Suite).toBeTruthy();
        expect(Suite instanceof classes.Room).toBeTruthy();
      });;

      it("roomNo, roomType, guests should be properties of the room", function() {
        expect(Suite.roomNo).toEqual(8);
        expect(Suite.roomType).toEqual('suite');
        expect(Suite.available).toBe(true);
        expect(Suite.price).toEqual(50000);
      });

      it("isAvailable, book, canBook should be methods of the room", function() {
        expect(Suite.isAvailable).toBeDefined();
        expect(Suite.book).toBeDefined();
        expect(Suite.canBook).toBeDefined();
      });

    });

  });
  
  describe('Guest makes a booking', function() {
    let Guest1 = new classes.Guest('Mr', 'Festus');
    let Guest2 = new classes.Guest('Mrs', 'Cinder');
    let Single = new classes.Single(1);
    let Double = new classes.DoubleRoom(2);
    let Suite = new classes.Suite(3);

    it('create booking and process booking', function() {
      let Booking = new classes.Booking([Guest1,Guest2], 4, Double);
      expect(Booking.isValid()).toEqual(true);
      Guest1.cashOut(80000);
      expect(Guest1.balance).toEqual(80000);
      Booking.cashIn(Guest1);
      expect(Booking.cashedIn).toBe(true);
      Booking.process();
      expect(Booking.isProcessed).toBe(true);
      expect(Double.awaitingGuests).toEqual([Guest1, Guest2]);
      expect(Double.isAvailable()).toBe(false);
    });

  });

});
