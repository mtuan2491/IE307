# IE307 — Bài thực hành ứng dụng di động

Repo lưu mã nguồn và báo cáo thực hành của môn IE307.

- **Sinh viên:** Nguyen Minh Tuan
- **MSSV:** 23521720
- **Công nghệ:** JavaScript, React Native, Expo.

## Các bài thực hành

| Thư mục | Nội dung | Project |
| --- | --- | --- |
| [Lab01](./Lab01/README.md) | Components, Layout, Props & State | Social Media Feed; Workouts, Fruits and Vegetables |
| [Lab02](./Lab02/README.md) | Custom Components, React Navigation | Social Media Feed tách component; Settings and Feedback; điều hướng và đăng nhập mẫu |

## Cài đặt và chạy

Mỗi thư mục `Bai1`, `Bai2`, `Bai3` là một project Expo độc lập, có `package.json` và `package-lock.json` riêng. Cài dependency và chạy lệnh trong thư mục bài cần xem; repo gốc và thư mục lab không có `package.json`.

Ví dụ, từ gốc repo:

```sh
cd Lab01/Bai1
npm ci
npm start
```

Lab01 khai báo Expo SDK 57; Lab02 khai báo SDK 58. Dùng môi trường Node.js và Expo Go/development build tương thích với project tương ứng. README từng lab mô tả chức năng, cách chạy và tài liệu đi kèm.

## Quy ước lưu trữ

- Giữ mã nguồn, asset được sử dụng, cấu hình Expo, manifest và lockfile npm.
- Giữ báo cáo PDF và báo cáo Markdown trong từng lab.
- Dùng duy nhất [`.gitignore`](./.gitignore) ở gốc repo cho toàn bộ các lab.
- Dependency, cache, bản build, file tạm và bản sao lưu cục bộ được Git bỏ qua. Dùng `npm ci` trong từng project để khôi phục dependency.
