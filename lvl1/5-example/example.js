/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Реализуйте компонент StaredRating — рейтинг из пяти звёздочек. На вход подаётся число-рейтинг (от 1 до 5), в зависимости от которого часть звёздочек остаётся пустыми, а часть – закрашивается.*/


class StaredRating extends React.Component {
    render() {
        const {rate} = this.props
        return <div className="rating">
            <span className={`star ${rate >= 1 ? 'checked' : ''}`}></span>
            <span className={`star ${rate >= 2 ? 'checked' : ''}`}></span>
            <span className={`star ${rate >= 3 ? 'checked' : ''}`}></span>
            <span className={`star ${rate >= 4 ? 'checked' : ''}`}></span>
            <span className={`star ${rate >= 5 ? 'checked' : ''}`}></span>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <React.Fragment>
            <h3 class="title">Зеленая миля</h3>
            <StaredRating rate={4} />
            <h3 class="title">Стражи Галактики</h3>
            <StaredRating rate={3} />
        </React.Fragment>
    }
}

StaredRating.propTypes = {
    rate: PropTypes.number
}

ReactDOM.render(<App />, document.querySelector("#app"))