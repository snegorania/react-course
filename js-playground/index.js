const { store } = require("./store.js");
const prompt = require("prompt-sync")({ sigint: true });

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(`Changed counter value to: ${latestState.counter}`);
};

store.subscribe(counterSubscriber);

const validVal = /^-?\d([\d\.]+)?$/;
const validFunc = /^(increase|decrease|clear|exit|log|increment|decrement)$/i;
const modified = /^(?<command>increase|decrease|clear|exit|log|increment|decrement)(?<number> -?\d([\d\.]+)?)?$/i;

while (true) {
  try {
    let func = prompt(
      `Enter function increase | decrease | increment| decrement | log | clear | exit, currentCounter is ${
        store.getState().counter
      }: `
    );

    if (!modified.test(func.trim())) {
      throw new Error("not valid function try again");
    }

    const result = func.match(modified);

    func = String(result.groups.command);
    let value = String(result.groups.number);
    value = Number(value.trim());

    if (func === "exit") {
      break;
    }

    if (func === "log") {
      store.dispatch({ type: "LOG" });
      console.log('Logs:');
      store.getState().logs.forEach((el) => {
        console.log(el);
      });
    }

    if (func === 'clear') {
        store.dispatch({type: 'CLEAR'});
    }

    if (func === "increment") {
      store.dispatch({ type: "INCREMENT"});
    }

    if (func === "decrement") {
      store.dispatch({ type: "DECREMENT"});
    }

      if (func === "increase") {
        store.dispatch({ type: "INCREASE_VALUE", payload: Number(value) });
      }

      if (func === "decrease") {
        store.dispatch({ type: "DECREASE_VALUE", payload: Number(value)});
      }
  } catch (error) {
    console.error(error.message);
  }
}
