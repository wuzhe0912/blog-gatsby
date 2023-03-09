# Day 3 - MongoDB basic operations - add, find

<!-- 1. create database -->

```shell
use school
```

<!-- 2. create collection -->

```shell
db.createCollection("students")
```

<!-- 3. insert document to students collection -->

```shell
db.students.insert({
  "studentName": "Riley Parker",
  "group": "A",
  "score": 83,
  "isPaid": false
})
```

<!-- 4. insert multiple documents to students collection -->

```shell
db.students.insertMany([
  {
    "studentName": "Brennan Miles",
    "group": "C",
    "score": 72,
    "isPaid": false
  },
  {
    "studentName": "Mia Diaz",
    "group": "B",
    "score": 98,
    "isPaid": true
  },
  {
    "studentName": "Caroline morris",
    "group": "B",
    "score": 55,
    "isPaid": false
  },
  {
    "studentName": "Beverly Stewart",
    "group": "B",
    "score": 60,
    "isPaid": false
  }
])
```

<!-- 5. find students collection all data -->

```shell
db.students.find()
```

<!-- 6. find students collection match group = "B" -->

```shell
db.students.find({
  "group": "B"
})
```

<!-- 7. find students collection score > 60 -->

```shell
db.students.find({
  "score": {
    "$gt": 60
  }
})
```

<!-- 8. find students collection score < 60 || group = "B" -->

```shell
db.students.find({
  "$or": [
    {
      "score": {
        "$lt": 60
      }
    },
    {
      "group": "B"
    }
  ]
})
```
