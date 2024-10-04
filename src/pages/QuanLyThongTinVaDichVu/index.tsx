import { useModel } from "@@/plugin-model/useModel";
import { IColumn } from "@/components/Table/typing";
import TableBase from "@/components/Table";
import {HoSoSinhVien} from "@/services/QuanLyHoSoSinhVien/typing";
import moment from "moment";

const QuanLyThongTinVaDichVuPage = () => {
  const {} = useModel("quanlyhososinhvien");
  const columns: IColumn<HoSoSinhVien.IRecord>[] = [
    {
      title: "Họ và tên",
      dataIndex: "hoDem",
      width: 120,
     render:(val,rec)=>`${val} ${rec?.ten}`
    },
    {
      title: "CMT/CCCD",
      dataIndex: "cmtCccd",
      width: 120,
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaySinh",
      width: 250,
      render:(val)=>val?moment(val).format('DD/MM/YYYY'):''
    },
    {
      title: "Quê quán",
      dataIndex: "queQuan",
      width: 250,
    },
    {
      title: "Lớp",
      dataIndex: "lop",
      width: 250,
    },

  ];
  return (
    <>
      <TableBase
        title={"Quản lý thông tin và dịch vụ"}
        modelName={"quanlyhososinhvien"}
        columns={columns}
      />
    </>
  );
};
export default QuanLyThongTinVaDichVuPage;
