document.addEventListener('DOMContentLoaded', function() {
    // メニュー調整関数
    function adjustMenu() {
        const menu = document.getElementById('menu');
        const menuItems = Array.from(menu.querySelectorAll('.menu-item'));
        const menuWidth = menu.offsetWidth;
        let usedWidth = 0;

        menuItems.forEach(item => {
            usedWidth += item.offsetWidth;
        });

        if (usedWidth > menuWidth) {
            menu.style.overflowX = 'scroll'; // 横スクロールを有効にする
        } else {
            menu.style.overflowX = 'auto'; // スクロールを自動に戻す
        }
    }

    // 初回ロード時とリサイズ時にメニューを調整
    window.addEventListener('resize', adjustMenu);
    adjustMenu(); // 初回ロード時に実行


    // ハンバーガーボタンをクリックしたときの処理
    const hamburgerButton = document.getElementById('hamburger-button');
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    } else {
        console.error('Hamburger button not found');
    }

    // 閉じるボタンをクリックしたときの処理
    const closeButton = document.getElementById('close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.remove('active');
        });
    } else {
        console.error('Close button not found');
    }
});

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.collapsible-section').forEach(section => {
    const header = section.querySelector('.section-header');
    const content = section.querySelector('.section-content');
    const closeBtn = section.querySelector('.close-btn1');

    header.addEventListener('click', () => {
        content.style.display = 'block';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 親要素のクリックイベントを防止
        content.style.display = 'none';
        closeBtn.style.display = 'none';
    });
});



// 部活動見学お申込みフォームのトグルボタン設定
const visitToggleButton = document.getElementById('toggle-visit');
const visitContent = document.getElementById('visit-content');

visitToggleButton.addEventListener('click', () => {
    const isHidden = visitContent.style.display === 'none';
    visitContent.style.display = isHidden ? 'block' : 'none';
    visitToggleButton.textContent = isHidden ? '部活動見学希望お申込みフォームを閉じる' : '部活動見学希望お申込みフォームを開く';
});



//右クリ禁止
// 右クリック禁止処理
document.addEventListener('contextmenu', function(event) {
    // 対象がクラス "no-right-click" を持っているか確認
    if (event.target.classList.contains('no-right-click')) {
        event.preventDefault(); // 右クリックを無効にする
    }
});



