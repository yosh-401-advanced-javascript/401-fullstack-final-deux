
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');




// const toy1 = {
//     _id: uuid(),
//     name: 'Spunky',
//     favToy: 'Snake',
//   };
// const toy2 ={
//   _id: uuid(),
//   name: 'Vinicio',
//   favToy: 'Pokemon',
// };
// const toy3 = {
//   _id: uuid(),
//   name: 'Kali',
//   favToy: 'Dumbells',
// };
// const toy4 ={
//   _id: uuid(),
//   name: 'Raven',
//   favToy: 'Python',
// };

let toys = {
_id: uuid(),
name: '',
favToy: '',
};

router.get('/toys', (request, response) => {
  response.send(toys);
});

router.post('/toys', (request, response) => {
// const newToyObject = {_id: uuid, name: request.body.name, favToy: request.body.favToy};
response.json(toys);
});

// router.delete('/toys/:id', (request, response) => {
//  const deleteId = request.body._id;
//  Object.keys(toys).forEach((toy, idx) => {
//   if (toy._id === deleteId) {
//    console.log(toy);
//    toys.splice(idx , 1)
//   }
//  });
//  response.send(toys)
// });
module.exports = router;
