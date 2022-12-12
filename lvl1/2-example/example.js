/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Реализуйте кнопку лайк со счетчиком нажатий. Кнопка должна поддерживать передачу исходного числа лайков через props – initialLikeNumber. По нажатию на кнопку счетчик должен увеличиваться на один. Нажимать на кнопку можно сколько угодно раз.
*/
class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likeCounter: this.props.initialLikeNumber
        }
    }

    incrementLikeCounter() {
        const newValue = this.state.likeCounter + 1
        this.setState({likeCounter: newValue})
    }

    render() {
        return (
            <button onClick={() => this.incrementLikeCounter()}>
                ❤️ {this.state.likeCounter}
            </button>
        )
    }
}

LikeButton.propTypes = {
    initialLikeNumber: PropTypes.number
}

ReactDOM.render(
    <LikeButton initialLikeNumber={0} />,
    document.querySelector("#app")
)