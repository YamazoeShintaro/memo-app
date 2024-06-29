import axios from 'axios';
import { Note } from '../components/types/note';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const getNotes = async (): Promise<Note[]> => {
  const response = await axios.get(`${API_URL}/content`);
  return response.data;
};

export const getNote = async (id: number): Promise<Note> => {
  const response = await axios.get(`${API_URL}/content/${id}`);
  return response.data;
};

export const createNote = async (note: Partial<Note>): Promise<Note> => {
  const response = await axios.post(`${API_URL}/content`, note);
  return response.data;
};

export const updateNote = async (id: number, note: Partial<Note>): Promise<Note> => {
  const response = await axios.put(`${API_URL}/content/${id}`, note);
  return response.data;
};

export const deleteNote = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/content/${id}`);
};
