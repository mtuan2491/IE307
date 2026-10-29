# Kiểm tra Lab02 - 28/10/2026

## Cập nhật sau khi người dùng chạy Apply-SDK58.ps1

**Trạng thái mới thay thế kết luận SDK57 trong phần lịch sử bên dưới:** cả ba thư mục chính hiện khai báo Expo `~58.0.19`, expo-status-bar `~58.0.4`, React `19.3.0`, React Native `0.88.0`, safe-area-context `~5.10.1`. Bài 3 dùng screens `~4.30.0`. Script đã tạo `SDK57_Backup_20261028_221832_512`. Chưa có node_modules hoặc lockfile của ba project chính, nên đây là phiên bản khai báo, chưa phải xác nhận cài đặt/runtime.

### Bài 1 đã sửa hoàn chỉnh trong bản có thể chạy riêng

- Thư mục: [Bai1_SocialMediaFeedComponents_Fixed](Bai1_SocialMediaFeedComponents_Fixed/README.md).
- Khôi phục nguyên dữ liệu bốn bài đăng và bốn icon từ `../Lab01/Bai1`.
- Giữ avatar ảnh, nội dung/ảnh từng bài, header xanh, tiêu đề/phụ đề, style card và ảnh cao 230, thống kê và trạng thái Likes/Liked như Lab01.
- Tách thành bảy component có StyleSheet riêng: FeedHeader, PostCard, PostHeader, PostContent, PostStats, PostActions, ActionButton. useState và cập nhật immutable ở App, dữ liệu/callback truyền bằng Props.
- Dùng safe-area-context cho SDK58; chia vùng inset header/feed để tránh cộng chiều cao status bar hai lần.
- Bản sửa dùng ảnh mạng như Lab01; cần Internet để tải avatar và ảnh bài đăng.

Phiên này vẫn bị từ chối ghi `Bai1_SocialMediaFeedComponents/App.js`; vì vậy **Bài 1 ở thư mục chính chưa nhận bản sửa**, còn bản hoàn chỉnh được lưu ở thư mục mới nêu trên. Không thay quyền truy cập hoặc xóa/thay thế thư mục để vượt lỗi ghi. Báo cáo gốc cũng chưa được cập nhật tại chỗ.

### Áp dụng bản sửa vào Bài 1 chính

Từ terminal Lab02 có quyền ghi file gốc:

```powershell
.\Apply-Bai1-Fix.ps1
```

Script mới kiểm tra cả ba project chính đã là SDK58, sao lưu các file sẽ thay đổi rồi chép Bài 1 đã sửa. Đã chạy `-WhatIf`, xác nhận có 13 file cần thêm/thay; metadata SDK58 giống bản chính nên được bỏ qua. Không cần chạy lại `Apply-SDK58.ps1` cũ vì bản Bài 1 trong `SDK58/` vẫn chứa thiết kế trước khi sửa.

### Kiểm tra của lượt sửa mới

- Babel transform qua cho 42 file JavaScript trong ba project chính và bản Bài 1 đã sửa.
- Kiểm tra 52 đường dẫn import/asset: không thiếu file; không phát hiện object style trực tiếp trong JSX.
- So sánh dữ liệu bốn post với Lab01: khớp; icon được so bằng hash khi kiểm tra cấu trúc render.
- So cấu trúc/style host component của card với Lab01: 16 trường hợp khớp, gồm bốn post x hai trạng thái Like x hai trạng thái pressed.
- Kiểm tra Like/Unlike, cập nhật immutable, post khác giữ nguyên, Comment/Share qua 20 lần nhấn và Like không âm: qua.
- Kiểm tra header xanh, font tiêu đề và phân chia safe area: qua.
- Tổng: 143 assertion qua. Kiểm tra dùng hook/native component giả lập, không phải ảnh chụp trên thiết bị.
- `npm install` trong bản Bài 1 mới vẫn thất bại với `EACCES` khi truy cập registry.npmjs.org. Chưa có kết quả Expo Doctor, Metro bundle hoặc runtime.

Sau khi áp dụng, trong **từng project chính**, chạy `npm install`, `npx expo install --fix`, `npx expo install --check`, `npx expo-doctor@latest`, sau đó `npx expo start --go --clear`. Cần thực hiện trên terminal có quyền ghi và kết nối npm registry. Hướng dẫn đầy đủ nằm trong README của bản sửa.

