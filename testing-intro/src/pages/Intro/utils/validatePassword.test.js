import { validatePassword } from "./validatePassword";

describe("password validation", () => {
  test("special characters", () => {
    const msg = validatePassword("test");
    expect(msg).toBe(
      "Hasło powinno zawierać jeden ze znaków specjalnych ! @ # $ %"
    );
  });

  test("short password", () => {
    const msg = validatePassword("te");
    expect(msg).toBe("Hasło jest za krótkie min 3 znaki");
  });

  test("long password", () => {
    const msg = validatePassword("testtesttest");
    expect(msg).toBe("Hasło jest za długie max 8 znaków");
  });

  test("correct password", () => {
    const msg = validatePassword("test@");
    expect(msg).toBe("Hasło jest OK");
  });
});
