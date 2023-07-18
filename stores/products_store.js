import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => {
    return {
      products: [
        {"id":1,"name":"Shrimp - 150 - 250","price":544,"boxCount":10},
        {"id":2,"name":"Beer - Molson Excel","price":277,"boxCount":7},
        {"id":3,"name":"Muffin Mix - Corn Harvest","price":171,"boxCount":10},
        {"id":4,"name":"Ham Black Forest","price":684,"boxCount":8},
        {"id":5,"name":"Butter Balls Salted","price":367,"boxCount":2},
        {"id":6,"name":"Lobster - Tail, 3 - 4 Oz","price":815,"boxCount":4},
        {"id":7,"name":"Chocolate - Pistoles, White","price":291,"boxCount":7},
        {"id":8,"name":"Bandage - Flexible Neon","price":669,"boxCount":7},
        {"id":9,"name":"Sprite, Diet - 355ml","price":69,"boxCount":2},
        {"id":10,"name":"Sauce - Alfredo","price":259,"boxCount":8}
      ]
    }
  }
});