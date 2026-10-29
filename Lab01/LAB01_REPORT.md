# LAB01 REPORT

## Student Information

- MSSV: 23521720
- Name: Nguyen Minh Tuan

## Project Structure

```text
Lab01/
├── Bai1_SocialMediaFeed/
│   ├── assets/
│   ├── src/
│   │   ├── components/
│   │   │   └── PostCard.js
│   │   └── data/
│   │       └── posts.js
│   ├── App.js
│   ├── index.js
│   ├── app.json
│   └── package.json
├── Bai2_WorkoutsFruitsVegetables/
│   ├── assets/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SectionHeader.js
│   │   │   └── SelectableItem.js
│   │   └── data/
│   │       └── data.js
│   ├── App.js
│   ├── index.js
│   ├── app.json
│   └── package.json
└── LAB01_REPORT.md
```

Hai thư mục bài tập là hai Expo project độc lập. Mỗi project có `package.json`, `app.json`, `App.js` và `index.js` riêng; thư mục cha không có `package.json`.

---

## Bài 1 - Social Media Feed

### 1. Requirement Checklist

| # | Requirement | Status | Implementation |
|---|-------------|--------|----------------|
| 1 | Có ít nhất 3 bài đăng khác nhau | PASS | `src/data/posts.js` có 4 post với `id` riêng |
| 2 | Dữ liệu không hard-code trong `PostCard` | PASS | Toàn bộ dữ liệu ban đầu nằm trong `src/data/posts.js` |
| 3 | Mỗi post có `id`, `username`, `avatar`, `content`, `image`, `likes`, `comments`, `shares`, `liked` | PASS | Mỗi object trong `initialPosts` có đủ các trường |
| 4 | Avatar và username | PASS | `PostCard.js` render `post.avatar` và `post.username` |
| 5 | Nội dung text và hình ảnh bài đăng | PASS | `PostCard.js` render `post.content` và `post.image` |
| 6 | Hiển thị Likes, Comments và Shares | PASS | Khu vực `statisticsRow` trong `PostCard.js` |
| 7 | Ba nút tương tác và divider | PASS | Ba `Pressable` cùng `styles.divider` trong `PostCard.js` |
| 8 | Child component nhận dữ liệu qua Props | PASS | `PostCard` nhận `post`, `onLike`, `onComment`, `onShare` |
| 9 | Parent quản lý danh sách bằng State | PASS | `App.js` dùng `useState(initialPosts)` |
| 10 | Dùng danh sách có thể cuộn | PASS | `App.js` dùng `FlatList` |
| 11 | Like tăng 1 và chuyển trạng thái khi chưa like | PASS | `handleLike` tạo object mới, đặt `liked: true` và cộng 1 |
| 12 | Nhấn Like lần nữa giảm 1 và bỏ trạng thái like | PASS | `handleLike` toggle `liked`, trừ 1 và dùng `Math.max(0, ...)` |
| 13 | Trạng thái Like dễ nhận biết | PASS | Nút đổi nền, màu và text từ `Likes` sang `Liked` |
| 14 | Comments tăng sau mỗi lần nhấn, không toggle | PASS | `handleComment` thực hiện `comments + 1` |
| 15 | Shares tăng sau mỗi lần nhấn, không toggle | PASS | `handleShare` thực hiện `shares + 1` |
| 16 | Cập nhật State bất biến | PASS | Dùng `map`, spread object và callback form của `setPosts` |
| 17 | Styling bằng `StyleSheet.create` | PASS | `App.js` và `PostCard.js` đều dùng `StyleSheet.create` |
| 18 | Không có inline style | PASS | Đã search toàn bộ source; không có `style={{ ... }}` |
| 19 | Không dùng UI library, Router hoặc Navigation | PASS | Chỉ import React, React Native và `expo-status-bar` của blank template |
| 20 | Ảnh remote hiển thị được trên thiết bị có mạng | MANUAL CHECK | Cần mở app trên Expo/device để kiểm tra kết nối và CDN ảnh |
| 21 | Layout không tràn trên Android/iOS | MANUAL CHECK | Cần kiểm tra trực tiếp trên kích thước màn hình dùng để quay demo |