---

## Lịch sử: đối chiếu trước khi chạy script nâng cấp

Phần dưới đây ghi lại trạng thái trước lần cập nhật nêu trên. Các nhận định về SDK57 và Bài 1 chưa sửa chỉ áp dụng cho thời điểm kiểm tra ban đầu.

## Kết luận

**Chưa đủ cơ sở kết luận toàn bộ bài làm đã đáp ứng đề.** Bài 1 đạt phần tách component và logic tương tác nhưng đã thay đổi giao diện so với Lab01 đang có trong workspace. Bài 2 và Bài 3 đáp ứng các yêu cầu chức năng ở mức mã nguồn và kiểm tra logic giả lập; chưa được xác nhận trên Expo Go hoặc emulator. Bộ hồ sơ nộp bài chưa đầy đủ trong thư mục Lab02.

**Ba project chính vẫn khai báo Expo SDK57.** Ba project trong `SDK58/` đã khai báo SDK58 từ trước phiên kiểm tra này. Thao tác sửa `Bai1_SocialMediaFeedComponents/package.json` và `LAB02_REPORT.md` bị từ chối ghi, nên phiên này chưa nâng trực tiếp được ba project chính. Không có dependency tree hoặc lockfile được cài mới cho các project Lab02.

## Nguồn đối chiếu

- [Đề bài PDF, 25 trang](<LAB02 - CUSTOM COMPONENTS, REACT NAVIGATION.pdf>): yêu cầu Bài 1 ở trang 1; Bài 2 ở trang 2-3; Bài 3 ở trang 11-13; quy cách nộp bài ở trang 25. Đã đọc trực tiếp PDF bằng pypdf và xem các ảnh ví dụ đã render ở trang 4, 13, 15.
- [Báo cáo hiện tại](LAB02_REPORT.md).
- Mã nguồn ba project chính và ba bản tương ứng trong `SDK58/`.
- Bài 1 Lab01 hiện có: `../Lab01/Bai1/App.js`, `src/components/PostCard.js`, `src/data/posts.js`.

## 1. Đối chiếu chức năng với PDF

Ký hiệu: **Đạt logic** là đã đọc mã và chạy các tình huống bằng hook/component giả lập; **Đạt mã nguồn** là có hiện thực tương ứng nhưng chưa xác nhận giao diện hoặc native runtime.

### Bài 1 - Social Media Feed

| Yêu cầu | Kết quả | Bằng chứng |
| --- | --- | --- |
| Chia nhỏ các component và tái sử dụng | Đạt mã nguồn | `PostCard`, `PostHeader`, `PostContent`, `PostStats`, `PostActions`, `ActionButton`; các file có StyleSheet riêng |
| Truyền dữ liệu và callback qua Props | Đạt mã nguồn | `App` truyền `post`, `onLike`, `onComment`, `onShare`; `PostActions` tái sử dụng `ActionButton` |
| Quản lý thông tin bài đăng bằng useState | Đạt logic | `useState(initialPosts)`; cập nhật bằng map và object spread; bài khác giữ nguyên |
| Giữ tương tác Like/Comment/Share | Đạt logic | Like bật/tắt và tăng/giảm; Comment/Share cộng dồn qua nhiều lần nhấn |
| Giữ nguyên giao diện từ BTTH1 | **Chưa đạt khi so với Lab01 hiện tại** | Header, avatar, ảnh và cách trình bày đã đổi; chi tiết bên dưới |
| Hiển thị và cuộn trên thiết bị | Chưa xác nhận | Có FlatList nhưng chưa chạy app trên thiết bị |

Các khác biệt cụ thể so với `../Lab01/Bai1`:

- Lab01 có header xanh `#1264d7`, tiêu đề `Social Media Feed`; Lab02 dùng header trắng, tiêu đề `Community Feed` và thêm dòng `IE307 · LAB02`.
- Lab01 dùng avatar bằng Image; Lab02 dùng chữ viết tắt trong View màu.
- Lab01 có bốn bài đăng với ảnh và dữ liệu khác nhau; Lab02 có ba bài đăng cùng dùng asset `coastal-sunset.png`, thay đổi tác giả/nội dung/số đếm.
- Lab01 dùng icon ảnh và nhãn Likes/Liked, Comments, Shares; Lab02 dùng ký tự và nhãn Like, Comment, Share.
- Lab01 có khung ảnh bo góc, lề ngang và chiều cao 230; Lab02 dùng ảnh toàn chiều ngang với aspectRatio 1.62.

