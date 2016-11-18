class pizza{
  //type constructor below
  constructor (s,m,v){
    this.size = s;
    this.meatToppings = m;
    this.veggieToppings = v;
  }


  //type instance functions below
  sizeCost(){
    if(this.size == "S"){
      return 7.99;
    }
    if(this.size == "M"){
      return 9.99;
    }
    if(this.size == "L"){
      return 12.99;
    }
    if(this.size == "XL"){
      return 15.99;
    }
  }

  toppingsCost(top){
    if(top == meat){
      return this.meatToppings.length*0.99;
    }

    if(top == veggie){
      return this.veggieToppings.length*0.50;
    }
  }

  price(){
    return sizeCost + toppingsCost;
  }

  //type class functions below
  static promotionalDeal(pizza,percent){
    var percent = percent/100;
    var discount = pizza.price()*percent;
    return pizza.price() - discount;
  }
  addTopping(typetop,newtop){
    if(toptype == meat){
      meatToppings.push(newtop);
    }
    if(toptype == veggie){
      veggieToppings.push(newtop);
    }
  }

  removeTopping(toptype,newtop){
    if(toptype == meat){
      var front = meatToppings.splice(0,indexOf(newtop));
      var back = meatToppings.splice(indexOf(newtop)+1,meatToppings.length);
      return front.join(back);
    }
    if(toptype == veggie){
      var front = veggieToppings.splice(0,indexOf(newtop));
      var back = veggieToppings.splice(indexOf(newtop)+1,veggieToppings.length);
      return front.join(back);
    }
  }

}
