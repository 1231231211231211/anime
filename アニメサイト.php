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
    <div class="content_body">
        <!-- Header with Hamburger Menu -->
        <header>
            <div class="header_container">
                <div class="menu_bt_container">
                    <img src="img/ham-menu-image01.png" class="menu_close" alt="menu close">
                    <img src="img/ham-menu-image02.png" class="menu_open" alt="menu open">
                </div>
                <h1>サイトタイトル</h1>
            </div>
        </header>

        <!-- Navigation Menu for Mobile/Tablet -->
        <nav class="sample_sp_menu">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>

        <!-- Main Header for Site Sections -->
        <header>
            <h1>アニメサブスクリプションサービスおすすめ</h1>
            <nav>
                <ul>
                    <li><a href="#recommendations">おすすめサービス</a></li>
                    <li><a href="#price">価格別ランキング</a></li>
                    <li><a href="#search">アニメ検索</a></li>
                </ul>
            </nav>
        </header>

        <!-- Main Content -->
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

        <!-- Footer -->
        <footer>
            <p>&copy; <?php echo $year; ?> アニメサブスクリプションおすすめサイト</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>