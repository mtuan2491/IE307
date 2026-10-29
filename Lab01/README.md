# Lab 01 — Components, Layout, Props & State

Bài thực hành môn IE307 của **Nguyen Minh Tuan — 23521720**, sử dụng JavaScript, React Native và Expo.

## Nội dung

| Project | Chức năng |
| --- | --- |
| [Bai1 — Social Media Feed](./Bai1/README.md) | Hiển thị 4 bài đăng bằng `FlatList`; bật/tắt Like, tăng Comments và Shares; truyền dữ liệu và callback qua Props. |
| [Bai2 — Workouts, Fruits and Vegetables](./Bai2/README.md) | Hiển thị 10 bài tập bằng `FlatList`, trái cây và rau củ bằng `SectionList`; chọn/bỏ chọn và tổng hợp các mục đã chọn. |

Hai bài là hai project độc lập. Mỗi project quản lý trạng thái bằng `useState`; dữ liệu tương tác trở về ban đầu khi khởi động lại ứng dụng.

## Cấu trúc

```text
Lab01/
├── Bai1/                  # Source, component, dữ liệu và icon của Social Media Feed
├── Bai2/                  # Source, component và dữ liệu các danh sách lựa chọn
├── 23521720_BTTH1.pdf
├── LAB01_REPORT.md
└── README.md
```

Mỗi thư mục bài có `App.js`, `index.js`, `app.json`, `package.json`, `package-lock.json` và `src/`. Asset cục bộ được lưu trong `assets/`.

## Cài đặt và chạy

Dependency hiện khai báo trong cả hai project: Expo `~57.0.26`, React `19.2.3`, React Native `0.86.3`.

Chuẩn bị Node.js/npm tương thích dependency của project, Expo Go hỗ trợ SDK 57 hoặc development build tương ứng. Cần Internet để cài dependency và tải ảnh từ URL trong dữ liệu mẫu.

Từ gốc repo, chạy Bài 1:

```sh
cd Lab01/Bai1
npm ci
npm start
```

Với Bài 2, mở terminal tại gốc repo:

```sh
cd Lab01/Bai2
npm ci
npm start
```

Quét mã QR bằng Expo Go tương thích; máy tính và điện thoại cần kết nối được với nhau. Chạy từng project hoặc chọn cổng Metro khác khi chạy đồng thời.

Trong thư mục từng bài, `npm run android` mở trên thiết bị/emulator Android đã kết nối; `npm run ios` dùng iOS Simulator trên macOS có Xcode.

## Báo cáo

- [Báo cáo PDF](./23521720_BTTH1.pdf).
- [Báo cáo và checklist Markdown](./LAB01_REPORT.md).

Báo cáo được giữ nguyên; một số tên thư mục trong báo cáo thuộc thời điểm lập báo cáo. Cấu trúc và hướng dẫn chạy hiện tại nằm trong README này.

## Quản lý mã nguồn

Dùng duy nhất [`.gitignore` ở gốc repo](../.gitignore). Giữ source, asset, cấu hình, manifest và lockfile npm cùng tài liệu. Dependency, cache và file tạm được bỏ qua; khôi phục dependency bằng `npm ci` trong từng bài.
