document.addEventListener("DOMContentLoaded", () => {
    // サービスデータ（アニメタイトルと対応するサブスクリプションサービス）
    //ローカルリポジトリ生成済み。
    const services = [
        {
            name: "Amazon Prime Video",
            price: "600円/月or5900円/年間,また学生なら学割で300円/月,2950円/年間",
            quality: "HD",
            genres: ["ドラマ","アニメ","バラエティー","映画など"],
            tokutyou:"アニメのほかにもAmazonでの配送料金が無料になるのが大きい",
            animeTitles: ["ダンダダン","【推しの子】","ブルーロック","Re:ゼロから始める異世界生活","ONE PIECE FAN LETTER",
                "サマータイムレンダ","チェーンソーマン","葬送のフリーレン","薬屋のひとりごと","来世は他人がいい","呪術廻戦",
                "モノノ怪","アオのハコ","BANANA FISH","僕のヒーローアカデミア","怪獣８号","HUNTER×HUNTER","逃げ上手の若君","ハイキュー！！",
                "宝石の国","オッドタクシー","スキップとローファー","SPY×FAMILY","鬼滅の刃", "進撃の巨人", "シャングリラ・フロンティア", "君は冥途様",
                "デッドデッドデーモンズデデデデデストラクション", "はたらく細胞", "マッシュル", "無職転生", "ドラゴンボールDAIMA", "リコリス・リコイル",
                "ゴールデンカムイ", "Dr.STONE", "負けヒロインが多すぎる!", "BLEACH", "メイドインアビス", "あの日見た花の名前は僕達はまだ知らない。", 
                "Angel Beats!", "青のミブロ", "鴨乃橋ロンの禁断推理","ぼっち・ざ・ろっく!", "約束のネバーランド", "リトルバスターズ！～Refrain～",
                "五等分の花嫁", "青の祓魔師", "ゆるキャン△","銀魂", "転生貴族、鑑定スキルで成り上がる", "2.5次元の誘惑", "モブサイコ100",
                "転生したらスライムだった件", "DEATH NOTE", "その着せ替え人形は恋をする", "ようこそ実力至上主義の教室へ", "この素晴らしい世界に祝福を！",
                "ミギとダリ", "山田くんとLv999の恋をする", "この素晴らしい世界に爆焔を！","嘆きの亡霊は引退したい","ひとりぼっちの異世界攻略",
                "甘神さんちの縁結び","リトルバスターズ","歴史に残る悪女になるぞ","ダンジョンに出会いを求めるのは間違っているだろうか","魔王2099",
                "やり直し令嬢は竜帝陛下を攻略中","ATRI","ワンルーム","Fate/staynight","ソードアートオンライン","ブルーアーカイブ","俺だけレベルアップな件",
                "七つの大罪","陰の実力者になりたくて","キミと僕の最後の戦場、あるいは世界が始まる聖戦","僕の心のヤバイやつ","齢5000年の草食ドラゴン、いわれなき邪竜認定",
                "MFゴースト","アイドルマスターシャイニーカラーズ","合コンに行ったら女がいなかった話","結婚するって本当ですか","シークレットレベル",
                "出来損ないと呼ばれた元英雄は、実家から追放されたので好き勝手に生きることにした","夜桜さんちの大作戦","デート・ア。ライブ",
                "夜のクラゲは泳げない","アークナイツ","るろうに剣心","ライアー・ライアー","豚のレバーは加熱しろ","愚かな天使は悪魔と踊る",
                "新テニスの王子様","ありふれた職業で世界最強","るろうに剣心","暴食のベルセルク","FAIRY TAIL","FAIRY TAIL 100年クエスト",
                "お隣の天使様にいつの間にか駄目人間にされていた件","女神のカフェテラス","経験済みなキミと、経験ゼロなオレが、お付き合いする話",
                "六畳間の侵略者!?","弱キャラ友崎くん","君のことが大大大大大好きな100人の彼女","多数決","GTO","推しの子","神は遊戯に飢えている",
                "灼眼のシャナ","亜人","さよなら流星、こんにちは人生","忘却バッテリー","VTuberなんだが配信切り忘れたら伝説になっていた","魔都精兵のスレイブ",
                "恋は双子で割り切れない","魔法科高校の劣等生","ハラトラ","戦記絶唱シンフォギア","THE NEW GATE","小市民","物語シリーズ","ハイキュー",
                "時々ボソッとロシア語でデレる隣のアーリャさん","株式会社マジルミエ","ひきこまり吸血姫の悶々","魔王学院の不適合者",
                "凍牌～裏レート麻雀闘牌録","狼と香辛料","月が導く異世界道中","義妹生活","Lv2からチートだった元勇者候補のまったり異世界ライフ","Unnamed Memory",
                "ガールズバンドクライ","転生したらスライムだった件","杖と剣のウィストリア","盾の勇者の成り上がり","それでも歩は寄せてくる","メカウデ",
                "NieR:Automata","トリリオンゲーム","道産子ギャルはなまらめんこい","IDOLY PRYDE-アイドリープライド-","異世界のんびり農家","悪役令嬢Lv99",
                "ループ7回目の悪役令嬢は、元敵国で自由気ままな花嫁生活を満喫する","ソードアートオンライン アリシゼーション","ガンゲイルオンライン",
                "とんでもスキルで異世界放浪メシ","異世界失格","ご注文はうさぎですか？","監禁区域レベルX","シークレット・レベル","かぎなど","黙示録の四騎士",
                "キミと僕の最後の戦場、あるいは世界が始まる聖戦","ワンピース","TARI TARI","なぜ僕の世界を誰も覚えていないのか？","多数欠","響け！ユーフォニアム",
                "ハズレ枠の【状態異常スキル】で最強になった俺がすべてを蹂躙するまで","好きな子がめがねを忘れた","異世界スーサイド・スクワッド",
                "龍族","アクロトリップ","マーダーミステリー・オブ・ザ・デッド","裏世界ピクニック","アイドルマスター ミリオンライブ！","ドラゴンボール超","変人のサラダボウル",
                "SHY","BanG Dream! It's MyGO!!!!!","BanG Dream!","妻、小学生になる。","マッシュル-MASHLE-","Dies irae-ディエス・イレ-","時光代理人",
                "地獄楽","異修羅","HIGH CARD","魔法少女リリカルなのは 20周年記念セレクション","鴨乃橋ロンの禁断推理","からくりサーカス","ウマ娘","星降る王国のニナ","エリアの騎士",
                "Fate/Apocrypha","オーイ！とんぼ","デッドマウント・デスプレイ","黒子のバスケ","俺は全てを【パリイ】する","WIND BREAKER","下の階には澪がいる",
                "名湯『異世界の湯』開拓記",
                "鋼の錬金術師","風都探偵","GREAT PRETENDER","勇者パーティーを追放されたビーストテイマー、最強種の猫耳少女と出会う","伝説の勇者の伝説","名探偵コナン","刀使ノ巫女",
                "ソマリと森の神様","レベル1だけどユニークスキルで最強です","アズールレーン","機動戦士ガンダムSEED","先輩がうざい後輩の話","魔法科高校の劣等生 追憶編",
                "メルクストーリア - 無気力少年と瓶の中の少女",
                "カノジョも彼女","最弱テイマーはゴミ拾いの旅を始めました。","メイドインアビス 烈日の黄金郷","しかのこのこのここしたんたん","即死チートが最強すぎて","ダンジョンの中のひと",
                "ダンジョンの中のひと","天穂のサクナヒメ","最果てのパラディン","治癒魔法の間違った使い方","望まぬ不死の冒険者","先輩はおとこのこ","ダンジョン飯","黒子のバスケ　第2期",
                "機動戦士ガンダム00",
                "うたわれるもの 偽りの仮面","ぽんのみち","百錬の覇王と聖約の戦乙女","真夜中ぱんチ","怪獣８号","カノジョも彼女 Season 2","ぷにるはかわいいスライム","戦姫絶唱シンフォギアG",
                "青の祓魔師 京都不浄王篇",
                "ゴールデンカムイ","佐々木とピーちゃん","時光代理人 -LINK CLICK- Ⅱ","ダークギャザリング","カミエラビ GOD.app","最強タンクの迷宮攻略","うらみちお兄さん","神之塔",
                "王様ランキング 勇気の宝箱",
                "ギヴン","まじっく快斗","ヴァンパイア男子寮","異世界ゆるり紀行","とあるおっさんのＶＲＭＭＯ活動記","ゾン100","ブラック・ジャック","戦姫絶唱シンフォギアGX",
                "じいさんばあさん若返る",
                "転生したらスライムだった件 コリウスの夢","ヴィンランド・サガ","魔法科高校の優等生","カードファイト!! ヴァンガード リンクジョーカー編","まじっく快斗1412",
                "終末トレインどこへいく？",
                "鬼滅の刃 刀鍛冶の里編","とある飛空士への恋歌","疑似ハーレム","機動戦士ガンダムSEED スペシャルエディション HDリマスター","魔法使いの嫁","姫様“拷問”の時間です","モブ皇帝",
                "うまよん","魔法使いになれなかった女の子の話",
                "鬼滅の刃 遊郭編","カードファイト!! ヴァンガード will+Dress","アンデッドアンラック","ばいばい、アース","最果てのパラディン 鉄錆の山の王","オッドタクシー","ひぐらしのなく頃に卒",
                "HIGHSPEED Étoile","ゆるゆり","モブサイコ100",
                "機動戦士ガンダムSEED DESTINY スペシャルエディション HDリマスター","外科医エリーゼ","柚木さんちの四兄弟。","キングダム","京都寺町三条のホームズ","リトルバスターズ！",
                "齢5000年の草食ドラゴン、いわれなき邪竜認定",
                "ひぐらしのなく頃に業","刀剣乱舞-花丸-","IDOLY PRIDE","クレヨンしんちゃん","ゾンビランドサガ リベンジ","転スラ日記","ネガポジアングラー","蒼き鋼のアルペジオ",
                "転生賢者の異世界ライフ","カードファイト!! ヴァンガードG Z","MONSTERS",
                "天地無用！","黒執事 -寄宿学校編-","結婚指輪物語","魔導具師ダリヤはうつむかない","SHAMAN KING FLOWERS","魔界王子 devils and realist",
                "刀剣乱舞 廻 -虚伝 燃ゆる本能寺-","声優ラジオのウラオモテ","怪異と乙女と神隠し",
                "シンカリオン チェンジ ザ ワールド","ギヴン うらがわの存在","30歳まで童貞だと魔法使いになれるらしい","ハナヤマタ","世界でいちばん強くなりたい！",
                "お嬢と番犬くん","妖怪学校の先生はじめました！","ラーメン赤猫","うる星やつら","戦国妖狐","BanG Dream! ガルパ☆ピコ",
                "休日のわるものさん","カードファイト!! ヴァンガードG","きのこいぬ","新機動戦記ガンダムW　Endless Waltz","デリコズ・ナーサリー","ポプテピピック",
                "イジらないで、長瀞さん","京四郎と永遠の空","機動戦士ガンダム00　セカンドシーズン","ブラック・ジャック21","BURN THE WITCH #0.8","Re:Monster",
                "花野井くんと恋の病","新機動戦記ガンダムW","メタリックルージュ","大雪海のカイナ","ある朝、ダミーヘッドマイクになっていた俺クンの人生","約束のネバーランド",
                "カードファイト!! ヴァンガード2019","灼眼のシャナII","時空の隙","機動戦士ガンダム","喧嘩独学","銀河英雄伝説 Die Neue These",
                "現代誤訳","ぶっちぎり?!","未来の黒幕系悪役令嬢モリアーティーの異世界完全犯罪白書","僕の妻は感情がない","Paradox Live THE ANIMATION","イクシオン サーガ DT","笑ゥせぇるすまん",
                "カードファイト!! ヴァンガード アジアサーキット編","恋と呼ぶには気持ち悪い","機動戦士ガンダムΖΖ","カードファイト!! ヴァンガード",
                "おとなの防具屋さん","平穏世代の韋駄天達","殿と犬","光と水のダフネ","魔女と野獣","フェ～レンザイ -神さまの日常-","魔法少女マジカルデストロイヤーズ","ぼくのとなりに暗黒破壊神がいます。",
                "黒執事 Book of Circus","黄昏アウトフォーカス","神之塔 -Tower of God-","機動戦士ガンダムSEED DESTINY HDリマスター",
                "菜なれ花なれ","月刊モー想科学","バーテンダー 神のグラス","Devil May Cry","REVENGER","紺碧の艦隊","烏は主を選ばない","ゆびさきと恋々","黒執事 Book of Murder","すとぷりくえすとっ",
                "Over Drive","あずまんが大王","撲殺天使ドクロちゃん２","180秒で君の耳を幸せにできるか？","てーきゅう","龍族 -The Blazing Dawn-",
                "それだけがネック","銀の墓守り","それだけがネック","エグミレガシー","ひみつのアイプリ","スタンドマイヒーローズ PIECE OF TRUTH","デンキ街の本屋さん","ハイガクラ","刻刻",
                "百千さん家のあやかし王子","とつくにの少女","バンドリ！ ガールズバンドパーティ！ 5th Anniversary Animation -CiRCLE THANKS PARTY！-","スナックバス江",
                "百妖譜","シャインポスト","烈火澆愁","I.CINNAMOROLL Animation","通霊姫","機動戦士Ζガンダム","D4DJ　First Mix","カードファイト!! ヴァンガード レギオンメイト編",
                "カードファイト!! ヴァンガードG ストライドゲート編","絶対衝激～PLATONIC HEART～","ブラック・ジャック ＜Flashアニメ＞","SAMURAI DEEPER KYO","スペース☆ダンディ",
                "Sonny Boy","銀河英雄伝説　本伝","ゆるゆり♪♪","ひもてはうす","まぁるい彼女と残念な彼氏","かげきしょうじょ!!","無限の住人-IMMORTAL-","女子高生 GIRL'S-HIGH","刀使ノ巫女 刻みし一閃の燈火",
                "となりの妖怪さん","旭日の艦隊","中高一貫！！キメツ学園物語","BanG Dream! Morfonication","UniteUp!","つぐもも","ましろのおと",
                "BLUE REFLECTION RAY／澪","銀河機攻隊マジェスティックプリンス","エルフさんは痩せられない。","ヤマノススメ","アストロノオト","人形アニメ「ハイキュー!!」","カードファイト!! ヴァンガード overDress",
                "邪神ちゃんドロップキック","ねこに転生したおじさん","天地無用！GXP　パラダイス始動編","でんでんの電脳電車",
                "プラオレ！～PRIDE OF ORANGE～","じゃんたま","DD北斗の拳","北斗の拳　ラオウ外伝　天の覇王","ゆるゆり さん☆ハイ！","5億年ボタン【公式】～菅原そうたのショートショート～","ぷにるんず","リンカイ！",
                "学校のコワイうわさ 新・花子さんがきた!! シーズン2","グレンダイザーU","バビル２世","ゆるゆり なちゅやちゅみ！+","ニニンがシノブ伝",
                "円盤皇女ワるきゅーレ","百姓貴族","エンジェル・ハート","大魔法峠","てっぺんっ!!!!!!!!!!!!!!!","邪神ちゃんドロップキック【世紀末編】","アイ★チュウ","銃娘：ガンガール",
                "BURN UP SCRAMBLE","まめきちまめこニートの日常","め組の大吾 救国のオレンジ","ゴルゴ13","BLAZBLUE　ALTER MEMORY","川越ボーイズ・シング","ふしぎな島のフローネ",
                "EX-ARMエクスアーム","ぬいストーリー2","恋とプロデューサー～EVOL×LOVE～","ブッチギレ！","アトム ザ・ビギニング","メガトン級ムサシ シーズン1特別篇","宇宙の騎士テッカマンブレード",
                "おにいさまへ…","ドッグシグナル","テクノロイド オーバーマインド","エルフを狩るモノたち","明治撃剣-1874-","メガトン級ムサシ シーズン2","白鯨伝説",
                "亜空大作戦スラングル","円盤皇女ワるきゅーレ 十二月の夜想曲","宇宙の騎士テッカマンブレードII","どろろ","J9シリーズ","リボンの騎士","マグマ大使","直江くんは痩せさせたい。","超攻速ガルビオン",
                "エルフを狩るモノたちⅡ","ぴーち鬼ぱーち鬼","灼眼のシャナS","鴉 -KARAS-","八十亀ちゃんかんさつにっき 4さつめ","キュートランスフォーマー",
                "パズドラ","ナースウイッチ小麦ちゃんマジカルて","スピリットパクト　-黄泉の契り-","レヱル・ロマネスク","どるふろ -癒し篇2-","菅井君と家族石","銀河疾風サスライガー",
                "実験品家族 -クリーチャーズ・ファミリー・デイズ-","一人之下 羅天大ショウ篇(ラテンタイショウ篇)","円盤皇女ワるきゅーレ 星霊節の花嫁","バミューダトライアングル 〜カラフル・パストラーレ〜",
                "さすらいの太陽","踏切時間","ぬいストーリー","やっぱり海が好き","TO BE HEROINE","火魅子伝","東京魔人學園剣風帖　龍龍(トウ)","銀河烈風バクシンガー","クソゲーって言うな！アニメーション",
                "BASTIONS","円盤皇女ワるきゅーレ　時と夢と銀河の宴","おねがい！ももじりぞく","MIX","東京魔人學園剣風帖 龍龍　第弐幕","ぷっちみく♪ D4DJ Petit Mix",
                "むさしの！","宗谷物語","ハナビちゃんは遅れがち","わんぱく探偵団","RobiHachi","イロドリミドリ","落語天女おゆい","アニマル","コヨーテラグタイムショー","ライオンブックスシリーズ",
                "天罰×エンジェルラビィ☆","魔境伝説アクロバンチ","東京ふたごアスレチック","フランチェスカ","みにとじ",
            ]
                
        },
        {
            name: "Netflix",
            price: "890円(広告付き),1590円(スタンダード),2290円(画質重視)/月",
            quality: "HD、4K,HDR",
            genres: ["ドラマ", "バラエティー", "アニメ","映画など"],
            tokutyou:"アニメの独占作品がとても多い",
            animeTitles: ["HUNTER×HUNTER","ダンダダン","転生したらスライムだった件","斉木楠雄のΨ難","BLEACH","葬送のフリーレン","進撃の巨人",
                   　     "炎炎の消防隊","ジョジョの奇妙な冒険","2.5次元の誘惑","らんま1/2","ハイキュー","アオのハコ","四月は君の噓",
                          "夜桜さんちの大作戦","僕のヒーローアカデミア","シャングリラ・フロンティア","ブルーロック","ありふれた職業で世界最強",
                          "転生貴族 鑑定スキルで成り上がる","精霊幻想記","チ。-地球の運動について-","合コンに行ったら女がいなかった話",
                          "来世は他人が良い","夏目友人帳","青の祓魔師","鴨乃橋ロンの禁断推理","MFゴースト","るろうに剣心","神之塔",
                          "ドラゴンボールDAIMA","トリリオンゲーム","妻、小学生になる","Dr.STONE","ブラッククローバー","七つの大罪",
                          "ワールドトリガー","俺だけレベルアップな件","銀魂","暗殺教室","呪術廻戦","マッシュル","ダンジョン飯",
                          "黙示録の四騎士","怪獣8号","NARUTO","盾の勇者の成り上がり","鬼滅の刃","東京喰種","鋼の錬金術師","Fairy Tail",
                          "異世界失格","杖と剣のウィストリア","鬼灯の冷徹","モブサイコ100","BEASTARS","メイドインアビス",
                          "FAIRY TAIL 100年クエスト","寄生獣セイの格率","寄生獣","異世界おじさん",
                          "デットマウントデスプレイ","黒執事","死神坊ちゃんと黒メイド","デキる猫は今日も憂鬱","T・Pぼん","終末のワルキューレ",
                          "斉木楠雄のΨ難Ψ始動編","転スラ日記","美少女戦士セーラームーンCosmos","東京リベンジャーズ(一期)","約束のネバーランド",
                          "王様ランキング","ダンジョンの中のひと","チェーンソーマン","クジラの子らは砂の上に歌う","骸骨騎士様","虫籠のカガステル",
                          "天空侵犯","ゲゲゲの鬼太郎","ドラゴンボールZ","攻殻機動隊STAND ALONE COMPLEX","SHAMAN KING","シャーマンキング",
                          "地獄楽","外科医のエリーゼ","どろろ","うる星やつら","金色のガッシュベル","よふかしのうた","姫様“拷問”の時間です",
                          "亜人","PLUTO","血界戦線","魔法使いの嫁","テラフォーマーズ","とんでもスキルで異世界放浪メシ","食戟のソーマ",
                          "焼きたて!!ジャパン","美味しんぼ","デリシャスパーティー♡プリキュア","空挺ドラゴンズ","映像版 まねっこシェフ ふわふわ!スクランブルエッグ",
                          "シンデレラ・シェフ～萌妻食神～","アオのハコ","魔王の俺が奴隷エルフを嫁にしたんだが、どうめでればいい？","ロシア語でデレる隣のアーリャさん",
                          "かぐや様は告らせたい","ロマンティックキラー","僕の心のヤバイやつ","お隣の天使様にいつの間にか駄目人間にされていた件","四月は君の噓","乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった...",
                          "君に届け","負けヒロインが多すぎる!","その着せ替え人形は恋をする","桜蘭高校ホスト部","ヴァイオレットエヴァーガーデン",
                          "夢見る男子は現実主義者","五等分の花嫁","私の幸せな結婚","NANA","山田君とLv999の恋をする","からかい上手の高木さん","青春ブタ野郎はバニーガール先輩の夢を見ない",
                          "ヲタクに恋は難しい","聖女の魔力は万能です","バブル","ちはやふる","それでも歩みは寄せてくる","ゆびさきと恋々","俺物語！！","継母の連れ子が元カノだった",
                          "じいさんばあさん若返る","先輩はおとこのこ","花野井くんと恋の病","お嬢と番犬くん","30歳まで童貞だと魔法使いになれるらしい","ハイスコアガール",
                          "義妹生活","彼女が公爵邸にいった理由","のだめカンタービレ","ともちゃんは女の子!","贄姫と獣の王","氷属性男子とクールな同僚女子",
                          "佐々木と宮野","好きな子がメガネを忘れた","ATRI","先輩がうざい後輩の話","アリスとテレスのまぼろし工場","恋は雨上がりのように",
                          "かつて魔法少女と悪は敵対していた","ハチミツとクローバー","百千さん家のあやかし王子","疑似ハーレム","大奥","僕の妻は感情がない",
                          "海辺のエトランセ","シンデレラ・シェフ","陽なたのアオシグレ","ソードアートオンライン","ジョジョの奇妙な冒険","蜘蛛ですが何か？",
                          "月が導く異世界道中","文豪ストレイドッグス","幼女戦記","ドラゴンボール","転生したら剣でした","キングダム","慎重勇者","ドラゴンボール超",
                          "幽遊白書","るろうに剣心","範馬刃牙","骸骨騎士様","転生賢者の異世界ライフ","ゾン100","ゾンビになるまでにしたい100のこと",
                          "北斗の拳","ケンガンアシュラ","戦国妖狐","GAMERA","Fate/Apocrypha","ULTRAMAN","鬼武者","Fate/EXTRA Last Encore",
                          "群青のマグメル","ボボボーボ・ボーボボ","Devilman Crybaby","甲鉄城のカバネリ","ダンジョンに出会いを求めるのは間違っているだろうか",
                          "ようこそ実力至上主義の教室へ","転生したら第七王子だったので気ままに魔術を極めます","世界最高の暗殺者異世界貴族に転生する",
                          "転生貴族の異世界冒険録","魔王学院の不適合者","賢者の孫","はたらく細胞","黒子のバスケ","外れ枠の[状態異常スキル]で最強になった俺が全てを蹂躙するまで",
                          "ブラッククローバー","サマータイムレンダ","MASHLE","暗殺教室","Lv2からチートだった元勇者候補のまったり異世界ライフ",
                          "Re:ゼロから始める異世界生活","ホリミヤ","俺は、全てをパリィする","陰の実力者になりたくて","薬屋のひとりごと","SPY×FAMILY","転生貴族、鑑定スキルで成り上がる",
                          "オーバーロード","史上最強の大魔王、村人Aに転生する","この素晴らしい世界に祝福を！","異世界でチート能力を手にした俺は、現実世界をも無双する","推しの子","異世界のんびり農家",
                          "ループ7回目の悪役令嬢は、元敵国で自由気ままな花嫁生活を満喫する","Steins;Gate","シュタインズ・ゲート","東京喰種","トーキョーグール",
                          "新世紀エヴァンゲリオン","コードギアス反逆のルルーシュ","佐々木とピーちゃん","サイバーパンク","賭ケグルイ","弱虫ペダル",
                          "鋼の錬金術師","ノーゲーム・ノーライフ","即死チートが最強すぎて","レベル1だけどユニークスキルで最強です","レベル１だけどユニークスキルで最強です",
                          "逆境無頼カイジ","キングダム","メイドインアビス","Re:Monster","ゴールデンカムイ","DEATH NOTE","デスノート","自動販売機に生まれ変わった俺は迷宮を彷徨う",
                          "Psycho-Pass","サイコパス","シュタインズ・ゲート ゼロ","王様ランキング","魔法少女まどかマギカ","天元突破グレンラガン",
                          "バキ","Slam Dunk","BANANA FISH","亜人","MONSTER","喧嘩独学","出来損ないと呼ばれた元英雄は、実家から追放されたので好き勝手に生きることにした",
                          "Great Pretender","ミギとダリ","異世界スーサイド・スクワッド","極主夫道","TIGER & BUNNY","グッド・ナイト・ワールド",
                          "異修羅","多数決","風都探偵","無職転生","リコリス・リコイル","ぼっち・ざ・ろっく","はじめの一歩","ポケットモンスター","宇宙兄弟","ダイの大冒険",
                          "ドラゴンクエスト ダイの大冒険","ライジングインパクト","闘牌伝説アカギ 闇に舞い降りた天才","アオアシ","響けユーフォニアム","古見さんは、コミュ症です",
                          "WIND BREAKER","ゆるキャン△","魔法科高校の劣等生","クロムクロ","SKET DANCE","あひるの空","ブルーピリオド","忘却バッテリー",
                          "青春ブタ野郎はバニーガール先輩の夢を見ない","ツルネ","それでも歩は寄せてくる","俺物語!!","帰還者魔法は特別です","映像研には手を出すな!",
                          "スキップとローファー","しかのこのこのここしたんたん","トモちゃんは女の子","田中くんはいつもけだるげ","小市民シリーズ","ピンポン THE ANIMATION",
                          "外見至上主義","不死身な僕の日常","カミエラビ GOD.app","痛いのは嫌なので防御力に極振りしたいと思います。","NARUTO","ONE PIECE FAN LETTER",
                          "BORUTO","狼と香辛料","最強タンクの迷宮攻略","雨を告げる漂流団地","7SEEDS","古代王者 恐竜キングDキッズ・アドベンチャー","GAMERA -ReBirth-",
                          "グリム組曲","T・Pボン","地球外少年少女","機動戦士ガンダム SEED DESTINY","NieR:Automata","機動戦士ガンダム 水星の魔女","いぬやしき","EDENS ZERO",
                          "ゴジラ S.P","カウボーイビバップ","機動戦士ガンダム 鉄血のオルフェンズ","攻殻機動隊 STAND ALONE COMPLEX","機動戦士ガンダム SEED FREEDOM",
                          "デッドデッドデーモンズデデデデデストラクション","GANTZ:O","攻殻機動隊 SAC_2045","機動戦士ガンダムNT","A.I.C.O. Incarnation",        
                          "機動戦士ガンダム","機動戦士ガンダム ユニコーン RE:0096","SPRIGGAN(スプリガン)","僕とロボコ","アキラ(AKIRA)","勇気爆発バーンブレイバーン",
                          "出来損ないと言われた元英雄は、実家から追放されたので好き勝手に生きることにした","転生したら第七王子だったので、気ままに魔術を極めます",
                          "響け!ユーフォニアム","響け！ユーフォニアム","ダンジョン飯","魔王の俺が奴隷エルフを嫁にしたんだが、どう愛でればいい？","Unnamed Memory",
                          "夜のクラゲは泳げない","骸骨騎士様、只今異世界へお出掛け中","負けヒロインが多すぎる!","山田くんとLv999の恋をする","わたしの幸せな結婚",
                          "好きな子がめがねを忘れた","かつて魔法少女と悪は敵対していた。","ハズレ枠の [状態異常スキル] で最強になった俺がすべてを蹂躙するまで",
                          "ワンピース","遊戯王 デュエルモンスターズ","ポケットモンスター","ドラえもん","ちびまる子ちゃん","まじっく快斗","おしりたんてい",
                          "ノンタン","こねこのチー","不思議の駄菓子屋銭天童","PUI PUI モルカー","デリシャスパーティープリキュア","ひろがるスカイ！プリキュア",
                          "チキップダンサーズ","しまじろうのわお！","映像版シリーズ","恐竜少女ガウ子","蜘蛛ですが、なにか？","魔道具師ダリアはうつむかない",
                          "ラーメン赤猫","パリピ孔明","リトルウィッチアカデミア","休日のわるものさん","テルマエ・ロマエ ノヴァエ","キャロル&チューズデイ",
                          "リコリス・リコイル","治癒魔法の間違った使い方",
            ]
        },
        {
            name: "Disney+",
            price: "990円/月",
            quality: "HD",
            genres: ["アニメ(ディズニー,ピクサーなど)", ],
            tokutyou:"ディズニー作品も見たい方におすすめ",
            animeTitles: ["シャングリラ・フロンティア", "鬼滅の刃","ファブル","天国大魔境","異修羅","戦隊大失格",
                "SANDLAND THE SEREIS","ドラゴンボールダイマ","星降る王国の二ナ","ブルーロック","SAO","黙示録",
                "マジルミエ","トリリオンゲーム","リゼロ","BLEACH","青のハコ","ダンダダン","推しの子","村井の恋","若君",
                "忍者カムイ","杖と剣のウィストリア","無職","コードギアス","怪獣８号","忘却バッテリー","ヒロアカ","転すら",
                "ユーフォニアム","爆裂","ダンジョン飯","うる星やつら","東リベ","進撃","SYNDUALITY","魔王様","四畳半タイムマシン",
                "ワンピース","呪術","私の幸せな結婚","ハイキュー","葬送","エデンの宙","文豪","ワンパンマン","ドクターストーン",
                "マイホームヒーロー","マクロス","薬屋","ゾン１００","ダークギャザリング","でっとマウントディスプレイ","チェンソーマン",
                "陰実","サマータイムレンダ","ブラックロックシューター","ビジョンズ","ゲボイデ＝ボイデ","盾勇","GGO","よう実","このすば",
                "オバロ","スティッチ","コナン",]
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
            animeTitles: ["シャングリラ・フロンティア 2nd Season","シャングリラ・フロンティア","ブルーロック","ダンダダン","HUNTER×HUNTER","ありふれた職業で世界最強 season 3",
                "薬屋のひとりごと","チ。-地球の運動について-","クレモンしんちゃん","BLEACH 千年血戦篇","パウのパトロール","嘆きの亡霊は引退したい",
                "アンパンマン","来世は他人がいい","ダンジョンに出会いを求めるのは間違っているだろうか 豊穣の女神篇","やり直し令嬢は竜帝陛下を攻略中",
                "青の祓魔師 終夜篇","魔王2099","葬送のフリーレン","ドラゴンボールDAIMA","ちいかわ","ドラえもん","夏目友人帳 漆","NARUTO-ナルト- 疾風伝",
                "らんま1/2","BLEACH","ワンパンマン","名探偵コナン","歴史に残る悪女になるぞ","ワンパンマン(第2期)","あたしンち","転生したらスライムだった件 第3期",
                "MFゴースト 2nd Season","忍たま乱太郎","はたらく細胞","俺だけレベルアップな件","オーイ！とんぼ","こちら葛飾区亀有公園前派出所",
                "さようなら竜生、こんにちは人生","転生貴族、鑑定スキルで成り上がる 第2期","〈物語〉シリーズ オフ&モンスターシーズン","ギャグマンガ日和",
                "鴨乃橋ロンの禁断推理　2nd Season","精霊幻想記2","黙示録の四騎士 第2期","ひとりぼっちの異世界攻略","進撃の巨人 The Final Season",
                "0歳児スタートダッシュ物語 シーズン2","ポケットモンスターXY","トリコ","呪術廻戦 懐玉・玉折／渋谷事変（第2期）","ドラゴンボールZ",
                "君は冥土様。","ポケットモンスター サン＆ムーン","賭ケグルイ","青のミブロ","SPY×FAMILY","甘神さんちの縁結び","ワンピース ワノ国編",
                "ポケットモンスター","とんでもスキルで異世界放浪メシ","妖怪学校の先生はじめました！","ハイキュー!! TO THE TOP","NARUTO‐ナルト‐",
                "ポケットモンスター","聖者無双～サラリーマン、異世界で生き残るために歩む道～","星降る王国のニナ","Re:ゼロから始める異世界生活　3rd season",
                "推しの子 第2期","転生したらスライムだった件 第2期","呪術廻戦","進撃の巨人","ふしぎ駄菓子屋 銭天堂","ガンゲイル・オンラインII","ギャグマンガ日和２",
                "合コンに行ったら女がいなかった話","進撃の巨人 Season 3","ハイキュー!! セカンドシーズン","ドラゴンボール超","SPY×FAMILY Season 2",
                "青の祓魔師 雪ノ果篇","Re:ゼロから始める異世界生活　2nd season","賭ケグルイ××","進撃の巨人","陰の実力者になりたくて！",
                "ジョジョの奇妙な冒険 ダイヤモンドは砕けない","僕のヒーローアカデミア（第7期）","転生したらスライムだった件","わんだふるぷりきゅあ！",
                "ドラゴンボール","ハイキュー!!","Dr.STONE NEW WORLD","ポケットモンスター（2023）","婚約破棄された令嬢を拾った俺が、イケナイことを教え込む",
                "地縛少年花子くん","銀魂(１年目)","ハズレ枠の【状態異常スキル】で最強になった俺がすべてを蹂躙するまで","転生したら第七王子だったので、気ままに魔術を極めます",
                "鬼滅の刃 柱稽古編","月が導く異世界道中　第二幕","マッシュル-MASHLE- 神覚者候補選抜試験編","わたしの幸せな結婚","ジョジョの奇妙な冒険 黄金の風",
                "るろうに剣心 －明治剣客浪漫譚－ 京都動乱","金田一少年の事件簿","ブラッククローバー","ワンピース エッグヘッド編","Re:ゼロから始める異世界生活",
                "美味しんぼ【デジタルリマスター版】","鋼の錬金術師 FULLMETAL ALCHEMIST","Dr.STONE","銀魂(２年目)","DEATH NOTE -デスノート-","FAIRY TAIL 100年クエスト",
                "ちびまる子ちゃん","マッシュル-MASHLE-","らんま1/2　デジタルリマスター版　第１シーズン","ありふれた職業で世界最強","夜桜さんちの大作戦","とある科学の超電磁砲",
                "2.5次元の誘惑","からくりサーカス","デッドデッドデーモンズデデデデデストラクション","はたらく細胞!!","頭文字[イニシャル]D","ダンジョン飯",
                "ありふれた職業で世界最強 2nd season","異世界でチート能力を手にした俺は、現実世界をも無双する～レベルアップは人生を変えた～","陰の実力者になりたくて！ 2nd season",
                "ギャグマンガ日和３","銀魂’","ワールドトリガー","結婚するって、本当ですか","BORUTO-ボルト- NARUTO NEXT GENERATIONS","銀魂(３年目)","魔法使いの嫁 SEASON2","実は俺、最強でした？",
                "時々ボソッとロシア語でデレる隣のアーリャさん","凍牌〜裏レート麻雀闘牌録〜","銀魂(４年目)","現実主義勇者の王国再建記",
                "頭文字[イニシャル]D Fourth Stage","とある科学の超電磁砲T","家庭教師ヒットマンREBORN！","SPECIAL EDITED VERSION 『ONE PIECE』魚人島編",
                "君のことが大大大大大好きな100人の彼女","鬼滅の刃 竈門炭治郎 立志編","異世界のんびり農家","FAIRY TAIL （1話～）","SKET DANCE","怪獣８号","僕のヒーローアカデミア（第5期）","ホリミヤ",
                "ダンジョンに出会いを求めるのは間違っているだろうかIV","忘却バッテリー","僕のヒーローアカデミア（第6期）","げんきげんきノンタン","ドラゴンボールGT",
                "ポーション頼みで生き延びます！","進撃の巨人 Season 2",""]
        },
        {
            name: "ABEMAプレミアム",
            price: "1080円/月",
            quality: "HD",
            genres: ["アニメ", "スポーツ","バラエティー","ドラマなど"],
            tokutyou:"無料でアニメの公開があり有料に入らずとも問題なし",
            animeTitles: ["やり直し令嬢は竜帝陛下を攻略中","ダンダダン","転生貴族、鑑定スキルで成り上がる",
                "ダンジョンに出会いを求めるのは間違っているだろうか","あたしンち","嘆きの亡霊は引退したい","精霊幻想記",
                "現実主義勇者の王国再建記","最凶の支援職【話術士】である俺は世界最強クランを従える","進撃の巨人",
                "ひとりぼっちの異世界攻略","陰の実力者になりたくて！","美味しんぼ","アオのハコ","異世界食堂２",
                "薬屋のひとりごと","ありふれた職業で世界最強","パーティーから追放されたその治癒師、実は最強につき",
                "ドラゴンボール改","チ。-地球の運動について-","さようなら竜生、こんにちは人生","シャングリラ・フロンティア",
                "賭ケグルイ","黙示録の四騎士","歴史に残る悪女になるぞ","ネガポジアングラー","青の祓魔師 雪ノ果篇",
                "こちら葛飾区亀有公園前派出所","頭文字D","魔王2099","ブルーロック","魔王様、リトライ！R",
                "妖怪学校の先生はじめました！","青のミブロ","FAIRY TAIL 100年クエスト","史上最強の大魔王、村人Aに転生する",
                "アクロトリップ","幽遊白書","BLEACH 千年血戦篇","鬼灯の冷徹","ドラゴンボールDAIMA","クレヨンしんちゃん",
                "メカウデ","響け！ユーフォニアム","星降る王国のニナ","結婚するって、本当ですか",
                "やはり俺の青春ラブコメはまちがっている｡","DEATH NOTE -デスノート-","ドラえもん","クッキングパパ",
                "やはり俺の青春ラブコメはまちがっている｡続","ソードアート・オンライン",
                "悲劇の元凶となる最強外道ラスボス女王は民の為に尽くします。","君は冥土様。","疑似ハーレム",
                "ガンゲイル・オンライン","僕のヒーローアカデミア","銀魂","菜なれ花なれ","合コンに行ったら女がいなかった話",
                "るろうに剣心 －明治剣客浪漫譚－","MFゴースト","北斗の拳","聖剣学院の魔剣使い","鴨乃橋ロンの禁断推理",
                "ぼっち・ざ・ろっく！","自動販売機に生まれ変わった俺は迷宮を彷徨う","マーダーミステリー・オブ・ザ・デッド",
                "来世は他人がいい","2.5次元の誘惑","咲-Saki-","SPY×FAMILY","乙女ゲー世界はモブに厳しい世界です",
                "魔法科高校の劣等生","甘神さんちの縁結び","痛いのは嫌なので防御力に極振りしたいと思います。2","呪術廻戦",
                "俺は全てを【パリイ】する","月が導く異世界道中","チェンソーマン","夢見る男子は現実主義者",
                "リアデイルの大地にて","凍牌～裏レート麻雀闘牌録～","痛いのは嫌なので防御力に極振りしたいと思います。",
                "ふたりはプリキュア","アンダーニンジャ","妻、小学生になる。","聖女の魔力は万能です",
                "Re:ゼロから始める異世界生活","異世界食堂","僕だけがいない街","魔王軍最強の魔術師は人間だった",
                "ふたりはプリキュアMaxHeart","ゴブリンスレイヤー","ひきこまり吸血姫の悶々","ロックマンエグゼ",
                "トリリオンゲーム","攻略うぉんてっど！","がっこうぐらし！","ウルトラマンアーク",
                "悪役令嬢なのでラスボスを飼ってみました","物語シリーズ","きのこいぬ","転生したらスライムだった件",
                "ゲーマーズ！","Infinite Dendrogram-インフィニット・デンドログラム-","デスマーチからはじまる異世界狂想曲",
                "ワンピース","齢5000年の草食ドラゴン、いわれなき邪竜認定","本好きの下剋上 司書になるためには手段を選んでいられません",
                "VTuberなんだが配信切り忘れたら伝説になってた","美男高校地球防衛部HAPPY KISS！","オーイ！とんぼ","名探偵コナン",
                "最果てのパラディン","魔法使いになれなかった女の子の話","神之塔","銀河英雄伝説 Die Neue These","女子高生の無駄づかい",
                "新テニスの王子様","AIの遺電子","デッドデッドデーモンズデデデデデストラクション","モブ皇帝","犬夜叉","多数欠",
                "盾の勇者の成り上がり","女神降臨","時々ボソッとロシア語でデレる隣のアーリャさん","通常攻撃が全体攻撃で二回攻撃のお母さんは好きですか？",
                "真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でスローライフすることにしました","骸骨騎士様、只今異世界へお出掛け中",
                "ラーメン赤猫","ReLIFE","ラブライブ！スーパースター!!","マギアレコード 魔法少女まどか☆マギカ外伝","江戸前エルフ","ハイキュー!!","川越ボーイズ・シング",
                "魔導具師ダリヤはうつむかない","葬送のフリーレン","くまクマ熊ベアー","魔王様、リトライ！","わんだふるぷりきゅあ！",
                "ゆゆ式","しかのこのこのここしたんたん","戦国妖狐","あの日見た花の名前を僕達はまだ知らない。","美男高校地球防衛部LOVE !",
                "鬼滅の刃","クレヨンしんちゃん","百千さん家のあやかし王子","新米オッサン冒険者、最強パーティに死ぬほど鍛えられて無敵になる。",
                "魔法使いの嫁","黄昏アウトフォーカス","エロマンガ先生","ケシカスくん","ブルーアーカイブ","時空の隙","マッシュル-MASHLE-",
                "最弱テイマーはゴミ拾いの旅を始めました。","ぷにるはかわいいスライム","即死チートが最強すぎて、異世界のやつらがまるで相手にならないんですが。",
                "灰と幻想のグリムガル","ギャグマンガ日和","経験済みなキミと、経験ゼロなオレが、お付き合いする話。","ワンパンマン","愚かな天使は悪魔と踊る",
                "ポーション頼みで生き延びます！","オーバーロード","ドラえもん","まちカドまぞく","久保さんは僕を許さない",
                "ひげを剃る。そして女子高生を拾う。","無職転生 ～異世界行ったら本気だす～","異世界かるてっと２","神無き世界のカミサマ活動",
                "推しの子","転生したら第七王子だったので、気ままに魔術を極めます","異世界かるてっと","この素晴らしい世界に祝福を！",
                "ひろがるスカイ！プリキュア","異世界のんびり農家","仮面ライダー","宇宙よりも遠い場所","はたらく魔王さま！！",
                "まちカドまぞく 2丁目","シルバニアファミリー","さくら荘のペットな彼女","恋は双子で割り切れない","とらドラ！",
                "東京リベンジャーズ聖夜決戦編","はたらく魔王さま！","かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
                "ポケットモンスター","俺だけレベルアップな件","Re:Monster","キボウノチカラ～オトナプリキュア’２３～",
                "モブから始まる探索英雄譚","アイドルマスター シャイニーカラーズ","ドラゴンボール超","トリコ","スパイ教室",
                "とんでもスキルで異世界放浪メシ","Dr.STONE","ガヴリールドロップアウト","メジャー","異世界でチート能力を手にした俺は、現実世界をも無双する",
                "ようこそ実力至上主義の教室へ","豚のレバーは加熱しろ","まぁるい彼女と残念な彼氏","魔法少女リリカルなのは",
                "山田くんと7人の魔女","うちの会社の小さい先輩の話","ダイヤのA","東京喰種トーキョーグール","ドラゴンボール",
                "美男高校地球防衛部LOVE！LOVE！","夜桜さんちの大作戦","ハズレ枠の【状態異常スキル】で最強になった俺がすべてを蹂躙するまで",
                "ゆるキャン△","爆上戦隊ブンブンジャー","WIND BREAKER","君に届け","その着せ替え人形は恋をする","負けヒロインが多すぎる！",
                "事情を知らない転校生がグイグイくる。","転生貴族の異世界冒険録～自重を知らない神々の使徒～","ドラゴンボールGT",
                "魔法少女まどかマギカ","異世界でもふもふなでなでするためにがんばってます。","終末トレインどこへいく？","五等分の花嫁",
                "ホリミヤ","冒険者になりたいと都に出て行った娘がSランクになってた","じいさんばあさん若返る","株式会社マジルミエ",
                "スラムダンク","実は俺、最強でした？","アンデッドアンラック","アキバ冥途戦争","ひみつのアイプリ","異世界ゆるり紀行",
                "ポンコツクエスト","魔王の俺が奴隷エルフを嫁にしたんだが、どう愛でればいい？","声優ラジオのウラオモテ","勇気爆発バーンブレイバーン",
                "氷菓","黒の召喚士","オーバーテイク！","Lv2からチートだった元勇者候補のまったり異世界ライフ","リコリス・リコイル",
                "逆境無頼カイジ","異世界居酒屋～古都アイテーリアの居酒屋のぶ～","怪獣８号","聖☆おにいさん","スナックバス江",
                "８６―エイティシックス―","THE NEW GATE","農民関連のスキルばっか上げてたら何故か強くなった。","ハミダシクリエイティブ",
                "あたしンちNEXT","忘却バッテリー","聖者無双～サラリーマン、異世界で生き残るために歩む道～","デキる猫は今日も憂鬱",
                "山田くんとLv999の恋をする","悪役令嬢レベル99～私は裏ボスですが魔王ではありません～","ジャングルはいつもハレのちグゥ",
                "俺の彼女と幼なじみが修羅場すぎる","ウマ娘 プリティーダービー","転生したら剣でした","神は遊戯に飢えている。",
                "魔法つかいプリキュア！","君のことが大大大大大好きな100人の彼女","ダンジョン飯",
                "勇者パーティーを追放されたビーストテイマー、最強種の猫耳少女と出会う","やはり俺の青春ラブコメはまちがっている。完",
                "東京リベンジャーズ","魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～","地獄楽",
                "わたしの幸せな結婚","逃げ上手の若君","ループ7回目の悪役令嬢は、元敵国で自由気ままな花嫁生活を満喫する","新あたしンち",
                "私、能力は平均値でって言ったよね！","Paradox Live","治癒魔法の間違った使い方","ゆびさきと恋々","日常","けいおん!",
                "とっても！ラッキーマン","彼女、お借りします","ロウきゅーぶ!","女神のカフェテラス","神達に拾われた男2",
                "暗殺教室（第2期）","キングダム","なぜ僕の世界を誰も覚えていないのか？","笑ゥせぇるすまん","忍者ハットリくん",
                "義妹生活","転生したらスライムだった件 転スラ日記","暗殺教室","冴えない彼女の育てかた","魔王城でおやすみ","ロウきゅーぶ！SS",
                "杖と剣のウィストリア","ティアムーン帝国物語〜断頭台から始まる、姫の転生逆転ストーリー〜","ダンジョンの中のひと",
                "To LOVEる -とらぶる- ダークネス","レベル1だけどユニークスキルで最強です","ご注文はうさぎですか？",
                "To LOVEる -とらぶる-","先輩はおとこのこ","ハイガクラ","遊戯王ゴーラッシュ！！","外科医エリーゼ",
                "婚約破棄された令嬢を拾った俺が、イケナイことを教え込む","フルーツバスケット 1st season","PSYCHO-PASS サイコパス",
                "青の祓魔師","ヨルムンガンド","のんのんびより","ゴールデンカムイ（第四期）","はめつのおうこく","望まぬ不死の冒険者",
                "出来損ないと呼ばれた元英雄は、実家から追放されたので好き勝手に生きることにした",
                "かぐや様は告らせたい-ファーストキッスは終わらない-","とあるおっさんのＶＲＭＭＯ活動記","ささやくように恋を唄う",
                "プロゴルファー猿","魔都精兵のスレイブ","人間不信の冒険者たちが世界を救うようです","吸血鬼すぐ死ぬ","ゴールデンカムイ",
                "ラグナクリムゾン","ダークギャザリング","天穂のサクナヒメ","カミエラビ GOD.app","転生王女と天才令嬢の魔法革命",
                "甲鉄城のカバネリ","スマイルプリキュア！","金色のガッシュベル!!","NANA－ナナ－","ヲタクに恋は難しい",
                "ノーゲーム・ノーライフ","政宗くんのリベンジR","お兄ちゃんはおしまい！","継母の連れ子が元カノだった",
                "キラキラ☆プリキュアアラモード","超速スピナー","ちはやふる","30歳まで童貞だと魔法使いになれるらしい",
                "アイドリッシュセブン","黒執事","異世界はスマートフォンとともに。2","異世界失格","デリシャスパーティ♡プリキュア",
                "最強タンクの迷宮攻略～体力9999のレアスキル持ちタンク、勇者パーティーを追放される～","魔法使い黎明期",
                "ドキドキ！プリキュア","おねがいマイメロディ","ゴールデンカムイ（第二期）","ラーメン大好き小泉さん","暴食のベルセルク",
                "CLANNAD","四月は君の嘘","デリコズ・ナーサリー","キミと僕の最後の戦場、あるいは世界が始まる聖戦","這いよれ！ニャル子さん",
                "見える子ちゃん","ガールズバンドクライ","キャプテン翼シーズン２ ジュニアユース編","この素晴らしい世界に爆焔を！",
                "チート薬師のスローライフ～異世界に作ろうドラッグストア～","進化の実〜知らないうちに勝ち組人生〜",
                "ヒプノシスマイク-Division Rap Battle-","ＨＵＧっと！プリキュア","道産子ギャルはなまらめんこい",
                "下ネタという概念が存在しない退屈な世界","異世界ワンターンキル姉さん ～姉同伴の異世界生活はじめました～",
                "ミギとダリ","Go！プリンセスプリキュア","デッドマウント・デスプレイ","銀の匙 Silver Spoon（第1期）","百妖譜","ぷにるんず ぷに２",
                "ハピネスチャージプリキュア！","佐々木とピーちゃん","ゴールデンカムイ（第三期）","スター☆トゥインクルプリキュア",
                "Duel Masters LOST ～追憶の水晶～","NieR:Automata","銀の匙 Silver Spoon（第2期）","月刊少女野崎くん","ハートキャッチプリキュア！",
                "ワンルーム、日当たり普通、天使つき。","逃走中 グレートミッション","ドメスティックな彼女","私の推しは悪役令嬢。","中二病でも恋がしたい！",
                "トロピカル～ジュ！プリキュア","終わりのセラフ","お嬢と番犬くん","青の祓魔師 島根啓明結社篇","小市民シリーズ","魔女と野獣",
                "ゾン100～ゾンビになるまでにしたい100のこと～","ぼくらの","スイートプリキュア♪","狼と香辛料","Angel Beats!","烏は主を選ばない",
                "この世界は不完全すぎる","ライアー・ライアー","Ｙｅｓ！プリキュア５","姫様拷問の時間です","ONE PIECE FAN LETTER","ゾンビランドサガ",
                "花野井くんと恋の病","それでも歩は寄せてくる","よふかしのうた","HIGH CARD","政宗くんのリベンジ","妄想代理人","Helck","アマガミSS",
                "B-PROJECT ～熱烈＊ラブコール～","殿と犬","Fate/Apocrypha","放課後少年花子くん","ギヴン","ヒーリングっど・プリキュア","カノジョも彼女",
                "柚木さんちの四兄弟。","Dr.STONE 龍水","かつて魔法少女と悪は敵対していた。","うる星やつら","亜人","休日のわるものさん","クズの本懐","NEW GAME!",
                "ゆるゆり","クールドジ男子","フレッシュプリキュア！","Yes！プリキュア５GoGo！","黒執事 Book of Circus","ちびゴジラの逆襲","好きな子がめがねを忘れた",
                "龍族 -The Blazing Dawn-","僕の妻は感情がない","私がモテないのはどう考えてもお前らが悪い！","MIX MEISEI STORY","エルフさんは痩せられない。",
                "ATRI -My Dear Moments-","異世界スーサイド・スクワッド","パリピ孔明","青の祓魔師 京都不浄王篇","いぬやしき","監禁区域レベルX","ヒナまつり",
                "デート・ア・ライブⅤ","私に天使が舞い降りた！","キルミーベイベー","下の階には澪がいる","Unnamed Memory","Panty&Stocking with Gerterbelt",
                "イジらないで、長瀞さん 2nd Attack","弱キャラ友崎くん","でこぼこ魔女の親子事情","もののがたり","ばいばい、アース","まじっく快斗1412","結婚指輪物語","VAZZROCK",
                "僕らはみんな河合荘","ジャヒー様はくじけない！","真夜中ぱんチ","SHY","未確認で進行形","さよなら絶望先生","笑ゥせぇるすまん（89～93年）","BanG Dream!（バンドリ！）",
                "黒執事Ⅱ","天官賜福 貮","黒執事 -寄宿学校編-","おねがいマイメロディ くるくるシャッフル！","刀剣乱舞 廻 -虚伝 燃ゆる本能寺-","もやしもん","SHIBUYA♡HACHI",
                "serial experiments lain","歌舞伎町シャーロック","ヴァンパイア男子寮","怪異と乙女と神隠し","ふたりはプリキュアSplash☆Star","エルフェンリート","め組の大吾 救国のオレンジ",
                "夜のクラゲは泳げない","BanG Dream! 3rd Season","BanG Dream! 2nd Season","ホロのぐらふぃてぃ","ぽんのみち","怪物くん","となりの吸血鬼さん",
                "戦え！超ロボット生命体トランスフォーマー","チェリまほサマフェス","外れスキル《木の実マスター》 ～スキルの実（食べたら死ぬ）を無限に食べられるようになった件について～",
                "俗・さよなら絶望先生","NINJA KAMUI","聖闘士星矢: Knights of the Zodiac","オリエント","となりの妖怪さん","侵略!イカ娘","HIGHSPEED Étoile",
                "未来の黒幕系悪役令嬢モリアーティーの異世界完全犯罪白書","オシリスの天秤","カードファイト!! ヴァンガード Divinez","変人のサラダボウル",
                "侵略!?イカ娘","4人はそれぞれウソをつく","ぶっちぎり?!","GJ部","万聖街","ぷにるんず","流星のロックマン","G-onらいだーす","健全ロボ ダイミダラー","現代誤訳",
                "喧嘩独学","アークナイツ","時光代理人 -LINK CLICK- Ⅱ","かくしごと","龍族 -The Blazing Dawn-","懺・さよなら絶望先生","グレンダイザーU",
                "聖剣伝説 Legend of Mana - The Teardrop Crystal -","プラオレ！～PRIDE OF ORANGE～","荒ぶる季節の乙女どもよ。","ネコぱら","鋼鉄神ジーグ",
                "オリエント淡路島激闘編","ちいかわ","まじっく快斗","ゲームセンターあらし","SHAMAN KING FLOWERS","百姓貴族","幻日のヨハネ -SUNSHINE in the MIRROR-",
                "ソマリと森の神様","リンカイ！","てっぺんっ!!!!!!!!!!!!!!!","僕らの雨いろプロトコル","GA 芸術科アートデザインクラス","狼と香辛料II","明治撃剣-1874-",
                "アストロノオト","闇芝居","大雪海のカイナ","アイドルマスター ミリオンライブ！","IDOLY PRIDE -アイドリープライド-","ぼくのとなりに暗黒破壊神がいます。",
                "Fate/Grand Order -MOONLIGHT/LOSTROOM-","恋とプロデューサー～EVOL×LOVE～","メタリックルージュ","UniteUp!","RobiHachi","東京ミュウミュウ にゅ～♡",
                "Spicy Candy","貼りまわれ！こいぬ","シャドウバースＦ","エグミレガシー","ラプソディ","ばなにゃ あらうんど ざ わーるど","0歳児スタートダッシュ物語","Garden of Remembrance"]
        },


    ];

    const searchForm = document.getElementById("anime-search-form");
    const searchInput = document.getElementById("anime-title");
    const searchResults = document.getElementById("search-results");
    const searchSuggestions = document.getElementById("search-suggestions");
    const cancelBtn = document.getElementById("cancel-btn");

    const recommendedServicesSection = document.getElementById("recommended-services");
    const priceRecommendationsSection = document.getElementById("price-recommendations");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchSuggestions.innerHTML = ""; // Clear previous suggestions
        
        if (searchTerm === "") {
            searchSuggestions.style.display = "none";
            return;
        }
    
        // アニメタイトルの候補を取得
        const suggestions = services.flatMap(service =>
            service.animeTitles.filter(title => title.toLowerCase().startsWith(searchTerm)) // 最初の文字で一致
        );
    
        // 50音順でソート（ひらがな順、英数字はそのまま）
        suggestions.sort((a, b) => {
            // ひらがなに対して自然な50音順でソート
            return a.localeCompare(b, 'ja');
        });
    
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

// アニメ検索フォームの送信時
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTitle = searchInput.value.trim();

    // 検索結果をフィルタリング
    const matchedServices = services.filter(service =>
        service.animeTitles.some(title => 
            title.toLowerCase().includes(searchTitle.toLowerCase())
        )
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

 /*searchInput.addEventListener("input", () => {

    const searchTerm = searchInput.value.trim().toLowerCase();
    searchSuggestions.innerHTML = ""; // Clear previous suggestions
    if (searchTerm === "") {
        searchSuggestions.style.display = "none";
        return;
    }

    const suggestions = services.flatMap(service =>
        service.animeTitles.filter(title => title.toLowerCase().startsWith(searchTerm)) // startsWithに変更
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
});*/


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