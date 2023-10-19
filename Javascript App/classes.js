export default function classExamples() {
    function foodES5(name, type, category, expires) {
        this.name = name;
        this.type = type;
        this.category = category;
        this.expires = expires;
    }

    foodES5.prototype.expirationDate = function () {
        console.log("Expires", this.expires);
        return `${this.name} and I expire at ${this.expires}.`;
    }

    function drinkES5(temperature) {
        this.temperature = temperature;
    }

    drinkES5.prototype = Object.create(foodES5.prototype);

    class food {
        constructor(name, type, category, expires) {
            this.name = name;
            this.type = type;
            this.category = category;
            this.expires = expires;
        }

        static message() {
            console.log("I love drinks and food!");
        }

        expirationDate() {
            console.log("Expires", this.expires);
            return `${this.name} and I expire at ${this.expires}.`;
        }
    }

    class fish extends food {
        constructor(name, type, category, expires, ability) {
            super(name, type, category, expires);
            this.ability = ability;
        }
    }

    return {
        foodES5,
        drinkES5,
        food,
        fish
    };
}
