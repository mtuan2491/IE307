# Bài 1 — Social Media Feed

Project Expo độc lập thuộc [Lab01](../README.md), thực hành component, layout, Props và State.

## Chức năng và mã nguồn

- `App.js`: hiển thị 4 bài đăng bằng `FlatList`, quản lý `useState` và các callback tương tác.
- `src/components/PostCard.js`: nhận dữ liệu/callback qua Props, hiển thị từng bài đăng.
- `src/data/posts.js`: dữ liệu ban đầu, avatar và URL ảnh.
- `assets/icons/`: icon tương tác cục bộ.

Like bật/tắt và tăng/giảm tương ứng; Comments và Shares tăng theo mỗi lần nhấn. Dữ liệu tương tác chỉ tồn tại trong bộ nhớ. Cần mạng để tải avatar và ảnh bài đăng.

## Chạy ứng dụng

Từ thư mục này:

```sh
npm ci
npm start
```

Project khai báo Expo `~57.0.26`; dùng Expo Go hỗ trợ SDK 57 hoặc development build tương ứng. Xem [README Lab01](../README.md) để biết môi trường, cách chạy Android/iOS và tài liệu báo cáo.
