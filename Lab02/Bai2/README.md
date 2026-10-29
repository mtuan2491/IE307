# Bài 2 — Settings and Feedback

Project Expo độc lập thuộc [Lab02](../README.md), thực hành custom component, Props, `useState`, Switch và form nhập liệu.

## Chức năng và mã nguồn

- `App.js`: quản lý Dark Mode, Notifications, nội dung nhập và danh sách feedback.
- `src/components/SettingSwitch.js`: switch tái sử dụng cho hai thiết lập độc lập.
- `src/components/AppHeader.js`: header ứng dụng.
- `src/components/FeedbackForm.js`: nhập và gửi feedback.
- `src/components/FeedbackList.js`, `FeedbackItem.js`: hiển thị danh sách phản hồi.

Dark Mode mặc định tắt; Notifications mặc định bật. Feedback được cắt khoảng trắng và thêm vào đầu danh sách; nội dung rỗng bị bỏ qua. Gửi thành công xóa nội dung nhập, đồng thời hiện Alert nếu Notifications bật. Trạng thái chỉ tồn tại trong bộ nhớ.

## Chạy ứng dụng

Từ thư mục này:

```sh
npm ci
npm run check:expo
npm start
```

Project khai báo Expo `~58.0.19`; dùng môi trường tương thích SDK 58. Xem [README Lab02](../README.md) để biết yêu cầu Node.js, cách chạy Android/iOS và tài liệu báo cáo.
