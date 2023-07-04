const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id=Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findById(id,cb){
    getProductsFromFile(products=>{  //this fn takes the single argument which is call back fn 
      const product=products.find(p=>p.id===id) //if database ma vayeko id(p.id) and userly req gareko id equal xa vane equal vayeko product return gar.  
      cb(product) //yo fn ko defn  yeta xaina  program ko kunai thau ma define va xa but call yrta vayera argument send gaardai xa.
        // yo callback jata define hunxa teta yo callback ly data pathaunaxa in the form of arguments.
    })
  }
};


