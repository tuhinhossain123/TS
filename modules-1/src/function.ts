{
  //
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  add(1, 2);
  console.log(add);

  //   arrow function
  const addArrow = (num1: number, num2: number): number => num1 + num2;

  const poorUser = {
    name: "tuhin",
    balance: 1,
    addBalance(balance: number) {
      return ` my number is ${this.balance + balance}`;
    },
  };

  //
}
