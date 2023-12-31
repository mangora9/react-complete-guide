import React from 'react';
import Card from "../UI/Card/Card";
import classes from './UserList.module.css';

const UserList = (props) => {
  const className = `${classes.users} ${props.className}`;
  return (
    <Card  className={className}>
      <ul>
        {props?.users?.map((user) => (
          <li key={user.id}>{user.name} ({user.age} years old)</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;