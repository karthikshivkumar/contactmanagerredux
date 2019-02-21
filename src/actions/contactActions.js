import {
  GET_CONTACTS,
  GET_CONTACT,
  DEL_CONTACT,
  ADD_CONTACT,
  UPD_CONTACT
} from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const delContact = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DEL_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DEL_CONTACT,
      payload: id
    });
  }
};

export const addContact = contact => async dispatch => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/users/`,
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updContact = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPD_CONTACT,
    payload: res.data
  });
};
