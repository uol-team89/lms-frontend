export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ ...props }) => {
  return (
    <button
      className="text-black border-black border-2 p-1"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
