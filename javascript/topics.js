// トピックスデータ
const topicsArchive = {
    2024: [
        { date: '2024年9月05日', content: '<i class="fas fa-solid fa-file"></i><a href="https://forms.office.com/r/jH5Cn6vZ5V" class="hover-link">【重要】夕照祭の予約受付開始しました</a>', published: '2024-09-05' },
        { date: '2024年9月04日', content: '<i class="fab fa-instagram"></i><a href="https://www.instagram.com/p/C_fxwfcTFfv/?utm_source=ig_web_copy_link" class="hover-link">スタジオ録音してきました！</a>', published: '2024-09-04' },
        { date: '2024年8月20日', content: 'ホームページの基本レイアウト完成？', published: '2024-08-20' },
        { date: '2024年8月17日', content: '<a href="../posts/2481417合宿.html" class="hover-link">夏季合宿を行いました。</a>', published: '2024-08-17' },
        { date: '2024年8月12日', content: '現役生によるホームページ製作開始！', published: '2024-08-12' },
        { date: '2024年7月25日', content: '<a href="https://www.instagram.com/p/C92Kvvoz0BS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" class="hover-link">横浜市大会の結果が出ました！</a>', published: '2024-07-25' },
        { date: '2024年3月19日', content: '第20回定期演奏会開催！', published: '2024-03-19' },
    ],
    2023: [
        { date: '2023年9月17日', content: '夕照祭２日目公演！', published: '2023-09-17' },
    ],
    
    
    
    2000: [
        { date: '0000年0月00日', content: '<a href="ここにリンク" class="hover-link">ここに内容</a>', published: '0000-00-00' },
    ],
    // 他の年度のデータもここに追加可能(上のをコピーして中身を置き換えればOK)
};

let currentYear = 2024;  // 初期表示する年度(今の年に変えてね！)


//=========================================================================================================================================
//
//  これより下のデータはいじらないでください！！
//
//=========================================================================================================================================


function updateTopicsList(year) {
    const topicsList = document.getElementById('topics-list');
    topicsList.innerHTML = '';  // リストをクリア

    const topics = topicsArchive[year];
    if (topics) {
        topics.forEach(topic => {
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
    } else {
        topicsList.innerHTML = '<li>トピックスが見つかりません。</li>';
    }
}

// 年度切り替えの処理
function switchYear(increment) {
    currentYear += increment;
    document.getElementById('current-year').textContent = currentYear;
    updateTopicsList(currentYear);
}

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
    updateTopicsList(currentYear);

    document.getElementById('prev-year').addEventListener('click', () => switchYear(-1));
    document.getElementById('next-year').addEventListener('click', () => switchYear(1));
});
