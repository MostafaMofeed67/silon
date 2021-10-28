import { Link } from "react-router-dom";

const ButtonBuy = (props) => {
  const classes = `${props.className} btn`;

  return (
    <Link to={props.to || "/home"} onClick={props.onClick} className={classes}>
      {props.children}
    </Link>
  );
};

export default ButtonBuy;
