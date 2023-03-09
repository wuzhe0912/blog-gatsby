db.rooms.insertMany([
  {
    name: 'Room 1',
    capacity: 10,
    location: 'Floor 1',
    equipment: ['TV', 'Projector', 'Whiteboard'],
    booked: false,
  },
  {
    name: 'Room 2',
    capacity: 20,
    location: 'Floor 2',
    equipment: ['TV', 'Projector', 'Whiteboard'],
    booked: false,
  },
]);

// 更新單筆
db.rooms.updateOne(
  {
    _id: ObjectId('6408ac6937adb517d76ff865'),
  },
  {
    $set: {
      name: '升級套房',
    },
  }
);

// 更新多筆資料
db.rooms.updateMany(
  {
    booked: false,
  },
  {
    $set: {
      booked: true,
    },
  }
);
