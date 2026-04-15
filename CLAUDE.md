# HTML Slide Starter — sisu

## 概要

ブラウザで動く16:9 HTMLスライドの汎用テンプレート。
`engine/` と `theme/` は共通資産。デッキごとに `decks/{name}/index.html` を作成する。

## ディレクトリ構成

```
slide-starter/
├── CLAUDE.md              ← このファイル
├── design-guidelines.md   ← デザイン方針
├── plan.md                ← 構築ガイド
├── README.md              ← ユーザー向け説明書
├── engine/
│   ├── slide.css          ← 16:9ロック・ナビUI・PDF出力（触らない）
│   └── slide.js           ← キーボード操作・スケーリング・PDF（触らない）
├── theme/
│   ├── sisu.css           ← sisuテーマ（入口。通常はここだけ触る）
│   └── sample.css         ← sisu.css の実体（互換のため分離）
├── shared/                ← 共有アセット（画像・テクスチャなど）
│   └── logo/
│       └── README.md
└── decks/
    └── {deck-name}/
        └── index.html     ← デッキ本体
```

## 3層分離ルール

| 層 | ファイル | 役割 | 編集 |
|----|----------|------|------|
| Engine | `engine/slide.css`, `engine/slide.js` | 16:9ロック、ナビ、PDF出力、スケーリング | **禁止** |
| Theme | `theme/sisu.css` | カラー・フォント・余白の変数、スライドタイプ、ユーティリティ | テーマ変更時のみ |
| Content | `decks/{name}/index.html` | 発表ごとのコンテンツ | **自由** |

## スライドタイプ一覧

| クラス | 用途 |
|------|------|
| `slide-title` | タイトルスライド（最初の1枚） |
| `slide-content` | 汎用コンテンツ（本文・箇条書き・カード・図解） |
| `slide-section` | セクション区切り（章立て） |
| `slide-landing` | 核心の一文を大きく見せる全画面スライド |
| `slide-statement` | Statement / Bridge（素材側の検出ルールに合わせる） |
| `slide-grid` | 概観・一覧（カード/表） |
| `slide-diagram` | 図解・フロー |
| `slide-end` | エンディング |

## ユーティリティクラス

| クラス | 効果 |
|------|------|
| `accent` | アクセント色テキスト |
| `muted` | サブ情報（薄いグレー） |
| `mono` | モノスペースフォント |
| `bold` | 太字 |
| `divider` | 水平線 |
| `cols-2` | 2カラムグリッド |
| `cols-3` | 3カラムグリッド |
| `card` | ボーダー付きカード |
| `tag` | タグバッジ |
| `slide-logo` | 右上ロゴ（`<img class="slide-logo">`） |
| `img-box` | 画像コンテナ（`object-fit: cover`） |
| `text-img` | テキスト+画像の横並びレイアウト |

## ロゴの使い方

`shared/logo/README.md` を参照して配置。

## ソース素材の変換ルール（必須）

`plan.md` に集約。

