const dbConnect = require("./mongodb");

const insert = async () => {
  console.log("Data inserting");

  const db = await dbConnect();
  const result = await db.insert()([
    {
      name: "note 5",
      brand: "samsung",
      price: 1800,
      category: "Mobile",
    },
    {
        name: "note 5",
        brand: "samsung",
        price: 1800,
        category: "Mobile",
      },
  ]);
};

insert();
