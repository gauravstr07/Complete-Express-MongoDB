const dbConnect = require('./mongodb');

const main = async () => {
  console.log("Main func called");

  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
}; 

main();
