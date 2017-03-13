const classes = require('./library.js');

describe('hotel, room, single, doubleRoom, suite, guest and booking classes', function() {

  describe("create an hotel with a name", function() {
    let Hotel = new classes.hotel('Premier');
    it("Hotel should be of type `object` and an instance of the hotel class", function() {
      expect(typeof Hotel).toEqual(typeof {});
      expect(Hotel instanceof classes.hotel).toBeTruthy();
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

    it("Hotel should have methods checkIn and checkOut`", function() {
      expect(Hotel.checkIn).toBeDefined();
      expect(Hotel.checkOut).toBeDefined();
    });

  });

  describe("create a room with a roomNo", function() {
    let Room = new classes.room(12);
    it("Room should be of type `object` and an instance of the room class", function() {
      expect(typeof Room).toEqual(typeof {});
      expect(Room instanceof classes.room).toBeTruthy();
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

    let Guest = new classes.guest('chief', 'Lakotun');

    it("the Guest should be of type `object` and an instance of the guest class", function() {
      expect(typeof Guest).toEqual(typeof {});
      expect(Guest instanceof classes.guest).toBeTruthy();
    });

    it('the guest should have properties `title` and `name` and method `cashOut`', function() {
      expect(Guest.title).toEqual('chief');
      expect(Guest.name).toEqual('Lakotun');
      expect(Guest.cashOut).toBeDefined();
    });

  });

  describe("create a booking with guests, nights and room", function() {

    let Guest = new classes.guest('chief', 'Lakotun');
    let Single = new classes.single(10);
    let Booking = new classes.booking([Guest], 3, Single);

    it("the Booking should be of type `object` and an instance of the booking class", function() {
      expect(typeof Booking).toEqual(typeof {});
      expect(Booking instanceof classes.booking).toBeTruthy();
    });

    it('the guest should have properties guests, nights and method `cashIn`', function() {
      expect(Booking.guests).toEqual([Guest]);
      expect(Booking.nights).toEqual(3);
      expect(Booking.cashIn).toBeDefined();
    });

  });

  describe("single, doubleRoom and suite classes", function() {

    describe("create a single with roomNo", function() {
       let Single = new classes.single(10);

      it("Single should be of type `object` and an instance of the room and single class", function() {
        expect(typeof Single).toEqual(typeof {});
        expect(Single instanceof classes.single).toBeTruthy();
        expect(Single instanceof classes.room).toBeTruthy();
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
      let Double = new classes.doubleRoom(9);

      it("Double should be of type `object` and an instance of the room and doubleRoom class", function() {
        expect(typeof Double).toEqual(typeof {});
        expect(Double instanceof classes.doubleRoom).toBeTruthy();
        expect(Double instanceof classes.room).toBeTruthy();
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
      let Suite = new classes.suite(8);

      it("Suite should be of type `object` and an instance of the room and doubleRoom class", function() {
        expect(typeof Suite).toEqual(typeof {});
        expect(Suite instanceof classes.suite).toBeTruthy();
        expect(Suite instanceof classes.room).toBeTruthy();
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

});
