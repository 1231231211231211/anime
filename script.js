document.addEventListener("DOMContentLoaded", () => {
    // サービスデータ（アニメタイトルと対応するサブスクリプションサービス）
    const services = [
        {
            name: "Amazon Prime Video",
            price: "600円/月or5900円/年間,また学生なら学割で300円/月,2950円/年間",
            quality: "HD",
            genres: ["ドラマ","アニメ","バラエティー","映画など"],
            tokutyou:"アニメのほかにもAmazonでの配送料金が無料になるのが大きい",
            animeTitles: ["ダンダダン","【推しの子】","ブルーロック","Re:ゼロから始める異世界生活",
                "BEASTARS","サマータイムレンダ","チェーンソーマン","葬送のフリーレン","薬屋のひとりごと","来世は他人がいい","呪術廻戦","天国大魔境",
                "モノノ怪","アオのハコ","BANANA FISH","僕のヒーローアカデミア","怪獣８号","HUNTER×HUNTER","逃げ上手の若君","ハイキュー！！",
                "宝石の国","オッドタクシー","スキップとローファー","SPY×FAMILY","鬼滅の刃", "進撃の巨人", "シャングリアフロンティア", "君は冥途様",
                "デッドデッドデーモンズデデデデデストラクション", "はたらく細胞", "マッシュル", "無職転生", "ドラゴンボールDAIMA", "リコリス・リコイル",
                "ゴールデンカムイ", "Dr.STONE", "負けヒロインが多すぎる!", "BLEACH", "メイドインアビス", "あの日見た花の名前は僕たちはまだ知らない", 
                "Angel Beats!", "青のミブロ", "鴨乃橋ロンの禁断推理","ぼっち・ざ・ろっく!", "約束のネバーランド", "リトルバスターズ！～Refrain～",
                "五等分の花嫁シリーズ", "青の祓魔師", "ゆるキャン△", "天国大魔境", "銀魂", "転生貴族、鑑定スキルで成り上がる", "2.5次元の誘惑", "モブサイコ100",
                "転生したらスライムだった件", "DEATH NOTE", "その着せ替え人形は恋をする", "ようこそ実力至上主義の教室へ", "この素晴らしい世界に祝福を！",
                "ミギとダリ", "山田くんとLv999の恋をする", "この素晴らしい世界に爆焔を！","嘆きの亡霊は引退したい","ひとりぼっちの異世界攻略",
                "甘神さんちの縁結び","リトルバスターズ","歴史に残る悪女になるぞ","ダンジョンに出会いを求めるのは間違っているだろうかシリーズ","魔王2099",
                "やり直し令嬢は竜帝陛下を攻略中","ATRI","ワンルーム","Fate/staynight","ソードアートオンライン","ブルーアーカイブ","俺だけレベルアップな件",
                "七つの大罪シリーズ","陰の実力者になりたくて","キミと僕の最後の戦場、あるいは世界が始まる聖戦","僕の心のヤバイやつ","齢5000年の草食ドラゴン、いわれなき邪竜認定",
                "MFゴースト","アイドルマスターシャイニーカラーズ","合コンに行ったら女がいなかった話","結婚するって本当ですか","シークレットレベル",
                "出来損ないと呼ばれた元英雄は、実家から追放されたので好き勝手に生きることにした","夜桜さんちの大作戦","デート・ア。ライブシリーズ",
                "夜のクラゲは泳げない","アークナイツ","るろうに剣心","ライアー・ライアー","豚のレバーは加熱しろ","愚かな天使は悪魔と踊る",
                "新テニスの王子様","ありふれた職業で世界最強","るろうに剣心","暴食のベルセルク","FAIRY TAIL","FAIRY TAIL 100年クエスト",
                "お隣の天使様にいつの間にか駄目人間にされていた件","女神のカフェテラス","経験済みなキミと、経験ゼロなオレが、お付き合いする話",
                "六畳間の侵略者!?","弱キャラ友崎くん","君のことが大大大大大好きな100人の彼女","多数決","GTO","推しの子","神は遊戯に飢えている",
                "灼眼のシャナ","亜人","さよなら流星、こんにちは人生","忘却バッテリー","VTuberなんだが配信切り忘れたら伝説になっていた","魔都精兵のスレイブ",
                "恋は双子で割り切れない","魔法科高校の劣等生","ハラトラ","戦記絶唱シンフォギア","THE NEW GATE","小市民","物語シリーズ","ハイキュー",
                "時々ボソッとロシア語でデレる隣のアーリャさん","株式会社マジルミエ","ひきこまり吸血姫の悶々","魔王学院の不適合者",
                "凍牌～裏レート麻雀闘牌録","狼と香辛料","月が導く異世界道中","義妹生活","Lv2からチートだった元勇者候補のまったり異世界ライフ","Unnamed Memory",
                "ガールズバンドクライ","転生したらスライムだった件","杖と剣のウィストリア","盾の勇者の成り上がりシリーズ","それでも歩は寄せてくる","メカウデ","NieR:Automata",
                "トリリオンゲーム","道産子ギャルはなまらめんこい","IDOLY PRYDE","アイドリープライド","異世界のんびり農家","魔法少女にあこがれて","悪役令嬢Lv99",
                "悪役令嬢レベル99","ループ7回目の悪役令嬢は、元敵国で自由気ままな花嫁生活を満喫する","ソードアートオンライン アリシゼーション","ガンゲイルオンライン",
                "とんでもスキルで異世界放浪メシ","異世界失格","ご注文はうさぎですか？","監禁区域レベルX","シークレット・レベル","かぎなど","黙示録の四騎士",
                "キミと僕との最後の戦場、あるいは世界が始まる聖戦","ワンピース","TARI TARI","なぜ僕の世界を誰も覚えていないのか？","多数欠","響け！ユーフォニアム",
                "ハズレ枠の【状態異常スキル】で最強になった俺がすべてを蹂躙するまで","嫌な顔されながらおパンツ見せてもらいたい","好きな子がめがねを忘れた","異世界スーサイド・スクワッド",
                "龍族","アクロトリップ","マーダーミステリー・オブ・ザ・デッド","裏世界ピクニック","アイドルマスター ミリオンライブ！","ドラゴンボール超","変人のサラダボウル",
                "SHY","BanG Dream! It's MyGO!!!!!","BanG Dream!","妻、小学生になる。","マッシュル-MASHLE-","月が導く異世界道中","Dies irae","ディエス・イレ","時光代理人",
                "地獄楽","異修羅","HIGH CARD","魔法少女リリカルなのは 20周年記念セレクション","鴨乃橋ロンの禁断推理","からくりサーカス","ウマ娘","星降る王国のニナ","エリアの騎士",
                "Fate/Apocrypha","オーイ！とんぼ","デッドマウント・デスプレイ","黒子のバスケシリーズ","俺は全てを【パリイ】する","WIND BREAKER","下の階には澪がいる","名湯『異世界の湯』開拓記",
                "鋼の錬金術師","風都探偵","GREAT PRETENDER","勇者パーティーを追放されたビーストテイマー、最強種の猫耳少女と出会う","伝説の勇者の伝説","名探偵コナン","刀使ノ巫女",
                "ソマリと森の神様","レベル1だけどユニークスキルで最強です","アズールレーン","機動戦士ガンダムSEED","先輩がうざい後輩の話","魔法科高校の劣等生 追憶編","メルクストーリア - 無気力少年と瓶の中の少女",
                "カノジョも彼女","最弱テイマーはゴミ拾いの旅を始めました。","メイドインアビス 烈日の黄金郷","しかのこのこのここしたんたん","即死チートが最強すぎて","ダンジョンの中のひと",
                "ダンジョンの中のひと","天穂のサクナヒメ","最果てのパラディン","治癒魔法の間違った使い方","望まぬ不死の冒険者","先輩はおとこのこ","ダンジョン飯","黒子のバスケ　第2期","機動戦士ガンダム00",
                "うたわれるもの　偽りの仮面","ぽんのみち","百錬の覇王と聖約の戦乙女","真夜中ぱんチ","怪獣８号","カノジョも彼女 Season 2","ぷにるはかわいいスライム","戦姫絶唱シンフォギアG","青の祓魔師 京都不浄王篇",
                "ゴールデンカムイ","佐々木とピーちゃん","時光代理人 -LINK CLICK- Ⅱ","ダークギャザリング","カミエラビ GOD.app","最強タンクの迷宮攻略","うらみちお兄さん","神之塔 -Tower of God-","王様ランキング 勇気の宝箱",
                "ギヴン","まじっく快斗","ヴァンパイア男子寮","異世界ゆるり紀行","とあるおっさんのＶＲＭＭＯ活動記","ゾン100","ブラック・ジャック","戦姫絶唱シンフォギアGX","じいさんばあさん若返る",
                "転生したらスライムだった件 コリウスの夢","ヴィンランド・サガ","魔法科高校の優等生","カードファイト!! ヴァンガード リンクジョーカー編","まじっく快斗1412","終末トレインどこへいく？",
                "鬼滅の刃 刀鍛冶の里編","とある飛空士への恋歌","疑似ハーレム","機動戦士ガンダムSEED スペシャルエディション HDリマスター","魔法使いの嫁","姫様“拷問”の時間です","モブ皇帝","うまよん","ヤリチン☆ビッチ部","魔法使いになれなかった女の子の話",
                "鬼滅の刃 遊郭編","カードファイト!! ヴァンガード will+Dress","アンデッドアンラック","ばいばい、アース","最果てのパラディン 鉄錆の山の王","オッドタクシー","ひぐらしのなく頃に卒","HIGHSPEED Étoile","ゆるゆり","モブサイコ100",
                "機動戦士ガンダムSEED DESTINY スペシャルエディション HDリマスター","外科医エリーゼ","柚木さんちの四兄弟。","キングダム","京都寺町三条のホームズ","リトルバスターズ！","齢5000年の草食ドラゴン、いわれなき邪竜認定",
                "ひぐらしのなく頃に業","刀剣乱舞-花丸-","IDOLY PRIDE","クレヨンしんちゃん","ゾンビランドサガ リベンジ","転スラ日記","ネガポジアングラー","蒼き鋼のアルペジオ","転生賢者の異世界ライフ","カードファイト!! ヴァンガードG Z","MONSTERS",
                "天地無用！","黒執事 -寄宿学校編-","結婚指輪物語","魔導具師ダリヤはうつむかない","SHAMAN KING FLOWERS","魔界王子 devils and realist","刀剣乱舞 廻 -虚伝 燃ゆる本能寺-","声優ラジオのウラオモテ","怪異と乙女と神隠し",
                "シンカリオン チェンジ ザ ワールド","ギヴン うらがわの存在","30歳まで童貞だと魔法使いになれるらしい","ハナヤマタ","世界でいちばん強くなりたい！","お嬢と番犬くん","妖怪学校の先生はじめました！","ラーメン赤猫","うる星やつら","戦国妖狐","BanG Dream! ガルパ☆ピコ",
                "休日のわるものさん","カードファイト!! ヴァンガードG","きのこいぬ","新機動戦記ガンダムW　Endless Waltz","デリコズ・ナーサリー","ポプテピピック","イジらないで、長瀞さん","京四郎と永遠の空","機動戦士ガンダム00　セカンドシーズン","ブラック・ジャック21","BURN THE WITCH #0.8","Re:Monster",
                "花野井くんと恋の病","新機動戦記ガンダムW","メタリックルージュ","大雪海のカイナ","ある朝、ダミーヘッドマイクになっていた俺クンの人生","約束のネバーランド","カードファイト!! ヴァンガード2019","灼眼のシャナII","時空の隙","機動戦士ガンダム","喧嘩独学","銀河英雄伝説 Die Neue These","しょうたいむ！２",
                "現代誤訳","ぶっちぎり?!","未来の黒幕系悪役令嬢モリアーティーの異世界完全犯罪白書","僕の妻は感情がない","Paradox Live THE ANIMATION","イクシオン サーガ DT","笑ゥせぇるすまん","カードファイト!! ヴァンガード アジアサーキット編","恋と呼ぶには気持ち悪い","機動戦士ガンダムΖΖ","カードファイト!! ヴァンガード",
                "おとなの防具屋さん","平穏世代の韋駄天達","殿と犬","光と水のダフネ","魔女と野獣","フェ～レンザイ -神さまの日常-","魔法少女マジカルデストロイヤーズ","ぼくのとなりに暗黒破壊神がいます。","黒執事 Book of Circus","黄昏アウトフォーカス","神之塔 -Tower of God-","機動戦士ガンダムSEED DESTINY HDリマスター",
                "菜なれ花なれ","月刊モー想科学","バーテンダー 神のグラス","Devil May Cry","REVENGER","紺碧の艦隊","烏は主を選ばない","ゆびさきと恋々","黒執事 Book of Murder","すとぷりくえすとっ","Over Drive","あずまんが大王","撲殺天使ドクロちゃん２","180秒で君の耳を幸せにできるか？","てーきゅう","龍族 -The Blazing Dawn-",
                "それだけがネック","銀の墓守り","それだけがネック","エグミレガシー","ひみつのアイプリ","スタンドマイヒーローズ PIECE OF TRUTH","デンキ街の本屋さん","ハイガクラ","刻刻","百千さん家のあやかし王子","とつくにの少女","バンドリ！ ガールズバンドパーティ！ 5th Anniversary Animation -CiRCLE THANKS PARTY！-","スナックバス江",
                "百妖譜","シャインポスト","烈火澆愁","I.CINNAMOROLL Animation","通霊姫","機動戦士Ζガンダム","D4DJ　First Mix","カードファイト!! ヴァンガード レギオンメイト編","カードファイト!! ヴァンガードG ストライドゲート編","絶対衝激～PLATONIC HEART～","ブラック・ジャック ＜Flashアニメ＞","SAMURAI DEEPER KYO","スペース☆ダンディ",
                "Sonny Boy","銀河英雄伝説　本伝","ゆるゆり♪♪","ひもてはうす","まぁるい彼女と残念な彼氏","かげきしょうじょ!!","無限の住人-IMMORTAL-","女子高生 GIRL'S-HIGH","刀使ノ巫女 刻みし一閃の燈火","となりの妖怪さん","旭日の艦隊","中高一貫！！キメツ学園物語","BanG Dream! Morfonication","UniteUp!","つぐもも","ましろのおと",
                "BLUE REFLECTION RAY／澪","銀河機攻隊マジェスティックプリンス","エルフさんは痩せられない。","ヤマノススメ","アストロノオト","人形アニメ「ハイキュー!!」","カードファイト!! ヴァンガード overDress","邪神ちゃんドロップキック","ねこに転生したおじさん","天地無用！GXP　パラダイス始動編","でんでんの電脳電車",
                "プラオレ！～PRIDE OF ORANGE～","じゃんたま","DD北斗の拳","北斗の拳　ラオウ外伝　天の覇王","ゆるゆり さん☆ハイ！","5億年ボタン【公式】～菅原そうたのショートショート～","ぷにるんず","リンカイ！","学校のコワイうわさ 新・花子さんがきた!! シーズン2","グレンダイザーU","バビル２世","ゆるゆり なちゅやちゅみ！+","ニニンがシノブ伝",
                "円盤皇女ワるきゅーレ","百姓貴族","エンジェル・ハート","大魔法峠","てっぺんっ!!!!!!!!!!!!!!!","邪神ちゃんドロップキック【世紀末編】","アイ★チュウ","銃娘：ガンガール","BURN UP SCRAMBLE","まめきちまめこニートの日常","め組の大吾 救国のオレンジ","ゴルゴ13","BLAZBLUE　ALTER MEMORY","川越ボーイズ・シング","ふしぎな島のフローネ",
                "EX-ARMエクスアーム","ぬいストーリー2","恋とプロデューサー～EVOL×LOVE～","ブッチギレ！","アトム ザ・ビギニング","メガトン級ムサシ シーズン1特別篇","宇宙の騎士テッカマンブレード","おにいさまへ…","ドッグシグナル","テクノロイド オーバーマインド","エルフを狩るモノたち","明治撃剣-1874-","メガトン級ムサシ シーズン2","白鯨伝説",
                "亜空大作戦スラングル","円盤皇女ワるきゅーレ 十二月の夜想曲","宇宙の騎士テッカマンブレードII","どろろ","J9シリーズ","リボンの騎士","マグマ大使","直江くんは痩せさせたい。","超攻速ガルビオン","エルフを狩るモノたちⅡ","ぴーち鬼ぱーち鬼","灼眼のシャナS","鴉 -KARAS-","八十亀ちゃんかんさつにっき 4さつめ","キュートランスフォーマー",
                "パズドラ","ナースウイッチ小麦ちゃんマジカルて","スピリットパクト　-黄泉の契り-","レヱル・ロマネスク","どるふろ -癒し篇2-","菅井君と家族石","銀河疾風サスライガー","実験品家族 -クリーチャーズ・ファミリー・デイズ-","一人之下 羅天大ショウ篇(ラテンタイショウ篇)","円盤皇女ワるきゅーレ 星霊節の花嫁","バミューダトライアングル 〜カラフル・パストラーレ〜",
                "さすらいの太陽","踏切時間","ぬいストーリー","やっぱり海が好き","TO BE HEROINE","火魅子伝","東京魔人學園剣風帖　龍龍(トウ)","銀河烈風バクシンガー","クソゲーって言うな！アニメーション","BASTIONS","円盤皇女ワるきゅーレ　時と夢と銀河の宴","おねがい！ももじりぞく","MIX","東京魔人學園剣風帖 龍龍　第弐幕","ぷっちみく♪ D4DJ Petit Mix",
                "むさしの！","宗谷物語","ハナビちゃんは遅れがち","わんぱく探偵団","RobiHachi","イロドリミドリ","落語天女おゆい","アニマル","コヨーテラグタイムショー","ライオンブックスシリーズ","天罰×エンジェルラビィ☆","魔境伝説アクロバンチ","東京ふたごアスレチック","フランチェスカ","みにとじ"
            ]
                
        },
        {
            name: "Netflix",
            price: "890円(広告付き),1590円(スタンダード),2290円(画質重視)/月",
            quality: "HD、4K,HDR",
            genres: ["ドラマ", "バラエティー", "アニメ","映画など"],
            tokutyou:"アニメの独占作品がとても多い",
            animeTitles: ["HUNTER×HUNTER","ダンダダン","転生したらスライムだった件","斉木楠雄のΨ難","BLEACH","葬送のフリーレン","進撃の巨人","炎炎の消防隊","ジョジョの奇妙な冒険","2.5次元の誘惑","らんま1/2","ハイキュー","アオのハコ","四月は君の噓","夜桜さんちの大作戦","僕のヒーローアカデミア"]
        },
        {
            name: "Disney+",
            price: "990円/月",
            quality: "HD",
            genres: ["アニメ(ディズニー,ピクサーなど)", ],
            tokutyou:"ディズニー作品も見たい方におすすめ",
            animeTitles: ["シャングリアフロンティア", "鬼滅の刃"]
        },
        {
            name: "dアニメストア",
            price: "550円/月",
            quality: "HD",
            genres: ["アニメ専門"],
            tokutyou:"アニメに特化していてメジャーな作品からマイナーなものまである。また、価格が安い",
            animeTitles: ["進撃の巨人", "鬼滅の刃"]
        },
        {
            name: "DMM TV",
            price: "550円/月",
            quality: "HD,SD",
            genres: ["アニメ", "ドラマ","バラエティー","映画など"],
            tokutyou:"価格が安く取り扱っているジャンル作品数が多く機能面もよい",
            animeTitles: ["進撃の巨人", "鬼滅の刃"]
        },
        {
            name: "U-NEXT",
            price: "2189円/月",
            quality: "HD",
            genres: ["アニメ", "洋画","ドラマ","エンタメなど"],
            tokutyou:"価格がネックだがそれに見合った機能面と作品数がある",
            animeTitles: ["進撃の巨人", "鬼滅の刃"]
        },
        {
            name: "ABEMAプレミアム",
            price: "1080円/月",
            quality: "HD",
            genres: ["アニメ", "スポーツ","バラエティー","ドラマなど"],
            tokutyou:"無料でアニメが公開ので有料に張らずとも問題なし",
            animeTitles: ["進撃の巨人", "鬼滅の刃"]
        },


    ];

    const searchForm = document.getElementById("anime-search-form");
    const searchInput = document.getElementById("anime-title");
    const searchResults = document.getElementById("search-results");
    const searchSuggestions = document.getElementById("search-suggestions");
    const cancelBtn = document.getElementById("cancel-btn");

    const recommendedServicesSection = document.getElementById("recommended-services");
    const priceRecommendationsSection = document.getElementById("price-recommendations");

    // アニメ検索フォームの送信時
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchTitle = searchInput.value.trim();

        // 検索結果をフィルタリング
        const matchedServices = services.filter(service =>
            service.animeTitles.some(title => 
                title.toLowerCase().includes(searchTitle.toLowerCase())
            )    
            /*service.animeTitles.includes(searchTitle)*/
        );

        // 検索結果を表示
        if (matchedServices.length > 0) {
            searchResults.innerHTML = `<h3>「${searchTitle}」が視聴できるサービス:</h3>`;
            const list = document.createElement("ul");
            matchedServices.forEach(service => {
                const listItem = document.createElement("li");
                listItem.textContent = `${service.name} (価格: ${service.price})`;
                list.appendChild(listItem);
            });
            searchResults.appendChild(list);
        } else {
            searchResults.innerHTML = `<p>「${searchTitle}」は見つかりませんでした。</p>`;
        }
        searchSuggestions.style.display = "none"; // Hide suggestions after search
    
    });

    // 初心者向けおすすめサブスクリプションサービス
    function showRecommendedServices() {
        recommendedServicesSection.innerHTML = "<h3>おすすめサブスクリプションサービス</h3>";

        services.forEach(service => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h4>${service.name}</h4>
                <p>価格: ${service.price}</p>
                <p>画質: ${service.quality}</p>
                <p>ジャンル: ${service.genres.join(", ")}</p>
                <p>特徴: ${service.tokutyou}</p>
            `;
            recommendedServicesSection.appendChild(div);
        });
    }

    // 価格別ランキング
    function showPriceRecommendations() {
        priceRecommendationsSection.innerHTML = "<h3>価格別おすすめサービス</h3>";

        // 価格で並べ替え
        const sortedServices = services.slice().sort((a, b) => {
            const priceA = parseInt(a.price.replace('円/月', '').replace(',', ''));
            const priceB = parseInt(b.price.replace('円/月', '').replace(',', ''));
            return priceA - priceB;
        });

        sortedServices.forEach(service => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h4>${service.name}</h4>
                <p>価格: ${service.price}</p>
                <p>画質: ${service.quality}</p>
            `;
            priceRecommendationsSection.appendChild(div);
        });
    }
   // 検索中のアニメタイトルに一致する候補を表示
   searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    searchSuggestions.innerHTML = ""; // Clear previous suggestions
    if (searchTerm === "") {
        searchSuggestions.style.display = "none";
        return;
    }

    const suggestions = services.flatMap(service =>
        service.animeTitles.filter(title => title.toLowerCase().includes(searchTerm))
    );

    if (suggestions.length > 0) {
        searchSuggestions.style.display = "block";
        suggestions.forEach(suggestion => {
            const div = document.createElement("div");
            div.textContent = suggestion;
            div.addEventListener("click", () => {
                searchInput.value = suggestion;
                searchForm.requestSubmit();  // Trigger form submit
            });
            searchSuggestions.appendChild(div);
        });
    } else {
        searchSuggestions.style.display = "none";
    }
});
      // キャンセルボタンの処理
  cancelBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchSuggestions.innerHTML = "";
        searchSuggestions.style.display = "none";
    });

    // 初期表示
    showRecommendedServices();
    showPriceRecommendations();
});