Việc khác dữ liệu không tự động là lỗi riêng theo PDF Lab02, nhưng làm kết quả hiển thị khác bài cũ. Yêu cầu rõ ở trang 1 là giữ giao diện và chức năng khi tách component. Vì vậy, khẳng định trong báo cáo rằng đã giữ nguyên bố cục/giao diện chưa được mã nguồn hiện tại chứng minh. Cần đưa style/bố cục của Lab01 đang dùng sang các component con để đáp ứng chặt chẽ yêu cầu này. Phiên này chỉ kiểm tra chức năng và SDK, chưa sửa lại thiết kế Bài 1.

### Bài 2 - Settings and Feedback

| Yêu cầu | Kết quả | Bằng chứng |
| --- | --- | --- |
| Logo và tên app ở trên cùng, căn giữa | Đạt mã nguồn | `AppHeader`: alignItems center, logo React và tên app |
| Dark Mode mặc định tắt, bật/tắt đổi nền/chữ | Đạt logic và mã nguồn | State false; style điều kiện ở App, header, switches, form, feedback list/item |
| Notifications mặc định bật, độc lập với Dark Mode | Đạt logic | Hai useState riêng; thay đổi từng switch không đổi switch kia |
| Nhập feedback nhiều dòng, có placeholder | Đạt mã nguồn | TextInput multiline, placeholder, textAlignVertical top |
| Gửi feedback, feedback mới ở đầu FAQs, reset input | Đạt logic | Prepend vào list, nội dung được trim, setFeedbackText rỗng |
| Input rỗng không làm gì | Đạt logic | Chuỗi rỗng và chỉ khoảng trắng không thêm item, không Alert |
| Chỉ hiện Alert khi Notifications bật | Đạt logic | Đã thử submit với cả hai giá trị của switch |
| Cuộn khi có nhiều feedback | Đạt mã nguồn | ScrollView bao toàn bộ nội dung |
| Component tái sử dụng, Props, useState, StyleSheet, không inline style | Đạt mã nguồn | SettingSwitch dùng hai lần; state/callback qua Props; không có style object trực tiếp trong JSX |

Cần chạy trên thiết bị để xác nhận màu sắc, glyph logo, bàn phím, thao tác cuộn và Alert native. Việc dùng StyleSheet có điều kiện trong mảng style vẫn đáp ứng yêu cầu không dùng inline style.

### Bài 3 - React Navigation

| Yêu cầu | Kết quả | Bằng chứng |
| --- | --- | --- |
| Kiểm tra auth khi mở app, chọn Auth/Main theo trạng thái | Đạt logic local | AuthContext có isChecking/isAuthenticated; RootNavigator chuyển giữa AuthStack/MainTabs |
| Login email sinh viên và mật khẩu tên không dấu | Đạt logic | `23521720@gm.uit.edu.vn` / `nguyenminhtuan`; trim và chuẩn hóa email |
| Login sai hiện thông báo và không vào màn hình chính | Đạt logic và mã nguồn | login trả false, không bật auth; LoginScreen gọi Alert khi false |
| Login/Register điều hướng qua lại | Đạt mã nguồn | navigate Register và goBack; AuthStack có đủ hai màn hình |
| Register có tên, email, mật khẩu | Đạt mã nguồn | Ba AuthInput tương ứng |
| Bốn tab Home/Categories/Favourites/Profile | Đạt cấu hình | MainTabs khai báo đủ bốn tab theo thứ tự |
| Nội dung căn giữa, không có header | Đạt mã nguồn | CenteredScreen/Profile dùng flex và justifyContent center; headerShown false |
| Badge ở Favourites | Đạt cấu hình | tabBarBadge 3, các tab khác không có badge |
| Profile có LOG OUT, cập nhật auth và quay lại Login | Đạt logic và mã nguồn | logout đặt false; RootNavigator chọn AuthStack; nút Profile gọi logout |
| Dùng trình quản lý state và custom component | Đạt mã nguồn | React Context/useState; AuthHeader/AuthInput/PrimaryButton/CenteredScreen |
| Cải thiện bàn phím và nhập liệu | Đạt mã nguồn | KeyboardAvoidingView, ScrollView, email-address, secureTextEntry, icon |

