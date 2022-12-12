/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Сформировать список покупок в компоненте List. List должен иметь пропс orderList, соответствующий структуре, заданной в List.propTypes.
Элементы списка, у которых поле urgent равно true, должны быть красного цвета.
Элементы списка, у которых поле done равно true, должны быть перечёркнуты.
*/
const list = [
    {
        id: 1,
        title: 'картошка',
        urgent: true,
        done: false
    },
    {
        id: 2,
        title: 'молоко',
        urgent: true,
        done: true
    },
    {
        id: 3,
        title: 'орехи',
        urgent: false,
        done: false
    },
    {
        id: 4,
        title: 'батон',
        urgent: false,
        done: false
    },
]

class List extends React.Component {
    render() {
        return <ul>
            {this.props.orderList.map((item) => (
                <li key={item.id} style={{color: item.urgent && 'red', textDecoration: item.done && 'line-through'}}>
                    {item.title}
                </li>
            ))}
        </ul>
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Список покупок:</h2>
                <List orderList={list}/>
            </div>
        )
    }
}

List.propTypes = {
    orderList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            urgent: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired
        })
    )
}

ReactDOM.render(<App />, document.querySelector("#app"))