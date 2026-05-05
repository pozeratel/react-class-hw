import { StyledUl } from "./TaskList.styled";
import { Component } from "react";
class Tasklist extends Component {
  state = {
    tasks: [
      { id: 1, text: "Купити продукти" },
      { id: 2, text: "Прибрати в кімнаті" },
      { id: 3, text: "Зробити домашнє завдання" },
      { id: 4, text: "Прочитати 10 сторінок книги" },
      { id: 5, text: "Відповісти на електронні листи" },
      { id: 6, text: "Запланувати день" },
      { id: 7, text: "Зробити зарядку" },
      { id: 8, text: "Полити рослини" },
      { id: 9, text: "Винести сміття" },
      { id: 10, text: "Оновити список справ" },
    ],
  };

  deleteHandle = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(({ id }) => id !== taskId),
    });
  };
  render() {
    return (
      <>
        <StyledUl>
          {this.state.tasks.map(({ id, text }) => {
            return (
              <li key={id}>
                <p className="id">{id}</p>
                <p className="text"> {text}</p>
                <button onClick={() => this.deleteHandle(id)} type="button">
                  Видалити
                </button>
              </li>
            );
          })}
        </StyledUl>
      </>
    );
  }
}

export default Tasklist;
