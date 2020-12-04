abstract class CircusEmployee{
    private _id:number;
    private _name:string;

    set name(val:string){
        if(val.length >= 3)
            this._name = val
    }
    get name():string{
        return this._name
    }
    set id(val : number){
        this._id = val;
    }
    get id():number{
        return this._id;
    }
    constructor(id:number, name: string){
        this.id = id;
        this.name = name;
    }
    public abstract CalculateSalary():number;
    public abstract ContinueToNextShow():boolean;
}
class Clown extends CircusEmployee{
    private _cntLol: number;
    constructor(id:number, name:string, cntLol:number){
        super(id, name);
        this._cntLol = cntLol
    }
    public  ContinueToNextShow():boolean{
        if(this._cntLol>=1){
            return true;
        }
        else
            return false;
    }
    public  CalculateSalary():number{
        return this._cntLol*100;
    }
}
class LionTamar extends CircusEmployee{
    private _cntLion: number;
    constructor(id:number, name:string, cntLion:number){
        super(id, name);
        this._cntLion = cntLion;
        
    }
    public  ContinueToNextShow():boolean{
        if (this._cntLion>3)
            return true;
        else 
            return false
    }
    public  CalculateSalary():number{
        return this._cntLion*180;
    }
}
class RopeWalker extends CircusEmployee{
    private _cntShoes:number;
    private _cntClap: number;
    constructor(id:number, name:string, cntShoes:number, cntClap:number){
        super(id, name);
        this._cntShoes = cntShoes;
        this._cntClap= cntClap;
    }
    public  ContinueToNextShow():boolean{
        if (this._cntClap>=1)
            return true;
        else 
            return false
    }
    public  CalculateSalary():number{
        return this._cntShoes*150;
    }
}
class FireSpitter extends CircusEmployee{
    private _fireMeter : number;
    private _cntFire : number
    constructor(id:number, name:string, fireMeter:number, cntFire:number){
        super(id, name);
        this._fireMeter = fireMeter;
        this._cntFire = cntFire;
    }
    public  ContinueToNextShow():boolean{
        if (this._fireMeter>1)
            return true;
        else 
            return false
    }
    public  CalculateSalary():number{
        return this._fireMeter*this._cntFire*30;
    }
}
class Circus{
    private arr:CircusEmployee[] = new Array<CircusEmployee>();
    public AddEmployee(obj:CircusEmployee): boolean{
            if(this.arr.length < 30){
                this.arr.push(obj);
                return true;
            }
            else{
                return false;
            }
    }
    public CalculateTotalSalary():number{
        var total : number = 0;
        this.arr.forEach(employee => {
            total += employee.CalculateSalary();
        });
        return total;
    }
    public ClownSalaryPercent():void{
        // not finish
    }
    public NoOfEmployeeForNextShow():void{
        // not finish
    }
}

let clown:Clown = new Clown(123, 'dani', 2);
let lionTamar: LionTamar = new LionTamar(1234, "tamar", 3);
let ropeWalker: RopeWalker = new RopeWalker(12345, "paul", 2, 3);
let fireSpitter: FireSpitter = new FireSpitter(123456, "speedy", 3, 2);
let obj:Circus = new Circus();
obj.AddEmployee(clown);
obj.AddEmployee(lionTamar);
obj.AddEmployee(ropeWalker);
obj.AddEmployee(fireSpitter);
console.log(obj.CalculateTotalSalary());
// output: 1220
//console.log(obj.ClownSalaryPercent());
// output: 
//console.log(obj.NoOfEmployeeForNextShow());
//output: 
