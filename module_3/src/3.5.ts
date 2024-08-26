{
  // Access Modifier
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number; // "_" is the naming convension of private property

    // To use this _balance property inside a child class, we need to use "protected" property rather than "private"
    protected _balance: number; // "_" is

    constructor(id: number, name: string, balance: number) {
      (this.id = id), (this.name = name), (this._balance = balance);
    }

    // Safety function that helps not let anyone to modify balance
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // this method provides the current balance
    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const poorAccount = new BankAccount(1, "Mr. Jim", 100);
  poorAccount.addDeposit(500);
  const myBalace = poorAccount.getBalance();
  console.log(myBalace);

  ////////////////////////
}
