# LAB02 REPORT

## Student Information

- MSSV: 23521720
- Name: Nguyen Minh Tuan

## Project Structure

```text
Lab02/
├── Bai1_SocialMediaFeedComponents/
│   ├── App.js
│   ├── index.js
│   ├── package.json
│   ├── app.json
│   ├── assets/
│   │   └── coastal-sunset.png
│   └── src/
│       ├── components/
│       │   ├── ActionButton.js
│       │   ├── PostActions.js
│       │   ├── PostCard.js
│       │   ├── PostContent.js
│       │   ├── PostHeader.js
│       │   └── PostStats.js
│       └── data/
│           └── posts.js
├── Bai2_SettingsFeedback/
│   ├── App.js
│   ├── index.js
│   ├── package.json
│   ├── app.json
│   └── src/
│       └── components/
│           ├── AppHeader.js
│           ├── FeedbackForm.js
│           ├── FeedbackItem.js
│           ├── FeedbackList.js
│           └── SettingSwitch.js
├── Bai3_ReactNavigation/
│   ├── App.js
│   ├── index.js
│   ├── package.json
│   ├── app.json
│   └── src/
│       ├── components/
│       │   ├── AuthHeader.js
│       │   ├── AuthInput.js
│       │   ├── CenteredScreen.js
│       │   └── PrimaryButton.js
│       ├── context/
│       │   └── AuthContext.js
│       ├── navigation/
│       │   ├── AuthStack.js
│       │   ├── MainTabs.js
│       │   └── RootNavigator.js
│       └── screens/
│           ├── CategoriesScreen.js
│           ├── FavouritesScreen.js
│           ├── HomeScreen.js
│           ├── LoginScreen.js
│           ├── ProfileScreen.js
│           └── RegisterScreen.js
└── LAB02_REPORT.md
```

Mỗi bài là một Expo React Native project JavaScript độc lập, có `package.json` riêng. Thư mục gốc không có `package.json`, không dùng Expo Router, TypeScript, Redux, backend, NativeWind hay UI framework ngoài.

Source `Lab01/Bai1_SocialMediaFeed` đã được đọc và đối chiếu trước khi chốt Bài 1. Bản LAB02 giữ nguyên luồng tương tác và bố cục card/feed của LAB01, đồng thời thay ảnh mạng bằng asset cục bộ để kết quả không phụ thuộc kết nối Internet.

## Bài 1 - Social Media Feed Custom Components

### 1. Requirement Checklist

| # | Requirement | Status | Implementation |
|---|-------------|--------|----------------|
| 1 | Giữ chức năng Social Media Feed của BTTH1 | PASS | `App.js`, `PostCard.js` và các component con |
| 2 | Chia app thành custom components nhỏ, có trách nhiệm rõ ràng | PASS | `src/components/` gồm 6 component |
| 3 | Dùng Props truyền dữ liệu từ cha xuống con | PASS | `App` → `PostCard` → `PostHeader`, `PostContent`, `PostStats`, `PostActions` |
| 4 | Component con nhận callback qua Props | PASS | `onLike`, `onComment`, `onShare`, `onPress` |
| 5 | Dùng `useState` quản lý posts | PASS | `const [posts, setPosts] = useState(initialPosts)` trong `App.js` |
| 6 | Không mutate state trực tiếp | PASS | `map` và object spread trong `updatePost` |
| 7 | Có ít nhất 3 bài đăng khác nhau | PASS | 3 object trong `src/data/posts.js` |
| 8 | Data tách khỏi component | PASS | `src/data/posts.js` |
| 9 | Mỗi post có đủ field tối thiểu | PASS | `id`, `username`, `avatar`, `content`, `image`, `likes`, `comments`, `shares`, `liked` |
| 10 | Hiển thị avatar và username | PASS | `PostHeader.js` |
| 11 | Hiển thị text và hình ảnh | PASS | `PostContent.js`, asset `coastal-sunset.png` |
| 12 | Hiển thị likes/comments/shares | PASS | `PostStats.js` |
| 13 | Có nút Like/Comment/Share | PASS | `PostActions.js`, `ActionButton.js` |
| 14 | Like chưa bật → tăng 1 và đổi trạng thái | PASS | `handleLike` trong `App.js` |
| 15 | Like đã bật → giảm 1 và trở lại trạng thái đầu | PASS | `handleLike` dùng `post.liked ? -1 : 1` |
| 16 | Comment tăng 1 mỗi lần nhấn | PASS | `handleComment` |
| 17 | Share tăng 1 mỗi lần nhấn | PASS | `handleShare` |
| 18 | Comment/Share không toggle | PASS | Hai handler luôn cộng 1 |
| 19 | Có divider trong mỗi post | PASS | `styles.divider` trong `PostCard.js` |
| 20 | Danh sách cuộn được | PASS | `FlatList` trong `App.js` |
| 21 | Mỗi component giữ StyleSheet phù hợp | PASS | Mỗi file component có `StyleSheet.create` riêng |
| 22 | Không dùng inline style | PASS | Đã search `style={{` toàn project, không có kết quả |
| 23 | Giao diện hiển thị đúng trên Expo/device | MANUAL CHECK | Cần chạy Expo Go/emulator vì môi trường hiện tại không có device và không cài được npm packages |

