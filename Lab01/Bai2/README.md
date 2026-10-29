# Bài 2 — Workouts, Fruits and Vegetables

Project Expo độc lập thuộc [Lab01](../README.md), thực hành `FlatList`, `SectionList`, Props và State.

## Chức năng và mã nguồn

- `App.js`: hiển thị 10 bài tập và hai nhóm Fruits/Vegetables; quản lý các mục được chọn bằng `useState`.
- `src/components/SelectableItem.js`: dòng dữ liệu với nút SELECT/DESELECT.
- `src/components/SectionHeader.js`: tiêu đề và hình ảnh của từng nhóm.
- `src/data/data.js`: dữ liệu danh sách và URL ảnh nền/ảnh nhóm.

Các mục đã chọn được tổng hợp ở cuối màn hình; bỏ chọn sẽ loại mục tương ứng khỏi danh sách. Trạng thái chỉ tồn tại trong bộ nhớ. Cần mạng để tải ảnh.

## Chạy ứng dụng

Từ thư mục này:

```sh
npm ci
npm start
```

Project khai báo Expo `~57.0.26`; dùng Expo Go hỗ trợ SDK 57 hoặc development build tương ứng. Xem [README Lab01](../README.md) để biết môi trường, cách chạy Android/iOS và tài liệu báo cáo.
