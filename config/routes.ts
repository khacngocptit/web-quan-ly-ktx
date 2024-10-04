export default [
	{
		path: '/user',
		layout: false,
		routes: [
			{
				path: '/user/login',
				layout: false,
				name: 'login',
				component: './user/Login',
			},
			{
				path: '/user',
				redirect: '/user/login',
			},
		],
	},

	///////////////////////////////////
	// DEFAULT MENU
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: './TrangChu',
		icon: 'HomeOutlined',
	},
	{
		path: '/gioi-thieu',
		name: 'About',
		component: './TienIch/GioiThieu',
		hideInMenu: true,
	},

	// DANH MUC HE THONG
	// {
	// 	name: 'DanhMuc',
	// 	path: '/danh-muc',
	// 	icon: 'copy',
	// 	routes: [
	// 		{
	// 			name: 'ChucVu',
	// 			path: 'chuc-vu',
	// 			component: './DanhMuc/ChucVu',
	// 		},
	// 	],
	// },

	//Quan ly ho so sinh vien
	{
		name: 'QuanLyHoSoSinhVien',
		path: '/quan-ly-ho-so-sinh-vien',
		icon: 'copy',
		component: './QuanLyHoSoSinhVien'
	},

	{
		name: 'QuanLyDangKyPhongKTX',
		path: '/quan-ly-dang-ky-phong-ktx',
		icon: 'copy',
		component: './QuanLyDangKyPhongKTX'
	},

	{
		name: 'QuanLyThongTinVaDichVu',
		path: '/quan-ly-thong-tin-dich-vu',
		icon: 'copy',
		component: './QuanLyThongTinVaDichVu'
	},

	{
		name: 'QuanLyVeXeThang',
		path: '/quan-ly-ve-xe-thang',
		icon: 'copy',
		component: './QuanLyVeXeThang'
	},


	{
		path: '/notification',
		routes: [
			{
				path: './subscribe',
				exact: true,
				component: './ThongBao/Subscribe',
			},
			{
				path: './check',
				exact: true,
				component: './ThongBao/Check',
			},
			{
				path: './',
				exact: true,
				component: './ThongBao/NotifOneSignal',
			},
		],
		layout: false,
		hideInMenu: true,
	},
	{
		path: '/',
	},
	{
		path: '/403',
		component: './exception/403/403Page',
		layout: false,
	},
	{
		component: './exception/404',
	},
];
