document.addEventListener('DOMContentLoaded', () => {
    const scanButton = document.getElementById('scanButton');
    const scanResult = document.getElementById('scanResult');
    const resultText = document.getElementById('resultText');

    scanButton.addEventListener('click', () => {
        scanButton.disabled = true;
        resultText.textContent = '扫描中，请稍候...';

        // 模拟扫描过程
        setTimeout(() => {
            resultText.textContent = '扫描完成！系统未发现任何问题。';
            scanResult.classList.remove('hidden');
            scanButton.disabled = false;
        }, 2000); // 模拟2秒扫描时间
    });
});
