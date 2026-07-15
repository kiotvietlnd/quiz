// CẤU HÌNH HỆ THỐNG DÀNH CHO ADMIN
const APP_CONFIG = {
    // Dán link API của Google Apps Script vào đây
    API_URL: "https://script.google.com/macros/s/AKfycby9-Wat5Vp_tb22qBMQoWxI1K3AXkc5XTUnfAsmntpwFdzxKMB5HXrvmKTSxBCR0zHDmg/exec", 
    COURSE_NAME: "KIOT_RENEWAL_Q3_2026" 
};

// ============================================================================
// DỮ LIỆU BÀI TẬP THỰC HÀNH TÁI KÝ RETAIL (4 BUỔI)
// ============================================================================
const CODELAB_DATA = [
  {
    id: "session_1",
    title: "Buổi 1: Thiết lập Hàng hóa cơ bản & Nâng cao",
    exercises: [
      { title: "Danh mục Hàng hóa", isGroupHeader: true },
      {
        title: "Bài tập 1: Thiết lập danh mục cơ bản",
        requirements: [
          "1. Tạo Nhóm hàng mẹ tên là 'Áo Sơ Mi' và Nhóm hàng con là 'Áo Sơ Mi Nam'.",
          "2. Thiết lập trước một Thương hiệu mới tên là 'Kiot-Fashion'.",
          "3. Thiết lập trước một Vị trí trưng bày tên là 'Kệ A1'."
        ],
        instructions: [
          "1. Tại menu Hàng hóa, chọn Danh sách hàng hóa. Ở cột Nhóm hàng bên trái, nhấn Tạo mới, nhập Tên nhóm 'Áo Sơ Mi' rồi nhấn Lưu.",
          "2. Tiếp tục nhấn Tạo mới ở cột Nhóm hàng, nhập Tên nhóm 'Áo Sơ Mi Nam', tại mục Nhóm cha chọn 'Áo Sơ Mi', sau đó nhấn Lưu.",
          "3. Nhấn nút + Tạo mới (Hàng hóa) ở góc phải màn hình. Tại form Thêm mới, tìm đến mục Thương hiệu, nhấn Tạo mới, nhập 'Kiot-Fashion' và nhấn Lưu.",
          "4. Cũng tại form Thêm mới, tìm đến mục Vị trí, nhấn Tạo mới, nhập 'Kệ A1' và nhấn Lưu (Sau đó có thể tắt form Thêm mới này đi)."
        ],
        confirm: "Chụp ảnh màn hình hiển thị danh sách nhóm hàng bên trái có 'Áo Sơ Mi Nam' nằm thụt lề dưới 'Áo Sơ Mi'."
      },
      {
        title: "Bài tập 2: Thêm mới hàng hóa và tạo dữ liệu nháp",
        requirements: [
          "1. Thêm mới hàng hóa chính: 'Áo sơ mi nam lụa cao cấp', thuộc nhóm Áo Sơ Mi Nam, thương hiệu Kiot-Fashion, vị trí Kệ A1. Giá bán 350.000đ, Giá vốn 200.000đ, Tồn kho ban đầu là 50.",
          "2. Thêm mới một hàng hóa nháp: 'Sản phẩm Test 01', giá bán 10.000đ."
        ],
        instructions: [
          "1. Tại màn hình Danh sách hàng hóa, nhấn nút + Tạo mới -> Chọn Thêm Hàng hóa.",
          "2. Nhập Tên hàng: 'Áo sơ mi nam lụa cao cấp', chọn Nhóm hàng: 'Áo Sơ Mi Nam'.",
          "3. Điền Giá vốn: 200.000, Giá bán: 350.000, Tồn kho: 50.",
          "4. Ở các mục bên phải, chọn Thương hiệu: 'Kiot-Fashion' và Vị trí: 'Kệ A1', sau đó nhấn Lưu.",
          "5. Tiếp tục nhấn + Tạo mới -> Thêm Hàng hóa, nhập Tên hàng: 'Sản phẩm Test 01', Giá bán: 10.000, sau đó nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị thành công 2 sản phẩm vừa tạo."
      },
      {
        title: "Bài tập 3: Cập nhật thông tin và sao chép hàng hóa",
        requirements: [
          "1. Cập nhật giá bán của 'Áo sơ mi nam lụa cao cấp' từ 350.000đ lên 399.000đ.",
          "2. Dùng tính năng Sao chép để tạo nhanh một sản phẩm mới dựa trên áo sơ mi lụa, đổi tên thành 'Áo sơ mi nam lụa cao cấp (Màu Đen)', tồn kho ban đầu là 30."
        ],
        instructions: [
          "1. Tại Danh sách hàng hóa, tìm kiếm sản phẩm 'Áo sơ mi nam lụa cao cấp', nhấn nút Chỉnh sửa (biểu tượng cây bút).",
          "2. Đổi Giá bán thành 399.000 và nhấn Lưu.",
          "3. Tìm lại sản phẩm 'Áo sơ mi nam lụa cao cấp' vừa đổi giá, nhấn vào nút Sao chép (biểu tượng 2 tờ giấy) ở cuối dòng.",
          "4. Hệ thống mở form mới, bạn sửa Tên hàng thành 'Áo sơ mi nam lụa cao cấp (Màu Đen)', xóa Mã hàng cũ để hệ thống tự sinh mã mới, nhập Tồn kho: 30 và nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình cho thấy sản phẩm màu đen mới được tạo có giá 399.000đ."
      },
      {
        title: "Bài tập 4: Quản lý trạng thái và xóa dữ liệu",
        requirements: [
          "1. Tạm thời ngừng kinh doanh sản phẩm 'Áo sơ mi nam lụa cao cấp (Màu Đen)', sau đó mở cho phép kinh doanh trở lại.",
          "2. Xóa vĩnh viễn 'Sản phẩm Test 01' ra khỏi hệ thống phần mềm."
        ],
        instructions: [
          "1. Tại Danh sách hàng hóa, tích chọn vào ô vuông trước 'Áo sơ mi nam lụa cao cấp (Màu Đen)'.",
          "2. Nhấn nút Thao tác (biểu tượng 3 dấu chấm) -> Chọn Ngừng kinh doanh.",
          "3. Để mở lại, tại bộ lọc Trạng thái bên trái, chọn 'Ngừng kinh doanh'. Tích chọn lại vào sản phẩm đó -> Nhấn Thao tác -> Chọn Cho phép kinh doanh.",
          "4. Tìm kiếm 'Sản phẩm Test 01', tích chọn vào ô vuông trước tên sản phẩm.",
          "5. Nhấn Thao tác -> Chọn Xóa -> Nhấn Đồng ý để xác nhận xóa vĩnh viễn."
        ],
        confirm: "Chụp ảnh màn hình lịch sử thao tác hoặc màn hình tìm kiếm không còn 'Sản phẩm Test 01'."
      },
      {
        title: "Bài tập 5: Xem thẻ kho sản phẩm",
        requirements: [
          "1. Truy cập vào chi tiết sản phẩm 'Áo sơ mi nam lụa cao cấp' để kiểm tra lịch sử biến động số lượng.",
          "2. Xem giao dịch Khởi tạo tồn kho ban đầu của sản phẩm này."
        ],
        instructions: [
          "1. Tại màn hình Danh sách hàng hóa, bấm trực tiếp vào dòng chữ tên sản phẩm 'Áo sơ mi nam lụa cao cấp'.",
          "2. Hệ thống hiển thị bảng thông tin chi tiết, bấm chuyển sang tab Thẻ kho.",
          "3. Quan sát các dòng lịch sử giao dịch ghi nhận số lượng nhập kho 50 cái từ lúc tạo mới."
        ],
        confirm: "Chụp ảnh màn hình Thẻ kho của sản phẩm hiển thị giao dịch Khởi tạo."
      },
      
      { title: "Hàng hóa thường", isGroupHeader: true },
      {
        title: "Bài tập 1: Thêm mới hàng hóa và tạo dữ liệu nháp",
        requirements: [
          "1. Thêm mới một sản phẩm kinh doanh: 'Nước khoáng Lavie 500ml', thuộc nhóm 'Nước giải khát' (có thể thêm mới nhóm nếu chưa có). Giá vốn: 4.000đ, Giá bán: 5.000đ, Tồn kho ban đầu: 100.",
          "2. Thêm mới một hàng hóa nháp: 'Sản phẩm Test 02', giá bán 1.000đ để dự phòng cho thao tác xóa sau này."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Hàng hóa -> chọn Danh sách hàng hóa.",
          "2. Nhấn vào nút + Tạo mới và chọn Hàng hóa.",
          "3. Nhập Tên hàng hóa: 'Nước khoáng Lavie 500ml', Nhóm hàng: 'Nước giải khát' (nhấn Tạo mới nếu chưa có).",
          "4. Điền Giá vốn: 4.000, Giá bán: 5.000, Tồn kho: 100. Sau đó nhấn Lưu.",
          "5. Lặp lại thao tác + Tạo mới để thêm 'Sản phẩm Test 02' với giá bán 1.000đ rồi nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị thành công 2 sản phẩm vừa tạo."
      },
      {
        title: "Bài tập 2: Cập nhật thông tin và xóa hàng hóa",
        requirements: [
          "1. Cập nhật giá bán của 'Nước khoáng Lavie 500ml' từ 5.000đ lên 6.000đ.",
          "2. Xóa vĩnh viễn 'Sản phẩm Test 02' ra khỏi hệ thống phần mềm."
        ],
        instructions: [
          "1. Trong Danh sách hàng hóa, tìm kiếm sản phẩm 'Nước khoáng Lavie 500ml' và nhấn vào biểu tượng Chỉnh sửa (hình cây bút).",
          "2. Thay đổi Giá bán thành 6.000 và nhấn Lưu.",
          "3. Tìm đến 'Sản phẩm Test 02', tích chọn vào ô vuông đầu dòng.",
          "4. Nhấn Thao tác (biểu tượng 3 dấu chấm) -> Chọn Xóa -> chọn Đồng ý để xóa hoàn toàn."
        ],
        confirm: "Chụp ảnh màn hình tìm kiếm không còn 'Sản phẩm Test 02' và Lavie đã cập nhật giá 6.000đ."
      },
      {
        title: "Bài tập 3: Thiết lập và quản lý Đơn vị tính",
        requirements: [
          "1. Kích hoạt tính năng sử dụng Đơn vị tính trong hệ thống.",
          "2. Cập nhật sản phẩm 'Nước khoáng Lavie 500ml' để thêm đơn vị tính lớn là 'Thùng' (1 Thùng = 24 Chai), giá bán 1 Thùng là 130.000đ."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Thiết lập -> Thiết lập cửa hàng -> Hàng hóa.",
          "2. Kéo tìm dòng Đơn vị tính và chuyển từ Đang tắt sang bật xanh để kích hoạt tính năng.",
          "3. Quay lại menu Hàng hóa -> Danh sách hàng hóa, tìm và nhấn Chỉnh sửa sản phẩm 'Nước khoáng Lavie 500ml'.",
          "4. Cuộn xuống mục Quản lý theo đơn vị tính và thuộc tính, nhấn Thiết lập.",
          "5. Ở Đơn vị cơ bản (cấp 1) nhập 'Chai'. Ở dòng dưới (cấp 2) nhập 'Thùng', Giá trị quy đổi là 24, Giá bán nhập 130.000.",
          "6. Nhấn Lưu để hoàn tất."
        ],
        confirm: "Chụp ảnh màn hình hiển thị sản phẩm Lavie có 2 đơn vị tính Chai và Thùng trong danh sách."
      },
      {
        title: "Bài tập 4: Tìm kiếm, lọc và in tem mã vạch",
        requirements: [
          "1. Kích hoạt tính năng In tem mã vạch trong phần Thiết lập (nếu chưa bật).",
          "2. Lọc tìm sản phẩm 'Nước khoáng Lavie 500ml' và in 10 tem mã vạch cho sản phẩm này."
        ],
        instructions: [
          "1. Vào menu Thiết lập -> Thiết lập cửa hàng -> Hàng hóa -> Bật xanh tính năng In tem mã vạch.",
          "2. Quay lại màn hình Danh sách hàng hóa, sử dụng thanh tìm kiếm để tra cứu chữ 'Lavie'.",
          "3. Tích chọn vào ô vuông trước tên sản phẩm 'Nước khoáng Lavie 500ml'.",
          "4. Nhấn vào nút In tem mã (hoặc Thao tác -> In tem mã), nhập số lượng tem cho mỗi loại là 10.",
          "5. Nhấn tiếp nút In tem mã, chọn thông tin cần hiển thị và ấn Xem bản in để hoàn thành."
        ],
        confirm: "Chụp ảnh màn hình cửa sổ xem trước bản in tem mã vạch của sản phẩm Lavie."
      },
      {
        title: "Bài tập 5: Xem phân tích và ngừng kinh doanh",
        requirements: [
          "1. Tạm ngừng kinh doanh sản phẩm 'Nước khoáng Lavie 500ml' trên toàn hệ thống.",
          "2. Truy cập vào trang chi tiết của sản phẩm để xem phân tích hiệu quả kinh doanh."
        ],
        instructions: [
          "1. Tại Danh sách hàng hóa, tích chọn sản phẩm 'Nước khoáng Lavie 500ml'.",
          "2. Nhấn Thao tác (biểu tượng 3 chấm) -> Chọn Ngừng kinh doanh.",
          "3. Mở bộ lọc Trạng thái hàng hóa ở cột trái, chọn 'Ngừng kinh doanh' để tìm lại sản phẩm vừa ẩn.",
          "4. Nhấn trực tiếp vào tên sản phẩm để vào trang chi tiết.",
          "5. Nhấn vào nút Xem phân tích để mở biểu đồ thống kê doanh thu, lợi nhuận."
        ],
        confirm: "Chụp ảnh màn hình biểu đồ phân tích kinh doanh của sản phẩm Lavie."
      },

      { title: "Hàng Dịch vụ", isGroupHeader: true },
      {
        title: "Bài tập 1: Thêm mới hàng dịch vụ và tạo dữ liệu nháp",
        requirements: [
          "1. Thêm mới một sản phẩm dịch vụ: 'Phí giao hàng và lắp đặt', thuộc nhóm 'Dịch vụ cộng thêm'. Giá bán: 150.000đ, cho phép bán trực tiếp.",
          "2. Thêm mới một dịch vụ nháp: 'Dịch vụ Test 03', giá bán 10.000đ để dự phòng xóa."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Hàng hóa -> chọn Danh sách hàng hóa.",
          "2. Nhấn vào nút + Tạo mới và chọn Dịch vụ.",
          "3. Nhập Tên hàng: 'Phí giao hàng và lắp đặt', Nhóm hàng: 'Dịch vụ cộng thêm' (nhấn Tạo mới nhóm nếu chưa có).",
          "4. Điền Giá bán: 150.000 và tích chọn ô 'Bán trực tiếp' để dịch vụ hiển thị trên màn hình Bán hàng. Sau đó nhấn Lưu.",
          "5. Lặp lại thao tác + Tạo mới -> Dịch vụ để thêm 'Dịch vụ Test 03' với giá bán 10.000đ rồi nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị thành công 2 dịch vụ vừa tạo."
      },
      {
        title: "Bài tập 2: Cập nhật thông tin và xóa hàng dịch vụ",
        requirements: [
          "1. Cập nhật giá bán của 'Phí giao hàng và lắp đặt' từ 150.000đ lên 200.000đ.",
          "2. Xóa vĩnh viễn 'Dịch vụ Test 03' ra khỏi hệ thống phần mềm."
        ],
        instructions: [
          "1. Trong Danh sách hàng hóa, tìm kiếm tên 'Phí giao hàng và lắp đặt' và nhấn vào biểu tượng Chỉnh sửa (hình cây bút).",
          "2. Thay đổi Giá bán thành 200.000 và nhấn Lưu.",
          "3. Tìm đến 'Dịch vụ Test 03', tích chọn vào ô vuông ở đầu dòng của dịch vụ này.",
          "4. Nhấn nút Thao tác (biểu tượng 3 dấu chấm) -> Chọn Xóa -> chọn Đồng ý."
        ],
        confirm: "Chụp ảnh màn hình tìm kiếm không còn 'Dịch vụ Test 03' và dịch vụ lắp đặt đã được cập nhật giá 200.000đ."
      },
      {
        title: "Bài tập 3: Thêm dịch vụ vào hóa đơn bán hàng",
        requirements: [
          "1. Chuyển sang giao diện thu ngân để bán hàng.",
          "2. Thêm 'Phí giao hàng và lắp đặt' vào hóa đơn để chuẩn bị thanh toán cho khách."
        ],
        instructions: [
          "1. Từ màn hình Quản lý, nhấn sang tab Bán hàng (hoặc truy cập màn hình Bán hàng).",
          "2. Tại ô tìm kiếm hàng hóa ở góc trên bên trái, nhập tên 'Phí giao hàng và lắp đặt'.",
          "3. Bấm chọn dịch vụ từ kết quả tìm kiếm để thêm dịch vụ này vào hóa đơn.",
          "4. Kiểm tra dịch vụ hiển thị với đúng mức giá 200.000đ đã cập nhật trên màn hình thu ngân."
        ],
        confirm: "Chụp ảnh màn hình Bán hàng hiển thị 'Phí giao hàng và lắp đặt' nằm trong danh sách sản phẩm của hóa đơn."
      },

      { title: "Hàng Combo - Đóng gói", isGroupHeader: true },
      {
        title: "Bài tập 1: Chuẩn bị thành phần và tạo dữ liệu nháp",
        requirements: [
          "1. Tạo nhanh 2 hàng hóa thường: 'Hộp Bánh Danisa' (Giá vốn: 100.000đ, Tồn kho: 50) và 'Rượu Vang Đà Lạt' (Giá vốn: 150.000đ, Tồn kho: 50).",
          "2. Tạo mới một hàng Combo nháp: 'Combo Test 04' (không cần thiết lập thành phần) với giá bán 10.000đ."
        ],
        instructions: [
          "1. Vào menu Hàng hóa -> Danh sách hàng hóa, nhấn nút + Tạo mới -> Chọn Hàng hóa.",
          "2. Nhập thông tin cho 'Hộp Bánh Danisa' (Giá vốn: 100.000, Tồn kho: 50) rồi nhấn Lưu. Làm tương tự để tạo 'Rượu Vang Đà Lạt'.",
          "3. Tiếp tục nhấn + Tạo mới -> Chọn Combo - đóng gói.",
          "4. Nhập Tên hàng: 'Combo Test 04', nhập Giá bán: 10.000 rồi nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị các sản phẩm vừa khởi tạo."
      },
      {
        title: "Bài tập 2: Tạo mới hàng Combo - đóng gói chính thức",
        requirements: [
          "1. Tạo một sản phẩm Combo mới mang tên 'Giỏ quà Tết An Khang'.",
          "2. Gộp 2 thành phần vào Combo này: 1 'Hộp Bánh Danisa' và 1 'Rượu Vang Đà Lạt'. Đặt giá bán cho tổng thể giỏ quà là 350.000đ."
        ],
        instructions: [
          "1. Tại màn hình Danh sách hàng hóa, nhấn nút + Tạo mới -> Chọn Combo - đóng gói.",
          "2. Nhập Tên hàng: 'Giỏ quà Tết An Khang'.",
          "3. Tại mục Hàng thành phần, tìm kiếm và chọn 'Hộp Bánh Danisa' (số lượng 1) và 'Rượu Vang Đà Lạt' (số lượng 1).",
          "4. Cuộn xuống dưới nhập Giá bán: 350.000 và nhấn Lưu để hoàn tất."
        ],
        confirm: "Chụp ảnh màn hình chi tiết của 'Giỏ quà Tết An Khang' cho thấy rõ 2 hàng thành phần bên trong."
      },
      {
        title: "Bài tập 3: Cập nhật thông tin và xóa hàng Combo",
        requirements: [
          "1. Cập nhật giá bán của 'Giỏ quà Tết An Khang' từ 350.000đ lên 399.000đ.",
          "2. Xóa vĩnh viễn 'Combo Test 04' ra khỏi hệ thống phần mềm."
        ],
        instructions: [
          "1. Trong Danh sách hàng hóa, tìm kiếm tên 'Giỏ quà Tết An Khang' và nhấn vào biểu tượng Chỉnh sửa.",
          "2. Thay đổi Giá bán thành 399.000 và nhấn Lưu.",
          "3. Tìm đến 'Combo Test 04', tích chọn vào ô vuông ở đầu dòng của combo này.",
          "4. Nhấn nút Thao tác (biểu tượng 3 dấu chấm) -> Chọn Xóa -> chọn Đồng ý."
        ],
        confirm: "Chụp ảnh màn hình tìm kiếm không còn 'Combo Test 04' và 'Giỏ quà Tết An Khang' đã được cập nhật giá 399.000đ."
      },
      {
        title: "Bài tập 4: Bán Combo và kiểm tra tồn kho thành phần",
        requirements: [
          "1. Chuyển sang giao diện thu ngân để bán 'Giỏ quà Tết An Khang' cho khách.",
          "2. Quay lại màn hình quản lý, kiểm tra tồn kho và thẻ kho của 'Hộp Bánh Danisa' để xác nhận hệ thống đã tự động trừ tồn kho."
        ],
        instructions: [
          "1. Từ màn hình Quản lý, nhấn sang tab Bán hàng (hoặc truy cập màn hình Bán hàng).",
          "2. Tại ô tìm kiếm hàng hóa, nhập tên 'Giỏ quà Tết An Khang', thêm vào hóa đơn và thực hiện Thanh toán.",
          "3. Quay lại màn hình Quản lý -> Hàng hóa -> Danh sách hàng hóa.",
          "4. Bấm trực tiếp vào tên 'Hộp Bánh Danisa', chuyển sang tab Thẻ kho để quan sát lịch sử hệ thống tự động trừ đi 1 số lượng."
        ],
        confirm: "Chụp ảnh màn hình Thẻ kho của 'Hộp Bánh Danisa' hiển thị giao dịch bán hàng."
      },

      { title: "Hàng Sản xuất", isGroupHeader: true },
      {
        title: "Bài tập 1: Kích hoạt tính năng và chuẩn bị nguyên liệu",
        requirements: [
          "1. Bật tính năng Sản xuất hàng hóa trong hệ thống để quản lý quá trình lắp ráp.",
          "2. Tạo 2 hàng hóa thường đóng vai trò nguyên vật liệu: 'Mặt bàn gỗ sồi' (Giá vốn: 500.000đ, Tồn kho: 20) và 'Bộ chân bàn sắt' (Giá vốn: 400.000đ, Tồn kho: 20).",
          "3. Tạo một hàng sản xuất nháp: 'Bàn Test 05' (không cần khai báo thành phần) với giá bán 100.000đ."
        ],
        instructions: [
          "1. Vào menu Thiết lập -> Thiết lập cửa hàng -> Hàng hóa, tìm và bật xanh tính năng Sản xuất hàng hóa.",
          "2. Vào menu Hàng hóa -> Danh sách hàng hóa, nhấn nút + Tạo mới -> Chọn Hàng hóa.",
          "3. Nhập thông tin cho 'Mặt bàn gỗ sồi' (Giá vốn: 500.000, Tồn kho: 20) rồi nhấn Lưu. Làm tương tự để tạo 'Bộ chân bàn sắt'.",
          "4. Tiếp tục nhấn + Tạo mới -> Chọn Hàng sản xuất. Nhập Tên hàng: 'Bàn Test 05', nhập Giá bán: 100.000 rồi nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị các nguyên liệu và sản phẩm nháp vừa khởi tạo."
      },
      {
        title: "Bài tập 2: Khai báo hàng sản xuất chính thức",
        requirements: [
          "1. Tạo một sản phẩm Hàng sản xuất mới mang tên 'Bàn làm việc gỗ sồi'.",
          "2. Cấu hình định mức nguyên liệu gồm: 1 'Mặt bàn gỗ sồi' và 1 'Bộ chân bàn sắt'. Đặt giá bán cho thành phẩm là 1.500.000đ."
        ],
        instructions: [
          "1. Tại màn hình Danh sách hàng hóa, nhấn nút + Tạo mới -> Chọn Hàng sản xuất.",
          "2. Nhập Tên hàng: 'Bàn làm việc gỗ sồi'.",
          "3. Tại mục Hàng thành phần, tìm kiếm và chọn 'Mặt bàn gỗ sồi' (số lượng 1) và 'Bộ chân bàn sắt' (số lượng 1).",
          "4. Cuộn xuống dưới nhập Giá bán: 1.500.000 và nhấn Lưu để hoàn tất. Hệ thống sẽ tự động tính giá vốn là 900.000đ."
        ],
        confirm: "Chụp ảnh màn hình chi tiết của 'Bàn làm việc gỗ sồi' hiển thị rõ 2 linh kiện thành phần bên trong."
      },
      {
        title: "Bài tập 3: Thực hiện sản xuất hàng hóa",
        requirements: [
          "1. Tạo một phiếu sản xuất cho mặt hàng 'Bàn làm việc gỗ sồi' để ghi nhận số lượng bàn đã được xưởng lắp ráp hoàn thiện.",
          "2. Số lượng thành phẩm cần sản xuất (lắp ráp) là 5 chiếc."
        ],
        instructions: [
          "1. Vào menu Hàng hóa -> chọn Sản xuất.",
          "2. Nhấn nút + Sản xuất ở góc trên bên phải màn hình.",
          "3. Tại ô Sản xuất mặt hàng, tìm kiếm và chọn sản phẩm 'Bàn làm việc gỗ sồi'.",
          "4. Nhập Số lượng: 5. (Hệ thống sẽ tự động hiển thị số lượng nguyên vật liệu cần tiêu hao tương ứng).",
          "5. Nhấn Hoàn thành để lưu phiếu sản xuất."
        ],
        confirm: "Chụp ảnh màn hình Phiếu sản xuất vừa tạo thành công hiển thị số lượng thành phẩm là 5."
      },
      {
        title: "Bài tập 4: Kiểm tra tồn kho và xóa dữ liệu nháp",
        requirements: [
          "1. Kiểm tra thẻ kho của nguyên liệu 'Mặt bàn gỗ sồi' để xác nhận hệ thống đã tự động trừ đi 5 tấm.",
          "2. Xóa vĩnh viễn sản phẩm 'Bàn Test 05' ra khỏi hệ thống phần mềm."
        ],
        instructions: [
          "1. Quay lại màn hình Hàng hóa -> Danh sách hàng hóa.",
          "2. Bấm trực tiếp vào tên 'Mặt bàn gỗ sồi', chuyển sang tab Thẻ kho để quan sát lịch sử trừ số lượng.",
          "3. Quay ra lại Danh sách hàng hóa, tìm đến 'Bàn Test 05', tích chọn vào ô vuông ở đầu dòng của sản phẩm này.",
          "4. Nhấn nút Thao tác -> Chọn Xóa -> chọn Đồng ý."
        ],
        confirm: "Chụp ảnh màn hình Thẻ kho của 'Mặt bàn gỗ sồi' hiển thị dòng lịch sử Phiếu sản xuất với số lượng -5."
      },

      { title: "Hàng hóa Lô - Hạn sử dụng", isGroupHeader: true },
      {
        title: "Bài tập 1: Kích hoạt tính năng và thêm mới hàng hóa",
        requirements: [
          "1. Kích hoạt tính năng Quản lý tồn kho theo Lô, hạn sử dụng trên hệ thống.",
          "2. Thêm mới một sản phẩm: 'Kem chống nắng La Roche-Posay' (Giá vốn: 300.000đ, Giá bán: 450.000đ) và BẮT BUỘC thiết lập tính năng quản lý theo lô.",
          "3. Thêm mới một sản phẩm nháp: 'Sản phẩm Test 06' với giá bán 10.000đ (không quản lý lô)."
        ],
        instructions: [
          "1. Vào menu Thiết lập -> Thiết lập cửa hàng -> Hàng hóa, bật xanh tính năng Quản lý tồn kho theo Lô, hạn sử dụng.",
          "2. Vào menu Hàng hóa -> Danh sách hàng hóa, nhấn nút + Tạo mới -> Chọn Hàng hóa.",
          "3. Nhập Tên hàng: 'Kem chống nắng La Roche-Posay', nhập Giá vốn: 300.000, Giá bán: 450.000.",
          "4. Tích chọn 'Có' ở mục Quản lý theo lô, hạn sử dụng, sau đó nhấn Lưu.",
          "5. Tiếp tục nhấn + Tạo mới -> Chọn Hàng hóa để thêm 'Sản phẩm Test 06' (Giá bán: 10.000đ) rồi nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị sản phẩm 'Kem chống nắng La Roche-Posay' có biểu tượng quản lý lô."
      },
      {
        title: "Bài tập 2: Nhập hàng theo Lô và xóa dữ liệu nháp",
        requirements: [
          "1. Nhập hàng cho 'Kem chống nắng La Roche-Posay' chia thành 2 lô khác nhau: Lô 'L01' (HSD: 30/12/2026, Số lượng: 20) và Lô 'L02' (HSD: 30/06/2027, Số lượng: 30).",
          "2. Xóa vĩnh viễn 'Sản phẩm Test 06' ra khỏi hệ thống phần mềm."
        ],
        instructions: [
          "1. Vào menu Mua hàng -> chọn Nhập hàng, nhấn nút + Nhập hàng.",
          "2. Tại ô tìm kiếm hàng hóa, tìm và chọn sản phẩm 'Kem chống nắng La Roche-Posay'.",
          "3. Trên dòng sản phẩm vừa thêm, nhấn vào Thêm mới lô, hạn sử dụng. Nhập tên Lô: 'L01', chọn HSD: '30/12/2026', nhập Số lượng: '20' và nhấn Thêm.",
          "4. Tiếp tục nhấn Thêm mới lô, hạn sử dụng để nhập thông tin Lô: 'L02', chọn HSD: '30/06/2027', nhập Số lượng: '30' và nhấn Thêm. Sau đó nhấn Hoàn thành phiếu nhập.",
          "5. Quay lại menu Hàng hóa -> Danh sách hàng hóa, tìm đến 'Sản phẩm Test 06', xóa khỏi hệ thống."
        ],
        confirm: "Chụp ảnh màn hình Chi tiết sản phẩm Kem chống nắng ở tab Tồn kho hiển thị đủ thông tin 2 lô L01 và L02."
      },
      {
        title: "Bài tập 3: Bán hàng theo lô (Nguyên tắc FEFO)",
        requirements: [
          "1. Chuyển sang giao diện thu ngân để tạo hóa đơn bán 1 hộp 'Kem chống nắng La Roche-Posay'.",
          "2. Quan sát và xác nhận hệ thống tự động gợi ý xuất bán từ Lô 'L01' (lô có hạn sử dụng gần nhất theo nguyên tắc FEFO)."
        ],
        instructions: [
          "1. Từ màn hình Quản lý, nhấn sang tab Bán hàng (hoặc truy cập màn hình Bán hàng).",
          "2. Tại ô tìm kiếm hàng hóa, nhập tên 'Kem chống nắng La Roche-Posay' và click chọn sản phẩm để đưa vào hóa đơn.",
          "3. Quan sát trên dòng sản phẩm, hệ thống sẽ tự động gắn kèm tag tên lô là 'L01' (do L01 hết hạn trước L02).",
          "4. Thực hiện thao tác Thanh toán để hoàn tất hóa đơn này."
        ],
        confirm: "Chụp ảnh màn hình Bán hàng hiển thị rõ sản phẩm đang được tự động chọn xuất từ lô 'L01'."
      },
      {
        title: "Bài tập 4: Xem báo cáo Hạn sử dụng",
        requirements: [
          "1. Truy cập vào hệ thống báo cáo để xem danh sách chi tiết các lô hàng đang quản lý và cảnh báo hạn sử dụng."
        ],
        instructions: [
          "1. Quay lại màn hình Quản lý, vào menu Phân tích -> chọn Hàng hóa.",
          "2. Ở góc trên bên trái màn hình báo cáo, nhấp vào menu thả xuống (Mối quan tâm) và chọn 'Hạn sử dụng'.",
          "3. Quan sát danh sách thống kê các lô hàng, hệ thống sẽ tự động bôi màu cảnh báo đối với các lô sắp hết hạn."
        ],
        confirm: "Chụp ảnh màn hình Báo cáo Hạn sử dụng hiển thị các thông tin lô của sản phẩm Kem chống nắng."
      },

      { title: "Hàng hóa Serial/IMEI", isGroupHeader: true },
      {
        title: "Bài tập 1: Kích hoạt tính năng và thêm mới hàng hóa",
        requirements: [
          "1. Kích hoạt tính năng Quản lý tồn kho theo Serial/IMEI trên hệ thống.",
          "2. Thêm mới sản phẩm: 'iPhone 16 Pro Max 256GB' (Giá vốn: 28.000.000đ, Giá bán: 30.000.000đ) và BẮT BUỘC thiết lập tính năng quản lý theo Serial/IMEI.",
          "3. Thêm mới một sản phẩm nháp: 'Điện thoại Test 07' với giá bán 10.000đ (không quản lý IMEI)."
        ],
        instructions: [
          "1. Vào menu Thiết lập -> Thiết lập cửa hàng -> Hàng hóa, bật xanh tính năng Quản lý tồn kho theo Serial/IMEI.",
          "2. Vào menu Hàng hóa -> Danh sách hàng hóa, nhấn nút + Tạo mới -> Chọn Hàng hóa.",
          "3. Nhập Tên hàng: 'iPhone 16 Pro Max 256GB', nhập Giá vốn: 28.000.000, Giá bán: 30.000.000.",
          "4. Tích chọn 'Có' ở mục Quản lý theo Serial/IMEI, sau đó nhấn Lưu.",
          "5. Tiếp tục nhấn nút + Tạo mới -> Chọn Hàng hóa để thêm 'Điện thoại Test 07' (Giá bán: 10.000đ) rồi nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị sản phẩm 'iPhone 16 Pro Max 256GB' có biểu tượng quản lý Serial/IMEI."
      },
      {
        title: "Bài tập 2: Nhập hàng theo IMEI và xóa dữ liệu nháp",
        requirements: [
          "1. Nhập kho cho 'iPhone 16 Pro Max 256GB' với số lượng 2 chiếc, tương ứng với 2 mã IMEI là: 'IMEI001' và 'IMEI002'.",
          "2. Xóa vĩnh viễn 'Điện thoại Test 07' ra khỏi hệ thống phần mềm."
        ],
        instructions: [
          "1. Vào menu Mua hàng -> chọn Nhập hàng, nhấn nút + Nhập hàng.",
          "2. Tại ô tìm kiếm hàng hóa, tìm và chọn sản phẩm 'iPhone 16 Pro Max 256GB'.",
          "3. Màn hình sẽ hiện ra ô Nhập số Serial/Imei. Nhập 'IMEI001' rồi ấn Enter, tiếp tục nhập 'IMEI002' rồi ấn Enter. Nhấn Hoàn thành phiếu nhập.",
          "4. Quay lại menu Hàng hóa -> Danh sách hàng hóa, tìm đến 'Điện thoại Test 07', xóa khỏi hệ thống."
        ],
        confirm: "Chụp ảnh màn hình Chi tiết sản phẩm iPhone ở tab Tồn kho hiển thị tồn kho bằng 2."
      },
      {
        title: "Bài tập 3: Bán hàng theo Serial/IMEI",
        requirements: [
          "1. Chuyển sang giao diện thu ngân để tạo hóa đơn bán 1 chiếc 'iPhone 16 Pro Max 256GB'.",
          "2. Khách hàng chọn mua máy có mã là 'IMEI001', yêu cầu xuất bán đúng mã này trên hệ thống."
        ],
        instructions: [
          "1. Từ màn hình Quản lý, nhấn sang tab Bán hàng (hoặc truy cập màn hình Bán hàng).",
          "2. Tại ô tìm kiếm hàng hóa, nhập tên 'iPhone 16 Pro Max 256GB' và click chọn sản phẩm.",
          "3. Hệ thống sẽ bật lên cửa sổ yêu cầu chọn Serial/IMEI. Bạn tích chọn vào mã 'IMEI001' (hoặc dùng súng bắn mã vạch quét mã này).",
          "4. Thực hiện thao tác Thanh toán để hoàn tất hóa đơn giao dịch."
        ],
        confirm: "Chụp ảnh màn hình Bán hàng hiển thị rõ sản phẩm iPhone đang được chọn kèm dòng chữ mã IMEI001 phía dưới."
      }
    ]
  },
  {
    id: "session_2",
    title: "Buổi 2: Quản lý Kho, Nhà cung cấp & Giá",
    exercises: [
      { title: "Nhập hàng", isGroupHeader: true },
      {
        title: "Bài tập 1: Tạo mới hàng hóa và lập phiếu nhập hàng",
        requirements: [
          "1. Tạo mới Nhà cung cấp có tên 'Tổng kho Thời trang An Đông'.",
          "2. Thực hiện nhập kho lô hàng mới gồm: 50 'Áo sơ mi nam Oxford' (Giá nhập: 150,000đ, Giá bán: 350,000đ) và 30 'Quần Tây Âu Slimfit' (Giá nhập: 220,000đ, Giá bán: 480,000đ).",
          "3. Tạo thêm 1 mã hàng mồi tên là 'Sản phẩm Test 01' (Số lượng 1, Giá nhập 10,000đ).",
          "4. Thanh toán trước cho Nhà cung cấp 5,000,000đ, phần còn lại ghi nhận công nợ."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Mua hàng -> chọn Nhập hàng.",
          "2. Nhấn nút + Nhập hàng.",
          "3. Tại ô tìm kiếm, nhấn dấu + để thêm mới nhanh 3 sản phẩm trên với đầy đủ thông tin giá nhập, giá bán và nhóm hàng tương ứng.",
          "4. Tại mục Nhà cung cấp, nhấn dấu + để thêm 'Tổng kho Thời trang An Đông'.",
          "5. Tại phần Thanh toán, nhập số 5,000,000 vào ô 'Tiền trả NCC'.",
          "6. Nhấn nút Hoàn thành."
        ],
        confirm: "Chụp ảnh màn hình chi tiết phiếu nhập vừa tạo, hiển thị rõ danh sách hàng và phần nợ cần trả NCC."
      },
      {
        title: "Bài tập 2: Quản lý chi phí nhập hàng và tùy chọn hiển thị",
        requirements: [
          "1. Thiết lập hệ thống để quản lý thêm 'Chi phí vận chuyển' vào giá vốn sản phẩm.",
          "2. Sao chép phiếu nhập ở Bài tập 1 thành một phiếu mới, sau đó bổ sung Chi phí vận chuyển là 200,000đ (do NCC thu).",
          "3. Tùy chỉnh màn hình nhập hàng để ẩn cột 'Ảnh hàng hóa' và hiện cột 'Giá vốn'."
        ],
        instructions: [
          "1. Vào Thiết lập -> Hàng hóa -> Bật xanh 'Quản lý chi phí nhập hàng' và tạo loại chi phí 'Vận chuyển'.",
          "2. Quay lại menu Nhập hàng, chọn phiếu đã tạo ở Bài 1 và nhấn 'Sao chép'.",
          "3. Tìm mục 'Chi phí nhập hàng', chọn 'Vận chuyển' và nhập số tiền 200,000đ.",
          "4. Nhấn vào biểu tượng 'Con mắt' (Tùy chọn hiển thị) để tắt 'Ảnh hàng hóa'.",
          "5. Nhấn Hoàn thành cho phiếu sao chép này."
        ],
        confirm: "Chụp ảnh màn hình danh sách phiếu nhập, hiển thị cột Chi phí nhập hàng và giao diện đã ẩn ảnh sản phẩm."
      },
      {
        title: "Bài tập 3: Thực hiện trả hàng nhập và kiểm tra lịch sử",
        requirements: [
          "1. Phát hiện 05 sản phẩm 'Áo sơ mi nam Oxford' trong lô hàng ở Bài tập 1 bị lỗi đường chỉ, thực hiện trả lại hàng cho 'Tổng kho Thời trang An Đông'.",
          "2. Kiểm tra lại lịch sử thanh toán của phiếu nhập gốc để xem biến động công nợ sau khi trả hàng."
        ],
        instructions: [
          "1. Vào danh sách Nhập hàng, tìm và mở chi tiết phiếu nhập ở Bài tập 1.",
          "2. Nhấn nút 'Trả hàng nhập'.",
          "3. Nhập số lượng 5 vào dòng 'Áo sơ mi nam Oxford'.",
          "4. Nhấn Hoàn thành để hệ thống tự trừ công nợ và hoàn kho.",
          "5. Quay lại phiếu nhập gốc, chọn tab 'Lịch sử thanh toán' để xem các chứng từ liên quan."
        ],
        confirm: "Chụp ảnh màn hình Phiếu trả hàng nhập với trạng thái Đã hoàn thành."
      },
      {
        title: "Bài tập 4: In tem mã vạch và xuất file đối soát",
        requirements: [
          "1. Thực hiện in tem mã vạch cho toàn bộ số lượng 'Quần Tây Âu Slimfit' vừa nhập để dán lên sản phẩm trước khi đưa ra quầy kệ.",
          "2. Xuất file Excel chi tiết phiếu nhập ở Bài tập 1 để gửi cho bộ phận kế toán kho."
        ],
        instructions: [
          "1. Trong danh sách Nhập hàng, chọn phiếu nhập ở Bài tập 1.",
          "2. Nhấn nút 'In tem mã'. Hệ thống sẽ tự liệt kê danh sách hàng và số lượng tương ứng trong phiếu.",
          "3. Chọn khổ giấy in phù hợp và nhấn In.",
          "4. Quay lại chi tiết phiếu, nhấn biểu tượng 3 chấm (...) và chọn 'Xuất file'."
        ],
        confirm: "Chụp ảnh màn hình bản xem trước khi In tem mã vạch."
      },
      {
        title: "Bài tập 5: Dọn dẹp dữ liệu (Thực hành hủy phiếu)",
        requirements: [
          "1. Thực hiện hủy vĩnh viễn phiếu nhập có chứa 'Sản phẩm Test 01' đã tạo ở Bài tập 1 (phiếu nháp hoặc phiếu sai) để làm sạch dữ liệu báo cáo."
        ],
        instructions: [
          "1. Tìm phiếu nhập có chứa sản phẩm 'Sản phẩm Test 01' trong danh sách.",
          "2. Nhấn vào mã phiếu để xem chi tiết.",
          "3. Nhấn nút 'Hủy'.",
          "4. Chọn 'Đồng ý' khi hệ thống yêu cầu xác nhận."
        ],
        confirm: "Chụp ảnh màn hình danh sách phiếu nhập với phiếu vừa chọn hiển thị trạng thái 'Đã hủy'."
      },

      { title: "Nhà cung cấp", isGroupHeader: true },
      {
        title: "Bài tập 1: Thêm mới và phân loại Nhà cung cấp",
        requirements: [
          "1. Tạo một Nhóm nhà cung cấp mới có tên là 'Nhóm Hàng May Mặc'.",
          "2. Thêm mới nhà cung cấp 'Xưởng may mặc Hữu Nghị' (SĐT: 0912345678, Địa chỉ: Quận Tân Bình, TP.HCM) và đưa vào nhóm vừa tạo.",
          "3. Tạo thêm một nhà cung cấp mồi tên là 'NCC Test Hệ Thống' để dành cho bài tập xóa dữ liệu."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, chọn menu Mua hàng -> Nhà cung cấp.",
          "2. Tại cột bên trái mục Nhóm nhà cung cấp, nhấn dấu + (Tạo mới) để thêm nhóm 'Nhóm Hàng May Mặc'.",
          "3. Nhấn nút + Nhà cung cấp.",
          "4. Nhập Tên, Số điện thoại, Địa chỉ và chọn đúng Nhóm vừa tạo.",
          "5. Nhấn Lưu. Lặp lại thao tác để tạo 'NCC Test Hệ Thống'."
        ],
        confirm: "Chụp ảnh màn hình danh sách Nhà cung cấp, hiển thị rõ cột Nhóm và Nhà cung cấp vừa tạo."
      },
      {
        title: "Bài tập 2: Cập nhật thông tin và theo dõi lịch sử giao dịch",
        requirements: [
          "1. Nhà cung cấp 'Tổng kho Thời trang An Đông' (đã tạo ở bài trước) thay đổi địa chỉ sang 'Số 10 Hùng Vương, Quận 5'. Hãy cập nhật thông tin này.",
          "2. Kiểm tra lại lịch sử nhập hàng để xác nhận các phiếu nhập từ bài thực hành trước đã được ghi nhận đúng."
        ],
        instructions: [
          "1. Tại màn hình Nhà cung cấp, tìm và chọn 'Tổng kho Thời trang An Đông'.",
          "2. Nhấn nút Chỉnh sửa.",
          "3. Thay đổi thông tin tại ô Địa chỉ và nhấn Lưu.",
          "4. Nhấn vào tab Lịch sử nhập/trả hàng để xem danh sách các phiếu nhập đã thực hiện."
        ],
        confirm: "Chụp ảnh màn hình tab Lịch sử nhập/trả hàng của nhà cung cấp An Đông."
      },
      {
        title: "Bài tập 3: Thanh toán công nợ và chiết khấu thanh toán",
        requirements: [
          "1. Thực hiện trả nợ cho 'Tổng kho Thời trang An Đông' số tiền 2,000,000đ bằng hình thức Chuyển khoản.",
          "2. Do thanh toán sớm, bạn được NCC chiết khấu thêm 100,000đ. Hãy ghi nhận khoản chiết khấu này để giảm nợ."
        ],
        instructions: [
          "1. Trong chi tiết nhà cung cấp An Đông, chọn tab Công nợ.",
          "2. Nhấn nút Thanh toán. Nhập số tiền 2,000,000, chọn phương thức Chuyển khoản và nhấn Tạo phiếu chi.",
          "3. Tiếp tục nhấn nút Chiết khấu thanh toán.",
          "4. Nhập số tiền 100,000, chọn 'Phân bổ vào phiếu nhập hàng' và nhấn Tạo phiếu."
        ],
        confirm: "Chụp ảnh màn hình tab Công nợ sau khi đã thực hiện thanh toán và chiết khấu, hiển thị giá trị Nợ cần trả đã giảm xuống."
      },
      {
        title: "Bài tập 4: Điều chỉnh công nợ thủ công",
        requirements: [
          "1. Giả định có sai lệch nhỏ 5,000đ trong quá trình đối soát với 'Xưởng may mặc Hữu Nghị'. Hãy thực hiện điều chỉnh tăng nợ thêm 5,000đ mà không tạo phiếu nhập hàng."
        ],
        instructions: [
          "1. Tìm và chọn nhà cung cấp 'Xưởng may mặc Hữu Nghị'.",
          "2. Vào tab Công nợ, nhấn nút Điều chỉnh.",
          "3. Tại ô 'Giá trị nợ điều chỉnh', nhập số tiền nợ thực tế sau khi đã cộng thêm 5,000đ.",
          "4. Nhập mô tả: 'Điều chỉnh sai lệch đối soát' và nhấn Chỉnh sửa."
        ],
        confirm: "Chụp ảnh màn hình Phiếu điều chỉnh công nợ trong tab Công nợ."
      },
      {
        title: "Bài tập 5: Dọn dẹp danh sách (Ngừng hoạt động & Xóa)",
        requirements: [
          "1. Thực hiện Xóa vĩnh viễn nhà cung cấp 'NCC Test Hệ Thống' đã tạo ở Bài 1.",
          "2. Chuyển trạng thái nhà cung cấp 'Xưởng may mặc Hữu Nghị' sang 'Ngừng hoạt động' (giả định tạm dừng hợp tác)."
        ],
        instructions: [
          "1. Tìm 'NCC Test Hệ Thống', nhấn vào tên để xem chi tiết, chọn nút Xóa và xác nhận Đồng ý.",
          "2. Tìm 'Xưởng may mặc Hữu Nghị', nhấn nút Ngừng hoạt động và xác nhận Đồng ý.",
          "3. Kiểm tra lại bằng cách lọc danh sách 'Ngừng hoạt động' để tìm lại NCC này."
        ],
        confirm: "Chụp ảnh màn hình bộ lọc Trạng thái: 'Ngừng hoạt động' có hiển thị Xưởng may mặc Hữu Nghị."
      },

      { title: "Thiết lập giá", isGroupHeader: true },
      {
        title: "Bài tập 1: Tạo mới bảng giá theo chính sách",
        requirements: [
          "1. Giả định bạn đã có 2 sản phẩm trên hệ thống: 'Nước giặt OMO 3kg' (Giá chung: 150,000đ, Giá vốn: 120,000đ) và 'Nước xả Downy 2L' (Giá chung: 120,000đ, Giá vốn: 90,000đ).",
          "2. Tạo một bảng giá mới có tên 'Bảng giá Sỉ Đại Lý' áp dụng trên toàn hệ thống với trạng thái Đang áp dụng.",
          "3. Tạo thêm một bảng giá mồi có tên 'Bảng giá Test 01'."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Hàng hóa -> chọn Thiết lập giá.",
          "2. Nhấn vào nút + Tạo mới.",
          "3. Tại tab Thông tin, nhập Tên bảng giá là 'Bảng giá Sỉ Đại Lý'.",
          "4. Đảm bảo trạng thái đang chọn là 'Áp dụng' và nhấn Lưu.",
          "5. Lặp lại các bước 2, 3, 4 để tạo 'Bảng giá Test 01'."
        ],
        confirm: "Chụp ảnh màn hình danh sách các bảng giá vừa được tạo thành công ở cột bên trái."
      },
      {
        title: "Bài tập 2: Thêm hàng hóa và thiết lập công thức giá hàng loạt",
        requirements: [
          "1. Thêm 2 mặt hàng 'Nước giặt OMO 3kg' và 'Nước xả Downy 2L' vào 'Bảng giá Sỉ Đại Lý'.",
          "2. Thiết lập mức giá sỉ tự động thấp hơn 10% so với giá bán lẻ thông thường (Bảng giá chung) và làm tròn đến hàng nghìn."
        ],
        instructions: [
          "1. Nhấn chọn 'Bảng giá Sỉ Đại Lý' để mở giao diện chi tiết.",
          "2. Tại ô tìm kiếm, gõ tên để thêm lần lượt 'Nước giặt OMO 3kg' và 'Nước xả Downy 2L' vào danh sách.",
          "3. Nhấn trực tiếp vào ô giá của sản phẩm Nước giặt OMO để mở pop-up Thiết lập công thức.",
          "4. Tại mục Tính giá dựa trên, chọn 'Bảng giá chung', chọn phép tính trừ (-) và điền '10%'.",
          "5. Tại mục Làm tròn, chọn làm tròn đến 1.000.",
          "6. Tích chọn 'Áp dụng công thức này cho tất cả hàng hóa trong Bảng giá', sau đó nhấn Xong -> Đồng ý."
        ],
        confirm: "Chụp ảnh màn hình chi tiết Bảng giá Sỉ Đại Lý, hiển thị rõ cột Giá mới đã được tự động giảm 10%."
      },
      {
        title: "Bài tập 3: Kiểm soát lợi nhuận (So sánh giá bán và giá vốn)",
        requirements: [
          "1. Sau khi giảm 10%, bạn cần kiểm tra xem trong 'Bảng giá Sỉ Đại Lý' có mặt hàng nào bị giảm giá xuống thấp hơn Giá vốn hay không, nhằm tránh rủi ro bán lỗ."
        ],
        instructions: [
          "1. Đảm bảo bạn đang đứng ở màn hình chi tiết của 'Bảng giá Sỉ Đại Lý'.",
          "2. Ở thanh công cụ bên trái, tìm đến mục bộ lọc 'Giá bán'.",
          "3. Chọn toán tử so sánh là 'Nhỏ hơn' (<).",
          "4. Tại ô chọn loại giá đối chiếu, chọn 'Giá vốn'.",
          "5. Xem kết quả hệ thống lọc ra (Nếu danh sách trống, tức là giá sỉ vẫn đang cao hơn giá vốn, đảm bảo có lãi)."
        ],
        confirm: "Chụp ảnh màn hình kết quả sau khi áp dụng bộ lọc Giá bán < Giá vốn."
      },
      {
        title: "Bài tập 4: So sánh nhiều bảng giá và xuất dữ liệu",
        requirements: [
          "1. Thực hiện xem đối chiếu trực quan 2 mức giá: Bảng giá chung và Bảng giá Sỉ Đại Lý trên cùng một màn hình.",
          "2. Xuất file Excel dữ liệu bảng giá sỉ để gửi cho đối tác/đại lý."
        ],
        instructions: [
          "1. Tại màn hình Thiết lập giá, nhìn lên phía trên danh sách hàng hóa, nhấn vào ô 'Chọn bảng giá'.",
          "2. Tích chọn vào 2 ô: 'Bảng giá chung' và 'Bảng giá Sỉ Đại Lý'.",
          "3. Quan sát hệ thống hiển thị song song 2 cột giá cho từng sản phẩm.",
          "4. Sau đó, nhấn vào nút 'Xuất file' góc trên bên phải để tải dữ liệu về máy tính."
        ],
        confirm: "Chụp ảnh màn hình giao diện hệ thống đang hiển thị song song 2 cột giá của 2 bảng giá khác nhau."
      },
      {
        title: "Bài tập 5: Dọn dẹp dữ liệu (Xóa bảng giá)",
        requirements: [
          "1. Thực hiện xóa vĩnh viễn 'Bảng giá Test 01' đã tạo ở Bài 1 để giữ cho danh sách bảng giá của cửa hàng được gọn gàng."
        ],
        instructions: [
          "1. Tại cột danh sách bảng giá bên trái, tìm đến 'Bảng giá Test 01'.",
          "2. Đưa chuột (hoặc nhấn) vào biểu tượng cây bút (Chỉnh sửa) bên cạnh tên bảng giá đó.",
          "3. Trong cửa sổ hiện ra, nhấn vào nút 'Xóa' ở góc dưới.",
          "4. Chọn 'Đồng ý' để xác nhận xóa vĩnh viễn."
        ],
        confirm: "Chụp ảnh màn hình cột danh sách bảng giá bên trái sau khi đã xóa thành công."
      },

      { title: "Kiểm kho", isGroupHeader: true },
      {
        title: "Bài tập 1: Tạo phiếu kiểm kho (Lưu tạm) và tạo dữ liệu mồi",
        requirements: [
          "1. Tạo một phiếu kiểm kho cho Khu vực kệ hàng A: 'Nước giặt OMO 3kg' (Thực tế: 45) và 'Nước xả Downy 2L' (Thực tế: 30). Chỉ Lưu tạm.",
          "2. Tạo một phiếu kiểm kho mồi chứa 'Sản phẩm Test 01' (Thực tế: 10). Nhấn Hoàn thành để cân bằng kho ngay."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Hàng hóa -> chọn Kiểm kho.",
          "2. Nhấn vào nút + Kiểm kho.",
          "3. Tại ô tìm kiếm, thêm lần lượt 'Nước giặt OMO 3kg' và 'Nước xả Downy 2L'.",
          "4. Nhập số lượng đếm được vào cột Thực tế (OMO: 45, Downy: 30). Nhấn Lưu tạm.",
          "5. Tiếp tục nhấn + Kiểm kho để tạo phiếu mới, thêm 'Sản phẩm Test 01', nhập số lượng thực tế là 10.",
          "6. Nhấn nút Hoàn thành."
        ],
        confirm: "Chụp ảnh màn hình danh sách phiếu kiểm kho hiển thị 1 phiếu trạng thái 'Phiếu tạm' và 1 phiếu trạng thái 'Đã cân bằng kho'."
      },
      {
        title: "Bài tập 2: Tạo phiếu mới và thực hiện gộp phiếu",
        requirements: [
          "1. Tạo thêm 1 phiếu kiểm kho Lưu tạm cho Khu vực kệ hàng B: 'Áo sơ mi nam Oxford' (Thực tế: 20).",
          "2. Thực hiện gộp phiếu kiểm kho của Khu vực A và Khu vực B thành một phiếu kiểm kho tổng hợp duy nhất."
        ],
        instructions: [
          "1. Nhấn + Kiểm kho để tạo phiếu cho khu vực B.",
          "2. Thêm 'Áo sơ mi nam Oxford', nhập cột Thực tế là 20 và nhấn Lưu tạm.",
          "3. Quay ra màn hình danh sách phiếu Kiểm kho.",
          "4. Tích chọn vào ô vuông đầu dòng của 2 phiếu ở trạng thái 'Phiếu tạm' (Khu vực A và B).",
          "5. Nhấn nút Gộp phiếu vừa xuất hiện ở thanh menu nằm ngang phía trên danh sách.",
          "6. Chọn Đồng ý để xác nhận."
        ],
        confirm: "Chụp ảnh màn hình chi tiết phiếu kiểm kho tổng sau khi đã gộp, hiển thị đủ 3 mặt hàng OMO, Downy và Áo sơ mi."
      },
      {
        title: "Bài tập 3: Chốt cân bằng kho và xuất file báo cáo",
        requirements: [
          "1. Mở phiếu kiểm kho tổng hợp vừa gộp để kiểm tra lại số liệu chênh lệch.",
          "2. Thực hiện chốt số liệu để hệ thống tự động điều chỉnh Cân bằng kho cho các sản phẩm này.",
          "3. Xuất file Excel chi tiết của phiếu này để gửi báo cáo cho quản lý cửa hàng."
        ],
        instructions: [
          "1. Tại danh sách phiếu kiểm kho, nhấn vào mã phiếu của phiếu tổng hợp đang ở trạng thái 'Phiếu tạm'.",
          "2. Kiểm tra lại thông tin số lượng tại các cột Tồn kho, Thực tế và Chênh lệch.",
          "3. Nhấn nút Hoàn thành. Hệ thống sẽ tự động cập nhật lại số lượng tồn kho.",
          "4. Tại giao diện chi tiết phiếu vừa cân bằng xong, nhấn nút Xuất file (hoặc biểu tượng 3 chấm chọn Xuất file) để tải dữ liệu về máy."
        ],
        confirm: "Chụp ảnh màn hình phiếu kiểm kho tổng hợp sau khi đã chuyển sang trạng thái 'Đã cân bằng kho'."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu (Hủy phiếu kiểm kho)",
        requirements: [
          "1. Do có sai sót trong quá trình kiểm hàng nháp, hãy tìm lại phiếu kiểm kho của 'Sản phẩm Test 01'.",
          "2. Thực hiện Hủy phiếu kiểm kho này để khôi phục lại số lượng tồn kho ban đầu của sản phẩm mồi."
        ],
        instructions: [
          "1. Tại màn hình danh sách Kiểm kho, sử dụng ô Tìm kiếm để tìm phiếu có chứa 'Sản phẩm Test 01'.",
          "2. Nhấn vào mã phiếu để xem chi tiết.",
          "3. Nhấn nút Hủy bỏ.",
          "4. Chọn Đồng ý để xác nhận. Số lượng tồn kho của mặt hàng này sẽ được hệ thống hoàn trả lại."
        ],
        confirm: "Chụp ảnh màn hình hiển thị phiếu kiểm kho chứa 'Sản phẩm Test 01' đang nằm ở trạng thái 'Đã hủy'."
      }
    ]
  },
  {
    id: "session_3",
    title: "Buổi 3: Giao dịch & Quản lý Khách hàng",
    exercises: [
      { title: "Đặt hàng", isGroupHeader: true },
      {
        title: "Bài tập 1: Tạo mới Đơn đặt hàng (Pre-order) và dữ liệu mồi",
        requirements: [
          "1. Tạo một đơn đặt hàng cho khách hàng 'Chị Lan Phương' mua 5 'Áo sơ mi nam Oxford' với thời gian giao hàng dự kiến là ngày mai. Khách thực hiện đặt cọc trước 500,000đ.",
          "2. Tạo thêm một đơn đặt hàng nháp chứa mặt hàng 'Sản phẩm Test 01' (không cần thông tin khách hàng) để làm dữ liệu mồi."
        ],
        instructions: [
          "1. Trên màn hình Bán hàng, nhấn vào biểu tượng mũi tên cạnh tab Hóa đơn và chọn 'Thêm mới đặt hàng'.",
          "2. Tìm và chọn sản phẩm 'Áo sơ mi nam Oxford', điền số lượng là 5.",
          "3. Tại ô Tìm khách hàng (F4), nhấn dấu '+' để thêm mới khách hàng 'Chị Lan Phương'.",
          "4. Tại ô Khách thanh toán, nhập số tiền 500,000 để ghi nhận cọc. Sau đó chọn Thời gian giao hàng dự kiến là ngày mai.",
          "5. Nhấn nút Đặt hàng (F9) để lưu phiếu.",
          "6. Lặp lại thao tác mở tab Đặt hàng mới, thêm 'Sản phẩm Test 01' và nhấn Đặt hàng."
        ],
        confirm: "Chụp ảnh màn hình danh sách phiếu Đặt hàng (bên màn hình Quản lý) hiển thị 2 phiếu vừa tạo."
      },
      {
        title: "Bài tập 2: Tạo thêm đơn và thực hiện gộp phiếu đặt hàng",
        requirements: [
          "1. Khách hàng 'Chị Lan Phương' muốn mua thêm 2 'Quần Tây Âu Slimfit' và yêu cầu giao cùng đợt. Hãy tạo một đơn đặt hàng thứ hai (không cần đặt cọc thêm).",
          "2. Thực hiện thao tác gộp 2 đơn đặt hàng của 'Chị Lan Phương' thành một đơn tổng hợp duy nhất."
        ],
        instructions: [
          "1. Trên màn hình Bán hàng, tiếp tục mở một tab 'Thêm mới đặt hàng' khác.",
          "2. Chọn sản phẩm 'Quần Tây Âu Slimfit' với số lượng là 2.",
          "3. Tại ô khách hàng, tìm và chọn đúng tên 'Chị Lan Phương' rồi nhấn Đặt hàng (F9).",
          "4. Chuyển sang màn hình Quản lý, vào menu Giao dịch -> Đặt hàng.",
          "5. Tích chọn vào ô vuông đầu dòng của 2 phiếu đặt hàng của 'Chị Lan Phương'.",
          "6. Nhấn nút Gộp đơn vừa xuất hiện -> Chọn Đồng ý."
        ],
        confirm: "Chụp ảnh màn hình chi tiết phiếu đặt hàng tổng hợp sau khi gộp, hiển thị đầy đủ cả Áo sơ mi và Quần Tây Âu."
      },
      {
        title: "Bài tập 3: Xử lý đơn đặt hàng (Chuyển thành hóa đơn)",
        requirements: [
          "1. Xử lý phiếu đặt hàng gộp của 'Chị Lan Phương' thành Hóa đơn bán hàng.",
          "2. Thu nốt số tiền còn lại của khách sau khi đã trừ đi 500,000đ tiền cọc ban đầu."
        ],
        instructions: [
          "1. Tại danh sách Đặt hàng trên màn hình Quản lý, tìm và mở chi tiết phiếu đặt hàng tổng hợp của 'Chị Lan Phương'.",
          "2. Nhấn nút 'Tạo hóa đơn' (hoặc Xử lý đặt hàng).",
          "3. Kiểm tra lại danh sách hàng hóa và xác nhận số tiền khách đã đặt cọc được hệ thống tự động trừ đi.",
          "4. Nhập số tiền khách thanh toán nốt vào ô Khách thanh toán.",
          "5. Nhấn nút Thanh toán để xuất hóa đơn và kết thúc giao dịch."
        ],
        confirm: "Chụp ảnh màn hình Hóa đơn bán hàng vừa được tạo thành công với trạng thái 'Hoàn thành'."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu (Hủy phiếu đặt hàng)",
        requirements: [
          "1. Thực hiện Hủy bỏ phiếu đặt hàng nháp chứa 'Sản phẩm Test 01' đã tạo ở Bài tập 1 để làm sạch dữ liệu hệ thống."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào danh sách Đặt hàng.",
          "2. Sử dụng ô tìm kiếm để tìm phiếu đặt hàng có chứa 'Sản phẩm Test 01'.",
          "3. Nhấn vào mã phiếu để mở chi tiết.",
          "4. Nhấn nút Hủy bỏ.",
          "5. Chọn Đồng ý để xác nhận."
        ],
        confirm: "Chụp ảnh màn hình hiển thị phiếu đặt hàng của 'Sản phẩm Test 01' đang nằm ở trạng thái 'Đã hủy'."
      },

      { title: "Bán hàng", isGroupHeader: true },
      {
        title: "Bài tập 1: Tạo hóa đơn bán hàng và áp dụng giảm giá",
        requirements: [
          "1. Tạo một hóa đơn cho khách hàng 'Anh Hoàng' mua 2 'Áo sơ mi nam Oxford' và 1 'Quần Tây Âu Slimfit'.",
          "2. Thực hiện giảm giá 5% trên tổng hóa đơn. Khách thanh toán bằng Tiền mặt.",
          "3. Tạo thêm một hóa đơn nháp chỉ chứa 'Sản phẩm Test 01' (Thanh toán tiền mặt) để làm dữ liệu mồi."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, nhấn vào nút 'Bán hàng' ở thanh menu trên cùng để mở màn hình thu ngân.",
          "2. Tìm và thêm 2 'Áo sơ mi nam Oxford' và 1 'Quần Tây Âu Slimfit' vào đơn hàng.",
          "3. Tại ô tìm kiếm khách hàng (F4), nhấn dấu + để thêm mới khách hàng 'Anh Hoàng'.",
          "4. Tại ô Giảm giá ở khu vực thanh toán, nhập số '5' và chọn biểu tượng '%'.",
          "5. Nhấn nút Thanh toán (F9) để hoàn tất.",
          "6. Tiếp tục tạo một hóa đơn mới, chọn 'Sản phẩm Test 01', nhấn Thanh toán ngay."
        ],
        confirm: "Chụp ảnh màn hình chi tiết Hóa đơn của Anh Hoàng trên màn hình Quản lý, hiển thị rõ phần giảm giá 5%."
      },
      {
        title: "Bài tập 2: Sao chép và chỉnh sửa hóa đơn",
        requirements: [
          "1. Sao chép hóa đơn của 'Anh Hoàng' cho một khách hàng mới nhưng yêu cầu thanh toán bằng hình thức Chuyển khoản."
        ],
        instructions: [
          "1. Trở lại màn hình Quản lý, vào menu Giao dịch -> Hóa đơn.",
          "2. Tìm và mở chi tiết hóa đơn của 'Anh Hoàng' vừa tạo ở Bài 1.",
          "3. Nhấn vào nút 'Sao chép' (hệ thống sẽ tự động chuyển sang màn hình Bán hàng với giỏ hàng tương tự).",
          "4. Tại ô khách hàng, xóa tên 'Anh Hoàng' (để thành Khách lẻ).",
          "5. Tại khu vực thanh toán, chọn phương thức 'Chuyển khoản'.",
          "6. Nhấn Thanh toán."
        ],
        confirm: "Chụp ảnh màn hình chi tiết Hóa đơn mới được sao chép, hiển thị phương thức thanh toán là Chuyển khoản."
      },
      {
        title: "Bài tập 3: Tạo mã QR thu nợ hóa đơn",
        requirements: [
          "1. Khách hàng 'Chị Lan Phương' mua thêm 3 'Áo sơ mi nam Oxford' nhưng chỉ mang theo một phần tiền mặt, phần còn lại xin ghi nợ.",
          "2. Thực hiện tạo hóa đơn ghi nợ, sau đó tạo mã QR thu nợ để gửi cho khách chuyển khoản phần tiền còn thiếu."
        ],
        instructions: [
          "1. Tại màn hình Bán hàng, tạo đơn với 3 'Áo sơ mi nam Oxford', chọn khách hàng 'Chị Lan Phương'.",
          "2. Tại ô Khách thanh toán, nhập số tiền nhỏ hơn tổng giá trị đơn hàng (Ví dụ: 500,000đ) và nhấn Thanh toán (hệ thống tự động ghi nhận nợ).",
          "3. Quay lại màn hình Quản lý, vào Giao dịch -> Hóa đơn, tìm và mở hóa đơn vừa tạo.",
          "4. Nhấn nút 'Tạo QR'.",
          "5. Chọn số Tài khoản nhận, hệ thống sẽ tự động điền Số tiền thanh toán tương ứng với khoản nợ."
        ],
        confirm: "Chụp ảnh màn hình popup chứa Mã QR thu nợ vừa được tạo ra."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu (Hủy hóa đơn)",
        requirements: [
          "1. Tìm và Hủy bỏ hóa đơn chứa 'Sản phẩm Test 01' đã tạo ở Bài tập 1 để trả lại tồn kho."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Giao dịch -> Hóa đơn.",
          "2. Sử dụng thanh tìm kiếm để tìm hóa đơn có chứa mặt hàng 'Sản phẩm Test 01'.",
          "3. Nhấn vào mã hóa đơn để mở chi tiết.",
          "4. Nhấn nút Hủy bỏ.",
          "5. Chọn Đồng ý để xác nhận hủy."
        ],
        confirm: "Chụp ảnh màn hình danh sách hóa đơn, hiển thị hóa đơn chứa Sản phẩm Test 01 đang ở trạng thái 'Đã hủy'."
      },

      { title: "Thanh toán", isGroupHeader: true },
      {
        title: "Bài tập 1: Thanh toán đa phương thức và tạo dữ liệu mồi",
        requirements: [
          "1. Khách hàng 'Anh Minh' mua 2 hộp 'Sữa bột Ensure Gold 850g' (Giá: 850,000đ/hộp, tổng 1,700,000đ).",
          "2. Khách yêu cầu thanh toán chia làm 2 phần: 700,000đ bằng Tiền mặt và 1,000,000đ bằng Chuyển khoản.",
          "3. Tạo thêm một hóa đơn nháp mua 'Sản phẩm Test 02' để dành cho bài tập hủy dữ liệu ở cuối."
        ],
        instructions: [
          "1. Tại màn hình Bán hàng, tìm và thêm 2 'Sữa bột Ensure Gold 850g' vào đơn. Tại ô tìm kiếm khách hàng, nhấn '+' để thêm 'Anh Minh'.",
          "2. Tại khu vực thanh toán, nhấn vào biểu tượng 'Đa phương thức' (hình thẻ và tiền mặt).",
          "3. Trong cửa sổ hiện ra, nhập 700,000 vào ô Tiền mặt và 1,000,000 vào ô Chuyển khoản.",
          "4. Nhấn Xong, sau đó nhấn Thanh toán (F9) để hoàn tất.",
          "5. Mở một đơn mới, chọn 'Sản phẩm Test 02', nhấn Thanh toán ngay bằng tiền mặt."
        ],
        confirm: "Chụp ảnh màn hình chi tiết Hóa đơn của Anh Minh trên màn hình Quản lý, hiển thị rõ 2 dòng phương thức thanh toán Tiền mặt và Chuyển khoản."
      },
      {
        title: "Bài tập 2: Thanh toán bằng quét mã QR động",
        requirements: [
          "1. Khách hàng 'Chị Nga' mua 1 'Thùng sữa tươi Vinamilk' (Giá: 350,000đ).",
          "2. Khách muốn thanh toán toàn bộ hóa đơn bằng cách quét mã QR chuyển khoản để đúng khớp số tiền."
        ],
        instructions: [
          "1. Tại màn hình Bán hàng, thêm 'Thùng sữa tươi Vinamilk' vào đơn và chọn tên khách hàng 'Chị Nga'.",
          "2. Tại khu vực thanh toán, chọn phương thức thanh toán là 'Chuyển khoản'.",
          "3. Hệ thống sẽ tự động sinh ra một mã QR động chứa thông tin tài khoản và đúng số tiền cần thanh toán là 350,000đ.",
          "4. Nhấn Thanh toán (F9) để hoàn thành giao dịch."
        ],
        confirm: "Chụp ảnh màn hình Bán hàng đang hiển thị mã QR động với số tiền 350,000đ."
      },
      {
        title: "Bài tập 3: Thiết lập và thanh toán bằng điểm tích lũy",
        requirements: [
          "1. Thiết lập tính năng Tích điểm: Tỷ lệ 100,000đ = 1 điểm; Cho phép thanh toán 1 điểm = 1,000đ.",
          "2. Khách hàng 'Chị Lan' mua đơn hàng 500,000đ thanh toán bằng tiền mặt để hệ thống tự động tích 5 điểm.",
          "3. 'Chị Lan' mua tiếp 1 'Lốc sữa chua Vinamilk' (Giá: 30,000đ) và yêu cầu dùng 5 điểm vừa có để giảm trừ thanh toán. Phần còn lại trả bằng Tiền mặt."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào Thiết lập -> Khách hàng -> Bật xanh 'Tích điểm'. Nhập tỷ lệ 100,000 = 1 điểm. Tích ô 'Cho phép thanh toán bằng điểm' và nhập 1 điểm = 1,000đ -> Nhấn Lưu.",
          "2. Sang màn hình Bán hàng, tạo hóa đơn 500,000đ cho 'Chị Lan', nhấn Thanh toán (Tiền mặt) để tích điểm.",
          "3. Tạo tiếp hóa đơn mới, thêm 'Lốc sữa chua Vinamilk' và chọn đúng khách hàng 'Chị Lan'.",
          "4. Bật công tắc màu xanh ở mục 'Điểm'. Hệ thống tự quy đổi 5 điểm thành 5,000đ để giảm trừ.",
          "5. Số tiền 25,000đ còn lại hệ thống tự điền vào Tiền mặt. Nhấn Thanh toán (F9) để kết thúc."
        ],
        confirm: "Chụp ảnh màn hình Bán hàng ở hóa đơn thứ 2 của Chị Lan, hiển thị mục Điểm đã được bật xanh và tự động quy đổi thành tiền giảm trừ."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu (Hủy hóa đơn)",
        requirements: [
          "1. Tìm và hủy bỏ hóa đơn nháp chứa 'Sản phẩm Test 02' đã tạo ở Bài tập 1 để làm sạch dữ liệu."
        ],
        instructions: [
          "1. Quay trở lại màn hình Quản lý, vào menu Giao dịch -> Hóa đơn.",
          "2. Sử dụng thanh tìm kiếm để lọc ra hóa đơn có chứa 'Sản phẩm Test 02'.",
          "3. Nhấn vào mã hóa đơn để xem chi tiết.",
          "4. Nhấn nút Hủy bỏ và chọn Đồng ý để xác nhận."
        ],
        confirm: "Chụp ảnh màn hình danh sách hóa đơn, hiển thị hóa đơn chứa Sản phẩm Test 02 đang nằm ở trạng thái 'Đã hủy'."
      },

      { title: "Thanh toán qua QR", isGroupHeader: true },
      {
        title: "Bài tập 1: Thêm tài khoản ngân hàng và tìm hiểu đăng ký dịch vụ",
        requirements: [
          "1. Thêm tài khoản ngân hàng Vietcombank (STK: 0123456789, Tên chủ TK: NGUYEN VAN A) vào hệ thống để chuẩn bị nhận tiền chuyển khoản từ khách.",
          "2. Truy cập vào giao diện đăng ký dịch vụ thông báo thanh toán QR nâng cao cho tài khoản Vietcombank (Chỉ thao tác mở màn hình, KHÔNG thực hiện đăng ký thật).",
          "3. Tạo thêm một tài khoản ngân hàng mồi có tên 'Ngân hàng Test' (STK: 111111)."
        ],
        instructions: [
          "1. Tại màn hình Bán hàng, chọn phương thức thanh toán là Chuyển khoản, sau đó nhấn vào nút 'Thêm tài khoản'.",
          "2. Chọn ngân hàng Vietcombank, điền số tài khoản 0123456789, tên NGUYEN VAN A và nhấn Lưu.",
          "3. Lặp lại thao tác để tạo 'Ngân hàng Test' với số tài khoản 111111.",
          "4. Tại màn hình Quản lý, chọn menu 'Thanh toán' ở cột bên trái.",
          "5. Tìm thẻ ngân hàng Vietcombank vừa thêm, nhấn 'Đăng ký'. Dừng lại ở bước hệ thống hiển thị cửa sổ yêu cầu xác thực hoặc điền thông tin."
        ],
        confirm: "Chụp ảnh màn hình cửa sổ Đăng ký dịch vụ của Vietcombank để chứng minh đã biết cách truy cập vào tính năng này."
      },
      {
        title: "Bài tập 2: Bán hàng và tạo mã QR động",
        requirements: [
          "1. Khách hàng 'Chị Mai' mua 1 'Sữa rửa mặt Cetaphil' (Giá: 300,000đ) và 1 'Nước tẩy trang Bioderma' (Giá: 400,000đ). Tổng hóa đơn là 700,000đ.",
          "2. Khách yêu cầu thanh toán toàn bộ hóa đơn bằng cách quét mã QR.",
          "3. Tạo thêm một hóa đơn nháp mua 'Sản phẩm Test 03' (Thanh toán bằng Tiền mặt) để làm dữ liệu mồi."
        ],
        instructions: [
          "1. Tại màn hình Bán hàng, tìm và thêm 'Sữa rửa mặt Cetaphil' và 'Nước tẩy trang Bioderma' vào đơn.",
          "2. Tại ô tìm kiếm khách hàng, nhấn dấu '+' để thêm khách hàng 'Chị Mai'.",
          "3. Tại khu vực thanh toán, chọn phương thức 'Chuyển khoản'.",
          "4. Chọn đúng tài khoản Vietcombank đã thiết lập ở Bài 1. Hệ thống sẽ sinh ra một mã QR động.",
          "5. Nhấn 'Hiện mã QR' để phóng to cho khách quét. Chờ thông báo thành công (giả định) rồi nhấn Thanh toán (F9).",
          "6. Mở một hóa đơn mới, chọn 'Sản phẩm Test 03', chọn phương thức Tiền mặt và nhấn Thanh toán ngay."
        ],
        confirm: "Chụp ảnh màn hình Bán hàng đang hiển thị mã QR động đã được phóng to, bao gồm đầy đủ số tiền 700,000đ."
      },
      {
        title: "Bài tập 3: Tìm kiếm tài liệu hướng dẫn liên kết ngân hàng",
        requirements: [
          "1. Tìm bài viết Hướng dẫn sử dụng chi tiết về cách liên kết tính năng thanh toán QR nâng cao với ngân hàng Sacombank trên trang chủ KiotViet."
        ],
        instructions: [
          "1. Mở thẻ trình duyệt mới và truy cập vào website chính thức: kiotviet.vn.",
          "2. Tìm và nhấn vào mục 'Hỗ trợ' trên thanh menu ở đầu trang.",
          "3. Tại thanh tìm kiếm của trang Hỗ trợ, nhập từ khóa 'Sacombank' và nhấn phím Enter.",
          "4. Nhấp vào bài viết hướng dẫn liên kết thanh toán QR với Sacombank trong danh sách kết quả để xem nội dung."
        ],
        confirm: "Chụp ảnh màn hình giao diện nội dung bài viết Hướng dẫn sử dụng liên kết ngân hàng Sacombank trên trang Hỗ trợ."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu rác",
        requirements: [
          "1. Tìm và hủy bỏ hóa đơn nháp chứa 'Sản phẩm Test 03' để hoàn lại tồn kho.",
          "2. Xóa bỏ tài khoản 'Ngân hàng Test' đã tạo ở Bài tập 1 để làm sạch danh sách sổ quỹ."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Giao dịch -> Hóa đơn. Tìm hóa đơn chứa 'Sản phẩm Test 03', mở chi tiết, nhấn Hủy bỏ và chọn Đồng ý.",
          "2. Vào menu Sổ quỹ.",
          "3. Tìm đến tài khoản 'Ngân hàng Test', chọn thao tác Xóa (hoặc Ngừng hoạt động).",
          "4. Chọn Đồng ý để xác nhận dọn dẹp dữ liệu."
        ],
        confirm: "Chụp ảnh màn hình danh sách Hóa đơn hiển thị phiếu của Sản phẩm Test 03 ở trạng thái 'Đã hủy'."
      },

      { title: "Khách hàng", isGroupHeader: true },
      {
        title: "Bài tập 1: Tạo nhóm Khách hàng VIP (Có ràng buộc điều kiện tự động)",
        requirements: [
          "1. Tạo nhóm khách hàng 'Nhóm VIP' với ưu đãi tự động giảm giá 5% cho tất cả các hóa đơn mua hàng.",
          "2. Thiết lập điều kiện nâng cao: Bất kỳ khách hàng nào có 'Tổng bán (trừ trả hàng)' lớn hơn hoặc bằng 3,000,000đ sẽ được hệ thống tự động thêm vào 'Nhóm VIP'.",
          "3. Tạo sẵn một khách hàng nháp tên 'Khách hàng Test 01' (Số điện thoại: 0999888777)."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Khách hàng -> chọn Khách hàng.",
          "2. Ở cột bên trái phần Nhóm khách hàng, nhấn nút dấu '+' (Tạo mới).",
          "3. Tại tab Thông tin, nhập Tên nhóm là 'Nhóm VIP' và điền Giảm giá là '5%'.",
          "4. Chuyển sang tab 'Thiết lập nâng cao', nhấn chọn dòng '+ Thêm điều kiện'.",
          "5. Chọn tiêu chí 'Tổng bán (trừ trả hàng)', chọn toán tử lớn hơn hoặc bằng (>=) và nhập số tiền 3,000,000.",
          "6. Tích chọn 'Cập nhật lại danh sách theo điều kiện' và tích chọn ô 'Hệ thống thực hiện tự động'. Sau đó nhấn Lưu.",
          "7. Nhấn nút '+ Khách hàng' ở góc trên bên phải màn hình, điền thông tin 'Khách hàng Test 01' rồi nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình bảng Thiết lập nâng cao của Nhóm VIP, hiển thị rõ điều kiện >= 3,000,000 và các ô tự động đã được tích chọn."
      },
      {
        title: "Bài tập 2: Kích hoạt điều kiện và kiểm tra quyền lợi Nhóm VIP",
        requirements: [
          "1. Bán một đơn hàng trị giá 5,000,000đ cho khách hàng mới tên 'Quốc Quý' để khách hàng này thỏa mãn điều kiện và được tự động đưa vào nhóm VIP.",
          "2. Bán tiếp một hóa đơn thứ 2 cho 'Quốc Quý' để kiểm chứng xem hệ thống có tự động áp dụng mức giảm giá 5% cho thành viên Nhóm VIP hay không."
        ],
        instructions: [
          "1. Mở màn hình Bán hàng, chọn một vài sản phẩm và sửa số lượng/giá bán để tổng tiền đạt 5,000,000đ.",
          "2. Tại ô tìm kiếm khách hàng, nhấn dấu '+' để thêm mới khách hàng 'Quốc Quý' và nhấn Thanh toán (F9).",
          "3. Bắt đầu một hóa đơn mới, thêm 1 sản phẩm bất kỳ vào giỏ hàng.",
          "4. Tại ô tìm khách hàng, gõ và chọn lại tên 'Quốc Quý'.",
          "5. Quan sát ô Giảm giá ở khu vực thanh toán, hệ thống sẽ tự động hiển thị mức giảm 5%. Nhấn Thanh toán (F9) để hoàn thành."
        ],
        confirm: "Chụp ảnh màn hình giao diện Bán hàng ở hóa đơn thứ 2 của Quốc Quý, hiển thị rõ khách hàng này đã được áp dụng tự động Giảm giá 5%."
      },
      {
        title: "Bài tập 3: Thiết lập Cảnh báo Công nợ",
        requirements: [
          "1. Kích hoạt tính năng cảnh báo công nợ cho toàn hệ thống.",
          "2. Thiết lập hạn mức 'Số tiền nợ tối đa' là 5,000,000đ. (Chỉ bật cảnh báo, vẫn cho phép khách nợ thêm)."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Thiết lập -> chọn Khách hàng.",
          "2. Tìm và bật công tắc màu xanh ở dòng 'Cảnh báo công nợ khách hàng'.",
          "3. Trong pop-up hiện ra, tại ô 'Số tiền nợ tối đa', nhập vào số 5,000,000.",
          "4. Tích chọn ô 'Cho phép khách hàng nợ thêm' và nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình giao diện Thiết lập Khách hàng đang hiển thị phần Cảnh báo công nợ đã được bật và cài mức 5,000,000đ."
      },
      {
        title: "Bài tập 4: Phát sinh công nợ và xem lịch sử",
        requirements: [
          "1. Khách hàng 'Anh Hoàng' tới mua 20 'Áo thun Cotton' (Giả định tổng hóa đơn là 2,000,000đ). Khách yêu cầu ghi nợ toàn bộ.",
          "2. Kiểm tra lại tab Công nợ của khách hàng này để xác nhận hệ thống đã ghi nhận khoản nợ cần thu là 2,000,000đ."
        ],
        instructions: [
          "1. Mở màn hình Bán hàng, chọn 'Áo thun Cotton', sửa số lượng và giá để tổng tiền là 2,000,000đ.",
          "2. Tại ô Tìm khách hàng, thêm mới và chọn tên 'Anh Hoàng'.",
          "3. Tại ô Khách thanh toán, nhập số 0. Nhấn Thanh toán (F9) để hoàn thành (Hệ thống sẽ ghi nhận nợ).",
          "4. Quay lại màn hình Quản lý -> Khách hàng -> Khách hàng.",
          "5. Tìm và nhấn vào tên 'Anh Hoàng'. Chọn tab 'Nợ cần thu từ khách'."
        ],
        confirm: "Chụp ảnh màn hình tab 'Nợ cần thu từ khách' của Anh Hoàng, hiển thị rõ dòng giá trị Nợ hiện tại là 2,000,000đ."
      },
      {
        title: "Bài tập 5: Thanh toán công nợ và Chiết khấu",
        requirements: [
          "1. Hôm sau, 'Anh Hoàng' đến cửa hàng trả nợ số tiền 1,900,000đ bằng Tiền mặt.",
          "2. Chủ cửa hàng quyết định giảm (chiết khấu) luôn 100,000đ tiền nợ còn lại lẻ tẻ cho khách để làm tròn công nợ về 0đ."
        ],
        instructions: [
          "1. Vẫn ở tab 'Nợ cần thu từ khách' của 'Anh Hoàng', nhấn nút 'Thanh toán'.",
          "2. Tại ô Thu từ khách, nhập số tiền 1,900,000đ, chọn phương thức Tiền mặt và nhấn 'Tạo phiếu thu'.",
          "3. Tiếp tục nhấn nút 'Chiết khấu thanh toán' ở kế bên.",
          "4. Nhập số tiền 100,000đ, thêm ghi chú 'Làm tròn nợ cho khách sỉ' và nhấn 'Tạo phiếu'."
        ],
        confirm: "Chụp ảnh màn hình tab Nợ cần thu từ khách của Anh Hoàng, hiển thị Nợ hiện tại đã trở về mức 0 và có các phiếu thu/chiết khấu tương ứng bên dưới."
      },
      {
        title: "Bài tập 6: Dọn dẹp dữ liệu rác (Xóa Khách hàng)",
        requirements: [
          "1. Thực hiện thao tác dọn dẹp hệ thống: Tìm và xóa vĩnh viễn 'Khách hàng Test 01' đã tạo ở Bài tập 1."
        ],
        instructions: [
          "1. Tại màn hình Khách hàng, sử dụng ô tìm kiếm để tìm 'Khách hàng Test 01'.",
          "2. Nhấn vào tên khách hàng để mở trang chi tiết.",
          "3. Nhấn vào nút 'Xóa' (hoặc biểu tượng 3 chấm -> Xóa).",
          "4. Chọn 'Đồng ý' để xác nhận việc xóa hoàn toàn khỏi hệ thống."
        ],
        confirm: "Chụp ảnh màn hình danh sách Khách hàng sau khi tìm kiếm 'Khách hàng Test 01' trả về kết quả trống."
      }
    ]
  },
  {
    id: "session_4",
    title: "Buổi 4: Mở rộng Bán hàng & Phân quyền",
    exercises: [
      { title: "Trả hàng", isGroupHeader: true },
      {
        title: "Bài tập 1: Thiết lập giới hạn thời gian trả hàng",
        requirements: [
          "1. Thiết lập chính sách chỉ cho phép khách hàng trả hàng trong vòng 3 ngày kể từ ngày mua.",
          "2. Cửa hàng muốn nhân viên vẫn có thể linh động xử lý trả hàng quá hạn trong các trường hợp đặc biệt (hệ thống chỉ hiển thị cảnh báo, không chặn hoàn toàn thao tác)."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Thiết lập -> chọn Đơn hàng.",
          "2. Tìm đến tính năng 'Giới hạn thời gian trả hàng' và bật công tắc sang màu xanh.",
          "3. Tại phần 'Kể từ ngày mua, khách hàng được trả hàng trong vòng', nhập số '3' ngày.",
          "4. Tại mục 'Xử lý khi trả hàng quá hạn', tích chọn 'Hiển thị cảnh báo khi trả hàng' để đảm bảo tính linh hoạt cho nhân viên.",
          "5. Đóng cửa sổ thiết lập, hệ thống sẽ tự động lưu lại cấu hình của bạn."
        ],
        confirm: "Chụp ảnh màn hình giao diện Thiết lập Đơn hàng đã bật tính năng giới hạn 3 ngày và chọn Hiển thị cảnh báo."
      },
      {
        title: "Bài tập 2: Tạo dữ liệu mồi và Trả hàng theo hóa đơn",
        requirements: [
          "1. Bán 1 'Sản phẩm Test 04' (Thanh toán bằng Tiền mặt) để tạo một hóa đơn nháp.",
          "2. Khách hàng mang hóa đơn của 'Sản phẩm Test 04' quay lại trả hàng. Thực hiện thao tác 'Trả hàng theo hóa đơn' và hoàn lại tiền mặt cho khách."
        ],
        instructions: [
          "1. Tại màn hình Bán hàng, tìm 'Sản phẩm Test 04', nhấn Thanh toán (F9) để tạo hóa đơn.",
          "2. Vẫn ở màn hình Bán hàng, nhấn vào biểu tượng 3 dấu gạch ngang (Tùy chọn) ở góc trên bên phải -> Chọn 'Chọn hóa đơn trả hàng'.",
          "3. Trong cửa sổ hiện ra, tìm hóa đơn của 'Sản phẩm Test 04' vừa tạo và nhấn nút Chọn.",
          "4. Tại giao diện Trả hàng, kiểm tra Số lượng trả là 1, kiểm tra số Tiền trả khách và nhấn Trả hàng (F9) để hoàn tất."
        ],
        confirm: "Chụp ảnh màn hình chi tiết Phiếu trả hàng của Sản phẩm Test 04 vừa tạo trên màn hình Quản lý."
      },
      {
        title: "Bài tập 3: Trả hàng nhanh (Không cần hóa đơn gốc)",
        requirements: [
          "1. Khách hàng mang đến 1 'Quần Jean Nam' (Giả định giá: 450,000đ) bị lỗi chỉ muốn trả lại lấy tiền mặt. Khách đã làm mất hóa đơn và không nhớ số điện thoại mua hàng.",
          "2. Thực hiện thao tác Trả hàng nhanh cho trường hợp này."
        ],
        instructions: [
          "1. Tại màn hình Bán hàng, mở menu Tùy chọn (3 gạch ngang) -> Chọn 'Chọn hóa đơn trả hàng'.",
          "2. Tại pop-up Chọn hóa đơn trả hàng, nhấn vào nút 'Trả nhanh'.",
          "3. Tại ô tìm kiếm, gõ và chọn sản phẩm 'Quần Jean Nam', nhập số lượng trả là 1.",
          "4. Kiểm tra phần Tiền trả khách hệ thống tính toán là 450,000đ (chọn phương thức Tiền mặt) và nhấn Trả hàng (F9) để hoàn thành."
        ],
        confirm: "Chụp ảnh màn hình giao diện Trả hàng hiển thị sản phẩm Quần Jean Nam và phần Tiền trả khách là 450,000đ trước khi bấm hoàn tất."
      },
      {
        title: "Bài tập 4: Nghiệp vụ Đổi trả hàng (Trả cũ đổi mới)",
        requirements: [
          "1. Khách hàng 'Chị Lan' mang trả lại 1 'Áo sơ mi nữ' (Giá: 250,000đ) nhưng không muốn nhận lại tiền mặt mà muốn đổi sang 1 'Áo khoác gió' (Giá: 400,000đ).",
          "2. Thực hiện thao tác đổi trả hàng ngay trong một giao dịch (dùng Trả hàng nhanh) và thu thêm phần tiền chênh lệch của khách là 150,000đ."
        ],
        instructions: [
          "1. Tiếp tục mở màn hình 'Trả nhanh' như đã thực hiện ở Bài tập 3.",
          "2. Tại phần Hàng trả lại, thêm sản phẩm 'Áo sơ mi nữ' với số lượng là 1.",
          "3. Tại ô tìm kiếm hàng hóa (hoặc nhấn phím F7), gõ và chọn sản phẩm khách muốn mua mới là 'Áo khoác gió'.",
          "4. Hệ thống sẽ tự động đối trừ. Tại ô Khách thanh toán, nhập số tiền chênh lệch 150,000đ mà khách cần bù thêm.",
          "5. Nhấn nút Trả hàng (F9) để hoàn tất quy trình đổi trả trong cùng một phiếu."
        ],
        confirm: "Chụp ảnh màn hình giao diện Đổi trả hàng, hiển thị rõ cả dòng sản phẩm trả lại (Áo sơ mi) và dòng sản phẩm mua mới (Áo khoác) cùng phần chênh lệch."
      },
      {
        title: "Bài tập 5: Quản lý và Hủy Phiếu trả hàng (Dọn dẹp dữ liệu)",
        requirements: [
          "1. Tìm lại phiếu trả hàng của 'Sản phẩm Test 04' đã thực hiện ở Bài tập 2.",
          "2. Thực hiện Hủy phiếu trả hàng này để phục hồi tồn kho và làm sạch dữ liệu hệ thống."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Đơn hàng -> chọn Trả hàng.",
          "2. Tìm phiếu trả hàng có chứa mặt hàng 'Sản phẩm Test 04' và nhấn vào mã phiếu để xem chi tiết.",
          "3. Nhấn vào nút Hủy (hoặc Hủy bỏ).",
          "4. Chọn Đồng ý để xác nhận hệ thống cập nhật lại tồn kho và hủy chứng từ."
        ],
        confirm: "Chụp ảnh màn hình danh sách Trả hàng, hiển thị rõ phiếu trả hàng của Sản phẩm Test 04 đang ở trạng thái 'Đã hủy'."
      },

      { title: "Quản lý Người dùng", isGroupHeader: true },
      {
        title: "Bài tập 1: Tạo vai trò mới và phân quyền",
        requirements: [
          "1. Tạo một vai trò mới trên hệ thống với tên gọi là 'Nhân viên Thu ngân Ca đêm'.",
          "2. Thiết lập quyền hạn cho vai trò này: Chỉ được phép 'Xem hàng hóa', 'Tạo hóa đơn' và 'Thanh toán'. Không được phép xem giá vốn hay báo cáo lợi nhuận."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Thiết lập -> chọn Cửa hàng.",
          "2. Ở menu bên trái, nhấn chọn Quản lý người dùng -> Quản lý vai trò.",
          "3. Nhấn nút '+ Tạo vai trò'.",
          "4. Đặt tên vai trò là 'Nhân viên Thu ngân Ca đêm'.",
          "5. Trong danh sách phân quyền bên dưới, tìm và đánh dấu tích vào các ô tương ứng với quyền Xem hàng hóa, Tạo hóa đơn, Thanh toán (Bỏ qua các quyền liên quan đến báo cáo, giá vốn).",
          "6. Nhấn Lưu để hoàn tất."
        ],
        confirm: "Chụp ảnh màn hình danh sách Quản lý vai trò hiển thị vai trò 'Nhân viên Thu ngân Ca đêm' vừa được tạo."
      },
      {
        title: "Bài tập 2: Tạo mới tài khoản người dùng và giới hạn truy cập",
        requirements: [
          "1. Cửa hàng tuyển mới nhân viên 'Lê Văn B'. Hãy tạo một tài khoản đăng nhập cho nhân viên này.",
          "2. Gán nhân viên Lê Văn B vào vai trò 'Nhân viên Thu ngân Ca đêm'.",
          "3. Thiết lập giới hạn thời gian truy cập cho tài khoản này: Chỉ được phép đăng nhập vào hệ thống trong khung giờ từ 20:00 đến 06:00 sáng hôm sau, áp dụng cho tất cả các ngày trong tuần.",
          "4. Tạo thêm một tài khoản mồi có tên đăng nhập là 'test_xoa'."
        ],
        instructions: [
          "1. Tại menu Quản lý người dùng, chuyển sang tab Tài khoản người dùng.",
          "2. Nhấn nút '+ Tạo tài khoản'.",
          "3. Điền Tên hiển thị là 'Lê Văn B', đặt Tên đăng nhập và Mật khẩu theo ý muốn.",
          "4. Tại phần Chi nhánh & Vai trò, chọn vai trò là 'Nhân viên Thu ngân Ca đêm'.",
          "5. Kéo xuống phần Thời gian truy cập, chọn 'Chỉ phép truy cập trong khung giờ cố định'. Tích chọn tất cả các ngày trong tuần và thiết lập khung giờ từ 20:00 đến 06:00.",
          "6. Nhấn Lưu.",
          "7. Lặp lại thao tác tạo tài khoản để tạo 'test_xoa' (không cần thiết lập giới hạn thời gian)."
        ],
        confirm: "Chụp ảnh màn hình thông tin chi tiết của tài khoản Lê Văn B, hiển thị rõ phần phân quyền vai trò và giới hạn khung giờ truy cập."
      },
      {
        title: "Bài tập 3: Sao chép người dùng để tạo tài khoản nhanh",
        requirements: [
          "1. Cửa hàng tuyển thêm nhân viên 'Trần Thị C' làm cùng ca đêm với 'Lê Văn B'.",
          "2. Thay vì tạo mới từ đầu, hãy sử dụng tính năng sao chép để tạo nhanh tài khoản cho 'Trần Thị C' với toàn bộ quyền hạn và giới hạn thời gian giống hệt 'Lê Văn B'."
        ],
        instructions: [
          "1. Tại danh sách Tài khoản người dùng, tìm và nhấn chọn vào tài khoản của 'Lê Văn B'.",
          "2. Nhấn nút 'Sao chép' (Thường nằm ở góc hoặc trong menu tùy chọn).",
          "3. Màn hình tạo mới sẽ hiện ra nhưng giữ nguyên các thiết lập phân quyền và thời gian.",
          "4. Đổi Tên hiển thị thành 'Trần Thị C', điền Tên đăng nhập và Mật khẩu mới cho nhân viên này.",
          "5. Nhấn Lưu để hoàn tất."
        ],
        confirm: "Chụp ảnh màn hình danh sách người dùng hiển thị cả hai tài khoản Lê Văn B và Trần Thị C có cùng một Vai trò."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu rác (Ngừng hoạt động và Xóa tài khoản)",
        requirements: [
          "1. Nhân viên có tài khoản 'test_xoa' đã nghỉ việc. Hãy khóa (Ngừng hoạt động) tài khoản này để ngăn chặn truy cập.",
          "2. Sau khi đã xác nhận không cần giữ lại thông tin, hãy Xóa vĩnh viễn tài khoản 'test_xoa' khỏi hệ thống."
        ],
        instructions: [
          "1. Tại danh sách Tài khoản người dùng, tìm đến tài khoản 'test_xoa'.",
          "2. Nhấn chọn tài khoản đó để xem chi tiết.",
          "3. Nhấn nút 'Ngừng hoạt động' và chọn Đồng ý.",
          "4. Tiếp tục nhấn nút 'Xóa' trên chính tài khoản đó (hoặc từ danh sách).",
          "5. Chọn 'Xóa' một lần nữa để xác nhận thao tác dọn dẹp hệ thống."
        ],
        confirm: "Chụp ảnh màn hình danh sách tài khoản người dùng sau khi đã tìm kiếm 'test_xoa' và trả về kết quả trống."
      },

      { title: "Quản lý Nhân viên", isGroupHeader: true },
      {
        title: "Bài tập 1: Tạo mới phòng ban và chức danh",
        requirements: [
          "1. Tạo một phòng ban mới với tên gọi 'Khối Cửa Hàng'.",
          "2. Tạo hai chức danh mới là 'Cửa hàng trưởng' và 'Nhân viên Bán hàng'.",
          "3. Tạo thêm một phòng ban mồi tên là 'Phòng Test 01'."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, chọn menu Nhân viên -> chọn Danh sách nhân viên.",
          "2. Tại cột bộ lọc bên trái, tìm mục 'Phòng ban', nhấn vào biểu tượng dấu '+' bên cạnh.",
          "3. Nhập Tên phòng ban là 'Khối Cửa Hàng' và nhấn Lưu. Lặp lại thao tác này để tạo 'Phòng Test 01'.",
          "4. Tương tự, tại mục 'Chức danh' ở cột bộ lọc, nhấn biểu tượng dấu '+' để thêm lần lượt 'Cửa hàng trưởng' và 'Nhân viên Bán hàng'."
        ],
        confirm: "Chụp ảnh màn hình cột bộ lọc bên trái, hiển thị rõ các Phòng ban và Chức danh vừa được tạo thành công."
      },
      {
        title: "Bài tập 2: Thêm mới nhân viên và tạo dữ liệu mồi",
        requirements: [
          "1. Thêm mới nhân viên 'Nguyễn Thị Lan' (Số điện thoại: 0988111222).",
          "2. Gán nhân viên Lan vào phòng ban 'Khối Cửa Hàng' với chức danh 'Nhân viên Bán hàng'.",
          "3. Tạo thêm một nhân viên nháp tên 'Nhân viên Test 01' (Số điện thoại: 0999000111)."
        ],
        instructions: [
          "1. Tại màn hình Danh sách nhân viên, nhấn vào nút '+ Nhân viên' ở góc trên bên phải.",
          "2. Điền thông tin bắt buộc: Tên nhân viên là 'Nguyễn Thị Lan', Số điện thoại là '0988111222'.",
          "3. Chọn Chi nhánh làm việc hiện tại, chọn Phòng ban là 'Khối Cửa Hàng' và Chức danh là 'Nhân viên Bán hàng'.",
          "4. Nhấn Lưu để ghi nhận.",
          "5. Lặp lại các bước trên để thêm 'Nhân viên Test 01'."
        ],
        confirm: "Chụp ảnh màn hình Danh sách nhân viên, hiển thị rõ tên của Nguyễn Thị Lan và Nhân viên Test 01 cùng các thông tin tương ứng."
      },
      {
        title: "Bài tập 3: Cập nhật thông tin nhân viên",
        requirements: [
          "1. Do có thành tích xuất sắc, nhân viên 'Nguyễn Thị Lan' được thăng chức. Hãy cập nhật chức danh của nhân viên này thành 'Cửa hàng trưởng'."
        ],
        instructions: [
          "1. Tại màn hình Danh sách nhân viên, tìm và kích chuột vào dòng chứa tên 'Nguyễn Thị Lan' để mở thông tin chi tiết.",
          "2. Nhấn nút 'Cập nhật'.",
          "3. Tại trường thông tin Chức danh, đổi từ 'Nhân viên Bán hàng' sang 'Cửa hàng trưởng'.",
          "4. Nhấn Lưu để ghi nhận thay đổi."
        ],
        confirm: "Chụp ảnh màn hình chi tiết của nhân viên Nguyễn Thị Lan sau khi đã được cập nhật chức danh thành Cửa hàng trưởng."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu rác (Ngừng làm việc và Xóa)",
        requirements: [
          "1. Thao tác cho 'Nhân viên Test 01' ngừng làm việc trên hệ thống do nhân viên nháp này không còn hoạt động.",
          "2. Xóa vĩnh viễn 'Phòng Test 01' đã tạo ở Bài tập 1 để làm sạch danh mục phòng ban."
        ],
        instructions: [
          "1. Tại Danh sách nhân viên, tìm và kích vào tên 'Nhân viên Test 01'.",
          "2. Nhấn nút 'Ngừng làm việc' và chọn Đồng ý để xác nhận.",
          "3. Nhìn sang cột bộ lọc bên trái, tìm mục Phòng ban và di chuột tới 'Phòng Test 01'.",
          "4. Kích vào biểu tượng cây bút (Chỉnh sửa) bên cạnh tên phòng ban này.",
          "5. Kích nút 'Xóa' và chọn Đồng ý để xóa vĩnh viễn."
        ],
        confirm: "Chụp ảnh màn hình Danh sách nhân viên sau khi lọc trạng thái 'Ngừng hoạt động' hiển thị Nhân viên Test 01."
      },

      { title: "Quản lý Chấm công", isGroupHeader: true },
      {
        title: "Bài tập 1: Thiết lập ca làm việc và tạo dữ liệu mồi",
        requirements: [
          "1. Định nghĩa các khung giờ chuẩn cho cửa hàng bằng cách tạo 2 ca làm việc: 'Ca Sáng' (08:00 - 12:00) và 'Ca Chiều' (13:00 - 17:00).",
          "2. Tạo thêm một ca làm việc mồi có tên là 'Ca Test 01' (18:00 - 22:00) để dành riêng cho thao tác xóa dữ liệu."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Nhân viên -> Thiết lập chung -> Ca làm việc.",
          "2. Nhấn vào nút '+ Thêm ca làm việc'.",
          "3. Nhập Tên ca là 'Ca Sáng', chọn Giờ làm việc từ 08:00 đến 12:00. Nhấn Lưu để hoàn tất.",
          "4. Lặp lại thao tác thêm ca làm việc để tạo tiếp 'Ca Chiều' và 'Ca Test 01' với thời gian tương ứng."
        ],
        confirm: "Chụp ảnh màn hình danh sách Ca làm việc, hiển thị rõ 3 ca vừa được tạo thành công."
      },
      {
        title: "Bài tập 2: Đặt lịch làm việc lặp lại",
        requirements: [
          "1. Thực hiện xếp lịch làm việc cho một nhân viên bất kỳ trong cửa hàng (Ví dụ: 'Nguyễn Thị Lan') vào 'Ca Sáng'.",
          "2. Thiết lập quy tắc để lịch làm việc này lặp lại hàng tuần từ Thứ 2 đến Thứ 6."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Nhân viên -> chọn Lịch làm việc.",
          "2. Ở góc trên, chọn kiểu hiển thị là 'Xem theo ca'.",
          "3. Nhấn vào nút 'Thêm nhân viên' nằm trên dòng của 'Ca Sáng'.",
          "4. Tích chọn tên nhân viên (Ví dụ: Nguyễn Thị Lan).",
          "5. Bật công tắc xanh ở mục 'Lặp lại hàng tuần', tích chọn các ngày từ Thứ 2 đến Thứ 6 và nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Lịch làm việc, hiển thị rõ nhân viên đã được xếp lịch trải đều vào các ngày trong tuần ở Ca Sáng."
      },
      {
        title: "Bài tập 3: Chấm công thủ công và ghi nhận phạt vi phạm",
        requirements: [
          "1. Nhân viên ở Bài tập 2 quên chấm công và đi làm muộn 15 phút. Quản lý cần thực hiện chấm công thủ công (Đi làm) cho ca làm việc ngày hôm nay.",
          "2. Ghi nhận thêm lỗi vi phạm 'Đi muộn' với mức phạt 50,000đ trực tiếp vào lịch làm việc vừa chấm công để trừ vào lương cuối kỳ."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Nhân viên -> chọn Bảng chấm công. (Chọn kiểu hiển thị Xem theo ca).",
          "2. Kích chuột vào ô lịch làm việc ngày hôm nay của nhân viên đó tại dòng 'Ca Sáng'.",
          "3. Tại mục Loại, đảm bảo đang chọn 'Đi làm'. Tích chọn vào cả 2 ô Vào và Ra.",
          "4. Nhập Giờ vào thực tế là '08:15' (muộn 15 phút) và Giờ ra là '12:00'.",
          "5. Chuyển sang tab 'Phạt vi phạm' ngay trong pop-up đó, nhấn '+ Thêm loại vi phạm'.",
          "6. Nhập Tên vi phạm là 'Đi muộn', Mức áp dụng là 50,000đ và nhấn Lưu.",
          "7. Sau đó nhấn nút 'Thêm vi phạm', chọn loại 'Đi muộn', nhập số lần vi phạm là 1 và nhấn Lưu để hoàn tất quy trình chấm công."
        ],
        confirm: "Chụp ảnh màn hình chi tiết Bảng chấm công của nhân viên, hiển thị rõ giờ vào lúc 08:15 và có ghi nhận số tiền Phạt vi phạm là 50,000đ."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu rác (Xóa ca làm việc)",
        requirements: [
          "1. Thực hiện dọn dẹp hệ thống: Tìm và xóa vĩnh viễn 'Ca Test 01' đã tạo ở Bài tập 1 do không có nhu cầu sử dụng thực tế."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, quay lại menu Nhân viên -> Thiết lập chung -> Ca làm việc.",
          "2. Tìm đến dòng chứa 'Ca Test 01'.",
          "3. Kích chuột vào biểu tượng thùng rác (Xóa) ở bên cạnh tên ca làm việc.",
          "4. Chọn Đồng ý để xác nhận xóa vĩnh viễn khỏi danh sách."
        ],
        confirm: "Chụp ảnh màn hình danh sách Ca làm việc sau khi đã dọn dẹp, không còn hiển thị Ca Test 01."
      },

      { title: "Quản lý Hoa hồng", isGroupHeader: true },
      {
        title: "Bài tập 1: Thêm mới bảng hoa hồng và tạo dữ liệu mồi",
        requirements: [
          "1. Tạo một bảng hoa hồng mới có tên 'Hoa hồng Mỹ phẩm' áp dụng cho Toàn hệ thống để chuẩn bị chạy chương trình thưởng cho nhân viên.",
          "2. Tạo thêm một bảng hoa hồng nháp có tên 'Bảng Test 01' để dành riêng cho thao tác xóa dữ liệu ở bài tập cuối."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, chọn menu Nhân viên -> Bảng hoa hồng.",
          "2. Nhấn nút 'Thêm bảng' ở khu vực danh sách bên trái màn hình.",
          "3. Nhập Tên là 'Hoa hồng Mỹ phẩm', chọn Phạm vi áp dụng là 'Toàn hệ thống' và nhấn Lưu.",
          "4. Lặp lại thao tác từ bước 2 để tạo thêm 'Bảng Test 01'."
        ],
        confirm: "Chụp ảnh màn hình danh sách Bảng hoa hồng ở cột bên trái, hiển thị rõ 2 bảng vừa tạo thành công."
      },
      {
        title: "Bài tập 2: Thêm hàng hóa và thiết lập hoa hồng hàng loạt",
        requirements: [
          "1. Thêm 2 sản phẩm 'Kem chống nắng Vichy' và 'Nước tẩy trang L'Oreal' vào bảng 'Hoa hồng Mỹ phẩm'.",
          "2. Áp dụng mức hoa hồng hàng loạt là 5% trên doanh thu cho tất cả các sản phẩm vừa thêm vào bảng này."
        ],
        instructions: [
          "1. Tại danh sách bên trái, nhấn chọn đúng bảng 'Hoa hồng Mỹ phẩm'.",
          "2. Ở màn hình bên phải, nhấn nút 'Thêm hàng hóa', gõ tìm kiếm và tích chọn 'Kem chống nắng Vichy' cùng 'Nước tẩy trang L'Oreal'.",
          "3. Kích chuột vào ô mức hoa hồng của một sản phẩm bất kỳ trong danh sách vừa thêm để mở pop-up thiết lập.",
          "4. Nhập giá trị là '5' và chọn loại đơn vị là '%'.",
          "5. Tích chọn vào ô 'Áp dụng cho hàng hóa, nhóm hàng trong bảng hoa hồng' và nhấn Đồng ý."
        ],
        confirm: "Chụp ảnh màn hình bảng Hoa hồng Mỹ phẩm hiển thị cả 2 sản phẩm đều đã được cập nhật mức hoa hồng là 5%."
      },
      {
        title: "Bài tập 3: Cập nhật mức hoa hồng cố định cho từng sản phẩm",
        requirements: [
          "1. Cửa hàng thay đổi chính sách thưởng: Sản phẩm 'Nước tẩy trang L'Oreal' sẽ nhận mức thưởng cố định là 10,000đ/sản phẩm.",
          "2. Thực hiện cập nhật lại mức hoa hồng cho riêng mặt hàng này."
        ],
        instructions: [
          "1. Đảm bảo bạn đang mở chi tiết bảng 'Hoa hồng Mỹ phẩm'.",
          "2. Tìm đến dòng sản phẩm 'Nước tẩy trang L'Oreal'.",
          "3. Kích trực tiếp vào ô giá trị hoa hồng của sản phẩm này.",
          "4. Nhập số tiền là '10,000' và bấm chọn loại tính từ '%' chuyển sang 'VNĐ'.",
          "5. Bấm chuột ra ngoài khoảng trống (hoặc nhấn Enter) để hệ thống tự động lưu lại."
        ],
        confirm: "Chụp ảnh màn hình chi tiết bảng Hoa hồng Mỹ phẩm, hiển thị sản phẩm Nước tẩy trang L'Oreal đã được đổi sang mức hoa hồng là 10,000 VNĐ."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu rác (Xóa bảng hoa hồng)",
        requirements: [
          "1. Thực hiện thao tác dọn dẹp hệ thống bằng cách xóa vĩnh viễn 'Bảng Test 01' do không có nhu cầu sử dụng thực tế."
        ],
        instructions: [
          "1. Tại cột danh sách Bảng hoa hồng bên trái, tìm và nhấn chọn vào tên 'Bảng Test 01'.",
          "2. Nhấn vào biểu tượng chỉnh sửa (hình cây bút) nằm ngay bên cạnh tên bảng.",
          "3. Nhấn nút 'Xóa' ở góc dưới của cửa sổ thông tin.",
          "4. Chọn 'Đồng ý' để xác nhận thao tác xóa vĩnh viễn."
        ],
        confirm: "Chụp ảnh màn hình danh sách Bảng hoa hồng ở cột bên trái sau khi đã làm sạch, không còn hiển thị Bảng Test 01."
      },

      { title: "Quản lý Tính lương", isGroupHeader: true },
      {
        title: "Bài tập 1: Thiết lập tính lương và kết nối dữ liệu nhân viên",
        requirements: [
          "1. Cài đặt quy tắc tính lương chung: Ngày bắt đầu kỳ lương là Ngày 1 hàng tháng và bật Tự động tạo bảng lương.",
          "2. Thiết lập lương cho nhân viên 'Nguyễn Thị Lan' (đã tạo ở chuyên đề Quản lý Nhân viên) với mức lương Cố định là 6,000,000đ/tháng.",
          "3. Áp dụng bảng 'Hoa hồng Mỹ phẩm' cho nhân viên này.",
          "4. Thiết lập khoản Giảm trừ 'Đi muộn' để hệ thống tự động trừ khoản phạt 50,000đ (đã ghi nhận ở chuyên đề Chấm công) vào lương cuối kỳ."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Nhân viên -> Thiết lập nhân viên -> chọn tab Tính lương. Tại mục Ngày tính lương, chọn 'Ngày 1' và nhấn Lưu. Bật xanh mục 'Tự động tạo bảng lương'.",
          "2. Vào menu Nhân viên -> Danh sách nhân viên, tìm nhân viên 'Nguyễn Thị Lan', nhấn Cập nhật -> chuyển sang tab Thiết lập lương.",
          "3. Chọn loại Lương chính là 'Cố định', nhập 6,000,000.",
          "4. Kéo xuống mục Hoa hồng, bật công tắc xanh, chọn đúng bảng 'Hoa hồng Mỹ phẩm'.",
          "5. Kéo xuống mục Giảm trừ, bật công tắc xanh, chọn loại giảm trừ 'Đi muộn' (đảm bảo hệ thống sẽ lấy dữ liệu từ bảng chấm công). Nhấn Lưu để hoàn tất."
        ],
        confirm: "Chụp ảnh màn hình tab Thiết lập lương của nhân viên Nguyễn Thị Lan, hiển thị rõ đã cài đặt Lương cố định, áp dụng bảng Hoa hồng Mỹ phẩm và Giảm trừ đi muộn."
      },
      {
        title: "Bài tập 2: Tạo bảng lương, kiểm tra đối trừ và chốt lương",
        requirements: [
          "1. Tạo bảng tính lương của tháng hiện tại cho nhân viên 'Nguyễn Thị Lan'.",
          "2. Kiểm tra kỹ chi tiết phiếu lương để xem hệ thống đã tự động tính toán Lương chính và tự động trừ đi 50,000đ tiền phạt Đi muộn từ dữ liệu Chấm công hay chưa, sau đó thực hiện Chốt lương.",
          "3. Tạo thêm một bảng lương nháp của tháng trước có tên 'Bảng lương Test 01'."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, vào menu Nhân viên -> Bảng lương.",
          "2. Nhấn nút '+ Bảng tính lương'. Chọn Kỳ hạn trả lương của tháng hiện tại và nhấn Lưu.",
          "3. Trong danh sách, nhấn 'Xem bảng lương' để kiểm tra chi tiết lương của 'Nguyễn Thị Lan'.",
          "4. Kích vào tên Nguyễn Thị Lan để mở Phiếu lương chi tiết. Xác nhận trong phần Giảm trừ đã hiển thị số tiền phạt đi muộn (đồng bộ từ Bảng chấm công).",
          "5. Nhấn nút 'Chốt lương' (Bảng lương chuyển sang trạng thái Đã chốt).",
          "6. Quay lại danh sách Bảng lương, nhấn '+ Bảng tính lương', chọn Kỳ làm việc lùi lại tháng trước để tạo bảng nháp 'Bảng lương Test 01'."
        ],
        confirm: "Chụp 2 ảnh: 1 ảnh chi tiết Phiếu lương hiển thị khoản trừ Đi muộn và 1 ảnh danh sách Bảng lương có 1 bảng 'Đã chốt lương'."
      },
      {
        title: "Bài tập 3: Thanh toán lương cho nhân viên",
        requirements: [
          "1. Thực hiện thanh toán phần lương thực nhận của tháng này cho nhân viên 'Nguyễn Thị Lan' từ bảng lương đã chốt.",
          "2. Phương thức thanh toán lương là Chuyển khoản."
        ],
        instructions: [
          "1. Tại danh sách Bảng lương, nhấn vào bảng lương của tháng hiện tại (trạng thái Đã chốt lương).",
          "2. Chuyển sang tab 'Phiếu lương'.",
          "3. Nhấn nút 'Thanh toán' nằm trên dòng tên của nhân viên 'Nguyễn Thị Lan'.",
          "4. Trong cửa sổ pop-up Thanh toán lương, chọn phương thức thanh toán là 'Chuyển khoản'.",
          "5. Kiểm tra số tiền trả và nhấn nút 'Tạo phiếu chi' để ghi nhận thanh toán."
        ],
        confirm: "Chụp ảnh màn hình tab Phiếu lương trong Bảng lương, hiển thị trạng thái lương của Nguyễn Thị Lan là 'Đã thanh toán' hoặc Nợ cần trả = 0."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu rác (Hủy bảng lương nháp)",
        requirements: [
          "1. Tìm và Hủy bỏ 'Bảng lương Test 01' đang ở trạng thái Tạm tính để dọn dẹp dữ liệu rác trên hệ thống."
        ],
        instructions: [
          "1. Tại danh sách Bảng lương, tìm bảng lương nháp của tháng trước (đang ở trạng thái Tạm tính).",
          "2. Nhấn vào mã bảng lương để mở xem chi tiết.",
          "3. Nhấn nút 'Hủy bỏ'.",
          "4. Chọn Đồng ý để xác nhận xóa bảng lương này khỏi hệ thống."
        ],
        confirm: "Chụp ảnh màn hình danh sách Bảng lương hiển thị bảng nháp của tháng trước đã được chuyển sang trạng thái 'Đã hủy'."
      },

      { title: "KiotViet Web", isGroupHeader: true },
      {
        title: "Bài tập 1: Khởi tạo Website và thiết lập đồng bộ",
        requirements: [
          "1. Khởi tạo một Website bán hàng mới cho cửa hàng với tên hiển thị là 'Mỹ Phẩm Chính Hãng'.",
          "2. Thiết lập đồng bộ dữ liệu: Chọn Chi nhánh đồng bộ là chi nhánh hiện tại của bạn và Bảng giá bán là 'Bảng giá chung'.",
          "3. Tạo thêm một danh mục nháp có tên 'Danh mục Test 01' hiển thị trên web."
        ],
        instructions: [
          "1. Tại màn hình Quản lý, kích vào menu 'Bán Online' ở thanh trên cùng -> 'Website bán hàng' -> chọn 'Tạo website'.",
          "2. Nhập Tên cửa hàng là 'Mỹ Phẩm Chính Hãng', nhấn Tiếp theo, chọn một giao diện bất kỳ và kích Xong.",
          "3. Khi hệ thống chuyển đến màn hình 'Website của tôi', chọn mục 'Thiết lập đồng bộ'.",
          "4. Chọn Chi nhánh và chọn Bảng giá bán tương ứng, sau đó lưu lại thiết lập.",
          "5. Quay lại menu Website của tôi, chọn mục 'Hàng hóa' -> chuyển sang tab 'Danh mục nổi bật'.",
          "6. Chọn 'Tạo danh mục', điền tên là 'Danh mục Test 01', thêm tạm 1 sản phẩm bất kỳ và kích Xác nhận."
        ],
        confirm: "Chụp ảnh màn hình giao diện Website của tôi, hiển thị rõ phần Thiết lập đồng bộ đã được chọn đúng Chi nhánh và Bảng giá."
      },
      {
        title: "Bài tập 2: Cài đặt hiển thị và Xuất bản Website",
        requirements: [
          "1. Cài đặt thông tin liên hệ cho Website: Nhập Số điện thoại Hotline là '0909123456' và liên kết đường dẫn Zalo của cửa hàng.",
          "2. Đảm bảo bật cả 2 hình thức giao nhận: 'Giao hàng tận nơi' và 'Nhận tại cửa hàng'.",
          "3. Thực hiện thao tác 'Xuất bản Website' để trang web chính thức đi vào hoạt động."
        ],
        instructions: [
          "1. Trong mục Thiết lập website ở cột bên trái, chọn 'Cài đặt hiển thị'.",
          "2. Tại mục Thông tin cửa hàng, điền '0909123456' vào Số điện thoại.",
          "3. Tại mục Liên kết chat, bật công tắc Zalo và nhập số điện thoại/link Zalo vào ô trống.",
          "4. Kiểm tra mục Hình thức bán hàng, đảm bảo công tắc 'Giao hàng tận nơi' và 'Nhận tại cửa hàng' đều đang bật xanh. Kích Lưu thay đổi.",
          "5. Trở lại trang chủ 'Website của tôi', kích vào nút 'Xuất bản Website' ở góc trên bên phải màn hình."
        ],
        confirm: "Chụp ảnh màn hình Cài đặt hiển thị đã lưu thành công số Hotline, Zalo và các hình thức bán hàng."
      },
      {
        title: "Bài tập 3: Xử lý đơn đặt hàng từ KiotViet Web",
        requirements: [
          "1. Giả định có một khách hàng vừa truy cập website và đặt mua 1 'Kem chống nắng La Roche-Posay' (Giả định giá: 450,000đ).",
          "2. Hệ thống KiotViet Web đã tự động đẩy đơn hàng này về phần mềm. Bạn hãy tìm đơn đặt hàng đó và xử lý chuyển thành Hóa đơn bán hàng để giao cho khách."
        ],
        instructions: [
          "1. (Tạo dữ liệu giả định): Mở màn hình Bán hàng, tạo một phiếu Đặt hàng mới cho 1 'Kem chống nắng La Roche-Posay'. Chọn Khách lẻ, ghi chú là 'Đơn từ Website' và nhấn Đặt hàng (Lưu thành phiếu tạm).",
          "2. Trở lại màn hình Quản lý, vào menu Đơn hàng -> chọn Đặt hàng.",
          "3. Tìm và kích vào mã phiếu đặt hàng vừa tạo (Đóng vai trò là đơn hàng mang mã DHMK đồng bộ từ Web về).",
          "4. Nhấn nút 'Tạo hóa đơn' (hoặc Xử lý đặt hàng).",
          "5. Hệ thống chuyển sang màn hình thu ngân, kiểm tra thông tin và nhấn 'Thanh toán' để hoàn tất việc xuất kho giao hàng."
        ],
        confirm: "Chụp ảnh màn hình Hóa đơn vừa được xử lý thành công từ phiếu đặt hàng, trạng thái Hoàn thành."
      },
      {
        title: "Bài tập 4: Dọn dẹp dữ liệu rác (Ngừng xuất bản và xóa danh mục)",
        requirements: [
          "1. Thực hiện thao tác Ngừng xuất bản website để tạm thời bảo trì hệ thống.",
          "2. Tìm và Xóa bỏ 'Danh mục Test 01' đã tạo ở Bài tập 1 để làm sạch giao diện web."
        ],
        instructions: [
          "1. Tại màn hình 'Website của tôi', kích chọn biểu tượng cài đặt (hình bánh răng) ở khu vực phía trên bên phải.",
          "2. Chọn 'Ngừng xuất bản' và xác nhận Đồng ý.",
          "3. Ở cột menu trái, chọn 'Hàng hóa' -> chuyển sang tab 'Danh mục nổi bật'.",
          "4. Tìm đến 'Danh mục Test 01', kích vào biểu tượng Xóa (thùng rác) và chọn Xác nhận để dọn dẹp dữ liệu."
        ],
        confirm: "Chụp ảnh màn hình danh sách Danh mục nổi bật sau khi đã xóa thành công Danh mục Test 01."
      },

      { title: "Sàn TMĐT", isGroupHeader: true },
      {
        title: "Bài tập 1: Thiết lập chi nhánh và cấu hình đơn hàng trên sàn",
        requirements: [
          "1. Đăng nhập vào gian hàng thực hành và truy cập vào khu vực thiết lập kênh Thương mại điện tử.",
          "2. Kiểm tra và xác định 'Chi nhánh đồng bộ' hiện tại của gian hàng Shopee/TikTok Shop.",
          "3. Kiểm tra cấu hình Đơn hàng: Xác định 'Nhân viên xử lý đơn hàng' đang được chỉ định là ai và tính năng 'Đồng bộ đơn hàng' đang ở trạng thái nào."
        ],
        instructions: [
          "1. Tại thanh Sidebar bên trái của màn hình Quản lý, chọn menu 'Bán Online' -> 'Thương mại điện tử'.",
          "2. Chọn mục 'Thiết lập' -> 'Thiết lập kênh'.",
          "3. Tại danh sách các gian hàng, chọn một gian hàng đang hoạt động và nhấn nút 'Thiết lập'.",
          "4. Tại tab 'Thông tin', quan sát mục 'Chi nhánh đồng bộ'.",
          "5. Chuyển sang tab 'Đơn hàng', kiểm tra mục 'Đồng bộ đơn hàng' và 'Nhân viên xử lý đơn hàng'."
        ],
        confirm: "Chụp ảnh màn hình popup Thiết lập, hiển thị rõ tab Đơn hàng và tên nhân viên xử lý."
      },
      {
        title: "Bài tập 2: Thiết lập quy tắc đồng bộ Tồn kho và Giá bán",
        requirements: [
          "1. Trong giao diện thiết lập gian hàng, truy cập vào tab Hàng hóa.",
          "2. Kiểm tra 'Công thức đồng bộ số lượng bán' đang được thiết lập là gì (Ví dụ: Tồn kho - Đặt hàng).",
          "3. Kiểm tra 'Bảng giá bán' đang được chọn để đồng bộ lên sàn là bảng giá nào."
        ],
        instructions: [
          "1. Tại popup Thiết lập gian hàng (đã mở ở Bài 1), nhấn chọn tab 'Hàng hóa'.",
          "2. Tìm mục 'Đồng bộ tồn kho' và quan sát dòng 'Công thức đồng bộ số lượng bán'.",
          "3. Tìm mục 'Đồng bộ giá bán' và xác định tên của 'Bảng giá bán' đang được liên kết."
        ],
        confirm: "Chụp ảnh màn hình tab Hàng hóa trong popup Thiết lập, hiển thị rõ công thức đồng bộ và bảng giá bán."
      },
      {
        title: "Bài tập 3: Thiết lập quy tắc liên kết hàng hóa tự động",
        requirements: [
          "1. Kiểm tra cấu hình liên kết tự động giữa sàn và KiotViet.",
          "2. Xác định xem tính năng 'Tự động liên kết hàng hóa nếu trùng mã hàng (SKU)' và 'Tự động sao chép hàng hóa mới' đang được bật hay tắt."
        ],
        instructions: [
          "1. Vẫn tại tab 'Hàng hóa' của popup Thiết lập gian hàng.",
          "2. Kéo xuống dưới cùng để tìm các tùy chọn về liên kết hàng hóa.",
          "3. Quan sát trạng thái các nút gạt của: 'Tự động liên kết hàng hoá nếu trùng mã hàng (SKU)' và 'Tự động sao chép và liên kết hàng hóa mới tạo trên sàn về KiotViet'."
        ],
        confirm: "Chụp ảnh màn hình phần dưới cùng của tab Hàng hóa hiển thị các tùy chọn liên kết tự động."
      },
      {
        title: "Bài tập 4: Nhận diện danh sách hàng hóa trên sàn",
        requirements: [
          "1. Truy cập vào mục quản lý danh sách hàng hóa của phân hệ Bán Online.",
          "2. Sử dụng bộ lọc để hiển thị danh sách các sản phẩm đang có trạng thái 'Đã liên kết' trên gian hàng sàn mẫu."
        ],
        instructions: [
          "1. Tại thanh Sidebar bên trái, vào 'Bán Online' -> 'Thương mại điện tử' -> 'Hàng hóa'.",
          "2. Tại bộ lọc phía trên, chọn Sàn và Gian hàng muốn xem.",
          "3. Tại bộ lọc trạng thái bên trái, tích chọn 'Đã liên kết'.",
          "4. Quan sát danh sách các sản phẩm KiotViet đã được nối với sản phẩm trên sàn."
        ],
        confirm: "Chụp ảnh màn hình danh sách hàng hóa sau khi đã lọc theo trạng thái Đã liên kết."
      },
      {
        title: "Bài tập 5: Nhận diện màn hình quản lý đơn hàng TMĐT",
        requirements: [
          "1. Truy cập vào màn hình quản lý đơn hàng tập trung từ các sàn.",
          "2. Tìm tab 'Chờ xử lý' và chụp lại giao diện nơi hiển thị các đơn hàng mới đồng bộ về để xử lý."
        ],
        instructions: [
          "1. Tại thanh Sidebar bên trái, vào 'Bán Online' -> 'Thương mại điện tử' -> 'Đơn hàng'.",
          "2. Quan sát các tab trạng thái đơn hàng ở phía trên danh sách.",
          "3. Nhấn vào tab 'Chờ xử lý'."
        ],
        confirm: "Chụp ảnh màn hình tab Chờ xử lý của mục Đơn hàng."
      }
    ]
  }
];
