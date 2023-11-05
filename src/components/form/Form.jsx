import { Component } from "react";
class Form extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  };
  

  onSubmit = (e) => {
    e.preventDefault();
    const task = {...this.state, id: 4};
    this.props.plusTask(task);
  }


  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <span>Enter the tasks: </span>
          <input 
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            autoComplete="off"
            />
        </label>
      </form>
    )
  }
}

export default Form;

