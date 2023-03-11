# Day 3 - MongoDB basic operations - edit, delete

## edit document

<!-- 1. select _id, and edit document group => D -->

```shell
db.students.updateOne(
    { _id: ObjectId("6409fc4c95f2b059ac23a7fe") },
    { $set: { group: "D" } }
)
```

<!-- 2. Change `isPaid` to true for multiple documents with group B -->

```shell
db.students.updateMany(
    { group: "B" },
    { $set: { isPaid: true } }
)
```

<!-- 3. Delete the document with the keyword Brennan from the studentName(use Fuzzy Search) -->

```shell
db.students.deleteMany(
  { studentName: { $regex: /Brennan/ } }
)
```

<!-- 4. Delete multiple documents where isPaid is true -->

```shell
db.students.deleteMany(
  { isPaid: true }
)
```
