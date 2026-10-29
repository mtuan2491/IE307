# Lab 02 — Custom Components & React Navigation

Bài thực hành môn IE307 của **Nguyen Minh Tuan — 23521720**, sử dụng JavaScript, React Native và Expo.

## Nội dung

| Project | Chức năng |
| --- | --- |
| [Bai1 — Social Media Feed](./Bai1/README.md) | Tách giao diện và tương tác của Lab01 thành các component tái sử dụng; giữ dữ liệu 4 bài đăng, Like/Comment/Share. |
| [Bai2 — Settings and Feedback](./Bai2/README.md) | Bật/tắt Dark Mode và Notifications; nhập feedback, thêm vào đầu danh sách và hiện thông báo khi Notifications bật. |
| [Bai3 — React Navigation](./Bai3/README.md) | Điều hướng Login/Register bằng Native Stack; sau đăng nhập hiển thị Bottom Tabs gồm Home, Categories, Favourites và Profile; đăng xuất tại Profile. |

Mỗi bài là một project Expo độc lập, có manifest và lockfile riêng. Trạng thái được lưu trong bộ nhớ, không có backend hoặc cơ sở dữ liệu.

## Cấu trúc

```text
Lab02/
├── Bai1/
│   ├── assets/icons/      # Icon Like, Liked, Comments và Shares
│   └── src/               # components/ và data/
├── Bai2/
│   └── src/components/    # Header, switch, form và danh sách feedback
├── Bai3/
│   └── src/               # components/, context/, navigation/ và screens/
├── 23521720_BTTH2.pdf
├── LAB02_REPORT.md
├── LAB02_AUDIT.md
└── README.md
```

Mỗi thư mục bài còn có `App.js`, `index.js`, `app.json`, `package.json`, `package-lock.json` và README.

## Cài đặt và chạy

Các project hiện khai báo Expo `~58.0.19`, React `19.3.0`, React Native `0.88.0`. Bài 3 dùng thêm các gói React Navigation.

- Node.js theo `engines` trong `package.json`: `^22.13.0 || ^24.3.0 || >=26.0.0`, cùng npm.
- Expo Go hỗ trợ SDK 58 hoặc development build tương ứng.
- Internet để cài dependency; Bài 1 cần mạng để tải avatar và ảnh bài đăng.

Ví dụ chạy Bài 1, từ gốc repo:

```sh
cd Lab02/Bai1
npm ci
npm start
```

Với Bài 2 hoặc Bài 3, thay đường dẫn bằng `Lab02/Bai2` hoặc `Lab02/Bai3` và chạy cùng các lệnh. Cài dependency riêng trong từng bài.

Quét QR bằng Expo Go tương thích. Máy tính và điện thoại cần kết nối được với nhau; chọn cổng Metro khác nếu chạy nhiều project cùng lúc.

Các lệnh khác trong từng project:

```sh
npm run check:expo
npm run android
npm run ios
```

`check:expo` kiểm tra dependency theo SDK đang dùng. Android cần thiết bị/emulator kết nối sẵn; iOS Simulator cần macOS và Xcode.

## Đăng nhập mẫu — Bài 3

- **Email:** `23521720@gm.uit.edu.vn`
- **Mật khẩu:** `nguyenminhtuan`

Đây là tài khoản demo được kiểm tra trong `src/context/AuthContext.js`. Màn hình Register minh họa giao diện và điều hướng, chưa tạo tài khoản mới. Đăng nhập không được lưu sau khi khởi động lại ứng dụng.

## Báo cáo

- [Báo cáo PDF](./23521720_BTTH2.pdf).
- [Báo cáo Markdown](./LAB02_REPORT.md).
- [Báo cáo kiểm tra trước đây](./LAB02_AUDIT.md).

Các báo cáo được giữ nguyên để lưu hồ sơ thực hành. Tên thư mục, mô tả bản SDK cũ và script sửa lỗi trong báo cáo phản ánh thời điểm lập báo cáo; xem README này và source trong `Bai1`, `Bai2`, `Bai3` để biết cấu trúc hiện tại.

## Quản lý mã nguồn

Dùng duy nhất [`.gitignore` ở gốc repo](../.gitignore). Giữ source, asset đang dùng, cấu hình Expo, manifest, lockfile và tài liệu. Dependency được khôi phục bằng `npm ci`; cache, file tạm, bản sao nguồn cũ và script áp dụng bản sửa đã được dọn.
