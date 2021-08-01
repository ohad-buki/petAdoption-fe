let DB = {
  pets: {
    PP0: {
      name: "dogo",
      img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg",
      id: `PP0`,
    },
  },

  users: {
    AA0: {
      name: "Ohad Buckwold",
      age: 26,
      email: "ohadbuki@gmail.com",
      password: "01239",
      profilePic:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg",
      description: "i like big butts and i can not lie",
      id: `AA0`,
    },
  },
};

let userId = 0;
let petsId = 0;

export async function getData(tableName, id) {
  if (id) {
    return DB[tableName][id];
  } else {
    return DB[tableName];
  }
}

export async function addData(tableName, obj) {
  let newId;
  if (tableName === "users") {
    userId++;
    newId = userId;
  }
  if (tableName === "pets") {
    petsId++;
    newId = petsId;
  }
  obj.id = newId;
  DB[tableName][`${tableName === "users" ? "AA" : "PP"}${newId}`] = obj;
}

export async function updateData(tableName, id, obj) {
  const objKeys = Object.keys(obj);
  if (DB[tableName][id]) {
    objKeys.forEach((key) => {
      DB[tableName][id][key] = obj[key];
    });
  } else {
    console.log("lox");
  }
}
