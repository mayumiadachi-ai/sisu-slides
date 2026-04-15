## 構築ガイド（運用）

### 3層分離

- **Engine**: `engine/slide.css`, `engine/slide.js`（触らない）
- **Theme**: `theme/sample.css`（デザインの入口）
- **Content**: `decks/{name}/index.html`（中身）

### 新規デッキ

- `slide-starter/decks/` にフォルダを作る
- `decks/01_capability-sheet/index.html` をコピーして編集
- `../../engine/` `../../theme/` のパスは維持する

### Markdown→スライド（必須ルール）

素材変換時は、必ず以下を満たすこと。

- **原文表現の厳守**: 言い換え禁止（分割・改行・箇条書き化は可）
- **独立スライド検出**: Statement/Bridge/概観は吸収しない
- **情報量の完全反映**: 100%をスライドへ（削るのではなく分割する）