### 2. Component Hierarchy

```text
App
└── PostCard
    ├── PostHeader
    ├── PostContent
    ├── PostStats
    └── PostActions
        └── ActionButton
```

- `App`: giữ state danh sách bài đăng và ba handler tương tác.
- `PostCard`: kết hợp các phần của một bài đăng và hiển thị divider.
- `PostHeader`: hiển thị avatar, username và thời gian.
- `PostContent`: hiển thị nội dung text và ảnh.
- `PostStats`: hiển thị ba số liệu tương tác.
- `PostActions`: bố trí ba action và truyền callback.
- `ActionButton`: nút tương tác tái sử dụng; có trạng thái pressed/active.

### 3. Files Recommended for Report Screenshots

#### MUST SCREENSHOT

- `App.js`: thể hiện `useState`, luồng cập nhật immutable, logic Like/Comment/Share và truyền callback bằng Props.
- `src/components/PostCard.js`: thể hiện cách ghép các custom component.
- `src/components/PostActions.js`: thể hiện callback Props và sử dụng `ActionButton` nhiều lần.
- `src/components/ActionButton.js`: thể hiện custom component tái sử dụng và trạng thái Like trực quan.
- `src/data/posts.js`: chứng minh data tách riêng và có đủ 3 post/field.

#### OPTIONAL

- `PostHeader.js`: avatar và username.
- `PostContent.js`: text và image Props.
- `PostStats.js`: số likes/comments/shares.
- Cây thư mục `src/components` trong Explorer để minh hoạ cấu trúc.

### 4. Code-to-UI Mapping

| Code/File | Logic | Visible Result in Expo |
|-----------|-------|------------------------|
| `PostHeader.js` | Avatar + username | Phần đầu mỗi bài đăng |
| `PostContent.js` | Text + local image | Nội dung và ảnh phong cảnh |
| `PostStats.js` | Nhận ba count qua Props | Dòng likes/comments/shares |
| `PostActions.js` | Like/Comment/Share actions | Ba nút dưới mỗi post |
| `ActionButton.js` | Nút tái sử dụng, active/pressed state | Like đổi màu và đổi biểu tượng khi bật |
| `handleLike` | Toggle `liked` và ±1 likes | Like tăng/giảm đúng |
| `handleComment` | Cộng 1 comment | Comment count tăng mỗi lần nhấn |
| `handleShare` | Cộng 1 share | Share count tăng mỗi lần nhấn |
| `FlatList` | Render toàn bộ posts | Feed cuộn được |

### 5. Screenshots of Result to Capture

- Feed lúc mới mở, thấy phần header và post đầu.
- Màn hình sau khi scroll để thấy nhiều post.
- Một post trước và sau khi Like để thấy count + trạng thái nút.
- Cùng post sau khi nhấn Like lần hai để chứng minh Unlike.
- Comment count sau nhiều lần nhấn.
- Share count sau nhiều lần nhấn.

