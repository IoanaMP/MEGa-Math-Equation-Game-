const {MongoClient} = require('mongodb');
async function main() {
    const MongoClient = require('mongodb').MongoClient;
      const client = await MongoClient.connect('mongodb+srv://Razvan:123321@mega.wvfe4.mongodb.net/test?retryWrites=true&w=majority', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('MEGa');
    // execute find query
    const items = await db.collection('Users').find({}).toArray();
    console.log(items);
    // close connection
    client.close();
  }
  main().catch(console.error);