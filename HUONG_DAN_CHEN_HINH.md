# HUONG DAN CHEN ANH MINH HOA TEAMS

Bộ này chỉ có website Teams tương tác, **không có cấu hình server**. Ảnh Teams thực tế chưa được thêm vì anh sẽ tự chụp.

## Thử nhanh trên máy tính

1. Giải nén ZIP. Mở thư mục `teams` và double-click `index.html`.
2. Chụp ảnh một thao tác trong Microsoft Teams. Ví dụ bước 2 hướng dẫn Android: lưu hình là `teams/img/join-android/02.png`.
3. Mở `teams/images.js` bằng Notepad hoặc VS Code, tìm:

   ```js
   "join-android": {
     // 2. Mở liên kết cuộc họp
     // 2: { src: "img/join-android/02.png", caption: "Mở liên kết cuộc họp" },
   }
   ```

4. **Chỉ bỏ `//` ở trước dòng `2:`**, thành:

   ```js
   "join-android": {
     // 2. Mở liên kết cuộc họp
     2: { src: "img/join-android/02.png", caption: "Mở liên kết cuộc họp" },
   }
   ```

5. Lưu `images.js`, refresh `index.html`, chọn **Tham gia bằng Android**; hình sẽ hiện ngay dưới bước 2. Bấm hình để phóng to.

## Nhiều ảnh ở cùng một bước

```js
"schedule": {
  2: [
    { src: "img/schedule/02a.png", caption: "Bấm nút New event" },
    { src: "img/schedule/02b.png", caption: "Điền thời gian họp" },
  ],
},
```

## Đưa lên Linux

Chép **toàn bộ thư mục `teams/`** vào thư mục gốc web đang phục vụ host `guides.mathnasium.edu.vn`, để truy cập `https://guides.mathnasium.edu.vn/teams/`.

Ví dụ *nếu* webroot đang là `/var/www/guides.mathnasium.edu.vn/`, kết quả cuối sẽ là:

```text
/var/www/guides.mathnasium.edu.vn/
└── teams/
    ├── index.html
    ├── images.js
    └── img/
        ├── schedule/
        ├── join-android/
        └── ...
```

Không chép đè file `index.html` ở webroot, để giữ lại chỗ cho trang chủ anh tự tạo sau. Nếu chưa có DNS/virtual host/HTTPS thì cần cấu hình một lần riêng, không nằm trong ZIP này.

## Những điều cần nhớ

- Mỗi dòng trong `images.js` là một **vị trí đặt ảnh của một bước**. Đừng xóa dấu `//` khỏi dòng ghi chú dạng `// 2. ...`; chỉ bỏ ở dòng `// 2: { ... }`.
- Ảnh lưu trong `img/` (PNG, JPG, WEBP). Tên file nên không dấu, không khoảng trắng và đúng chữ hoa/chữ thường trên Linux.
- Trong `src`, luôn dùng đường dẫn tương đối `img/ten-muc/ten-hinh.png` (không thêm `/teams/` ở đầu).
- Không cần sửa `index.html` để thêm ảnh mới.
- Danh sách tất cả bước và đường dẫn đề xuất nằm ở `DANH_SACH_75_BUOC.csv`.
- Trước khi chia sẻ ra Internet, hãy che thông tin nội bộ, địa chỉ email cá nhân, ID cuộc họp và tên học viên trên screenshot.
