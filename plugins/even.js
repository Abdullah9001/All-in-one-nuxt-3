//Without provide key
export default defineNuxtPlugin((nuxtApp) => {
  let evenNumber = [];
  nuxtApp.even = (maxNumber) => {
    evenNumber = [];
    for (let i = 0; i <= maxNumber; i++) {
      if (i % 2 === 0) {
        evenNumber.push(i);
      }
    }
    return evenNumber;
  };
});
