class CircusEmployee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    set name(val) {
        this._name = (val.length > 2) ? val : "unknown";
    }
    get name() {
        return this._name;
    }
    set id(val) {
        this._id = (val.length == 9) ? val : "unknown";
    }
    get id() {
        return this._id;
    }
    toString() {
        return `name: ${this.name}, id: ${this.id}`;
    }
}
class Clown extends CircusEmployee {
    constructor(id, name, cntLol) {
        super(id, name);
        this._cntLol = cntLol;
    }
    ContinueToNextShow() { return this._cntLol >= 1; }
    CalculateSalary() { return this._cntLol * 100; }
}
class LionTamar extends CircusEmployee {
    constructor(id, name, cntLion) {
        super(id, name);
        this._cntLion = cntLion;
    }
    ContinueToNextShow() {
        if (this._cntLion > 3)
            return true;
        else
            return false;
    }
    CalculateSalary() {
        return this._cntLion * 180;
    }
}
class RopeWalker extends CircusEmployee {
    constructor(id, name, cntShoes, cntClap) {
        super(id, name);
        this._cntShoes = cntShoes;
        this._cntClap = cntClap;
    }
    ContinueToNextShow() {
        if (this._cntClap >= 1)
            return true;
        else
            return false;
    }
    CalculateSalary() {
        return this._cntShoes * 150;
    }
}
class FireSpitter extends CircusEmployee {
    constructor(id, name, fireMeter, cntFire) {
        super(id, name);
        this._fireMeter = fireMeter;
        this._cntFire = cntFire;
    }
    ContinueToNextShow() {
        if (this._fireMeter > 1)
            return true;
        else
            return false;
    }
    CalculateSalary() {
        return this._fireMeter * this._cntFire * 30;
    }
}
class Circus {
    constructor() {
        this.arr = new Array();
    }
    AddEmployee(obj) {
        if (this.arr.length < 30) {
            this.arr.push(obj);
            return true;
        }
        else {
            return false;
        }
    }
    CalculateTotalSalary() {
        var total = 0;
        this.arr.forEach(employee => {
            total += employee.CalculateSalary();
        });
        return total;
    }
    ClownSalaryPart() {
        let percent = 0;
        for (let employee of this.arr) {
            if (employee instanceof Clown)
                percent += employee.CalculateSalary();
        }
        let totalSalary = this.CalculateTotalSalary();
        return percent / totalSalary;
    }
    NoOfEmployeeForNextShow() {
        let employeesCnt = 0;
        for (let employee of this.arr) {
            employeesCnt += employee.ContinueToNextShow() ? 1 : 0;
        }
        return;
    }
}
let clown = new Clown("123", 'dani', 2);
let lionTamar = new LionTamar("1234", "tamar", 3);
let ropeWalker = new RopeWalker("12345", "paul", 2, 3);
let fireSpitter = new FireSpitter("123456", "speedy", 3, 2);
let obj = new Circus();
obj.AddEmployee(clown);
obj.AddEmployee(lionTamar);
obj.AddEmployee(ropeWalker);
obj.AddEmployee(fireSpitter);
console.log(obj.CalculateTotalSalary());
// output: 1220
console.log(obj.ClownSalaryPart());
// output: 
console.log(obj.NoOfEmployeeForNextShow());
//output: 
//# sourceMappingURL=app.js.map