class ATM {
  static #saldo;

  constructor(saldoAwal){
    ATM.#saldo=saldoAwal;
  }

  // Static method to view the balance
  static lihatSaldo(){
    return ATM.#saldo;
  }

  static setorUang(jumlah){
    if (jumlah>0) {
        ATM.#saldo+=jumlah;
    } else {
        throw new Error("Jumlah harus lebih besar dari 0");
    }
  }

  static tarikUang(jumlah){
    if (jumlah > 0 && jumlah <= ATM.#saldo) {
      ATM.#saldo -= jumlah;
    } else if (jumlah > ATM.#saldo) {
      throw new Error("Saldo tidak mencukupi");
    } else {
      throw new Error("Jumlah harus lebih besar dari 0");
    }
  }
}

module.exports = { ATM };