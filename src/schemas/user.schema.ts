import * as z from "zod";

export const UserSchema = z.strictObject({
  username: z.string({
    error: (iss) =>
      iss.input === ""
        ? "Имя пользователя обязательно"
        : "Имя пользователя должно быть строкой",
  }),
  email: z
    .email({
      error: (iss) =>
        iss.input === ""
          ? "E-mail пользователя обязательно"
          : "Некорректный формат электронной почты",
    })
    .transform((value) => value.trim()),
  minutes: z.int(),
  workouts: z.int(),
  kilograms: z.int(),
  password: z
    .string()
    .min(8, "Пароль должен быть не менее 8 символов")
    .max(50, "Пароль не должен превышать 50 символов")
    .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .regex(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")
    .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
    .regex(
      /[^A-Za-z0-9]/,
      "Пароль должен содержать хотя бы один специальный символ",
    )
    .refine(
      (value) => !/\s/.test(value),
      "Пароль не должен содержать пробелов",
    ),
});
