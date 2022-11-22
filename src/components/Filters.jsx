import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    state: { sort },
    dispatch,
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Sort by Price</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            dispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            dispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>

      <Button
        variant="light"
        onClick={() =>
          dispatch({
            type: "SORT_BY_PRICE",
            payload: "",
          })
        }
      >
        Clear Filter
      </Button>
    </div>
  );
};

export default Filters;
