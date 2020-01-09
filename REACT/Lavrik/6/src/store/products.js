import { observable, computed, action } from "mobx";

class Products {
  @observable items = getProducts();

  @computed get productsMap() {
    let map = {};

    this.items.forEach((pr, i) => {
      map[pr.id.toString()] = i;
    });

    return map;
  }

  getById(id) {
    let index = this.productsMap[id];

    if (index === undefined) {
      return null;
    }
    return this.items[index];
  }
}

export default new Products();

// server api
function getProducts() {
  return [
    {
      id: 100,
      title: "Ipnone 200",
      price: 12000,
      rest: 10
    },
    {
      id: 101,
      title: "Samsung AAZ8",
      price: 22000,
      rest: 5
    },
    {
      id: 103,
      title: "Nokia 3310",
      price: 5000,
      rest: 2
    },
    {
      id: 105,
      title: "Huawei ZZ",
      price: 15000,
      rest: 8
    }
  ];
}
