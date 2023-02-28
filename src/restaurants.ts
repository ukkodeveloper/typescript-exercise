// restaurants.add({...});
// restaurants.filterByCategory("한식");
// filterByCategory("한식");

// 음식점의 카테고리, 이름, (캠퍼스로부터의) 거리, 메뉴를 입력해서 음식점 목록에 추가할 수 있다

interface IRestaurant {
  category: string;
  name: string;
  distance: number;
  menu: string[];
}

interface IRestaurants {
  add(arg: IRestaurant): void;
  filterByCategory(arg: string): IRestaurant[];
}

class Restaurants implements IRestaurants {
  #list: IRestaurant;
  constructor() {}
  add(restaurant: IRestaurant): void {}
  filterByCategory(categoryName: string): IRestaurant[] {}
}