### 2. Files Recommended for Report Screenshots

#### MUST SCREENSHOT - `App.js`

Nên chụp vì file này:

- dùng State để quản lý toàn bộ danh sách post;
- chứa `handleLike`, `handleComment` và `handleShare`;
- cập nhật dữ liệu bất biến bằng `map` và object spread;
- render feed bằng `FlatList`;
- truyền dữ liệu và callback xuống `PostCard` bằng Props.

#### MUST SCREENSHOT - `src/components/PostCard.js`

Nên chụp vì file này:

- minh họa rõ cách child component nhận Props;
- render avatar, username, text, image và ba số thống kê;
- chứa divider và ba `Pressable` tương tác;
- thể hiện trạng thái Like bằng style và nội dung khác nhau.

#### MUST SCREENSHOT - `src/data/posts.js`

Nên chụp vì file này:

- chứng minh có 4 bài đăng khác nhau;
- cho thấy đầy đủ cấu trúc dữ liệu của một post;
- chứng minh dữ liệu không bị hard-code trong component giao diện.

#### OPTIONAL - `index.js`

Chỉ cần chụp nếu báo cáo muốn trình bày entry point Expo và `registerRootComponent`.

#### OPTIONAL - `package.json` và `app.json`

Có thể chụp để chứng minh đây là project Expo blank độc lập, không có Router/Navigation hay dependency thừa.

### 3. Code-to-UI Mapping

| Code/File | Logic | Visible Result in Expo |
|-----------|-------|------------------------|
| `src/data/posts.js` | Lưu dữ liệu ban đầu của 4 post | Feed có 4 bài với avatar, username, nội dung, ảnh và counts khác nhau |
| `useState(initialPosts)` | Giữ trạng thái hiện tại của danh sách | Số liệu và trạng thái nút thay đổi ngay sau tương tác |
| `FlatList` | Render từng phần tử bằng `renderPost` | Feed cuộn theo chiều dọc |
| `PostCard` | Render một post từ Props | Một card hoàn chỉnh cho mỗi bài đăng |
| `post.avatar` và `post.username` | Thông tin người đăng | Avatar tròn và username ở đầu card |
| `post.content` và `post.image` | Nội dung bài đăng | Text và ảnh lớn xuất hiện giữa card |
| `statisticsRow` | Render ba số thống kê | Hiển thị Likes, Comments và Shares dưới ảnh |
| `divider` | Phân tách thống kê và hành động | Đường kẻ ngang trước ba nút |
| `handleLike` | Toggle `liked`, cộng/trừ đúng 1 like | Count Likes đổi và nút chuyển giữa `Likes`/`Liked` |
| `handleComment` | Tăng `comments` thêm 1 | Count Comments tăng sau mỗi lần nhấn |
| `handleShare` | Tăng `shares` thêm 1 | Count Shares tăng sau mỗi lần nhấn |
| `StyleSheet.create` | Định nghĩa toàn bộ style | Card, header, khoảng cách và trạng thái nút nhất quán |

### 4. Screenshots of Result to Capture

- Màn hình `Social Media Feed` ban đầu, thấy rõ title và post đầu tiên.
- Ảnh sau khi scroll để chứng minh feed có ít nhất 3 post khác nhau.
- Trước và sau khi Like một post: số Likes tăng 1 và nút chuyển thành `Liked`.
- Sau khi nhấn lại post đó: số Likes giảm 1 và nút trở về `Likes`.
- Trước và sau khi nhấn Comments nhiều lần để chứng minh count tăng theo mỗi click.
- Trước và sau khi nhấn Shares nhiều lần để chứng minh count tăng theo mỗi click.

---