PDF trang 13 ghi rõ **không hiện thực chức năng đăng ký**, nên nút CREATE chỉ báo demo không phải thiếu chức năng bắt buộc. Facebook/Google trong phần tùy chỉnh giao diện là ví dụ, không phải yêu cầu tích hợp đăng nhập xã hội.

Auth hiện chỉ lưu trong RAM: isChecking được tắt bằng useEffect, không tải phiên từ storage; mở app mới luôn bắt đầu chưa đăng nhập. PDF không yêu cầu rõ việc giữ phiên qua lần đóng/mở, nên đây là giới hạn cần ghi nhận, chưa kết luận là lỗi. Chưa thử điều hướng native, Android Back, bàn phím và bố cục trên thiết bị.

## 2. SDK thực tế

| Project | Thư mục chính | Bản trong SDK58 |
| --- | --- | --- |
| Bài 1 | expo `~57.0.26` | expo `~58.0.19` |
| Bài 2 | expo `~57.0.26` | expo `~58.0.19` |
| Bài 3 | expo `~57.0.26` | expo `~58.0.19` |

Các phiên bản trên là **khai báo package.json**, chưa phải phiên bản đã cài vì không có node_modules của các project Lab02. Báo cáo gốc vẫn mô tả SDK57, đúng với ba thư mục chính nhưng chưa mô tả đầy đủ các bản SDK58 riêng.

Các bản SDK58 hiện có khai báo:

| Dependency | Phiên bản |
| --- | --- |
| expo | `~58.0.19` |
| expo-status-bar | `~58.0.4` |
| react | `19.3.0` |
| react-native | `0.88.0` |
| react-native-safe-area-context | `~5.10.1` |
| react-native-screens, Bài 3 | `~4.30.0` |