## Bài 2 - Settings and Feedback

### 1. Requirement Checklist

| # | Requirement | Status | Implementation |
|---|-------------|--------|----------------|
| 1 | Logo ở trên cùng | PASS | `AppHeader.js` với biểu tượng React |
| 2 | Tên app căn giữa | PASS | `React Native App` trong `AppHeader.js` |
| 3 | Dark Mode mặc định OFF | PASS | `useState(false)` trong `App.js` |
| 4 | Dark Mode ON đổi nền tối và chữ sáng toàn UI | PASS | Conditional StyleSheet cho SafeArea, header, card, input, list |
| 5 | Dark Mode OFF dùng nền sáng và chữ tối | PASS | Các style mặc định |
| 6 | Notifications mặc định ON | PASS | `useState(true)` trong `App.js` |
| 7 | Hai switch hoạt động độc lập | PASS | Hai state riêng: `isDarkMode`, `notificationsEnabled` |
| 8 | Dùng custom switch component tái sử dụng | PASS | `SettingSwitch.js` được dùng hai lần |
| 9 | Switch nhận label/value/event bằng Props | PASS | `label`, `value`, `onValueChange` |
| 10 | TextInput nhập nhiều dòng | PASS | `multiline`, `numberOfLines={5}`, `textAlignVertical="top"` |
| 11 | TextInput có placeholder | PASS | `Your feedback here...` |
| 12 | Có nút Send Feedback | PASS | `FeedbackForm.js` |
| 13 | Feedback hợp lệ được thêm vào list | PASS | `setFeedbacks` trong `handleSubmit` |
| 14 | Feedback mới nhất ở trên cùng | PASS | `[newFeedback, ...currentFeedbacks]` |
| 15 | Reset input sau khi gửi | PASS | `setFeedbackText('')` |
| 16 | Input rỗng/whitespace không làm gì | PASS | `if (!trimmedFeedback) return` |
| 17 | Notifications ON hiển thị Alert | PASS | `Alert.alert` trong điều kiện `notificationsEnabled` |
| 18 | Notifications OFF không hiển thị Alert | PASS | Không vào nhánh Alert khi false |
| 19 | Có section Frequently Asked Questions | PASS | `FeedbackList.js` |
| 20 | Hiển thị toàn bộ feedback | PASS | `feedbacks.map(...)` |
| 21 | Màn hình cuộn khi feedback dài | PASS | Toàn bộ nội dung nằm trong `ScrollView` |
| 22 | Props dùng hợp lý | PASS | Tất cả component con nhận state/callback qua Props |
| 23 | `useState` quản lý 4 nhóm dữ liệu động | PASS | Dark Mode, Notifications, input, feedback list |
| 24 | Dùng `StyleSheet.create` | PASS | Có trong `App.js` và từng component |
| 25 | Không inline style | PASS | Đã search, không có `style={{...}}` |
| 26 | Giao diện/Alert chạy đúng trên device | MANUAL CHECK | Cần Expo Go/emulator/device |

### 2. Component Hierarchy

```text
App
├── AppHeader
├── SettingSwitch (Dark Mode)
├── SettingSwitch (Notifications)
├── FeedbackForm
└── FeedbackList
    └── FeedbackItem
```

- `App`: giữ bốn state và xử lý submit/Alert.
- `AppHeader`: logo và tên ứng dụng.
- `SettingSwitch`: hàng switch dùng lại cho hai setting.
- `FeedbackForm`: input nhiều dòng và nút submit.
- `FeedbackList`: tiêu đề FAQs, empty state và danh sách.
- `FeedbackItem`: card cho từng phản hồi.

### 3. Files Recommended for Report Screenshots

#### MUST SCREENSHOT

