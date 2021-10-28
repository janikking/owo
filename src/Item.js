export class Item {
    constructor(obj){
        this._category = obj._category;
        this._isMagical = obj._isMagical;
        this._name = obj._name
        this._weight = obj.weight;
        this._cost = obj.cost;
        this._description = obj.description;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get cost() {
        return this._cost;
    }

    set cost(value) {
        this._cost = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get isMagical() {
        return this._isMagical;
    }

    set isMagical(value) {
        this._isMagical = value;
    }

    get description(){
        return this._description;
    }

    set description(x){
        this._description = x;
    }
}


export class Weapons extends Item {

    constructor(obj) {
        super(obj._name);
        this._category = "Weapon"
        this._martiality = obj._martiality;
        this._type = obj._type;
        this._reach = obj._reach;
        this._damage = obj._damage;
        this._damageType = obj._damageType;
        this._throwable = obj._throwable;
        this._properties = obj._properties;
    }

    get martiality() {
        return this._martiality;
    }

    set martiality(value) {
        this._martiality = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get reach() {
        return this._reach;
    }

    set reach(value) {
        this._reach = value;
    }

    get damage() {
        return this._damage;
    }

    set damage(value) {
        this._damage = value;
    }

    get damageType() {
        return this._damageType;
    }

    set damageType(value) {
        this._damageType = value;
    }

    get throwable() {
        return this._throwable;
    }

    set throwable(value) {
        this._throwable = value;
    }

    get properties() {
        return this._properties;
    }

    set properties(value) {
        this._properties = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }
}

export class Armour extends Item{
    constructor(obj) {
        super(obj._name, obj._weight, obj.cost, obj._isMagical);
        this._category = "Armour";
        this._type = obj._type;
        this._material = obj._material;
        this._str = 0;
        this._ac = 10;
        this._stealthDisadvantage = false;
        this.setAc();
        this._obj = obj;
    }



    setAc(){
        let dx = 0;
        let type = this._type;
        let mat = this._material;
        if(type === "Light armour"){
            dx += 1;
            if(mat === "Padded"){
                this._stealthDisadvantage = true;
            }
            if(mat === "Studded leather"){
                dx +=1;
            }


        }
        else if(type === "Medium armour"){
            dx += 2;
            if(mat === "Chain shirt"){
                dx += 1;
            }
            else if(mat === "Scale mail"){
                dx += 2;
                this._stealthDisadvantage = true;
            }
            else if( mat === "Breastplate"){
                dx += 2;
            }
            else{
                dx += 3;
                this._stealthDisadvantage = true;
            }
        }
        else if(type === "Heavy armour"){
            if(mat === "Ring mail"){
                dx += 4;
                this._stealthDisadvantage = true;
            }
            else if(mat === "Chain mail"){
                dx += 6;
                this._str = 13;
                this._stealthDisadvantage = true;
            }
            else if(mat === "Splint"){
                dx += 7;
                this._str = 15;
                this._stealthDisadvantage = true;
            }
            else{
                dx += 8;
                this._str = 15;
                this._stealthDisadvantage = true;
            }
        }
        return dx;
    }

    get obj() {
        return this._obj;
    }

    set obj(value) {
        this._obj = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get material() {
        return this._material;
    }

    set material(value) {
        this._material = value;
    }

    get str() {
        return this._str;
    }

    set str(value) {
        this._str = value;
    }

    get ac() {
        return this._ac;
    }

    set ac(value) {
        this._ac = value;
    }

    get stealthDisadvantage() {
        return this._stealthDisadvantage;
    }

    set stealthDisadvantage(value) {
        this._stealthDisadvantage = value;
    }
}



const categories = {
    "Adventuring gear" : "Tools",
    "Light armour" : "Armour",
    "Medium armour" : "Armour",
    "Heavy armour" : "Armour",
    "Melee weapon" : "Weapon",
    "Ranged weapon" : "Weapon",
    "Rod" : "Focus",
    "Wand" : "Focus",
    "Staff" : "Focus",
    "Ring" : "Accessory",
    "Amulet" : "Accessory",
    "Potion" : "Consumable",
    "Scroll" : "Consumable",
    "Coin" : "Currency"
};
