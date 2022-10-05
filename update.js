const dbConnect = require("./mongodb");

const updateData = async () => {
  try {
    console.log("Calling updateData");
    let data = await dbConnect();
    const result = await data.update(
      { name: "note 5" },
      { $set: { name: "note 5 pro" } }
    );
    console.log(result);
  } catch (err) {
    console.log("Error in update Data " + err);
  }
};

// updateData();
