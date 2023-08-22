const contas = require("./contas");

test("Soma 2+5 esperado 7 como resultado", () => {
  expect(contas.soma(2, 5)).toBe(7);
});

test("Subtração 10-5 esperado 5 como resultado", () => {
  expect(contas.subtracao(10, 5)).toBe(5);
});

test("Multiplicação 10*5 esperado 50 como resultado", () => {
  expect(contas.multiplicacao(10, 5)).toBe(50);
});

test("Divisão 10/5 esperado 2 como resultado", () => {
  expect(contas.divisao(10, 5)).toBe(2);
}); 
