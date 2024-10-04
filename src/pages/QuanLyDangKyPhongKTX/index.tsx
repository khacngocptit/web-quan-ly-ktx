import { useModel } from "@@/plugin-model/useModel";
import { IColumn } from "@/components/Table/typing";
import TableBase from "@/components/Table";

const QuanLyDangKyPhongKTXPage = () => {
  const {} = useModel("quanlydangkyphongktx");
  const columns: IColumn<ChucVu.IRecord>[] = [
    {
      title: "Mã",
      dataIndex: "ma",
      width: 80,
      filterType: "select",
      filterData: ["M01", "M02", "M03"],
      sortable: true,
    },
    {
      title: "Tên chức vụ",
      dataIndex: "ten",
      width: 250,
      filterType: "string",
      sortable: true,
    },
  ];
  return (
    <>
      <TableBase
        title={"Quản lý đăng ký phòng KTX"}
        modelName={"quanlydangkyphongktx"}
        columns={columns}
      />
    </>
  );
};
export default QuanLyDangKyPhongKTXPage;
