//  Tính tiền lương nhân viên 
/**
 * - Đầu vào: 
 * + biến a là tiền lương 1 ngày
 * + biến b là số ngày
 * - Xử Lý:
 *  a * b = số tiền lương 
 * - Đầu ra:
 * + Xuất ra số tiền của số ngày đã làm 
 */

var a = 100000;
var b = 3;
var salary = a*b;
salary = console.log("salary: " + salary);
// Tính giá trị trung bình 
/**
 * - Đầu vào:
 *  + tạo 5 biến và gán cho 5 số thực ngẫu nhiên
 *  - Xử Lý:
 *  + lấy 5 số thực của 5 biến cộng lại rồi chia cho 5
 *  - Đầu ra:
 *  + Xuất ra giá trị trung bình của 5 số
 */
 var c1 = 1;
 var c2 = 2;
 var c3 = 3;
 var c4 = 4;
 var c5 = 5;
 var averageValue = (c1 + c2 + c3 + c4 + c5 )/5;
 averageValue = console.log("Average Value: " + averageValue);
 // Quy đổi tiền
 /**
 * - Đầu vào:
 * + Tạo biến USD = 23.500
 * + Tạo biến x là số lượng tiền đô
 *  - Xử Lý:
 *  + lấy biến x * USD = số tiền sau khi chuyển đổi
 *  - Đầu ra:
 *  + Xuất ra số tiền sau khi chuyển đổi
 *  
 */
 var Usd = 23500
 var x = 5;
 var change = x * 23500;
 change = console.log("Usd after change: " + change);
 // Tính diện tích, chu vi hinh chữ nhật
 /**
 *  - Đầu vào:
 *  + tạo biến i là chiều rộng
 *  + tạo biến j là chiều dài
 *  - Xử Lý:
 *  + Chu vi = (dài + rộng) *2
 *  + Diện tích = dài * rộng
 *  - Đầu ra:
 *  + Xuất ra chu vi và diện tích của HCN
 */
 var i = 3;
 var j = 5;
 var perimeter = (2*(i + j));
 var area = i * j;
 perimeter = console.log("Chu vi: " + perimeter);
 area = console.log("Diện tích: " + area);
 // tính tổng 2 ký số
 /**
 *  - Đầu vào:
 *  + t là số ngẫu nhiên có 2 chữ số
 *  - Xử Lý:
 *  + tạo biến t1 rồi chia lấy dư để lấy số hàng đv
 *  + tạo biến t2 rồi chia cho 10 đế lấy số hàng chục
 *  + biến toal = t1 + t2
 *  - Đầu ra:
 *  + Xuất ra giá trị total cần tính
 */
 var t = 26;
 var t1 = Math.floor(26 % 10);
 var t2 = Math.floor(26 / 10);
 var totalT = t1 + t2;
 totalT = console.log("Total Ký Số: " + totalT);