## Bài 2 - Workouts, Fruits and Vegetables

### 1. Requirement Checklist

| # | Requirement | Status | Implementation |
|---|-------------|--------|----------------|
| 1 | Đúng 10 workout theo đề | PASS | `src/data/data.js` chứa đủ `Push-ups` đến `Lunges` |
| 2 | Đúng dữ liệu Fruits và Vegetables | PASS | Hai section và item đúng nội dung PDF trong `data.js` |
| 3 | Workouts bắt buộc dùng `FlatList` | PASS | `App.js` render `workouts` bằng `FlatList` thật |
| 4 | Title `FlatList - Workouts` | PASS | Có title ngay trên danh sách workout |
| 5 | Fruits/Vegetables bắt buộc dùng `SectionList` | PASS | `App.js` render `fruitsVegetables` bằng `SectionList` thật |
| 6 | Title `SectionList - Fruits & Vegetables` | PASS | Có title ngay trên danh sách section |
| 7 | Section header có title và hình ảnh | PASS | `SectionHeader.js` nhận `title`, `imageUrl` và render `Image` |
| 8 | Mỗi item có SELECT/DESELECT | PASS | `SelectableItem.js` đổi label theo prop `selected` |
| 9 | Workouts có thể SELECT/DESELECT | PASS | `renderWorkout` gọi `toggleSelection(item.type)` |
| 10 | Fruits/Vegetables có thể SELECT/DESELECT | PASS | `renderProduce` gọi `toggleSelection(item)` |
| 11 | State theo dõi item được chọn | PASS | `selectedItems` được quản lý bởi `useState([])` |
| 12 | Không thêm item trùng | PASS | `toggleSelection` kiểm tra `includes` trước khi spread thêm item |
| 13 | Deselect xóa đúng item | PASS | Dùng `filter((item) => item !== itemName)` |
| 14 | Hiển thị các item đã chọn ở cuối màn hình | PASS | Panel `SELECTED ITEMS:` hiển thị `selectedItems.join(', ')` hoặc `None` |
| 15 | Workouts có background image | PASS | `ImageBackground` dùng `backgroundImages.workouts` |
| 16 | Fruits & Vegetables có background image | PASS | `ImageBackground` dùng `backgroundImages.produce` |
| 17 | Background có lớp tương phản dễ đọc | PASS | Ảnh giảm opacity; item dùng nền trắng bán trong suốt |
| 18 | Styling bằng `StyleSheet.create` | PASS | Cả ba file component đều dùng `StyleSheet.create` |
| 19 | Không có inline style | PASS | Đã search toàn bộ source; không có `style={{ ... }}` |
| 20 | Không dùng UI library, Router hoặc Navigation | PASS | Chỉ dùng React, React Native và `expo-status-bar` |
| 21 | Ảnh nền và icon section tải được | MANUAL CHECK | Cần thiết bị có mạng để xác minh URI ảnh remote |
| 22 | Hai list cuộn tốt và panel Selected Items không tràn | MANUAL CHECK | Cần kiểm tra trực tiếp trên thiết bị/emulator |

### 2. Files Recommended for Report Screenshots

#### MUST SCREENSHOT - `App.js`

Nên chụp vì file này:

- quản lý `selectedItems` bằng State;
- chứa logic `toggleSelection` chống duplicate và xử lý deselect;
- dùng `FlatList` thật cho Workouts;
- dùng `SectionList` thật cho Fruits/Vegetables;
- dùng hai `ImageBackground` và render khu vực Selected Items.

#### MUST SCREENSHOT - `src/data/data.js`

Nên chụp vì file này:

- thể hiện đúng 10 workout trong đề;
- thể hiện đúng cấu trúc section Fruits và Vegetables;
- chứa URL icon section và background của hai danh sách.

#### MUST SCREENSHOT - `src/components/SelectableItem.js`

Nên chụp vì file này:

