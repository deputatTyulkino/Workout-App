import { useFormContext } from "react-hook-form";
import cn from "clsx";

type Props = {
  name: string;
  type: string;
  placeholder: string;
};

export const Input = (props: Props) => {
  const styles = {
    input:
      "focus:outline-1 focus:outline-solid focus:outline-accent px-5! block-12 inline-full text-white text-xl font-normal rounded-md border-none outline-none bg-light-brown placeholder:text-white!",
    error: "bg-error! outline-1 outline-error-outline outline-solid",
  };
  const { register, getFieldState } = useFormContext();
  const { invalid } = getFieldState(props.name);
  return (
    <input
      {...props}
      {...register(props.name)}
      className={cn(styles.input, { [styles.error]: invalid })}
    />
  );
};
