abstract class CircusEmployee{
    private _id:string;
    private _name:string;

    public set name(val:string){
        this._name = (val.length>2) ? val: "unknown"
    }
    public get name():string{
        return this._name
    }
    public set id(val : string){
        this._id = (val.length==9)?val: "unknown"
    }
    public get id():string{
        return this._id;
    }
    public constructor(id?:string, name?: string){
        this.id = id;
        this.name = name;
    }
    public abstract CalculateSalary():number;
    public abstract ContinueToNextShow():boolean;

    public toString():string{
        return `name: ${this.name}, id: ${this.id}`;
    }
}
class Clown extends CircusEmployee{
    private _cntLol: number;
    public constructor(id?:string, name?:string, cntLol?:number){
        super(id, name);
        this._cntLol = cntLol
    }
    public  ContinueToNextShow():boolean{return this._cntLol>=1;}
    public  CalculateSalary():number{return this._cntLol*100;}
}
class LionTamar extends CircusEmployee{
    private _cntLion: number;
    public constructor(id?:string, name?:string, cntLion?:number){
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
    public constructor(id?:string, name?:string, cntShoes?:number, cntClap?:number){
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
    public constructor(id?:string, name?:string, fireMeter?:number, cntFire?:number){
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
    private _counterOfEmployees:number;

    

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
    public ClownSalaryPart():number{
        let percent:number=0;
        for (let employee of this.arr) {
            if(employee instanceof Clown)
                percent += employee.CalculateSalary();
        }

        let totalSalary:number = this.CalculateTotalSalary();
        return percent/totalSalary;
    }
    public NoOfEmployeeForNextShow():number{
        let employeesCnt:number=0;
        for (let employee of this.arr) {
            employeesCnt+= employee.ContinueToNextShow()?1:0;
        }
        return ;
    }
}

let clown:Clown = new Clown("123", 'dani', 2);
let lionTamar: LionTamar = new LionTamar("1234", "tamar", 3);
let ropeWalker: RopeWalker = new RopeWalker("12345", "paul", 2, 3);
let fireSpitter: FireSpitter = new FireSpitter("123456", "speedy", 3, 2);
let obj:Circus = new Circus();
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
