import { connect } from 'react-redux'
import App from '../components/App'
import { fetchTodoListIfNeeded } from '../actions/todoList'

const mapStateToProps = (state) => {
  return {
    view: state.todoApp.view,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodoListIfNeeded: (user) => {
      dispatch(fetchTodoListIfNeeded(user))
        .then(() => undefined)
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
