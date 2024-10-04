import { Col, Row } from "antd";
import "./components/style.less";
import ThongKeHoaDonPage from "@/pages/TrangChu/ThongKeHoaDon";
import ThongKeSuDungDichVuPage from "@/pages/TrangChu/ThongKeSuDungDichVu";
import ThongKeVaoRaKTXPage from "@/pages/TrangChu/VaoRaKTX";

const TrangChu = () => {
  return (
    // <Card bodyStyle={{ height: '100%' }}>
    // 	<div className='home-welcome'>
    // 		<h1 className='title'>QUẢN LÝ KÝ TÚC XÁ</h1>
    // 		<h2 className='sub-title'>HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</h2>
    // 	</div>
    // </Card>
    <>
     <Row gutter={[12,12]}>
       <Col span={24}>
         <ThongKeHoaDonPage />

       </Col>
       <Col span={24}>
         <ThongKeSuDungDichVuPage />
       </Col> <Col span={24}>
         <ThongKeVaoRaKTXPage />
       </Col>
     </Row>
    </>
  );
};

export default TrangChu;
