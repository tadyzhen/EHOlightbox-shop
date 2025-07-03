// 等待 DOM 完全載入
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滾動功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 導航欄滾動效果
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = 'none';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // 分頁切換功能
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 只處理 # 開頭的連結
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').replace('#', '');
                sections.forEach(sec => {
                    if (sec.id === targetId) {
                        sec.classList.add('active');
                    } else {
                        sec.classList.remove('active');
                    }
                });
            }
        });
    });

    // 商品下拉選單切換顯示商品，並顯示商品分頁
    const lightboxDiv = document.getElementById('lightbox');
    const neonDiv = document.getElementById('neon');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // 顯示商品分頁，隱藏其他分頁
            sections.forEach(sec => {
                if (sec.id === 'product') {
                    sec.classList.add('active');
                } else {
                    sec.classList.remove('active');
                }
            });
            // 切換商品內容
            if (this.getAttribute('href') === '#lightbox') {
                lightboxDiv.style.display = '';
                neonDiv.style.display = 'none';
            } else if (this.getAttribute('href') === '#neon') {
                lightboxDiv.style.display = 'none';
                neonDiv.style.display = '';
            }
        });
    });
}); 