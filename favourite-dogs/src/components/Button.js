import PropTypes from "prop-types";

const Button = ({ color, text, onClick, id }) => {
  return (
    <div id={id}>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "#111",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
