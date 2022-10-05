const dbConnect = require("./mongodb");

const deleteData = async() => {
    const data = await dbConnect();
    const result = await data.deleteMany({name: "note 5 pro"})
    console.log(result);
}

deleteData();

