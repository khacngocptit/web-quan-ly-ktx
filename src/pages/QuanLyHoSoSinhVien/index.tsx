import { useModel } from "umi";
import TableBase from "@/components/Table";
import { IColumn } from "@/components/Table/typing";
import {HoSoSinhVien} from "@/services/QuanLyHoSoSinhVien/typing";
import moment from "moment/moment";

const QuanLyHoSinhVienPage = () => {
  const {getModel} = useModel("quanlyhososinhvien");

  const getData = () => {
    getModel({systemRole:'SinhVien'},undefined,undefined,undefined,undefined,'pageable')
  }

  const columns: IColumn<HoSoSinhVien.IRecord>[] = [
    {
      title: "Họ và tên",
      dataIndex: "hoDem",
      width: 180,
      render:(val,rec)=>`${val} ${rec?.ten}`
    },
    {
      title: "CMT/CCCD",
      dataIndex: "cmtCccd",
      align:'center',
      width: 120,
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaySinh",
      width: 120,
      align:'center',
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
      width: 120,
    },


  ];
  return (
    <>
      <TableBase
        getData={getData}
        title={"Quản lý hồ sơ"}
        modelName={"quanlyhososinhvien"}
        columns={columns}
      />
    </>
  );
};
export default QuanLyHoSinhVienPage;
