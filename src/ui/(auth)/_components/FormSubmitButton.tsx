type Props = {
  children: React.ReactNode | string;
};

export const FormSubmitButton = ({ children }: Props) => {
  return (
    <button
      type="submit"
      className="bg-black text-white w-full text-base rounded-lg h-11 sm:h-12 cursor-pointer"
    >
      {children}
    </button>
  );
};
