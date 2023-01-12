import axios from "axios";
const baseUrl = "http://localhost:3001";

export default {
  async getAll() {
    try {
      const res = await axios.get(`${baseUrl}/`);
      if (res.status === 200) {
        const { notes } = res.data;
        if (notes.length) {
          return notes;
        } else {
          return false;
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
  async get(id: string) {
    try {
      const res = await axios.get(`${baseUrl}/${id}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      console.log(err);
    }
  },
  async add(title: string, body: string) {
    try {
      const res = await axios.post(`${baseUrl}/add`, { title, body });
      if (res.status === 200) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  },
  async update(id: string, title: string, body: string) {
    try {
      const res = await axios.put(`${baseUrl}/edit/${id}`, { id, title, body });
      if (res.status === 200) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  },
  async delete(id: string) {
    try {
      const res = await axios.delete(`${baseUrl}/${id}`);
      if (res.status === 200) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  },
};