- cho thấy Props `label`, `selected`, `onPress`;
- thể hiện nút SELECT/DESELECT bằng `Pressable`;
- thể hiện style khác nhau giữa trạng thái chọn và chưa chọn.

#### MUST SCREENSHOT - `src/components/SectionHeader.js`

Nên chụp vì file này minh họa title và icon của từng section.

#### OPTIONAL - `index.js`, `package.json`, `app.json`

Chỉ cần chụp khi muốn chứng minh entry point và cấu hình project Expo độc lập.

### 3. Code-to-UI Mapping

| Code/File | Logic | Visible Result in Expo |
|-----------|-------|------------------------|
| `workouts` | Dữ liệu 10 bài tập | Danh sách workout từ Push-ups đến Lunges |
| `FlatList` | Render `workouts` | Khung `FlatList - Workouts` có thể cuộn |
| `fruitsVegetables` | Dữ liệu hai section | Danh sách Fruits và Vegetables đúng nội dung đề |
| `SectionList` | Render section và item | Khung `SectionList - Fruits & Vegetables` có thể cuộn |
| `SectionHeader` | Render title và icon từ Props | Header Fruits/Vegetables có hình đại diện riêng |
| `SelectableItem` | Render tên và nút theo trạng thái | Mỗi dòng có SELECT hoặc DESELECT |
| `selectedItems` | State chứa tên item đã chọn | Nút và panel cuối màn hình cập nhật ngay |
| `toggleSelection` | Thêm item mới hoặc lọc item đang chọn | SELECT chuyển thành DESELECT và ngược lại, không duplicate |
| `selectedItems.join(', ')` | Ghép các item được chọn | Panel `SELECTED ITEMS:` liệt kê nhiều loại item |
| `ImageBackground` cho workouts | Đặt ảnh nền và giảm opacity | Ảnh thể thao phía sau danh sách workout |
| `ImageBackground` cho produce | Đặt ảnh nền và giảm opacity | Ảnh rau quả phía sau SectionList |
| `StyleSheet.create` | Quản lý toàn bộ style | Layout, button và trạng thái lựa chọn nhất quán |

### 4. Screenshots of Result to Capture

- Màn hình ban đầu với cả hai title và `SELECTED ITEMS: None`.
- Workout list chưa chọn item nào.
- Sau khi SELECT một số workout, thấy nút DESELECT và panel cuối màn hình cập nhật.
- Sau khi DESELECT một workout, thấy item bị loại khỏi panel.
- Fruits section với title, icon và các fruit item.
- Vegetables section với title, icon và các vegetable item.
- Sau khi SELECT ít nhất một fruit và một vegetable.
- Panel Selected Items có đồng thời workout, fruit và vegetable.
- Ảnh sau khi scroll xuống cuối cả FlatList và SectionList để chứng minh đủ dữ liệu.

---

## Validation Summary

- Đã đọc toàn bộ PDF LAB01 gồm 14 trang và đối chiếu các ảnh mẫu Android/iOS.
- Đã kiểm tra cả bốn file JSON bằng JSON parser: hợp lệ.
- Đã kiểm tra tất cả file `.js`: comment `// 23521720 - Nguyen Minh Tuan` nằm ở dòng đầu tiên.
- Đã search toàn bộ source: không có inline style object, TypeScript, Expo Router, React Navigation, TODO hoặc thư viện UI ngoài.
- Đã xác nhận Bài 1 có 4 post và đầy đủ các trường dữ liệu yêu cầu.
- Đã xác nhận Bài 2 có 10 workout, 2 section, `FlatList`, `SectionList`, hai `ImageBackground` và logic chống duplicate.
- Chưa thể chạy Metro bundle/Expo export vì môi trường thực thi hiện tại chặn truy cập npm registry và chưa có `node_modules`.
- Chưa thể kiểm tra trên emulator/device trong môi trường hiện tại. Cần thực hiện các mục `MANUAL CHECK` bên trên.

Trước khi demo, chạy trong từng project:

