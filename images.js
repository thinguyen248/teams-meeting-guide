// TEAMS MEETING - DANH SACH HINH MINH HOA CHO TUNG BUOC
// Chi can them screenshot vao thu muc img/ va bo dau // truoc dong can su dung.
// So buoc bat dau tu 1. Duong dan phai bat dau bang img/, dung dau / xuoi.
// Anh co the la PNG, JPG, JPEG, WEBP; ten file khong dau va khong co khoang trang.
// Ho tro nhieu anh cho 1 buoc bang mang [ {src:...}, {src:...} ].
// Vi du:
// "schedule": {
//   1: { src: "img/schedule/01-mo-calendar.png", caption: "Bấm vào Calendar" },
//   2: [
//     { src: "img/schedule/02a-tao-moi.png", caption: "Chọn New event" },
//     { src: "img/schedule/02b-chon-gio.png", caption: "Chọn thời gian" }
//   ]
// },

window.TEAMS_STEP_IMAGES = {
  // Đăng nhập Microsoft Teams
  "login": {
    // 1. Mở ứng dụng Teams
       1: { src: "img/login/01.webp", caption: "Mở ứng dụng Teams" },
    // 2. Chọn tài khoản công ty
       2: { src: "img/login/02.webp", caption: "Chọn tài khoản công ty" },
    // 3. Xác thực đăng nhập
       3: { src: "img/login/03.webp", caption: "Xác thực đăng nhập" },
    // 4. Kiểm tra đăng nhập
       4: { src: "img/login/04.webp", caption: "Kiểm tra đăng nhập" },
  },

  // Tạo cuộc họp theo lịch
  "schedule": {
    // 1. Mở Lịch trong Teams
       1: { src: "img/schedule/01.webp", caption: "Mở Lịch trong Teams" },
    // 2. Tạo lịch họp mới
       2: { src: "img/schedule/02.webp", caption: "Tạo lịch họp mới" },
    // 3. Điền thông tin cuộc họp
       3: { src: "img/schedule/03.webp", caption: "Điền thông tin cuộc họp" },
    // 4. Bật cuộc họp trực tuyến
       4: { src: "img/schedule/04.webp", caption: "Bật cuộc họp trực tuyến" },
    // 5. Lưu và gửi lời mời
       5: { src: "img/schedule/05.webp", caption: "Lưu và gửi lời mời" },
  },

  // Tổ chức cuộc họp ngay
  "instant": {
    // 1. Mở Calendar / Lịch
       1: { src: "img/instant/01.webp", caption: "Mở Calendar / Lịch" },
    // 2. Chọn Meet now
       2: { src: "img/instant/02.webp", caption: "Chọn Meet now" },
    // 3. Đặt tên và lấy liên kết
       3: { src: "img/instant/03.webp", caption: "Đặt tên và lấy liên kết" },
    // 4. Bắt đầu cuộc họp
       4: [
		{ src: "img/instant/04.webp", caption: "Bắt đầu cuộc họp" },
       		{ src: "img/instant/05.webp", caption: "Join now" }
		],
    // 5. Mời người tham dự
       5: { src: "img/instant/06.webp", caption: "Mời người tham dự" },
  },

  // Lấy và gửi liên kết cuộc họp
  "share-link": {
    // 1. Mở cuộc họp đã tạo
       1: { src: "img/share-link/01.webp", caption: "Mở cuộc họp đã tạo" },
    // 2. Sao chép liên kết
       2: { src: "img/share-link/02.webp", caption: "Sao chép liên kết" },
    // 3. Gửi đến người tham dự
    // 3: { src: "img/share-link/03.png", caption: "Gửi đến người tham dự" },
    // 4. Dự phòng bằng ID và Passcode
       4: [
		{ src: "img/share-link/04.webp", caption: "Bấm vào biểu tượng mũi tên 2 đầu để xem chi tiết cuộc họp" },
		{ src: "img/share-link/05.webp", caption: "Dự phòng bằng ID và Passcode" }
	],
  },

  // Tham gia trên máy tính
  "join-pc": {
    // 1. Mở liên kết được mời
       1: { src: "img/join-pc/01.webp", caption: "Mở liên kết được mời" },
    // 2. Chọn cách mở cuộc họp
       2: { src: "img/join-pc/02.webp", caption: "Chọn cách mở cuộc họp" },
    // 3. Chọn danh tính tham gia
       3: { src: "img/join-pc/03.webp", caption: "Chọn danh tính tham gia" },
    // 4. Kiểm tra mic và camera
       4: [{ src: "img/join-pc/04.webp", caption: "Cho phép trình duyệt sử dụng microphones" },
	  { src: "img/join-pc/05.webp", caption: "Kiểm tra mic và camera" }],
    // 5. Bấm Join now
       5: { src: "img/join-pc/06.webp", caption: "Bấm Join now" },
  },

  // Tham gia không cần đăng nhập
  "join-guest": {
    // 1. Bấm link cuộc họp
       1: { src: "img/join-guest/01.webp", caption: "Bấm link cuộc họp" },
    // 2. Chọn cách vào không đăng nhập
       2: { src: "img/join-guest/02.webp", caption: "Chọn cách sử dụng Teams trên trình duyệt web hoặc qua app Teams" },
    // 3. Nhập tên hiển thị
       3: { src: "img/join-guest/03.webp", caption: "Nhập tên hiển thị" },
    // 4. Kiểm tra camera/micro
       4: { src: "img/join-guest/04.webp", caption: "Kiểm tra camera/micro" },
    // 5. Chờ người tổ chức duyệt (nếu có)
       5: { src: "img/join-guest/05.webp", caption: "Chờ người tổ chức duyệt (nếu có)" },
  },

  // Tham gia bằng Android
  "join-android": {
    // 1. Cài Microsoft Teams
       1: { src: "img/join-android/01.webp", caption: "Cài Microsoft Teams" },
    // 2. Mở liên kết cuộc họp
       2: { src: "img/join-android/02.webp", caption: "Mở liên kết cuộc họp" },
    // 3. Chọn cách tham gia
    // 3: { src: "img/join-android/03.png", caption: "Chọn cách tham gia" },
    // 4. Nhập tên và cho phép quyền
       4: [{ src: "img/join-android/04.webp", caption: "Nhập tên và cho phép quyền" },
	  { src: "img/join-android/05.webp", caption: "Nhập tên và cho phép quyền" },
	   { src: "img/join-android/06.webp", caption: "Nhập tên và cho phép quyền"} ],
    // 5. Chuẩn bị và tham gia
       5: { src: "img/join-android/07.webp", caption: "Chuẩn bị và tham gia" },
    // 6. Chờ duyệt nếu được yêu cầu
       6: { src: "img/join-android/08.webp", caption: "Chờ duyệt nếu được yêu cầu" },
  },

  // Tham gia bằng iPhone / iPad
  "join-ios": {
    // 1. Cài Microsoft Teams
       1: { src: "img/join-ios/01.png", caption: "Cài Microsoft Teams" },
    // 2. Nhấn vào link mời họp
       2: { src: "img/join-ios/02.webp", caption: "Nhấn vào link mời họp" },
    // 3. Chọn tham gia với tài khoản hoặc khách
    // 3: { src: "img/join-ios/03.png", caption: "Chọn tham gia với tài khoản hoặc khách" },
    // 4. Nhập tên và cấp quyền thiết bị
    // 4: { src: "img/join-ios/04.png", caption: "Nhập tên và cấp quyền thiết bị" },
    // 5. Kiểm tra trước khi vào họp
    // 5: { src: "img/join-ios/05.png", caption: "Kiểm tra trước khi vào họp" },
    // 6. Đợi được tiếp nhận
    // 6: { src: "img/join-ios/06.png", caption: "Đợi được tiếp nhận" },
  },

  // Tham gia bằng Meeting ID
  "join-id": {
    // 1. Lấy Meeting ID và Passcode
    // 1: { src: "img/join-id/01.png", caption: "Lấy Meeting ID và Passcode" },
    // 2. Mở Teams Calendar
       2: { src: "img/join-id/02.webp", caption: "Mở Teams Calendar" },
    // 3. Nhập mã cuộc họp
       3: { src: "img/join-id/03.webp", caption: "Nhập mã cuộc họp" },
    // 4. Kiểm tra và vào họp
       4: { src: "img/join-id/04.webp", caption: "Kiểm tra và vào họp" },
  },

  // Bật/tắt mic và camera
  "controls": {
    // 1. Bật hoặc tắt micro
       1: { src: "img/controls/01.webp", caption: "Bật hoặc tắt micro" },
    // 2. Bật hoặc tắt camera
       2: { src: "img/controls/02.webp", caption: "Bật hoặc tắt camera" },
    // 3. Xem danh sách người tham dự
       3: { src: "img/controls/03.webp", caption: "Xem danh sách người tham dự" },
    // 4. Rời cuộc họp
       4: { src: "img/controls/04.webp", caption: "Rời cuộc họp" },
  },

  // Chia sẻ màn hình hoặc PowerPoint
  "share-screen": {
    // 1. Chọn Share / Chia sẻ
       1: { src: "img/share-screen/01.webp", caption: "Chọn Share / Chia sẻ" },
    // 2. Chọn nội dung cần trình chiếu
       2: { src: "img/share-screen/02.webp", caption: "Chọn nội dung cần trình chiếu" },
    // 3. Chia sẻ cả âm thanh (nếu cần)
       3: { src: "img/share-screen/03.webp", caption: "Chia sẻ cả âm thanh (nếu cần)" },
    // 4. Kiểm tra nội dung đang phát
    // 4: { src: "img/share-screen/04.png", caption: "Kiểm tra nội dung đang phát" },
    // 5. Dừng trình chiếu
       5: { src: "img/share-screen/05.webp", caption: "Dừng trình chiếu" },
  },

  // Làm mờ hoặc đổi hình nền
  "background": {
    // 1. Trước khi tham gia
       1: { src: "img/background/01.webp", caption: "Trước khi tham gia" },
    // 2. Chọn hiệu ứng phù hợp
       2: { src: "img/background/02.webp", caption: "Chọn hiệu ứng phù hợp" },
    // 3. Thay đổi trong lúc họp
       3: { src: "img/background/03.webp", caption: "Thay đổi trong lúc họp" },
    // 4. Áp dụng hiệu ứng
       4: { src: "img/background/04.webp", caption: "Áp dụng hiệu ứng" },
  },

  // Duyệt người tham gia từ phòng chờ
  "lobby": {
    // 1. Mở danh sách người tham dự
       1: { src: "img/lobby/01.webp", caption: "Mở danh sách người tham dự" },
    // 2. Tìm mục chờ duyệt
       2: { src: "img/lobby/02.webp", caption: "Tìm mục chờ duyệt" },
    // 3. Cho phép hoặc từ chối
       3: { src: "img/lobby/03.webp", caption: "Cho phép hoặc từ chối" },
    // 4. Điều chỉnh chính sách phòng chờ
       4: [{ src: "img/lobby/04.webp", caption: "Điều chỉnh chính sách phòng chờ" },
	  { src: "img/lobby/05.webp", caption: "Điều chỉnh chính sách phòng chờ" },
	  { src: "img/lobby/06.webp", caption: "Điều chỉnh chính sách phòng chờ" }],
  },

  // Ghi hình cuộc họp
  "record": {
    // 1. Kiểm tra quyền ghi hình
    // 1: { src: "img/record/01.png", caption: "Kiểm tra quyền ghi hình" },
    // 2. Bắt đầu ghi
       2: { src: "img/record/02.webp", caption: "Bắt đầu ghi" },
    // 3. Thông báo đến người tham dự
    // 3: { src: "img/record/03.png", caption: "Thông báo đến người tham dự" },
    // 4. Dừng ghi và xem lại
       4: { src: "img/record/04.webp", caption: "Dừng ghi và xem lại" },
  },

  // Chia sẻ màn hình điện thoại
  "mobile-share": {
    // 1. Vào cuộc họp trong ứng dụng
    // 1: { src: "img/mobile-share/01.png", caption: "Vào cuộc họp trong ứng dụng" },
    // 2. Mở chức năng chia sẻ
    // 2: { src: "img/mobile-share/02.png", caption: "Mở chức năng chia sẻ" },
    // 3. Chọn nội dung cần chia sẻ
    // 3: { src: "img/mobile-share/03.png", caption: "Chọn nội dung cần chia sẻ" },
    // 4. Cho phép phát màn hình
    // 4: { src: "img/mobile-share/04.png", caption: "Cho phép phát màn hình" },
    // 5. Dừng chia sẻ
    // 5: { src: "img/mobile-share/05.png", caption: "Dừng chia sẻ" },
  },

  // Xử lý lỗi thường gặp
  "troubleshoot": {
    // 1. Không vào được cuộc họp
    // 1: { src: "img/troubleshoot/01.png", caption: "Không vào được cuộc họp" },
    // 2. Chờ ở phòng đợi quá lâu
    // 2: { src: "img/troubleshoot/02.png", caption: "Chờ ở phòng đợi quá lâu" },
    // 3. Teams yêu cầu Sign in hoặc mã OTP
    // 3: { src: "img/troubleshoot/03.png", caption: "Teams yêu cầu Sign in hoặc mã OTP" },
    // 4. Không có tiếng / không có hình
    // 4: { src: "img/troubleshoot/04.png", caption: "Không có tiếng / không có hình" },
    // 5. Không thấy lịch họp hoặc nút Meet now
    // 5: { src: "img/troubleshoot/05.png", caption: "Không thấy lịch họp hoặc nút Meet now" },
  },

};
