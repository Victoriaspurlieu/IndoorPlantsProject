import axios from "axios";

export default {
  // Gets plants from db category (discover)
  getPlants: function (category) {
    return axios.get("/api/plants/category/" + category);
  },

  // Gets plants from db by name (search)
  getPlantsbyName: function (name) {
    return axios.get("api/plants/" + name);
  },

  // Gets plant by id
  getPlantsbyID: function (id) {
    return axios.get("api/plants/id/" + id);
  },

  //these routes are not necessary for the MVP but we will use them later:

  // Gets all plants saved to user
  getMyPlants: function (userid) {
    return axios.get("/api/myplants/" + userid);
  },
  // Gets plant for detail page
  getMyPlantDetail: function (plantid) {
    return axios.get("/api/myplant/detail/" + plantid);
  },
  //updates the watered date
  updateMyPlant: function (data) {
    return axios.post("/api/update/myplant", data)
  },
  // Deletes the saved plant with the given id
  deleteMyPlant: function (id) {
    return axios.delete("/api/delete/myplant/" + plantid);
  },
  // Saves a plant to the user
  saveMyPlant: function (plantData) {
    return axios.create("/api/save/myplant", plantData);
  }
};
