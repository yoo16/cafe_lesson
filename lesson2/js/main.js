const siteTitle = "Café Bonjour";
const description = "Your cozy corner in the city";
const copyRight = "&copy; 2024 Café Bonjour. All rights reserved.";
console.log(siteTitle);

document.title = siteTitle;

// id = title の DOM取得
const titleElement = document.getElementById('title');
// サイトタイトル設定
titleElement.innerHTML = siteTitle;

// id = title の DOM取得
const descriptionElement = document.getElementById('description');
// サブタイトル設定
descriptionElement.innerHTML = description;


// id = title の DOM取得
const copyRightElement = document.getElementById('copy-right');
// copy right 追加
copyRightElement.innerHTML = copyRight;