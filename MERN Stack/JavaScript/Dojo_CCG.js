class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if(target instanceof Unit){
            target.res -= this.power;
        } else{
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(this.stat == "resilience"){
                target.res += this.magnitude;
            }
            else if(this.stat == "power"){
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}
redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
hardAlgo = new Effect("Hard Algorithim", 2, "increase resilience by 3", "resilience", 3);
uPR = new Effect("Unhandled Promises Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
pairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
hardAlgo.play(redBeltNinja);
uPR.play(redBeltNinja);
pairProg.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(redBeltNinja.res,redBeltNinja.power, blackBeltNinja.res);