/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Реализуйте вывод на страницу координат курсора мышки в реальном времени. Для этого необходимо в компонент MouseDetector добавить логику по отслеживанию мышки.*/

class MouseDetector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove(e) {
        this.setState({x: e.pageX, y: e.pageY})
    }

    render() {
        return (
            <div
                className='cords'
                onMouseMove={(e) => this.handleMouseMove(e)}
            >
                {`x: ${this.state.x}px, y: ${this.state.y}px`}
            </div>
        )
    }
}

ReactDOM.render(
    <MouseDetector />,
    document.querySelector("#app")
)