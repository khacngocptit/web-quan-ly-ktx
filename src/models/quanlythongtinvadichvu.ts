import useInitModel from '@/hooks/useInitModel';
import {HoSoSinhVien} from "@/services/QuanLyHoSoSinhVien/typing";
import { QuanLyThongTinVaDichVu } from '@/services/QuanLyThongTinVaDichVu/typing';

export default () => {
  const objInit = useInitModel<QuanLyThongTinVaDichVu.IRecord>('dich-vu-ktx');

  return {
    ...objInit,
  };
};
