import axios from 'axios';

const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function register(userData) {
  const { data } = await $publicHost.post(`users/signup`, userData);
  return data;
}

export async function login(userData) {
  const { data } = await $publicHost.post(`users/login`, userData);
  return data;
}

export async function getUserDetailsRequest() {
  const { data } = await $privateHost.get(`/users/current`);
  return data;
}
export async function userLogOutRequest() {
  const { data } = await $privateHost.post(`/users/logout`);
  return data;
}

export async function getContacts() {
  const { data } = await $privateHost.get(`/contacts`);
  return data;
}

export async function addContact(contactData) {
  const { data } = await $privateHost.post(`/contacts`, contactData);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await $privateHost.delete(`/contacts/${contactId}`);
  return data;
}

export const token = {
  set: (token, token_type) => {
    $privateHost.defaults.headers.common.Authorization = `${token_type} ${token}`;
  },
  unSet: () => {
    $privateHost.defaults.headers.common.Authorization = '';
  },
};
