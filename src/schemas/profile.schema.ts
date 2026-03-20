import * as z from "zod";
import { UserSchema } from "./user.schema";

export const profileSchema = UserSchema.omit({
  is_staff: true,
});

export type TProfile = z.infer<typeof profileSchema>;