- `App.js`: bốn state, hai switch độc lập, `handleSubmit`, prepend, reset và Alert.
- `src/components/SettingSwitch.js`: custom component tái sử dụng bằng Props.
- `src/components/FeedbackForm.js`: multiline TextInput và Send Feedback.
- `src/components/FeedbackList.js`: FAQs, empty state và render list.

#### OPTIONAL

- `AppHeader.js`: logo/tên app.
- `FeedbackItem.js`: item tái sử dụng và conditional dark style.
- `app.json`: cấu hình Expo project.

### 4. Code-to-UI Mapping

| Code/File | Logic | Visible Result |
|-----------|-------|----------------|
| `AppHeader.js` | Logo + app name | Header căn giữa trên cùng |
| `SettingSwitch.js` | Reusable Switch | Hai hàng Dark Mode/Notifications |
| `isDarkMode` | Theme state | Toàn màn hình chuyển Light/Dark |
| `notificationsEnabled` | Điều khiển Alert | Chỉ báo cảm ơn khi switch ON |
| `FeedbackForm.js` | Input + submit callback | Khu nhập phản hồi nhiều dòng |
| `feedbacks` | List state | Nội dung FAQs |
| `handleSubmit` | Trim, prepend, reset, Alert | Feedback mới lên đầu và input rỗng lại |
| `FeedbackItem.js` | Render một feedback | Card `Q` cho từng phản hồi |

### 5. Screenshots of Result to Capture

- Light Mode lúc khởi động; Dark Mode OFF, Notifications ON.
- Dark Mode ON để chứng minh toàn UI đổi theme.
- Notifications OFF nhưng Dark Mode không đổi.
- Submit feedback khi Notifications OFF: list cập nhật, không có Alert.
- Notifications ON và Alert sau submit hợp lệ.
- Feedback mới nhất ở đầu list và input đã reset.
- Empty input không thay đổi list và không Alert.
- Nhiều feedback rồi scroll xuống.

## Bài 3 - React Navigation

### 1. Requirement Checklist

| # | Requirement | Status | Implementation |
|---|-------------|--------|----------------|
| 1 | Có trạng thái checking khi app khởi động | PASS | `isChecking` trong `AuthContext.js` và UI loading trong `RootNavigator.js` |
| 2 | Authentication bằng React Context + `useState` | PASS | `AuthContext.js` |
| 3 | Có `isAuthenticated`, `login`, `logout` | PASS | Context value |
| 4 | Không backend/API/database | PASS | Logic local hoàn toàn |
| 5 | Không persistence auth | PASS | Có chủ đích; đóng app sẽ trở về Login |
| 6 | Có `NavigationContainer` | PASS | `RootNavigator.js` |
| 7 | Auth/Main phụ thuộc auth state | PASS | Conditional `isAuthenticated ? <MainTabs /> : <AuthStack />` |
| 8 | Có AuthStack | PASS | `AuthStack.js` dùng Native Stack Navigator |
| 9 | AuthStack có Login và Register | PASS | Hai `Stack.Screen` |
| 10 | Login → Register | PASS | `navigation.navigate('Register')` |
| 11 | Register → Login | PASS | `navigation.goBack()` |
| 12 | Login có logo, Welcome, email, password, LOG IN | PASS | `LoginScreen.js` + custom components |
| 13 | Email keyboard và không auto-capitalize | PASS | `keyboardType="email-address"`, `autoCapitalize="none"` |
| 14 | Password dùng `secureTextEntry` | PASS | `LoginScreen.js` |
| 15 | Credential đúng theo MSSV/họ tên | PASS | `23521720@gm.uit.edu.vn` / `nguyenminhtuan` trong `AuthContext.js` |
| 16 | Trim email trước so sánh | PASS | `email.trim().toLowerCase()` |
| 17 | Login đúng cập nhật auth state | PASS | `setIsAuthenticated(true)` |
| 18 | Login sai hiển thị Alert và không vào MainTabs | PASS | `Alert.alert('Login failed', ...)` |
| 19 | Register có Username, Email, Password | PASS | `RegisterScreen.js` |
| 20 | Không hiện thực registration thật | PASS | CREATE chỉ báo rõ đây là demo, không lưu account |
| 21 | Có Main Bottom Tabs | PASS | `MainTabs.js` dùng Bottom Tab Navigator |
| 22 | Có Home tab | PASS | `HomeScreen.js` |
| 23 | Có Categories tab | PASS | `CategoriesScreen.js` |
| 24 | Có Favourites tab | PASS | `FavouritesScreen.js` |
| 25 | Có Profile tab | PASS | `ProfileScreen.js` |
| 26 | Tab bar có icon | PASS | `tabIcons` trong `MainTabs.js` |
| 27 | Favourites có badge 3 | PASS | `tabBarBadge: 3` |
| 28 | Main screens không hiện navigation header | PASS | `headerShown: false` |
| 29 | Nội dung screen nằm giữa | PASS | `CenteredScreen.js` và layout Profile |
| 30 | Profile có LOG OUT | PASS | `ProfileScreen.js` |
| 31 | Logout cập nhật auth state thật | PASS | `logout()` đặt `isAuthenticated = false` |
| 32 | Logout quay lại Login qua root flow | PASS | Root navigator tự đổi sang AuthStack, không dùng `navigation.replace` |
| 33 | Custom input/button dùng lại | PASS | `AuthInput.js`, `PrimaryButton.js`, `AuthHeader.js` |
| 34 | Keyboard không che input | PASS | `KeyboardAvoidingView` + `ScrollView` |
| 35 | Không dựng UI bằng absolute positioning | PASS | Layout Flexbox, không có `position: 'absolute'` |
| 36 | Dependencies React Navigation đúng | MANUAL CHECK | Đã khai báo đúng phiên bản; npm registry bị chặn nên chưa cài/bundle được trong môi trường này |
| 37 | Điều hướng chạy đúng trên Expo/device | MANUAL CHECK | Cần cài packages và chạy Expo Go/emulator/device |

