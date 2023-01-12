import axios from "axios";
import { reqObj, reqObjNew } from "@/types/requestObject";
const baseUrl = "http://localhost:3001/";

export default {
  async getAll() {
    const res = await axios.get(baseUrl);
    if (res.status === 200) {
      const { notes } = res.data;
      if (notes) {
        const parseData: Array<reqObjNew> = [];
        notes.forEach((e: reqObj) => {
          const { title, body } = e;
          parseData.push({ title, body });
        });
        return parseData;
      }
    }
  },
  // async get() {},
  // add() {},
  // edit() {},
  // delete() {},
};
