//With provide key
export default defineNuxtPlugin((nuxtApp) => {
  let oddNumber = [];
  return {
    provide: {
      odd: (maxNumber) => {
        oddNumber = [];
        for (let i = 0; i <= maxNumber; i++) {
          if (i % 2 !== 0) {
            oddNumber.push(i);
          }
        }
        return oddNumber;
      },
    },
  };
});
