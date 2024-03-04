import PropTypes from 'prop-types';

export const OneOfSample = (props) => {

  const {color} = props
  return (
    <div style={{ backgroundColor: color, color: 'white', padding: '10px'}}>
        <p>The given colour is {color}</p>
    </div>
  )
}

OneOfSample.propTypes = {
    color: PropTypes.oneOf(['green', 'red', 'blue']).isRequired
};

// validate the input type is string.
OneOfSample.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string]).isRequired
};

export const FunctionAsProps = (props) => {
    const { func } = props
    return (
        <div>
            <h2>FunctionAsProps</h2>
            <p>Click here <button onClick={func}>click</button></p>
        </div>
    );
}

FunctionAsProps.propTypes = {
    func: PropTypes.func
}