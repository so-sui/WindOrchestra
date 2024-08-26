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


// トピックスを追加
const topics = [
    // ここにトピックスを追加...ひな形→{ date: '0000年0月00日', content: '<a href="ここにリンク" class="hover-link">ここに内容</a>', published: '0000-00-00' },
    
    { date: '2024年8月20日', content: 'ホームページの基本レイアウト完成？', published: '2024-08-20' },
    { date: '2024年8月17日', content: '<a href="posts/2481417合宿.html" class="hover-link">夏季合宿を行いました。</a>', published: '2024-08-17' },
    { date: '2024年8月12日', content: '現役生によるホームページ製作開始！', published: '2024-08-12' },
    { date: '2024年7月25日', content: '<a href="https://www.instagram.com/p/C92Kvvoz0BS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" class="hover-link">横浜市大会の結果が出ました！</a>', published: '2024-07-25' },
    { date: '2024年3月19日', content: '第20回定期演奏会開催！', published: '2024-03-19' },
];

const topicsList = document.getElementById('topics1-list');





topics.slice(0, 10).forEach(topic => {
    const listItem = document.createElement('li');
    const publishDate = new Date(topic.published);
    const now = new Date();
    const twoWeeks = 14 * 24 * 60 * 60 * 1000;

    // 公開日から二週間以内なら "new" を表示
    if (now - publishDate < twoWeeks) {
        listItem.innerHTML = `(new) ${topic.date}: ${topic.content}`;
    } else {
        listItem.innerHTML = `${topic.date}: ${topic.content}`;
    }

    topicsList.appendChild(listItem);
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
