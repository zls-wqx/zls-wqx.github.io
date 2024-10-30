document.addEventListener("DOMContentLoaded", function () {
    // 当前页面高亮显示
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav .nav-links li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // 登录页面表单验证
    const loginForm = document.querySelector('.login-section form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === '' || password === '') {
                alert('用户名和密码不能为空');
                event.preventDefault(); // 阻止表单提交
            }
        });
    }

    // 百度地图初始化
    if (document.getElementById('map')) {
        const map = new BMap.Map("map"); // 创建地图实例
        const point = new BMap.Point(104.7422, 31.4640); // 绵阳的经纬度
        map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
        const marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
    }

    // 新闻与更新页面的搜索功能
    const searchInput = document.getElementById('search-news');
    if (searchInput) {
        const newsItems = document.querySelectorAll('.news-item');

        searchInput.addEventListener('input', function () {
            const query = searchInput.value.toLowerCase();

            newsItems.forEach(item => {
                const title = item.querySelector('h3').innerText.toLowerCase();
                if (title.includes(query)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});
