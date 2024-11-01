<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // 获取软件名称和描述
    $softwareName = $_POST['software-name'];
    $softwareDescription = $_POST['software-description'];

    // 处理文件上传
    $targetDir = "uploads/"; // 软件保存目录
    $targetFile = $targetDir . basename($_FILES["software-file"]["name"]);
    $uploadOk = 1;

    // 检查是否是允许的文件类型
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    if ($fileType != "exe" && $fileType != "zip" && $fileType != "rar" && $fileType != "7z" && $fileType != "tar") {
        echo "只允许上传 .exe, .zip, .rar, .7z, .tar 类型的文件。";
        $uploadOk = 0;
    }

    // 保存文件并记录信息
    if ($uploadOk && move_uploaded_file($_FILES["software-file"]["tmp_name"], $targetFile)) {
        // 保存上传信息到文件
        $fileInfo = $softwareName . "|" . $softwareDescription . "|" . basename($targetFile) . "\n";
        file_put_contents('uploads/uploads.txt', $fileInfo, FILE_APPEND);

        echo "软件上传成功！";
    } else {
        echo "软件上传失败。";
    }
}
?>
