import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      increase: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  classLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase } = this.state;
    const { like } = this.state;
    let className = "list-group-item d-flex justify-content-between";
    if (increase) {
      className += " increase";
    }

    let onLike = "list-group-item-label";
    if (like) {
      className += " like";
    }

    return (
      <li className={className}>
        <span className={onLike} onClick={this.classLike}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
