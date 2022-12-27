import "./Card.css";

// TODO: video 41: A closer look at jsx 0:24
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
