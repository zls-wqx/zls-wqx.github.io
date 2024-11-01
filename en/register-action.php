<?php
// 数据库连接设置
$servername = "localhost";  // 数据库服务器地址
$username = "root";         // 数据库用户名
$password = "";             // 数据库密码
$dbname = "xgorb_studio";   // 数据库名称

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 获取表单数据
$user = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$confirm_password = $_POST['confirm-password'] ?? '';

// 简单验证
if (empty($user) || empty($email) || empty($password) || empty($confirm_password)) {
    echo "所有字段都是必填的。";
    exit();
}

if ($password !== $confirm_password) {
    echo "密码和确认密码不匹配。";
    exit();
}

// 检查用户名和邮箱是否已存在
$sql_check = "SELECT id FROM users WHERE username = ? OR email = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("ss", $user, $email);
$stmt_check->execute();
$stmt_check->store_result();

if ($stmt_check->num_rows > 0) {
    echo "用户名或邮箱已存在。";
    $stmt_check->close();
    $conn->close();
    exit();
}

$stmt_check->close();

// 密码加密
$hashed_password = password_hash($password, PASSWORD_BCRYPT);

// 插入数据到数据库
$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $user, $email, $hashed_password);

if ($stmt->execute()) {
    echo "注册成功！";
} else {
    echo "注册失败: " . $stmt->error;
}

// 关闭连接
$stmt->close();
$conn->close();
?>
