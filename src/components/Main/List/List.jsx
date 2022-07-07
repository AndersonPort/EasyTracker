import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';


const List = () => {
  const classes = useStyles();

  const transactions = [
    { id: 1, type:"Income", category: 'Salary', amount: 5000, date: "Mon Jul 4" },
    { id: 1, type:"Expense", category: 'Food', amount: 900, date: "Mon Jul 4" },
    { id: 1, type:"Income", category: 'Business', amount: 4500, date: "Fri Jul 15" },
    { id: 1, type:"Expense", category: 'Bills', amount: 4000, date: "Fri Jul 15" }
  ];

  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick="">
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
  )
}

export default List