import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = (props) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-color hover:text-color-1 ${
    props.px || "px-7"
  } ${props.white ? "text-n-8" : "text-n-1"} ${props.className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={props.onClick}>
      <span className={spanClasses}>{props.children}</span>
      {ButtonSvg(props.white)}
    </button>
  );

  const renderLink = () => (
    <a href={props.href} className={classes}>
      <span className={spanClasses}>{props.children}</span>
      {ButtonSvg(props.white)}
    </a>
  );

  return props.href ? renderLink() : renderButton();
};

export default Button;
