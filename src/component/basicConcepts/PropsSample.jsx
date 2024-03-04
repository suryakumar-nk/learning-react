import PropTypes from "prop-types";

export const PropsSample = (props) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.isMarried?'yes':'no'}</p>
    </div>
  );
}

PropsSample.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool
}

PropsSample.defaultProps = {
    name: "No name",
    age: 0,
    isMarried: false
}