### 2. Navigation Architecture

```text
AuthProvider
└── RootNavigator
    └── NavigationContainer
        └── Auth state
            ├── Not authenticated
            │   └── AuthStack
            │       ├── Login
            │       └── Register
            └── Authenticated
                └── MainTabs
                    ├── Home
                    ├── Categories
                    ├── Favourites (badge: 3)
                    └── Profile
```

`AuthContext` là nguồn trạng thái xác thực duy nhất. `login(email, password)` kiểm tra credential local và chỉ bật `isAuthenticated` khi đúng. `logout()` đặt state về false. `RootNavigator` đọc state đó để render đúng navigator; không dùng điều hướng thủ công để giả lập login/logout.

Auth không được lưu bền vững. Sau khi đóng hoàn toàn ứng dụng, lần mở tiếp theo bắt đầu ở Login; đây là lựa chọn phù hợp phạm vi bài vì PDF không bắt buộc persistence.

### 3. Files Recommended for Report Screenshots

#### MUST SCREENSHOT

- `App.js`: `AuthProvider` bao quanh navigation.
- `src/context/AuthContext.js`: state, credential, login/logout.
- `src/navigation/RootNavigator.js`: `NavigationContainer` và rẽ nhánh Auth/Main.
- `src/navigation/AuthStack.js`: Login/Register stack.
- `src/navigation/MainTabs.js`: 4 tab, icon, badge 3, hidden headers.
- `src/screens/LoginScreen.js`: login UI, Alert và link Register.
- `src/screens/RegisterScreen.js`: UI đăng ký và link quay lại.
- `src/screens/ProfileScreen.js`: thông tin sinh viên và LOG OUT.

#### OPTIONAL

- `AuthInput.js`: input component tái sử dụng.
- `PrimaryButton.js`: button component tái sử dụng.
- `CenteredScreen.js`: layout dùng lại cho main screens.
- `HomeScreen.js`, `CategoriesScreen.js`, `FavouritesScreen.js`: component screen đơn giản.

### 4. Code-to-UI Mapping

