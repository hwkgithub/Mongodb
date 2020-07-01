db.getCollection("numbers").find({})

for (var i = 1; i <= 20000; i++) {
    db.numbers.insert({
        num: i
    });
}

db.numbers.find({num:500})