# Bài 3 — React Navigation

Project Expo độc lập thuộc [Lab02](../README.md), thực hành Native Stack, Bottom Tabs và trạng thái đăng nhập qua Context.

## Chức năng và mã nguồn

- `src/navigation/AuthStack.js`: chuyển giữa Login và Register.
- `src/navigation/RootNavigator.js`: chọn luồng xác thực hoặc các tab theo trạng thái đăng nhập.
- `src/navigation/MainTabs.js`: Home, Categories, Favourites, Profile; xử lý khoảng cách vùng an toàn của thanh tab.
- `src/context/AuthContext.js`: kiểm tra tài khoản demo và quản lý đăng nhập/đăng xuất.
- `src/screens/`: màn hình của từng luồng; nút LOG OUT ở Profile.
- `src/components/`: header, input, nút và bố cục dùng chung.

## Tài khoản demo

- **Email:** `23521720@gm.uit.edu.vn`
- **Mật khẩu:** `nguyenminhtuan`

Register minh họa giao diện và điều hướng; nút CREATE chỉ hiện thông báo demo, chưa tạo tài khoản mới. Trạng thái xác thực lưu trong bộ nhớ và trở về đăng xuất khi khởi động lại ứng dụng.

## Chạy ứng dụng

Từ thư mục này:

```sh
npm ci
npm run check:expo
npm start
```

Project khai báo Expo `~58.0.19` và React Navigation 7; dùng môi trường tương thích SDK 58. Xem [README Lab02](../README.md) để biết yêu cầu Node.js, cách chạy Android/iOS và tài liệu báo cáo.
