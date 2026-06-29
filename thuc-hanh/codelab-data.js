// CẤU HÌNH HỆ THỐNG DÀNH CHO ADMIN
const APP_CONFIG = {
    // Dán link API của Google Apps Script vào đây
    API_URL: "https://script.google.com/macros/s/AKfycbz-4pJyOK87mPmdF1CbWXloGiFkGblq1f2AHV7RyfweZhw9URMJGM-V0Vh20qeGeIlyDw/exec", 
    COURSE_NAME: "26KV15" 
};

// ============================================================================
// DỮ LIỆU BÀI TẬP 
// ============================================================================
const CODELAB_DATA = [
  {
    id: "session_1",
    title: "Buổi 1: Làm quen Phần mềm KiotViet",
    exercises: [
      {
        title: "Bài tập 1: Đăng ký gian hàng dùng thử",
        theory: ["1. Gian hàng dùng thử miễn phí trên hệ thống KiotViet có thời hạn sử dụng tối đa là bao nhiêu ngày?", "2. Tại sao học viên BẮT BUỘC phải nhấn tổ hợp phím Ctrl+1 và nhập mã giới thiệu \"3670\" ngay sau khi đăng nhập thành công?"],
        requirements: ["1. Đăng ký mới một gian hàng dùng thử trên website KiotViet với ngành hàng Bán lẻ.", "2. Thực hiện thao tác nhập mã giới thiệu đào tạo để tránh việc hệ thống ghi nhận là khách hàng tiềm năng và chuyển cho Telesales."],
        instructions: ["1. Mở trình duyệt web, truy cập vào trang chủ: https://www.kiotviet.vn/ và nhấn nút Dùng thử miễn phí.", "2. Điền đầy đủ thông tin cá nhân (Họ tên, Điện thoại, Khu vực...), nhấn tổ hợp phím Ctrl + 1 trên bàn phím, một hộp thoại sẽ hiện ra, nhập mã giới thiệu 3670 của phòng Đào tạo sau đó nhập Mã xác thực. Nhấn Tiếp tục.", "3. Tại phần thông tin cửa hàng, chọn chính xác ngành hàng là Bán lẻ.", "4. Đặt Tên cửa hàng (ví dụ: Cửa hàng Tạp hóa + Tên của bạn) và thiết lập Mật khẩu. Nhấn Tạo cửa hàng.", "5. Sau khi thành công, nhấn Bắt đầu quản lý để đăng nhập vào giao diện phần mềm.", "6. Điền 1 vài thông tin cửa hàng về Thời gian kinh doanh và chọn Phiên bản dùng thử có dữ liệu mẫu để trải nghiệm hệ thống 1 cách dễ dàng hơn."],
        confirm: "Chụp ảnh màn hình Tổng quan của gian hàng vừa tạo thành công."
      },
      {
        title: "Bài tập 2: Thêm mới hàng hóa",
        theory: ["1. Tại sao cần phải thiết lập các \"Thuộc tính\" (như trọng lượng, màu sắc, kích cỡ) khi thêm mới hàng hóa thay vì tạo mỗi loại thành một mã sản phẩm độc lập?", "2. Nếu bạn bỏ trống ô \"Giá vốn\" khi thêm mới hàng hóa, điều này sẽ ảnh hưởng như thế nào đến báo cáo lợi nhuận sau này?", "3. Tính năng \"Đơn vị tính\" (ví dụ: Hộp, Lốc, Thùng) giúp ích gì cho thu ngân trong quá trình bán hàng?"],
        requirements: ["1. Thêm mới một sản phẩm thực tế của cửa hàng với nhiều phân loại trọng lượng khác nhau."],
        instructions: ["1. Tại màn hình Tổng quan, vào menu Hàng hóa -> chọn Danh sách hàng hóa.", "2. Tại góc trên bên phải, nhấn nút + Tạo mới -> chọn Hàng hóa.", "3. Thêm sản phẩm chính: Nhập Tên hàng là \"Nước giặt OMO Matic\".", "4. Nhập Nhóm hàng là \"Hóa mỹ phẩm\" (Nhấn dấu + để thêm mới nếu chưa có).", "5. Nhập Giá vốn: 120,000, Giá bán: 180,000, Tồn kho: 0.", "6. Tại phần Đơn vị tính: Nhập đơn vị cơ bản là Túi.", "7. Tại phần Thuộc tính: Nhấn Tạo thuộc tính, nhập tên thuộc tính là \"Trọng lượng\". Nhập các giá trị thuộc tính: \"Túi 2kg\" (nhấn Enter), \"Túi 3kg\" (nhấn Enter). Nhấn Lưu."],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị rõ các phân loại hàng hóa cùng loại của Nước giặt OMO Matic vừa tạo."
      },
      {
        title: "Bài tập 3: Nhập hàng và ghi nhận công nợ",
        theory: ["1. Điều gì sẽ xảy ra với số lượng tồn kho của sản phẩm trên hệ thống nếu bạn chưa nhấn \"Hoàn thành\" trong phiếu nhập hàng?", "2. Khi nhập hàng từ một nhà cung cấp mới mà chưa có thông tin trên hệ thống, bạn cần thao tác như thế nào để vừa ghi nhận phiếu nhập, vừa lưu được thông tin nhà cung cấp đó?", "3. Nếu nhập hàng nhưng chưa thanh toán ngay, số tiền này sẽ được KiotViet quản lý ở mục nào?"],
        requirements: ["1. Tạo phiếu nhập hàng cho mặt hàng Nước giặt OMO Matic vừa tạo để ghi nhận tồn kho.", "2. Treo lại công nợ, chưa thanh toán tiền ngay cho nhà cung cấp."],
        instructions: ["1. Vào menu Mua hàng -> chọn Nhập hàng. Nhấn nút + Nhập hàng.", "2. Trong ô tìm kiếm sản phẩm, gõ \"Nước giặt OMO Matic Túi 2kg\" và chọn sản phẩm.", "3. Nhập Số lượng là 20. Xác nhận Đơn giá nhập là 120,000.", "4. Tại ô tìm kiếm Nhà cung cấp (bên phải), nhấn biểu tượng dấu (+).", "5. Điền tên \"Nhà phân phối Unilever\" + “Số điện thoại” / “Email” (\"0979000000\" / \"unilever@gmail.com\") và nhấn Lưu.", "6. Tại ô Tiền trả nhà cung cấp, giữ nguyên số 0 (để ghi nhận công nợ toàn bộ phiếu nhập).", "7. Nhấn Hoàn thành."],
        confirm: "Chụp ảnh màn hình chi tiết phiếu nhập hàng vừa tạo thành công, hiển thị rõ phần công nợ."
      },
      {
        title: "Bài tập 4: Bán hàng và thanh toán kết hợp",
        theory: ["1. Việc cho phép áp dụng đồng thời nhiều phương thức thanh toán trên một hóa đơn mang lại lợi ích gì cho cửa hàng và khách hàng?", "2. Khi hóa đơn bán hàng được hoàn tất, hệ thống KiotViet sẽ tự động thay đổi những dữ liệu nào (tồn kho, doanh thu...)?"],
        requirements: ["1. Tạo hóa đơn bán hàng có mặt hàng Nước giặt OMO Matic - Túi 2kg số lượng 1 túi cho khách hàng mới ngay trên giao diện bán hàng dành cho thu ngân.", "2. Khách hàng thanh toán kết hợp 2 hình thức: Tiền mặt và Chuyển khoản."],
        instructions: ["1. Truy cập vào màn hình Bán hàng.", "2. Tại ô tìm kiếm, gõ và chọn \"Nước giặt OMO Matic - Túi 2kg\". Số lượng để là 1.", "3. Tại ô tìm kiếm khách hàng, nhấn dấu (+) để thêm khách mới, nhập tên \"Chị Lan\" và nhấn Lưu.", "4. Tại phần Khách thanh toán, nhấn vào biểu tượng ba chấm (Thanh toán kết hợp).", "5. Tại khu vực Khách cần trả, chọn vào biểu tượng X để xóa phương thức hiển thị giá tiền 180.000.", "6. Tại ô số tiền, bạn hãy nhập lại 100,000 và chọn phương thức Tiền mặt.", "7. Số tiền còn lại 80,000, chọn phương thức Chuyển khoản. Nhấn Xong.", "8. Nhấn nút Thanh toán để hoàn tất giao dịch."],
        confirm: "Chụp ảnh màn hình hiển thị rõ 2 phương thức thanh toán của Chị Lan trước khi thanh toán hoặc hóa đơn đã thanh toán thành công."
      },
      {
        title: "Bài tập 5: Trả hàng và thu phí dịch vụ",
        theory: ["1. Khi xử lý trả hàng có thu phí dịch vụ, số tiền phí này sẽ được hệ thống KiotViet ghi nhận vào đâu trong hệ thống báo cáo (VD: Doanh thu, Chi phí, Khác...)? Tại sao?", "2. Việc liên kết giao dịch trả hàng với hóa đơn gốc mang lại lợi ích gì trong việc quản lý?"],
        requirements: ["1. Xử lý tình huống khách hàng (Chị Lan) mang trả lại sản phẩm vừa mua với phương thức trả hàng là tiền mặt.", "2. Áp dụng chính sách thu phí trả hàng là 10,000 của cửa hàng."],
        instructions: ["1. Từ màn hình Bán hàng, nhấn vào biểu tượng mũi tên quay đầu để vào mục Trả hàng.", "2. Sử dụng ô tìm kiếm, gõ tên \"Chị Lan\" để tìm lại hóa đơn gốc vừa bán và nhấn nút Chọn.", "3. Ở giao diện Phiếu trả hàng vừa mở, chọn sản phẩm \"Nước giặt OMO Matic - Túi 2kg\" khách trả, nhập số lượng trả là 1.", "4. Tại ô Phí trả hàng, nhập số tiền phí là 10,000. Hệ thống sẽ tự tính lại số tiền cần hoàn cho khách.", "5. Chọn phương thức hoàn tiền (Tiền mặt) và nhấn Trả hàng."],
        confirm: "Chụp ảnh màn hình phiếu trả hàng thành công ở giao diện quản lý, hiển thị rõ khoản phí trả hàng 10,000."
      },
      {
        title: "Bài tập 6: Quản lý công nợ nhà cung cấp",
        theory: ["1. Thao tác \"Thanh toán phiếu chi\" khác với thao tác \"Điều chỉnh công nợ\" ở điểm nào?", "2. Tại sao lại cần chức năng \"Khai báo công nợ ban đầu\" khi bắt đầu sử dụng KiotViet? Nếu bỏ qua bước này thì hệ lụy là gì?"],
        requirements: ["1. Thanh toán khoản nợ đã phát sinh của Nhà phân phối Unilever (Phương thức thanh toán nợ: Tiền mặt).", "2. Tạo thêm một khoản công nợ tồn đầu kỳ (nợ cũ) cho Nhà cung cấp có tên Nhà Phân Phối A để quản lý."],
        instructions: ["1. Vào menu Mua hàng -> chọn Nhà cung cấp.", "2. Tìm và nhấn vào tên \"Nhà phân phối Unilever\".", "3. Chuyển sang tab Nợ cần trả nhà cung cấp. Nhấn nút Thanh toán.", "4. Tại cửa sổ Phiếu chi, nhập số tiền cần trả là 2,400,000 , chọn phương thức thanh toán là Tiền mặt. Nhấn Tạo phiếu chi.", "5. Tiếp tục ở màn hình Nhà cung cấp, tạo 1 nhà cung cấp có tên Nhà Phân Phối A + SĐT/Email. Nhấn Lưu.", "6. Nhấn vào tên “Nhà Phân Phối A”, chuyển sang tab Nợ cần trả nhà cung cấp, nhấn nút Điều chỉnh.", "7. Nhập số tiền 5,000,000 vào ô Giá trị nợ điều chỉnh.", "8. Ghi Mô tả là \"Công nợ tồn đầu kỳ trước khi dùng KiotViet\". Nhấn Chỉnh sửa."],
        confirm: "Chụp ảnh màn hình tab Nợ cần trả NCC của Nhà phân phối Unilever (hiển thị lịch sử thanh toán) và tab Nợ cần trả NCC của Nhà Phân Phối A."
      },
      {
        title: "Bài tập 7: Theo dõi báo cáo",
        hints: [
          "1. **Khách hàng muốn biết kết quả bán hàng hôm nay** một cách trực quan, ngắn gọn như các khoản thu, phiếu trả hàng -> <b>Vào Báo cáo Cuối ngày</b>.",
          "2. **Vấn đề về kho:** KH muốn biết thực tế kho đang tồn bao nhiêu vốn và nếu bán ra hết thì thu về bao nhiêu tiền -> <b>Vào Báo cáo Hàng hóa - Giá trị kho</b>.",
          "3. **Lợi nhuận gộp (Lợi nhuận sau khi trừ giá vốn):** KH muốn biết bán được 10 gói bim bim, trừ đi giá vốn 10 gói thì còn lợi nhuận bao nhiêu -> <b>Vào Báo cáo Bán hàng - Lợi nhuận</b>.",
          "4. **Lợi nhuận thuần:** KH muốn biết sau khi trừ tất cả các chi phí (nhân viên, điện nước...) và cộng các loại thu của cửa hàng thì lợi nhuận cuối cùng bao nhiêu -> <b>Vào Báo cáo Tài chính</b>."
        ],
        theory: ["1. Để xem được Lợi nhuận gộp của cửa hàng trong ngày hôm nay, bạn cần vào Báo cáo nào và thiết lập Tùy chọn/Mối quan tâm ra sao?", "2. Để xem được Tổng giá vốn của toàn bộ sản phẩm (Giá trị kho) hiện tại của cửa hàng, bạn cần vào Báo cáo nào và thiết lập Tùy chọn/Mối quan tâm gì?"],
        requirements: ["1. Xem báo cáo cuối ngày để kiểm tra lại toàn bộ các giao dịch đã thực hành.", "2. Xem báo cáo hàng hóa để kiểm tra lượng tồn kho thực tế."],
        instructions: ["1. Trở lại màn hình Quản lý, vào menu Báo cáo -> chọn Cuối ngày. Chọn Hiển thị ngang.", "2. Kiểm tra các số liệu: Tổng doanh thu, Số lượng đơn hàng, Phương thức thanh toán, Các khoản thu/chi.", "3. Tiếp tục vào menu Báo cáo -> chọn Hàng hóa.", "4. Chọn kiểu hiển thị Báo cáo -> Chọn Mối quan tâm là Xuất nhập tồn để xem số lượng tồn hiện tại của sản phẩm \"Nước giặt OMO Matic - Túi 2kg\"."],
        confirm: "Chụp ảnh màn hình Báo cáo cuối ngày hiển thị dữ liệu tổng quan và Báo cáo hàng hóa - Xuất nhập tồn."
      },
      {
        title: "Bài tập 8: Kinh nghiệm tư vấn (Demo cho khách hàng)",
        theory: ["1. Theo bạn, việc sử dụng xuyên suốt 1 mã sản phẩm duy nhất từ bước Thêm mới, Nhập hàng, Bán hàng, Trả hàng đến Báo cáo mang lại lợi ích gì khi demo?", "2. Trong quá trình demo chuỗi các bước cơ bản, thao tác nào bạn cần tập trung giới thiệu chi tiết, dễ hiểu nhất để thuyết phục khách hàng rằng KiotViet rất \"đơn giản, dễ sử dụng\"? Vì sao?", "3. Sau khi hoàn thành các bước demo, bạn cần chỉ cho khách hàng xem mục nào (tab nào) để chứng minh tồn kho sản phẩm được cập nhật tự động?"],
        requirements: ["1. Tra cứu lại toàn bộ lịch sử xuất - nhập - tồn của mã hàng hóa đã sử dụng xuyên suốt bài tập."],
        instructions: ["1. Vào menu Hàng hóa -> chọn Danh sách hàng hóa.", "2. Tìm kiếm và click vào mã sản phẩm \"Nước giặt OMO Matic - Túi 2kg\".", "3. Chuyển sang tab Thẻ kho.", "4. Quan sát chi tiết từng dòng lịch sử (Khởi tạo, Nhập hàng, Bán hàng, Trả hàng) và cột Tồn cuối tương ứng."],
        confirm: "Chụp ảnh màn hình tab Thẻ kho của sản phẩm Nước giặt OMO Matic - Túi 2kg hiển thị rõ sự biến động tồn kho qua các thao tác."
      }
    ]
  },
  {
    id: "session_2",
    title: "Buổi 2: Trả lời câu hỏi thường gặp",
    exercises: [
      {
        title: "Bài tập 1: Thêm mới sản phẩm ngay trên màn hình bán hàng",
        requirements: ["1. Khách hàng muốn mua số lượng lớn \"Nước ngọt Fanta\" nhưng hệ thống chưa kịp cập nhật. Bạn cần thêm mới sản phẩm này ngay tại màn hình thu ngân để không làm gián đoạn việc thanh toán."],
        instructions: ["1. Tại màn hình bán hàng, gõ từ khóa \"Nước ngọt Fanta\" vào ô tìm kiếm sản phẩm.", "2. Hệ thống báo không tìm thấy, bạn nhấn vào nút + Thêm mới hàng hóa vừa xuất hiện.", "3. Khai báo thông tin cho sản phẩm: Nhóm hàng chọn \"Nước giải khát\", Giá vốn nhập 12.000, Giá bán nhập 15.000, Tồn kho nhập 100, Đơn vị tính nhập \"Chai\". Sau đó nhấn Lưu."],
        confirm: "Chụp ảnh màn hình bán hàng hiển thị giỏ hàng đang có chứa sản phẩm \"Nước ngọt Fanta\"."
      },
      {
        title: "Bài tập 2: Tra cứu thông tin và vị trí sản phẩm",
        requirements: ["1. Khách hàng muốn tự ra kệ để lấy thêm \"Nước ngọt Fanta\" vừa được tạo ở Bài 1, bạn cần tra cứu nhanh vị trí trưng bày của mặt hàng này để hướng dẫn khách."],
        instructions: ["1. Tại ô tìm kiếm trên màn hình bán hàng, gõ từ khóa \"Fanta\".", "2. Khi kết quả tìm kiếm hiển thị bên dưới, nhấn trực tiếp vào hình ảnh của sản phẩm.", "3. Cửa sổ thông tin chi tiết xuất hiện, bạn kiểm tra các thông tin như: Giá bán, Tồn kho hiện tại và đặc biệt là mục Vị trí trưng bày.", "4. Sau khi xem xong, nhấn Xong (hoặc dấu X) để đóng cửa sổ."],
        confirm: "Chụp ảnh màn hình cửa sổ popup đang hiển thị chi tiết thông tin của sản phẩm Nước ngọt Fanta."
      },
      {
        title: "Bài tập 3: Tìm kiếm theo nhóm hàng và hiển thị tồn kho",
        requirements: ["1. Khách hàng muốn xem tất cả các loại nước uống hiện có tại cửa hàng xem loại nào còn nhiều tồn kho để mua sỉ. Bạn cần lọc nhóm hàng và bật hiển thị số lượng tồn."],
        instructions: ["1. Tại màn hình Bán thường, nhấn vào biểu tượng Bộ lọc theo nhóm hàng nằm cạnh ô tìm kiếm sản phẩm.", "2. Chọn nhóm hàng Nước giải khát và nhấn Xong. Hệ thống sẽ liệt kê các mặt hàng thuộc nhóm này (bao gồm Nước ngọt Fanta vừa tạo).", "3. Nhấn vào biểu tượng Menu ba dấu gạch ngang ở góc màn hình, chọn Tùy chọn hiển thị.", "4. Chọn tab Khác, gạt bật tính năng Tồn kho.", "5. Quay lại màn hình, quan sát số lượng tồn kho thực tế hiển thị ngay dưới mỗi sản phẩm."],
        confirm: "Chụp ảnh màn hình danh sách sản phẩm đã được lọc theo nhóm Nước giải khát, có hiển thị rõ con số tồn kho của mặt hàng."
      },
      {
        title: "Bài tập 4: Lập phiếu thu công nợ khách hàng",
        requirements: ["1. Khách hàng \"Thanh Vân\" đến cửa hàng để thanh toán một khoản nợ cũ trị giá 349.000 đồng bằng tiền mặt. Khách không mua thêm hàng hóa nào mới. Bạn cần xử lý thu nợ ngay tại quầy."],
        instructions: ["1. Bán cho khách hàng mới tên Thanh Vân 1 đơn hàng Nước ngọt Fanta số lượng 10 chai có giá 150.000. Chọn nút Thanh toán, tại ô Khách thanh toán, điều chỉnh số tiền phải thanh toán là 0, hệ thống sẽ hiển thị đơn hàng của Thanh Vân được tính vào công nợ là -150.000. Nhấn nút Thanh toán để hoàn tất đơn bán hàng.", "2. Tại màn hình bán hàng, nhấn vào biểu tượng Menu (ba dấu gạch ngang) và chọn Lập phiếu thu.", "3. Tại ô tìm kiếm, nhập tên \"Thanh Vân\" để chọn đúng khách hàng (Hệ thống sẽ hiển thị dư nợ hiện tại).", "4. Nhập số tiền khách thanh toán thực tế vào ô Thu từ Khách hoặc Tiền thu là 150.000.", "5. Chọn biểu tượng để chọn Phương thức thanh toán, chọn Tiền mặt.", "6. Nhấn nút Tạo phiếu thu để ghi nhận giao dịch trừ nợ."],
        confirm: "Chụp ảnh màn hình thông báo Đã tạo phiếu thu thành công cho khách hàng Thanh Vân."
      },
      {
        title: "Bài tập 5: Thiết lập giới hạn thời gian trả hàng",
        requirements: ["1. Cửa hàng quyết định áp dụng chính sách: Chỉ cho phép khách trả lại hàng trong vòng 3 ngày kể từ ngày mua.", "2. Để tránh cứng nhắc, hệ thống chỉ hiện cảnh báo nhắc nhở nhân viên thay vì chặn hoàn toàn thao tác trả hàng."],
        instructions: ["1. Truy cập vào màn hình Quản lý của KiotViet.", "2. Nhấn vào Thiết lập (biểu tượng bánh răng) > Chọn Xem tất cả thiết lập.", "3. Chuyển sang tab Đơn hàng, tìm đến tính năng Giới hạn thời gian trả hàng và gạt nút (màu xanh).", "4. Điền số \"3\" vào ô ngày quy định và nhấn Lưu.", "5. Tích chọn vào tùy chọn Hiển thị Cảnh báo khi trả hàng."],
        confirm: "Chụp ảnh màn hình phần thiết lập đã lưu thành công tính năng giới hạn 3 ngày và chọn chế độ cảnh báo."
      },
      {
        title: "Bài tập 6: Trả hàng nhanh không cần hóa đơn",
        requirements: ["1. Khách hàng \"Thanh Vân\" nay mang 10 chai \"Nước ngọt Fanta\" (đã mua từ trước) đến xin trả lại lấy tiền mặt.", "2. Do không có hóa đơn gốc trên hệ thống, bạn cần dùng tính năng Trả hàng nhanh để hoàn tiền và nhập lại 10 chai Fanta vào kho."],
        instructions: ["1. Quay lại màn hình Bán hàng, nhấn vào nút Trả hàng (mũi tên quay đầu) ở góc trên cùng, chọn nút Trả nhanh.", "2. Tại ô tìm kiếm sản phẩm trả, gõ \"Nước ngọt Fanta\" và chọn sản phẩm.", "3. Điều chỉnh số lượng hàng khách trả lại thành 10.", "4. Tại ô khách hàng, tìm và chọn \"Thanh Vân\". Phương thức hoàn tiền chọn Tiền mặt.", "5. Nhấn nút Trả hàng ở góc dưới cùng để hoàn tất phiếu."],
        confirm: "Chụp ảnh màn hình phiếu trả hàng nhanh đã điền đủ thông tin Fanta và Thanh Vân trước khi bấm nút Trả hàng."
      },
      {
        title: "Bài tập 7: Thiết lập bán hàng Offline khi mất mạng",
        requirements: ["1. Đề phòng sự cố đứt mạng, cửa hàng yêu cầu lưu đường dẫn bán hàng Offline vào trình duyệt.", "2. Giả lập tình huống mất mạng và thực hiện thử 1 giao dịch bán \"Nước ngọt Fanta\" để kiểm tra chế độ lưu tạm hóa đơn."],
        instructions: ["1. Khi máy tính đang có Internet, tại màn hình bán hàng, nhấn vào biểu tượng Ngôi sao trên thanh địa chỉ của trình duyệt web.", "2. Đặt tên gợi nhớ là \"KiotViet Bán Hàng\" và nhấn Xong để lưu vào thanh Dấu trang (Bookmark).", "3. Giả lập mất mạng: Tắt kết nối Wifi/Ethernet trên máy tính của bạn. Sau đó nhấn tải lại trang (F5) màn hình bán hàng.", "4. Màn hình xuất hiện dải thông báo màu hồng báo hiệu đang ở chế độ Offline. Bạn thực hiện tìm \"Nước ngọt Fanta\", chọn thanh toán bình thường.", "5. Giao dịch xong, quan sát biểu tượng đồng bộ dữ liệu (hình đám mây/mũi tên vòng) kèm số lượng hóa đơn lưu tạm (HDO) trên góc màn hình. Bật lại mạng để hệ thống tự đồng bộ."],
        confirm: "Chụp ảnh màn hình bán hàng lúc đang tắt mạng, hiển thị dải thông báo Offline màu hồng và biểu tượng chờ đồng bộ hóa đơn."
      },
      {
        title: "Bài tập 8: Thêm mới hàng hóa dịch vụ và tạo dữ liệu nháp",
        requirements: ["1. Cửa hàng thời trang \"Kishi\" triển khai thêm dịch vụ \"Giặt là áo sơ mi\" cho khách hàng, với đơn giá 30.000đ/chiếc. Dịch vụ này không yêu cầu quản lý tồn kho. Bạn cần khai báo mã dịch vụ mới trên hệ thống."],
        instructions: ["1. Từ màn hình quản lý, truy cập menu Hàng hóa > Chọn Danh sách hàng hóa.", "2. Bấm vào nút + Tạo mới và lựa chọn Dịch vụ.", "3. Khai báo thông tin dịch vụ: Nhập Tên hàng \"Dịch vụ giặt là áo sơ mi\", chọn hoặc tạo mới Nhóm hàng \"Giặt là\", Giá bán điền 30.000, Giá vốn để trống (hoặc 0), Đơn vị tính điền \"Chiếc\". Bấm Lưu để hoàn tất."],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa, hiển thị cả \"Dịch vụ giặt là áo sơ mi\"."
      },
      {
        title: "Bài tập 9: Thiết lập bảng giá theo công thức",
        requirements: ["1. Cửa hàng cần áp dụng mức giá sỉ ưu đãi cho tất cả các sản phẩm thuộc nhóm \"Thời trang trẻ em\".", "2. Quy tắc giá sỉ: Thấp hơn 10% so với giá bán lẻ (giá chung), tự động làm tròn đến hàng nghìn đồng và sẽ tự động cập nhật nếu giá bán lẻ thay đổi.", "3. (Lưu ý: Nếu trong hệ thống chưa có nhóm \"Thời trang trẻ em\", hãy tự tạo nhanh một vài sản phẩm thuộc nhóm này với mức giá lẻ bất kỳ trước khi làm bài)."],
        instructions: ["1. Truy cập menu Hàng hóa > Chọn Thiết lập giá.", "2. Sau đó, bấm vào nút + Bảng giá để tạo bảng giá mới.", "3. Nhập Tên bảng giá là \"Bảng giá sỉ thời trang trẻ em\".", "4. Tại mục Công thức giá: Ở ô Chọn bảng giá > Chọn Bảng Giá chung, chọn dấu -, nhập số 10, chọn %.", "5. Tích chọn ô Tự động cập nhật theo Bảng giá chung. Chọn quy tắc làm tròn giá đến nghìn đồng. Bấm Lưu.", "6. Sau khi bảng giá được tạo, bấm vào nút Thêm theo nhóm hàng, chọn nhóm \"Thời trang trẻ em\" và nhấn Thêm vào bảng giá."],
        confirm: "Chụp ảnh màn hình \"Bảng giá sỉ thời trang trẻ em\" đang hiển thị danh sách các sản phẩm thuộc nhóm Thời trang trẻ em, với mức giá đã được giảm 10%."
      },
      {
        title: "Bài tập 10: Chỉnh sửa giá sỉ riêng lẻ cho sản phẩm đặc biệt",
        requirements: ["1. Ban quản lý cửa hàng quyết định: Riêng mặt hàng \"Khẩu trang trẻ em\" chỉ được phép giảm 5% so với giá bán lẻ, các sản phẩm khác trong nhóm vẫn giữ mức giảm 10%. Bạn cần điều chỉnh lại bảng giá sỉ."],
        instructions: ["1. Tại màn hình Thiết lập giá, đang xem \"Bảng giá sỉ thời trang trẻ em\", bấm vào biểu tượng cây bút (Sửa) ngay cạnh tên bảng giá.", "2. Trong cửa sổ cập nhật, Bỏ chọn (tắt) ô Tự động thay đổi theo bảng giá chung. Bấm Lưu.", "3. Tìm đến dòng sản phẩm \"Khẩu trang trẻ em\" trong danh sách bảng giá.", "4. Bấm trực tiếp vào con số ở cột Giá mới của sản phẩm này.", "5. Sửa lại công thức thành - 5% (hoặc nhập trực tiếp số tiền giá sỉ mong muốn) và nhấn Enter để ghi nhận."],
        confirm: "Chụp ảnh màn hình bảng giá, trong đó sản phẩm \"Khẩu trang trẻ em\" có mức giá sỉ khác biệt (chỉ giảm 5%)."
      },
      {
        title: "Bài tập 11: Tạo phiếu kiểm kho cập nhật số lượng thực tế",
        requirements: ["1. Sau khi kiểm đếm thực tế, bạn phát hiện trong kho đang có sẵn 105 chiếc \"Khẩu trang trẻ em\", trong khi hệ thống đang ghi nhận tồn kho bằng 0. Bạn cần tạo phiếu kiểm kho để cập nhật."],
        instructions: ["1. Truy cập menu Hàng hóa > Chọn Kiểm kho.", "2. Bấm vào nút + Kiểm kho ở góc phải màn hình để tạo phiếu mới.", "3. Tại ô tìm kiếm hàng hóa, gõ tên \"Khẩu trang trẻ em\" và chọn sản phẩm để đưa vào phiếu kiểm.", "4. Tại dòng sản phẩm vừa thêm, nhập con số 105 vào cột Thực tế. Quan sát hệ thống tự động tính ra Số lượng lệch và Giá trị lệch.", "5. Bấm nút Hoàn thành để hệ thống tự động cập nhật tồn kho mới cho sản phẩm."],
        confirm: "Chụp ảnh màn hình phiếu kiểm kho đã hoàn thành, hiển thị rõ số lượng thực tế 105 của sản phẩm Khẩu trang trẻ em."
      },
      {
        title: "Bài tập 12: Thêm mới sản phẩm trực tiếp trên phiếu nhập hàng",
        requirements: ["1. Cửa hàng nhập 48 gói \"Mì tôm thanh long\" từ nhà cung cấp \"Thái Ninh\". Do đây là mặt hàng hoàn toàn mới, bạn cần tạo nhanh mã sản phẩm này ngay tại giao diện lập phiếu nhập."],
        instructions: ["1. Truy cập menu Mua hàng > Chọn Nhập hàng và nhấn + Nhập hàng để tạo phiếu mới.", "2. Ngay cạnh thanh tìm kiếm, nhấn vào biểu tượng dấu cộng (+) Thêm hàng hóa mới.", "3. Khai báo thông tin: Tên \"Mì tôm thanh long\", Nhóm hàng \"Thực phẩm ăn liền\", Giá bán 12.000, Đơn vị tính \"Gói\". Nhấn Lưu.", "4. Lúc này sản phẩm đã vào phiếu nhập, bạn điền Số lượng là 48 và Đơn giá (Giá vốn) là 10.000.", "5. Thêm Nhà cung cấp mới tên \"Thái Ninh\".", "6. Tại ô Thanh toán, nhập số tiền trả nhà cung cấp là 480.000 (phương thức Chuyển khoản) và nhấn Hoàn thành."],
        confirm: "Chụp ảnh màn hình phiếu nhập hàng vừa hoàn tất của sản phẩm Mì tôm thanh long."
      },
      {
        title: "Bài tập 13: Thiết lập tính giá vốn trung bình",
        requirements: ["1. Cửa hàng muốn lợi nhuận luôn được tính sát với biến động giá nhập kho, bạn cần cài đặt phương pháp tính giá vốn trung bình.", "2. Khai báo trước sản phẩm mới có tên \"Sting\" (tồn kho là 0) vào hệ thống."],
        instructions: ["1. Tại màn hình Quản lý, nhấn vào biểu tượng bánh răng Thiết lập > Chọn Xem tất cả Thiết lập.", "2. Chọn mục Hàng hóa, cuộn xuống phần Giá vốn, tồn kho. Kiểm tra xem hệ thống đã chọn tùy chọn Giá vốn trung bình chưa.", "3. Quay lại menu Hàng hóa > Danh sách hàng hóa, nhấn nút + Tạo mới > Thêm hàng hóa.", "4. Khai báo sản phẩm chính: Tên \"Sting\", Nhóm hàng \"Nước ngọt\", Giá vốn 8.000, Giá bán 10.000, Tồn kho 0. Đơn vị tính là Lon. Nhấn Lưu."],
        confirm: "Chụp ảnh phần thiết lập đã lưu tính năng Giá vốn trung bình và thẻ chi tiết sản phẩm Sting vừa tạo."
      },
      {
        title: "Bài tập 14: Nhập hàng nhiều mức giá (Sử dụng tính năng thêm dòng)",
        requirements: ["1. Nhà cung cấp \"Thái Ninh\" đang có KM cho sản phẩm \"Sting\": Nhập 50 lon (giá 8.000đ/lon) tặng kèm 1 lon miễn phí (giá 0đ). Bạn cần ghi nhận thực tế này trên cùng một phiếu nhập."],
        instructions: ["1. Tạo phiếu Nhập hàng mới, tại ô tìm kiếm chọn nhà cung cấp \"Thái Ninh\".", "2. Tìm kiếm và chọn sản phẩm \"Sting\" vào phiếu. Nhập Số lượng là 50 và Đơn giá là 8.000.", "3. Bật tính năng thêm dòng: Nhấn vào biểu tượng hình con mắt (Tùy chọn hiển thị) góc phải, sang tab Khác và gạt bật Thêm dòng.", "4. Nhấn vào biểu tượng dấu cộng (+) xuất hiện ở cuối dòng \"Sting\" để tạo dòng nhập thứ 2.", "5. Trên dòng thứ 2, nhập Số lượng là 1 và sửa Đơn giá thành 0 (hàng tặng kèm).", "6. Điền số tiền thanh toán cho nhà cung cấp là 400.000 (Tiền mặt) và nhấn Hoàn thành."],
        confirm: "Chụp ảnh màn hình phiếu nhập hiển thị rõ 2 dòng sản phẩm Sting với mức giá 8.000đ và 0đ."
      },
      {
        title: "Bài tập 15: Kiểm tra sự biến động của giá vốn trung bình",
        requirements: ["1. Sau khi nhập sản phẩm Sting có 2 mức giá khác nhau, kiểm tra lại xem giá vốn của sản phẩm có tự động tính toán lại theo giá vốn trung bình hay không?"],
        instructions: ["1. Quay trở lại menu Hàng hóa > Danh sách hàng hóa, tìm kiếm sản phẩm \"Sting\" và nhấn vào tên sản phẩm để xem chi tiết.", "2. Kiểm tra dòng chữ Giá vốn, bạn sẽ thấy con số đã được phần mềm tự động tính toán lại thành 7.843."],
        confirm: "Chụp ảnh màn hình phần thông tin chi tiết của sản phẩm Sting, hiển thị rõ Giá vốn đã được hệ thống cập nhật tự động lên 7.843đ."
      },
      {
        title: "Bài tập 16: Thay đổi giá bán ngay khi nhập hàng",
        requirements: ["1. Bạn nhập 100 Gói \"Mì tôm thanh long\". Giá bán lẻ đang cài là 12.000đ. Tuy nhiên, giá nhập đợt này bất ngờ tăng lên thành 13.000đ.", "2. Phần mềm sẽ cảnh báo bạn đang nhập giá cao hơn giá bán. Để tránh bán lỗ, bạn cần đổi luôn giá bán thành 15.000đ ngay trên phiếu nhập."],
        instructions: ["1. Tạo phiếu Nhập hàng mới, chọn sản phẩm \"Mì tôm thanh long\" vào phiếu.", "2. Nhập Số lượng 100 và Đơn giá 13.000. Hệ thống sẽ hiển thị cảnh báo chữ màu đỏ \"Cao hơn giá bán\".", "3. Nhấn vào biểu tượng hình con mắt (Tùy chọn hiển thị) ở góc phải, gạt bật tính năng Thiết lập giá.", "4. Nhấn vào biểu tượng Thiết lập giá (hình thẻ giá) vừa xuất hiện ở đầu dòng sản phẩm, sửa Giá bán thành 15.000 và nhấn Xong.", "5. Hoàn tất việc nhập số tiền trả nhà cung cấp và nhấn Hoàn thành.", "6. Khi hệ thống hiển thị hộp thoại xác nhận \"Hệ thống sẽ cập nhật bảng giá mới...\", nhấn Đồng ý."],
        confirm: "Chụp ảnh màn hình phiếu nhập lúc đang hiển thị dòng cảnh báo đỏ \"Cao hơn giá bán\" và Giá bán của sản phẩm Mì tôm thanh long sau khi thiết lập."
      },
      {
        title: "Bài tập 17: Tạo và tự động hóa nhóm khách hàng VIP",
        hints: [
          "💡 **Các tùy chọn trong phần Thiết lập nâng cao khi tạo Nhóm khách hàng:**",
          "1. **Thêm khách hàng vào nhóm theo điều kiện:** Khách nào đủ điều kiện sẽ được tự động thêm vào. Nếu sau này họ KHÔNG còn đủ điều kiện nữa thì hệ thống vẫn GIỮ họ lại trong nhóm. (VD: Nhóm KH Vàng chi tiêu >10tr, sau đó mua ít đi vẫn ở trong nhóm).",
          "2. **Cập nhật lại danh sách theo điều kiện:** Phần mềm sẽ liên tục cập nhật. Đủ điều kiện thì thêm vào, không còn đủ thì TỰ ĐỘNG LOẠI BỎ khỏi nhóm.",
          "3. **Không cập nhật lại danh sách khách hàng:** Các khách hàng đã có trong nhóm sẽ KHÔNG BỊ THAY ĐỔI nhóm, bất kể điều kiện thay đổi ra sao. (VD: Nhóm Khách mua dịp khai trương).",
          "⚠️ **Lưu ý:** Nếu bật 'Hệ thống thực hiện tự động' thì bộ lọc sẽ được tự động áp dụng từ thời điểm lưu và bao gồm các giao dịch trong tương lai."
        ],
        requirements: ["1. Thiết lập tính năng tự động chuyển khách hàng vào \"Nhóm VIP\" khi tổng chi tiêu (trừ trả hàng) đạt 3.000.000đ.", "2. Khách hàng trong nhóm này sẽ tự động được giảm 5% cho mọi hóa đơn sau đó."],
        instructions: ["1. Trên màn hình quản lý, vào mục Khách hàng > Chọn Khách hàng.", "2. Khu vực Nhóm khách hàng phía góc bên trái, nhấn Tạo mới.", "3. Nhập Tên nhóm là \"Nhóm VIP\", thiết lập mức giảm giá là 5%.", "4. Tại tab Thiết lập nâng cao, chọn điều kiện là Tổng bán trừ trả hàng, toán tử Lớn hơn hoặc bằng, điền giá trị 3.000.000.", "5. Chọn phương thức Cập nhật lại danh sách theo điều kiện và tích chọn Hệ thống thực hiện tự động. Sau đó nhấn Lưu.", "6. Quay lại giao diện bán hàng, thêm mới 1 sản phẩm có tên \"Sản phẩm Test 01\" thuộc nhóm \"Khác\" với Giá bán 2.000.000. Tồn kho 5. Nhấn Lưu.", "7. Thêm vào đơn hàng Sản phẩm Test 01 với số lượng là 2 cho khách Lan Anh (Khách hàng mới). Nhấn Thanh toán.", "8. Tại màn hình bán hàng, tìm kiếm khách hàng Lan Anh, tại tab Thông tin > ô Nhóm > hiển thị Khách hàng này thuộc Nhóm VIP.", "9. Kiểm tra giao diện sau khi trả hàng: Tại màn hình bán hàng > Chọn biểu tưởng mũi tên trả hàng > Tìm hóa đơn chị Lan Anh > Trả 1 sản phẩm > Nhấn Trả hàng.", "10. Tìm lại khách hàng Lan Anh, kiểm tra tab Thông tin > ô Nhóm > khách hàng này không còn nằm trong Nhóm VIP."],
        confirm: "Chụp ảnh màn hình sau khi thiết lập Nhóm VIP thành công."
      },
      {
        title: "Bài tập 18: Lập phiếu chi và theo dõi sổ quỹ",
        requirements: ["1. Bạn cần ghi nhận thủ công một khoản chi phí tiền điện hàng tháng trị giá 5.000.000đ trả cho \"Công ty Điện lực\".", "2. Khoản chi này phải được hạch toán vào kết quả hoạt động kinh doanh để xem trên báo cáo."],
        instructions: ["1. Trên màn hình quản lý, truy cập vào mục Sổ quỹ.", "2. Nhấn vào nút + Phiếu chi.", "3. Khai báo thông tin: Loại chi chọn/tạo \"Tiền điện hàng tháng\", Giá trị chi nhập 5.000.000.", "4. Đối tượng nhận nhập \"Công ty Điện lực\" (Tạo mới).", "5. Đảm bảo đã tích chọn ô Hạch toán vào kết quả hoạt động kinh doanh.", "6. Nhấn Lưu để hoàn thành phiếu chi. Sau đó xem tóm tắt dòng tiền trên màn hình Sổ quỹ."],
        confirm: "Chụp ảnh màn hình Sổ quỹ hiển thị phiếu chi 5.000.000đ cho Công ty Điện lực."
      },
      {
        title: "Bài tập 19: Thiết lập tài khoản ngân hàng",
        requirements: ["1. Cửa hàng cần tách bạch dòng tiền mặt tại quầy và dòng tiền chuyển khoản. Bạn cần thêm thông tin tài khoản ngân hàng của cửa hàng vào hệ thống Sổ quỹ."],
        instructions: ["1. Vẫn tại màn hình Sổ quỹ, ở mục Quỹ tiền ở menu bên trái > Chọn Ngân hàng.", "2. Ở mục Tài khoản > Nhấn Thêm để thêm tài khoản ngân hàng.", "3. Khai báo thông tin tài khoản ngân hàng của bạn (Số tài khoản, Tên ngân hàng, Tên chủ thẻ) và nhấn Lưu."],
        confirm: "Chụp ảnh màn hình tab Ngân hàng trong Sổ quỹ hiển thị tài khoản vừa thêm."
      },
      {
        title: "Bài tập 20: Phân quyền tài khoản nhân viên thu ngân",
        requirements: ["1. Tạo tài khoản đăng nhập cho nhân viên mới tên \"An\".", "2. Cấp quyền \"Nhân viên thu ngân\" để An chỉ có thể bán hàng, không được phép xem các báo cáo doanh thu hay thông tin nhạy cảm của cửa hàng."],
        instructions: ["1. Nhấn vào biểu tượng bánh răng Thiết lập > Chọn Xem tất cả thiết lập.", "2. Chọn mục Quản lý người dùng ở menu bên trái. Nhấn + Tạo tài khoản.", "3. Nhập Tên người dùng \"An\", Tên đăng nhập \"An\".", "4. Đặt Mật khẩu (VD: Kiotviet@123), xác nhận lại mật khẩu.", "5. Tại ô Vai trò, chọn Nhân viên thu ngân.", "6. Nhấn Lưu để hoàn tất việc tạo tài khoản."],
        confirm: "Chụp ảnh màn hình danh sách người dùng hiển thị tài khoản nhân viên An với vai trò Thu ngân."
      },
      {
        title: "Bài tập 21: Import hàng hóa từ file Excel",
        requirements: ["1. Cửa hàng chuẩn bị kinh doanh thêm loạt sản phẩm \"Thời trang mùa hè\". Thay vì tạo thủ công, bạn cần sử dụng file mẫu Excel để tải hàng loạt lên phần mềm."],
        instructions: ["1. Vào mục Hàng hóa > Danh sách hàng hóa, nhấn biểu tượng Import và tải file mẫu về máy tính.", "2. Mở file Excel mẫu. Điền thử 1 dòng: Mã hàng \"TT001\", Tên hàng \"Áo thun mùa hè\", Loại hàng \"Hàng hóa\", Nhóm hàng \"Thời trang >> Thời trang mùa hè\", Giá vốn 50.000, Giá bán 150.000, Tồn kho 10. ĐVT: Chiếc. (Các cột Đang kinh doanh điền số 1).", "3. Xóa các dòng dữ liệu mẫu ban đầu của file và Lưu file lại.", "4. Quay lại phần mềm, tại giao diện Import, tích chọn \"Có\" ở mục ghi nhận tồn kho và giá vốn.", "5. Nhấn Chọn file dữ liệu, tải file vừa làm lên và bấm Thực hiện. Chờ hệ thống báo thành công rồi ấn F5 tải lại trang."],
        confirm: "Chụp ảnh màn hình danh sách hàng hóa hiển thị sản phẩm Áo thun mùa hè TT001 vừa được import thành công."
      }
    ]
  },
  {
    id: "session_3",
    title: "Buổi 3: Mobile App & Phần cứng",
    exercises: [
      { title: '📱 Thao tác trên Mobile App', isGroupHeader: true },
      {
        title: "Bài tập 1: Thêm mới hàng hóa và thiết lập đơn vị tính quy đổi",
        requirements: ["1. Thêm mới sản phẩm \"Mì Hảo Hảo\" vào danh mục hàng hóa.", "2. Thiết lập đơn vị tính quy đổi cho sản phẩm.", "3. Tạo thêm 1 sản phẩm nháp (ví dụ: \"Sản phẩm Test 01\") để phục vụ bài tập xóa vĩnh viễn ở các bước sau."],
        instructions: ["1. Đăng nhập vào hệ thống KiotViet.", "2. Truy cập mục Hàng hóa -> Danh mục.", "3. Nhấn Thêm mới -> Thêm hàng hóa.", "4. Nhập thông tin cho \"Mì Hảo Hảo\": Mã hàng \"MH01\", Nhóm hàng \"Mì ăn liền\", Giá vốn 3.000, Giá bán 4.000, Tồn kho 100.", "5. Trong phần Đơn vị tính, thêm đơn vị \"Thùng\", tỷ lệ 1 Thùng = 30 Gói, giá bán 115.000.", "6. Nhấn Lưu.", "7. Lặp lại thao tác để tạo \"Sản phẩm Test 01\" (Nhóm \"Test\", Giá vốn 1.000, Giá bán 2.000, Tồn kho 10)."],
        confirm: "Chụp ảnh màn hình hiển thị danh sách hàng hóa có cả \"Mì Hảo Hảo\" và \"Sản phẩm Test 01\", thấy rõ đơn vị tính quy đổi."
      },
      {
        title: "Bài tập 2: Tạo phiếu nhập hàng từ nhà cung cấp",
        requirements: ["1. Tạo phiếu nhập hàng cho sản phẩm \"Mì Hảo Hảo\" vừa tạo.", "2. Thêm mới nhà cung cấp trong quá trình lập phiếu."],
        instructions: ["1. Truy cập mục Giao dịch -> Nhập hàng.", "2. Nhấn nút dấu cộng (+) để tạo phiếu nhập mới.", "3. Tìm kiếm và chọn sản phẩm \"Mì Hảo Hảo\" (mã MH01).", "4. Chọn đơn vị tính là \"Thùng\" và nhập số lượng là 5.", "5. Ở phần Nhà cung cấp, nhấn dấu cộng (+) để thêm mới.", "6. Nhập tên \"Đại lý Tuấn Anh\", số điện thoại \"0901234567\" rồi lưu lại.", "7. Kiểm tra lại thông tin phiếu nhập và nhấn Hoàn thành."],
        confirm: "Chụp ảnh màn hình chi tiết phiếu nhập hàng vừa tạo, thấy rõ tên nhà cung cấp, sản phẩm, số lượng và tổng tiền."
      },
      {
        title: "Bài tập 3: Thực hiện giao dịch bán hàng và thanh toán",
        requirements: ["1. Tạo hóa đơn bán hàng cho khách hàng quen.", "2. Thực hiện thanh toán cho hóa đơn."],
        instructions: ["1. Chuyển sang màn hình Bán hàng.", "2. Tìm và chọn sản phẩm \"Mì Hảo Hảo\" (MH01).", "3. Chọn đơn vị \"Gói\" và nhập số lượng 10.", "4. Tại ô tìm kiếm khách hàng, thêm mới hoặc chọn khách hàng \"Chị Lan\".", "5. Nhấn Thanh toán.", "6. Kiểm tra số tiền khách đưa và nhấn Thanh toán (hoặc Hoàn thành) để lưu hóa đơn."],
        confirm: "Chụp ảnh màn hình hóa đơn vừa bán, hiển thị rõ tên khách hàng, sản phẩm, số lượng và tổng tiền thanh toán."
      },
      {
        title: "Bài tập 4: Xử lý khách trả hàng",
        requirements: ["1. Thực hiện trả lại 1 phần hàng hóa từ hóa đơn đã bán.", "2. Hoàn tiền cho khách và cập nhật lại kho."],
        instructions: ["1. Truy cập mục Giao dịch -> Hóa đơn.", "2. Tìm hóa đơn vừa lập cho \"Chị Lan\" ở Bài tập 3.", "3. Mở chi tiết hóa đơn, chọn chức năng Trả hàng.", "4. Điều chỉnh số lượng sản phẩm trả lại là 1 gói.", "5. Nhấn Thanh toán và xác nhận Hoàn thành phiếu trả hàng."],
        confirm: "Chụp ảnh màn hình chi tiết phiếu trả hàng, thấy rõ hóa đơn gốc, sản phẩm trả lại và số tiền hoàn."
      },
      {
        title: "Bài tập 5: Thanh toán công nợ cho nhà cung cấp",
        requirements: ["1. Thanh toán khoản nợ từ phiếu nhập hàng ở Bài tập 2 cho nhà cung cấp."],
        instructions: ["1. Truy cập mục Đối tác -> Nhà cung cấp.", "2. Tìm và chọn nhà cung cấp \"Đại lý Tuấn Anh\".", "3. Chuyển sang tab Công nợ và chọn Thanh toán.", "4. Nhập số tiền cần thanh toán để trả hết nợ.", "5. Nhấn Tạo phiếu thu (hoặc Lưu) để hoàn tất."],
        confirm: "Chụp ảnh màn hình lịch sử thanh toán hoặc tab công nợ của nhà cung cấp hiển thị dư nợ bằng 0."
      },
      {
        title: "Bài tập 6: Xóa vĩnh viễn dữ liệu nháp",
        requirements: ["1. Xóa vĩnh viễn \"Sản phẩm Test 01\" đã tạo ở Bài tập 1 để làm sạch dữ liệu."],
        instructions: ["1. Truy cập mục Hàng hóa -> Danh mục.", "2. Tìm sản phẩm \"Sản phẩm Test 01\".", "3. Chọn sản phẩm và nhấn Xóa.", "4. Truy cập lại tab Hàng hóa đã xóa (nếu có tính năng này) hoặc xác nhận xóa vĩnh viễn khi hệ thống hỏi."],
        confirm: "Chụp ảnh màn hình danh sách hàng hóa sau khi tìm kiếm \"Sản phẩm Test 01\" không còn kết quả."
      },
      { title: '⚙️ Cài đặt thiết bị phần cứng', isGroupHeader: true },
      {
        title: "Bài tập 7: Cài đặt và làm quen KiotViet Hardware Manager",
        requirements: ["1. Tải và cài đặt ứng dụng KiotViet Hardware Manager lên máy tính Windows.", "2. Truy cập để xem danh mục các thiết bị được hỗ trợ."],
        instructions: ["1. Đăng nhập vào KiotViet trên máy tính (Giao diện Quản lý).", "2. Vào menu Thiết lập -> Cửa hàng -> Tìm và tải phần Driver cho phần cứng. (Hoặc tải trực tiếp tại khu vực Hỗ trợ).", "3. Mở file .exe vừa tải về và tiến hành cài đặt theo hướng dẫn.", "4. Mở ứng dụng KiotViet Hardware Manager. Do không có thiết bị vật lý, nếu nhấn \"Quét thiết bị\" hệ thống sẽ báo không tìm thấy.", "5. Chuyển sang thẻ Danh mục để xem danh sách toàn bộ driver mà ứng dụng hỗ trợ."],
        confirm: "Chụp ảnh màn hình ứng dụng KiotViet Hardware Manager đang mở ở thẻ \"Danh mục\"."
      },
      {
        title: "Bài tập 8: Cài đặt máy in hóa đơn & thiết lập ngăn kéo đựng tiền",
        requirements: ["1. Cài đặt Driver máy in hóa đơn (Ví dụ: ZY307, KV804 hoặc KPOS) qua KiotViet Hardware Manager.", "2. Bật cấu hình tự động mở ngăn kéo đựng tiền trên Driver máy in hóa đơn.", "3. Xem trước bản in hóa đơn trên màn hình Thu ngân và thiết lập tối ưu khổ giấy in."],
        instructions: ["1. Mở thẻ Danh mục trên ứng dụng KiotViet Hardware Manager, tìm nhóm \"Máy in hóa đơn\" và nhấn nút Cài đặt.", "2. Đợi phần mềm tải và cài đặt thành công.", "3. Mở Printers & Scanners trên máy tính Windows, chọn máy in hóa đơn vừa cài -> Chọn Printer Properties.", "4. Chuyển sang thẻ Device Settings, tìm đến mục Cash Select. Chọn tùy chọn After Printing (Mở sau khi in) -> Nhấn OK.", "5. Truy cập màn hình Bán hàng (Thu ngân), chọn 1 sản phẩm và nhấn Thanh toán.", "6. Tại cửa sổ Print Preview, chọn máy in đích là máy in hóa đơn vừa cài.", "7. Nhấn vào Cài đặt khác, thiết lập Lề (Margins) chọn Không (None). Bỏ tích ở ô Đầu trang và chân trang."],
        confirm: "Chụp 2 ảnh màn hình: 1 ảnh bảng Device Settings cấu hình mở ngăn kéo và 1 ảnh Print Preview hóa đơn trên trình duyệt."
      },
      {
        title: "Bài tập 9: Cài đặt máy in tem mã & thiết lập khổ giấy",
        requirements: ["1. Cài đặt Driver máy in tem mã (Ví dụ: Xprinter 365B) qua KiotViet Hardware Manager.", "2. Thiết lập khổ giấy tem chuẩn (72x22mm) trên Windows.", "3. Thực hiện thao tác in mã vạch từ danh mục Hàng hóa."],
        instructions: ["1. Trở lại thẻ Danh mục trên Hardware Manager, tìm máy in tem mã và nhấn Cài đặt.", "2. Tại màn hình Printers & Scanners của Windows, chọn máy in tem mã vừa cài -> Chọn Printer Properties.", "3. Chuyển sang thẻ General -> Nhấn Preferences... -> Chọn tab Page Setup -> Nhấn New.", "4. Tạo khổ giấy mới với tên: Tem 72x22mm, nhập Width: 72 mm / Height: 22 mm -> Nhấn OK -> Apply.", "5. Mở KiotViet (Quản lý), vào menu Hàng hóa -> Danh mục.", "6. Tích chọn 1 sản phẩm bất kỳ -> Nhấn nút In tem mã -> Điền số lượng và chọn đúng khổ giấy 72x22mm -> Nhấn Xem bản in.", "7. Ở khung Print Preview của trình duyệt, chọn đích in là máy in tem 365B."],
        confirm: "Chụp 2 ảnh màn hình: 1 ảnh bảng cấu hình Page Setup 72x22mm và 1 ảnh Print Preview mã vạch."
      },
      {
        title: "Bài tập 10: Thao tác kết nối màn hình QR",
        requirements: ["1. Xác định vị trí và thao tác bật/kết nối màn hình hiển thị QR trên giao diện Bán hàng."],
        instructions: ["1. Truy cập vào màn hình Bán hàng (Thu ngân) trên hệ thống KiotViet.", "2. Tùy theo thiết bị hoặc giao diện đang sử dụng, tìm nút Màn hình phụ hoặc Kết nối màn QR (Thường nằm ở biểu tượng Menu 3 gạch).", "3. Click vào tính năng này để hệ thống hiển thị mã QR hoặc kích hoạt pop-up màn hình quét mã."],
        confirm: "Chụp ảnh màn hình Giao diện Thu ngân có hiển thị nút kết nối màn QR hoặc pop-up tính năng hiển thị QR."
      }
    ]
  }
];
