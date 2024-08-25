{
  // Getter & Setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    /* private _balance: number; // "_" is the naming convension of private property */
    protected _balance: number; // "_" is the naming convension of private property

    constructor(id: number, name: string, balance: number) {
      (this.id = id), (this.name = name), (this._balance = balance);
    }

    // Safety function that helps not to modify balance from outside
    /*  
     public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    } 
    */

    // setter - set value by setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    /*  
    public getBalance() {
      return this._balance;
    } 
    */
    // getter - get value by getter
    get balance() {
      return this._balance;
    }
  }

  const poorAccount = new BankAccount(1, "Azzizul", 500);
  poorAccount.deposit = 100; // Call function as property
  const myBalace = poorAccount.balance; // Call function as property
  console.log(myBalace);

  ////////////////////////
}
