/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Реализуйте компонент «Карточка пользователя», в который через props передаются имя, адрес электронной почты и ссылка на аватар пользователя. Карточка пользователя уже свёрстана в заготовке решения, вам необходимо только «пробросить» значения props в компонент.*/

class UserCard extends React.Component {
    render() {
        const name = this.props.name
        const email = this.props.email
        const avatar = this.props.avatar
        return (
            <div className='card'>
                <img src={avatar} width="30px" height="30px"/>
                <div className='card-data'>
                    <div className='name'>{name}</div>
                    <div className='email'>{email}</div>
                </div>
            </div>
        )
    }
}

UserCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

ReactDOM.render(
    <UserCard
        name='Василий Пупкин'
        avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
        email='vasiliy.pupkin@yandex.ru'
    />,
    document.querySelector("#app")
)