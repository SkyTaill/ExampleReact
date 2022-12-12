/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
По нажатию на кнопку выведите с помощью alert сообщение: «Письмо отправлено на адрес: {%email%}», где вместо {%email%} должно быть выведено содержимое инпута.*/

class App extends React.Component {
    constructor(props) {
        super(props)
        this.emailInput = React.createRef()
    }

    handleClick = () => {
        alert('Письмо отправлено на адрес: ' + this.emailInput.current.value)
    }

    render() {
        return (
            <React.Fragment>
                <label htmlFor='email'>Введите email:</label>
                <input type='email' id='email' ref={this.emailInput}></input>
                <button onClick={this.handleClick}>Отправить</button>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#app"))