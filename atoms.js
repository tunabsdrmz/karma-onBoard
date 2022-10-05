import { atom } from 'recoil';

export const nameInput = atom({
    key: 'name',
    default: '',
  });
  export const dateInput = atom({
    key: 'date',
    default: '',
  });
  export const photoInput = atom({
    key: 'photo',
    default: null,
  });
  export const passwordInput = atom({
    key: 'password',
    default: '',
  });