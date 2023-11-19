import {Fragment, Component} from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

const DUMMY_USERS = [
  {id: 'u1', name: 'Max'},
  {id: 'u2', name: 'Manuel'},
  {id: 'u3', name: 'Julie'},
];

class UserFinder extends Component {
  static contextType = UsersContext; // 단일 컨텍스트에 접근할 때 사용 가능.

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.setState({filteredUsers: this.context.users});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== (this.state.searchTerm ?? '')) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm ?? '')
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value
    })
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers}/>
        </ErrorBoundary>
      </Fragment>
    )
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');
//
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
//
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
//
//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler}/>
//       </div>
//       <Users users={filteredUsers}/>
//     </Fragment>
//   );
// };

export default UserFinder;