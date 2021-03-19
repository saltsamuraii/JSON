let stocksData = `{
  "displayedName": {
      "displayedName": {
          "value": [
              "Профиль маячковый ПВХ 10 мм L3м"
          ],
          "description": "Полное наименование товара для клиента"
          }
      },
  "stock": {
      "stocks": {
              "34": {
              "2": "35",
              "3": "42",
              "4": "58",
              "5": "57",
              "6": "112",
              "20": "51",
              "22": "78",
              "26": "34",
              "32": "22",
              "35": "358",
              "40": "28",
              "43": "68",
              "45": "58",
              "49": "31",
              "51": "29",
              "56": "42",
              "62": "26",
              "64": "0",
              "65": "57",
              "86": "15",
              "114": "41",
              "117": "46",
              "143": "46",
              "162": "4",
              "171": "0",
              "176": "12"
          }
      }
  }
}`;

//Получил имя товара
let stockData = JSON.parse(stocksData);
let nameObj = stockData.displayedName.displayedName.value[0];
console.log(nameObj);

//Получил массив магазинов с товарым больше 0.
let state = stockData.stock.stocks["34"];

for (let key in state) {
    if (state[key] > 0) {
        console.log(key + " = " + state[key]);
    }
}
