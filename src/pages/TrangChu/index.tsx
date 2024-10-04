import { Card } from 'antd';
import './components/style.less';
import { unitName } from '@/services/base/constant';

const TrangChu = () => {
	return (
		<Card bodyStyle={{ height: '100%' }}>
			<div className='home-welcome'>
				<h1 className='title'>QUẢN LÝ KÝ TÚC XÁ</h1>
				<h2 className='sub-title'>HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</h2>
			</div>
		</Card>
	);
};

export default TrangChu;
