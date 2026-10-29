# Bài 1 — Social Media Feed với Custom Components

Project Expo độc lập thuộc [Lab02](../README.md), tách giao diện Social Media Feed của Lab01 thành các component tái sử dụng.

## Chức năng và mã nguồn

- `App.js`: quản lý dữ liệu 4 bài đăng bằng `useState` và cập nhật bất biến.
- `src/components/`: `FeedHeader`, `PostCard`, `PostHeader`, `PostContent`, `PostStats`, `PostActions`, `ActionButton`.
- `src/data/posts.js`: dữ liệu bài đăng, avatar và URL ảnh.
- `assets/icons/`: icon Like, Liked, Comments và Shares.

Dữ liệu/callback truyền qua Props. Like bật/tắt; Comments và Shares cộng dồn. Dùng `react-native-safe-area-context` để xử lý vùng an toàn. Trạng thái chỉ tồn tại trong bộ nhớ; cần mạng để tải avatar và ảnh bài đăng.

## Chạy ứng dụng

Từ thư mục này:

```sh
npm ci
npm run check:expo
npm start
```

Project khai báo Expo `~58.0.19`; dùng môi trường tương thích SDK 58. Xem [README Lab02](../README.md) để biết yêu cầu Node.js, cách chạy Android/iOS và tài liệu báo cáo.