| Code/File | Logic | Visible Result |
|-----------|-------|----------------|
| `AuthContext.js` | `isAuthenticated`, credential, login/logout | Chuyển đổi Auth/Main đúng trạng thái |
| `RootNavigator.js` | NavigationContainer + conditional flow | App mở Login, login đúng mở tabs |
| `AuthStack.js` | Login/Register stack | Điều hướng Login ↔ Register |
| `LoginScreen.js` | Form + credential check + Alert | Màn hình Login và báo lỗi khi sai |
| `RegisterScreen.js` | Registration UI only | Màn hình Create New Account, không tạo account thật |
| `MainTabs.js` | 4 tabs, icons, hidden headers | Bottom tab bar |
| `tabBarBadge` | Giá trị 3 cho Favourites | Badge đỏ `3` |
| `CenteredScreen.js` | Layout dùng lại | Tên màn hình căn giữa |
| `ProfileScreen.js` | Gọi `logout` | LOG OUT và quay về Login |

### 5. Screenshots of Result to Capture

- Login screen lúc mở app.
- Register screen sau khi nhấn `Sign up here!`.
- Quay lại Login bằng `Login now!`.
- Email/password đang nhập với keyboard phù hợp.
- Alert khi đăng nhập sai.
- Login đúng bằng `23521720@gm.uit.edu.vn` / `nguyenminhtuan` và chuyển tới Home.
- Categories tab.
- Favourites tab và badge `3`.
- Profile tab với LOG OUT.
- Màn hình Login sau khi LOG OUT.

## Validation Performed

### Environment

- Node.js: `v24.20.0`
- npm: `11.19.0`
- Expo SDK target: `57`
- Device/emulator: không khả dụng trong môi trường thực hiện hiện tại.

### Commands and Checks

| Validation | Result |
|------------|--------|
| Đọc/trích xuất toàn bộ PDF 25 trang và kiểm tra các ảnh mẫu quan trọng | PASS |
| Đọc và đối chiếu source `Lab01/Bai1_SocialMediaFeed` | PASS - giữ luồng Like/Comment/Share và bố cục feed; dùng ảnh cục bộ trong LAB02 |
| `rg --files` kiểm tra cấu trúc và file source | PASS |
| PowerShell kiểm tra dòng đầu 32 file `.js` | PASS - 0 file thiếu comment |
| `rg -n "TODO\|FIXME"` trên 3 project | PASS - không có kết quả |
| `rg -n "style=\{\{"` trên 3 project | PASS - không có inline style object |
| Search `.ts`/`.tsx` | PASS - không có TypeScript |
| `JSON.parse` cho 3 `package.json` và 3 `app.json` | PASS |
| Script Node kiểm tra relative import/require và asset cục bộ | PASS - 32 files, 0 đường dẫn thiếu |
| Kiểm tra root `package.json` | PASS - không tồn tại |
| Đối chiếu phiên bản với Expo docs và npm package registry | PASS - Expo SDK 57 dùng React Native 0.86/React 19.2.3; các version khai báo đều tồn tại |
| `npm.cmd install --no-audit --no-fund --fetch-retries=0` riêng cho cả 3 project | BLOCKED - sandbox từ chối kết nối npm registry với `EACCES` |
| Expo export/bundle | NOT RUN - không có `node_modules` vì bước cài đặt bị chặn |
| Test trên Expo Go/emulator/device | MANUAL CHECK |

### Dependencies Declared

Cả ba project:

- `expo ~57.0.26`
- `expo-status-bar ~57.0.1`
- `react 19.2.3`
- `react-native 0.86.3`

Riêng Bài 3:

- `@react-navigation/native ^7.3.18`
- `@react-navigation/native-stack ^7.20.0`
- `@react-navigation/bottom-tabs ^7.20.0`
- `react-native-screens ~4.26.0`
- `react-native-safe-area-context ~5.7.0`

Không có dependency ngoài phạm vi yêu cầu. Trước khi demo, cần chạy `npm install` trong từng project ở máy có kết nối npm registry. Sau đó chạy `npx expo-doctor` và `npx expo export --platform android` (hoặc `--platform ios` trên macOS) cho từng project.

