import axios from 'axios';

axios.defaults.baseURL = 'https://63fd31cd8ef914c555a6a7ec.mockapi.io/contact';

export const contactsGetDataFetch = async () => {
  const { data } = await axios.get(
    'https://63fd31cd8ef914c555a6a7ec.mockapi.io/contact'
  );
  return data;
};

export const contactsPostDataFetch = async ({ name, number }) => {
  const { data } = await axios.post(
    `https://63fd31cd8ef914c555a6a7ec.mockapi.io/contact`,
    { name, number }
  );
  return data;
};

export const contactsDeleteDataFetch = async id => {
  const { data } = await axios.delete(
    `https://63fd31cd8ef914c555a6a7ec.mockapi.io/contact/${id}`
  );
  return data;
};