Đã đối chiếu React/RN và các dependency native với [bundledNativeModules của Expo SDK58](https://github.com/expo/expo/blob/sdk-58/packages/expo/bundledNativeModules.json) và bản Expo 58.0.19 có sẵn ở project BTQT trong workspace. [Tài liệu Expo SDK](https://docs.expo.dev/versions/v58.0.0/) cũng xác nhận SDK58 đi cùng React Native 0.88 và React 19.3.0. Chưa xác nhận toàn bộ cây dependency và peer dependency bằng npm/Expo Doctor.

So với bản gốc, các bản SDK58 đã có sẵn SafeAreaProvider, chuyển SafeAreaView Bài 1/2 sang safe-area-context, bỏ cộng chiều cao status bar thủ công, bỏ cấu hình newArchEnabled/edgeToEdgeEnabled cũ và điều chỉnh tab bar. Tổng cộng có 10 file khác giữa hai bộ source, không có khác biệt ở các handler chức năng.

### Trạng thái áp dụng nâng cấp

- Đã thử sửa package.json Bài 1: công cụ trả `Failed to write file`; file gốc vẫn là SDK57.
- Đã thử bổ sung ghi chú vào LAB02_REPORT.md: bị từ chối ghi. Vì vậy kết quả mới được lưu riêng ở file audit này.
- Thử truy cập npm registry trả `EACCES`. Không chạy cài đặt thành công, không sinh lockfile, không chạy Metro export hoặc Expo Doctor.
- Đã chạy `Apply-SDK58.ps1 -WhatIf`: script liệt kê đúng 10 file cần thay, không ghi đè khi xem trước. Chưa chạy áp dụng thật trong phiên này do lỗi quyền ghi đã xác định.
- Không thay quyền truy cập, không xóa hay thay thế thư mục gốc để vượt lỗi quyền ghi.

Để áp dụng bản SDK58 đã có vào ba thư mục chính, chạy từ **thư mục Lab02** bằng terminal có quyền ghi các file đó:

```powershell
.\Apply-SDK58.ps1 -WhatIf
.\Apply-SDK58.ps1
```

Script sao lưu file cũ trước khi chép bản SDK58. Sau đó, trong từng project:

```powershell
npm install
npx expo install --fix
npx expo install --check
npx expo-doctor@latest
npx expo export --platform android
npx expo start --go --clear
```

Các bước cài đặt và kiểm tra này theo [hướng dẫn nâng cấp chính thức của Expo](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/). Nếu tiếp tục dùng bản riêng, vào `SDK58/Bai1_SocialMediaFeedComponents`, `SDK58/Bai2_SettingsFeedback` hoặc `SDK58/Bai3_ReactNavigation` rồi chạy các lệnh trong project. Cần Expo Go hỗ trợ SDK58 hoặc development build tương ứng.

## 3. Kết quả kiểm tra đã chạy

| Kiểm tra | Kết quả |
| --- | --- |
| Parse package.json/app.json của cả hai bộ project | Qua |
| Babel transform dùng babel-preset-expo có sẵn từ project BTQT | Qua, 64 file JavaScript |
| Resolve đường dẫn import/require tương đối và asset | Qua, 78 đường dẫn, không thiếu file |
| Tìm inline style dạng object trực tiếp trong JSX | Không phát hiện ở các file đã kiểm tra |
| So dependency native của SDK58 với bundledNativeModules | Qua cho các dependency có trong danh sách của Expo |
| Like/Unlike, post đã liked, cập nhật immutable và không đổi post khác | Qua ở cả bản chính và SDK58 |
| Comment/Share qua 5 lần nhấn | Qua ở cả hai bộ |
| Defaults, switch độc lập, empty/whitespace, multiline feedback, reset, thứ tự list, Alert có điều kiện | Qua ở cả hai bộ |
| Auth checking, sai/đúng credential, email trim/chuẩn hóa, login/logout, chọn navigator | Qua ở cả hai bộ |
| Bốn tab, badge 3 và header ẩn | Qua ở cả hai bộ |
| Tổng số assertion | 197, gồm kiểm tra tĩnh và logic |
| Cài dependency, Expo Doctor, Metro bundle | Chưa chạy thành công do quyền ghi/kết nối registry |
| Chạy native và kiểm tra giao diện | Chưa thực hiện |

Các bài kiểm tra logic dùng VM với React hooks, component native và navigator giả lập. Chúng thực thi handler từ mã nguồn qua Babel và kiểm tra các chuyển trạng thái; **không thay thế render bằng React thực, bundle Metro hoặc test điều hướng trên thiết bị**. Node.js hiện có là v24.20.0, npm 11.19.0. Không có adb trong PATH hoặc đường dẫn Android SDK mặc định đã kiểm tra.

## 4. Báo cáo và bộ nộp bài

Theo trang 25 của PDF, các mục sau chưa hoàn tất hoặc chưa có bằng chứng trong Lab02:

- Chưa có `23521720_BTTH2.pdf` chứa ảnh cây thư mục, toàn bộ code liên quan và kết quả trên thiết bị thật/emulator.
- Chưa có `23521720_BTTH2.zip` theo quy cách, loại node_modules và build output, PDF để ngoài ZIP.
- Chưa thấy video demo hoặc link Google Drive trong báo cáo; chưa xác nhận quyền truy cập cho `duypn@uit.edu.vn`.
- Chưa có ảnh chứng minh title terminal là `23521720`. Mã JavaScript đã có comment tên/MSSV, nhưng vẫn cần chụp đúng trong báo cáo nộp.

LAB02_REPORT.md hiện là tài liệu hướng dẫn/chú giải và checklist, không phải PDF bài nộp. Các ô PASS của phần chức năng cần hiểu là kiểm tra mã nguồn; không nên diễn đạt thành đã chạy thành công trên Expo Go. Riêng khẳng định Bài 1 giữ nguyên giao diện/bố cục cần sửa theo kết quả đối chiếu ở trên.

## 5. Việc còn lại

1. Áp dụng bản SDK58 vào thư mục chính bằng quyền ghi phù hợp, cài dependency và chạy Expo Doctor/bundle.
2. Đưa bố cục/style Bài 1 về đúng bản Lab01 được dùng để nộp, tiếp tục giữ kiến trúc component đã tách.
3. Chạy cả ba app trên thiết bị hoặc emulator; kiểm tra scroll, theme, Alert, keyboard, login sai/đúng, chuyển tab và logout.
4. Chụp ảnh, quay video và hoàn thiện PDF/ZIP theo trang 25 của đề.
