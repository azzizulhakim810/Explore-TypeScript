{
  // Encapsulation
  class BankAccount {
    public readonly id: number;
    public name: string;
    /* private _balance: number; // "_" is the naming convension of private property */
    protected _balance: number; // "_" is the naming convension of private property

    constructor(id: number, name: string, balance: number) {
      (this.id = id), (this.name = name), (this._balance = balance);
    }

    // Safety function that helps not to modify balance from outside
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const poorAccount = new BankAccount(1, "Azzizul", 500);
  poorAccount.addDeposit(100);
  const myBalace = poorAccount.getBalance();
  console.log(myBalace);

  ////////////////////////
}
