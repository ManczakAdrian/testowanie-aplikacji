/**
 * funckja obliczenie średniej wynagrodzenia w zależności od
 * roli
 * wynik należy przedstawić za pomocą obiektu  takiego jak poniżej
 *
 */

const exampleResult1 = {
  programmer: 1000,
  tester: 1000,
  designer: 1000,
};

/**
 *
 */

const salaries = {
  programmer: [100, 2000],
  tester: [123, 123],
  designer: [413, 423423],
};

/**
 * 1. segregacja wypłat do tablic
 * 2. .reduce
 */

const exampleResult2 = {
  programmer: {
    junior: 123,
    regular: 23,
    senior: 123,
  },
  tester: {
    junior: 123,
    regular: 23,
    senior: 123,
  },
  designer: {
    junior: 123,
    regular: 23,
    senior: 123,
  },
};

export const getStats = (users) => {
  let programmers = 0;
  let testers = 0;
  let designers = 0;
  let programmersAmount = 0;
  let testersAmount = 0;
  let designersAmount = 0;

  users.forEach((user) => {
    if (user.role === "programmer") {
      programmers += user.salary;
      programmersAmount++;
    }

    if (user.role === "tester") {
      testers += user.salary;
      testersAmount++;
    }

    if (user.role === "designer") {
      designers += user.salary;
      designersAmount++;
    }
  });

  return {
    programmers: programmers / programmersAmount,
    testers: testers / testersAmount,
    designers: designers / designersAmount,
  };
};
