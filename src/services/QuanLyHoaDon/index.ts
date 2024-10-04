import axios from "@/utils/axios";
import { ip3 } from "@/utils/ip";

export async function xuatHoaDon(thang: number, nam: number) {
  return axios.get(`${ip3}/hoa-don/thang/${thang}/nam/${nam}/export`, {
    responseType: "arraybuffer",
  });
}
