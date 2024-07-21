import { getStats } from "./getStats";

const usersMock = [
  {
    id: "1",
    age: 25,
    name: "Alice",
    salary: 60000,
    role: "programmer",
    seniority: "junior",
  },
  {
    id: "2",
    age: 30,
    name: "Bob",
    salary: 80000,
    role: "tester",
    seniority: "regular",
  },
  {
    id: "3",
    age: 35,
    name: "Charlie",
    salary: 120000,
    role: "designer",
    seniority: "senior",
  },
  {
    id: "4",
    age: 28,
    name: "David",
    salary: 70000,
    role: "programmer",
    seniority: "regular",
  },
  {
    id: "5",
    age: 40,
    name: "Eva",
    salary: 90000,
    role: "tester",
    seniority: "senior",
  },
  {
    id: "6",
    age: 22,
    name: "Frank",
    salary: 55000,
    role: "designer",
    seniority: "junior",
  },
  {
    id: "7",
    age: 27,
    name: "Grace",
    salary: 75000,
    role: "programmer",
    seniority: "regular",
  },
  {
    id: "8",
    age: 32,
    name: "Hank",
    salary: 95000,
    role: "tester",
    seniority: "senior",
  },
  {
    id: "9",
    age: 29,
    name: "Ivy",
    salary: 68000,
    role: "designer",
    seniority: "regular",
  },
  {
    id: "10",
    age: 26,
    name: "Jack",
    salary: 62000,
    role: "programmer",
    seniority: "junior",
  },
  {
    id: "11",
    age: 31,
    name: "Karen",
    salary: 87000,
    role: "tester",
    seniority: "regular",
  },
  {
    id: "12",
    age: 38,
    name: "Leo",
    salary: 115000,
    role: "designer",
    seniority: "senior",
  },
  {
    id: "13",
    age: 24,
    name: "Mia",
    salary: 59000,
    role: "programmer",
    seniority: "junior",
  },
  {
    id: "14",
    age: 33,
    name: "Nina",
    salary: 92000,
    role: "tester",
    seniority: "senior",
  },
  {
    id: "15",
    age: 29,
    name: "Oscar",
    salary: 76000,
    role: "designer",
    seniority: "regular",
  },
];

test("get workers stats", () => {
  const result = getStats(usersMock);

  expect(result).toEqual({
    programmers: 65200,
    testers: 88800,
    designers: 86800,
  });

  // expect({ name: "Simon" }).toEqual({ name: "Simon" });
});

// {
//   programmer: 65200,  326000  5
//   tester: 88875,   444000  5
//   designer: 84600   434000  5
// }
