<?php
// You can include some PHP logic at the top, for example, to handle dynamic content or variables
$title = "アニメサブスクリプションおすすめサイト";
$year = date("Y"); // Get the current year dynamically
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>アニメサブスクリプションサービスおすすめ</h1>
        <nav>
            <ul>
                <li><a href="#recommendations">おすすめサービス</a></li>
                <li><a href="#price">価格別ランキング</a></li>
                <li><a href="#search">アニメ検索</a></li>
            </ul>
            <div class="header_container">
				<div class="menu_container">
					<img class="menu_open" src="img/ham-menu-image01.png">
					<img class="menu_close" src="img/ham-menu-image02.png">    
				</div>
        </nav>
    </header>

    <nav class="sample_sp_menu">
			<ul>
				<li>HOME</li>
				<li>ABOUT</li>
				<li>NEWS</li>
				<li>CONTACT</li>
			</ul>

    <main>
        <section id="search">
            <h2>アニメタイトルで検索</h2>
            <form id="anime-search-form">
                <label for="anime-title">アニメタイトルを入力:</label>
                <input type="text" id="anime-title" name="anime-title" required>
                <button type="button" id="cancel-btn">キャンセル</button>
                <button type="submit">検索</button>
            </form>
            <div id="search-suggestions"></div>
            <div id="search-results"></div>
        </section>

        <section id="recommendations">
            <h2>初心者向けおすすめサブスクリプションサービス</h2>
            <p>初心者におすすめのサービスを以下に表示します。</p>
            <div id="recommended-services"></div>
        </section>

        <section id="price">
            <h2>価格別おすすめサービス</h2>
            <div id="price-recommendations"></div>
        </section>
    </main>

    <footer>
        <p>&copy; <?php echo $year; ?> アニメサブスクリプションおすすめサイト</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>