```powershell
npm install
npx expo start
```

Sau khi cài dependency thành công, có thể kiểm tra bundle lần lượt trong từng project:

```powershell
npx expo export --platform android
```

Không đưa thư mục `node_modules`, `.expo`, `.npm-cache`, `tmp` hoặc `dist` vào ZIP nộp bài.

---

## Report Submission Notes

- PDF báo cáo phải có ảnh cây cấu trúc folders/files của cả hai project.
- Phải chụp toàn bộ code liên quan, ưu tiên các file được đánh dấu **MUST SCREENSHOT**.
- Phải có ảnh màn hình kết quả cho cả hai bài.
- Màn hình code phải thể hiện dòng `23521720 - Nguyen Minh Tuan`.
- Terminal/CMD khi chụp phải có title `23521720`.
- Phải quay video demo đầy đủ các tương tác của hai bài.
- Upload video lên Google Drive và chèn link video vào PDF.
- Chia sẻ quyền truy cập video cho email giảng viên trong đề: `duypn@uit.edu.vn`.
- Không đưa `node_modules` vào file ZIP.
- Không đưa các thư mục QA/cache như `tmp` hoặc `.npm-cache` vào file ZIP.
- Nếu có `dist` hoặc build directory không cần thiết, loại khỏi ZIP theo hướng dẫn đề.
- File PDF báo cáo không đặt bên trong ZIP source code.
- Tên file theo hướng dẫn đề: `23521720_BTTH1.pdf` và `23521720_BTTH1.zip`.

Nếu dùng Windows CMD, chạy trước khi chụp terminal:

```cmd
title 23521720
```

Nếu dùng PowerShell, chạy:

```powershell
$Host.UI.RawUI.WindowTitle = "23521720"
```

Nếu muốn prompt PowerShell cũng hiển thị `23521720>` trong phiên hiện tại, chạy thêm:

```powershell
function prompt { "23521720> " }
```

---

## Manual Demo Checklist

### Bài 1

- [ ] Mở project `Bai1_SocialMediaFeed` trong Expo.
- [ ] Kiểm tra title `Social Media Feed`.
- [ ] Kiểm tra avatar và toàn bộ ảnh remote tải thành công.
- [ ] Scroll để cho thấy có 4 bài đăng khác nhau.
- [ ] Like một bài và xác nhận Likes tăng đúng 1.
- [ ] Cho thấy nút chuyển thành `Liked` với màu/nền khác.
- [ ] Nhấn lại và xác nhận Likes giảm đúng 1.
- [ ] Nhấn Comments nhiều lần và xác nhận mỗi click tăng 1.
- [ ] Nhấn Shares nhiều lần và xác nhận mỗi click tăng 1.
- [ ] Kiểm tra text/nút không tràn trên thiết bị quay video.

### Bài 2

- [ ] Mở project `Bai2_WorkoutsFruitsVegetables` trong Expo.
- [ ] Kiểm tra title `FlatList - Workouts`.
- [ ] Kiểm tra background workout tải thành công và chữ dễ đọc.
- [ ] Scroll qua toàn bộ 10 workouts.
- [ ] SELECT một workout và xác nhận nút thành DESELECT.
- [ ] DESELECT workout và xác nhận nút trở lại SELECT.
- [ ] Kiểm tra title `SectionList - Fruits & Vegetables`.
- [ ] Kiểm tra background produce tải thành công và chữ dễ đọc.
- [ ] Hiển thị Fruits cùng icon section.
- [ ] Hiển thị Vegetables cùng icon section.
- [ ] SELECT một fruit và một vegetable.
- [ ] Xác nhận item không bị duplicate khi thao tác.
- [ ] DESELECT một fruit/vegetable.
- [ ] Cho thấy `SELECTED ITEMS:` cập nhật với workout, fruit và vegetable.
- [ ] Kiểm tra hai danh sách và panel cuối không bị tràn trên thiết bị quay video.