### Remaining Errors/Warnings

- Không phát hiện lỗi tĩnh, import/asset path thiếu, TODO, TypeScript hoặc inline style.
- Các phiên bản dependency đã được xác minh tồn tại và tương thích theo tài liệu Expo/React Navigation; chưa có kết quả bundle/runtime vì sandbox chặn tải dependency.
- Chưa xác nhận trực quan UI trên device/emulator; mọi mục tương tác cuối cùng cần manual check.

## Report Submission Notes

- Tên PDF: `23521720_BTTH2.pdf`.
- PDF cần có cấu trúc folders/files, toàn bộ code liên quan và màn hình kết quả.
- Ảnh code phải thể hiện dòng `23521720 - Nguyen Minh Tuan`.
- Đặt title CMD/Terminal là `23521720`.

Windows CMD:

```cmd
title 23521720
```

PowerShell:

```powershell
$Host.UI.RawUI.WindowTitle = "23521720"
```

- Quay video demo toàn bộ yêu cầu trên máy thật hoặc máy ảo.
- Upload video lên Google Drive và chèn link vào PDF.
- Chia sẻ quyền truy cập video cho email giảng viên: `duypn@uit.edu.vn`.
- ZIP source với tên `23521720_BTTH2.zip`.
- Không đưa `node_modules`, `.expo`, `dist` hoặc build output vào ZIP.
- File PDF không nằm trong ZIP.

## Manual Demo Checklist

### Chuẩn bị chung

- [ ] Mở PowerShell/CMD và đặt title `23521720`.
- [ ] Trong từng project, chạy `npm install`.
- [ ] Chạy `npx expo-doctor` và xử lý mọi cảnh báo version nếu có.
- [ ] Mở app bằng Expo Go/emulator/device.
- [ ] Kiểm tra không có Metro/import/asset/navigation error.

### Bài 1

- [ ] Mở Social Media Feed.
- [ ] Kiểm tra có ít nhất 3 posts với avatar, username, text và image.
- [ ] Scroll qua nhiều posts.
- [ ] Like post → likes +1 và nút đổi trạng thái.
- [ ] Like lại → likes -1 và nút trở lại ban đầu.
- [ ] Nhấn Comment nhiều lần → tăng mỗi lần.
- [ ] Nhấn Share nhiều lần → tăng mỗi lần.

### Bài 2

- [ ] App mở ở Light Mode.
- [ ] Dark Mode mặc định OFF.
- [ ] Notifications mặc định ON.
- [ ] Bật Dark Mode và kiểm tra toàn giao diện nền tối/chữ sáng.
- [ ] Tắt Dark Mode và kiểm tra giao diện sáng trở lại.
- [ ] Chứng minh Dark Mode và Notifications hoạt động độc lập.
- [ ] Nhập feedback nhiều dòng.
- [ ] Submit khi Notifications ON → có Alert.
- [ ] Kiểm tra input reset và feedback ở đầu FAQs.
- [ ] Tắt Notifications rồi submit feedback mới → không có Alert.
- [ ] Submit chuỗi rỗng/chỉ khoảng trắng → không thay đổi và không Alert.
- [ ] Thêm nhiều feedback và scroll.

### Bài 3

- [ ] App mở ở Login.
- [ ] Login → Register bằng `Sign up here!`.
- [ ] Register → Login bằng `Login now!`.
- [ ] Nhập login sai → Alert lỗi và vẫn ở Login.
- [ ] Nhập email `23521720@gm.uit.edu.vn`.
- [ ] Nhập password `nguyenminhtuan`.
- [ ] Login thành công → Home tab.
- [ ] Mở Categories tab.
- [ ] Mở Favourites tab và chỉ rõ badge `3`.
- [ ] Mở Profile tab.
- [ ] Nhấn LOG OUT.
- [ ] Kiểm tra app quay về Login.
- [ ] Đóng hoàn toàn và mở lại app; xác nhận auth không persistence như đã ghi trong report.
