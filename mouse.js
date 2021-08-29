class Mouse {
    name;
    weight;
    speed;
    status = false;
    say;


    constructor(name, weight, speed, status, say) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
        this.say = say;
    }


    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get weight() {
        return this.weight;
    }

    set weight(value) {
        this.weight = value;
    }

    get speed() {
        return this.speed;
    }

    set speed(value) {
        this.speed = value;
    }

    get status() {
        return this.status;
    }

    set status(value) {
        this.status = value;
    }

    get say() {
        return this.say;
    }

    set say(value) {
        this.say = value;
    }
}