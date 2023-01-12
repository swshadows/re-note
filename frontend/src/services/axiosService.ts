import axios from "axios";
const baseUrl = "http://localhost:3001";

export default {
  async getAll() {
    const res = await axios.get(`${baseUrl}/`);
    if (res.status === 200) {
      const { notes } = res.data;
      if (notes.length) {
        return notes;
      } else {
        return false;
      }
    }
  },
  // async get() {},
  async add(title: string, body: string) {
    const res = await axios.post(`${baseUrl}/add`, { title, body });
    if (res.status === 200) {
      return true;
    }
  },
  // edit() {},
  async delete(id: string) {
    const res = await axios.delete(`${baseUrl}/${id}`);
    if (res.status === 200) {
      return true;
    }
  },
};
