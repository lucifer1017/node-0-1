const { MongoClient } = require('mongodb');

const URI = "mongodb+srv://lucifergrey1017:zraFWYLpGyquYfP3@cluster0.xov16.mongodb.net/";

const client = new MongoClient(URI);

const dbName = 'HelloWorld';

const main = async () => {
    await client.connect();
    console.log("connected successfully to the server");
    const db = client.db(dbName);
    const collection = db.collection('User');
    const data = {
        name: "goyo",
        age: 32,
        phone: 12345
    }
    // const inserted = await collection.insertOne(data);
    const result = await collection.find({ name: "yoyo" }).toArray();
    console.log(result);
    // const result = await collection.find({}).toArray();
    // console.log(result);
    return 'done';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())

