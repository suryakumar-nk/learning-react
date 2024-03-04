import PropTypes from "prop-types";

export const ArrayProps = (props) => {
  
  const { items } = props
  return (
    <div>
        <h2>Items in list</h2>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

ArrayProps.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};
