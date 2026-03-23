import * as z from "zod";

export const UserSchema = z.strictObject({
  id: z.uuid(),
  email: z
    .email({
      error: (iss) =>
        iss.input === ""
          ? "E-mail пользователя обязательно"
          : "Некорректный формат электронной почты",
    })
    .trim(),
  username: z.string("Имя пользователя должно быть строкой").optional(),
  image_before: z.string().optional(),
  image_after: z.string().optional(),
  is_active: z.boolean(),
  is_staff: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  workout_minutes: z.int(),
  workouts_count: z.int(),
  weight_lifted: z.int(),
});


