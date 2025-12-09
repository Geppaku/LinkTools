#!/bin/bash

# ==========================================
# 設定エリア
# ==========================================
TARGET_NETWORK="172.30.0.0/16"
EXCLUDE_FILE="exclude_list.txt"
OUTPUT_FILE="scan_result_$(date +%Y%m%d_%H%M%S).txt"

# ==========================================
# 1. 除外リストの作成
# ==========================================
echo "Creating exclusion list..."
cat <<EOF > $EXCLUDE_FILE
172.30.96.0/22
172.30.238.64/28
172.30.241.192/28
172.30.64.0/20
172.30.237.0/25
172.30.241.64/28
172.30.48.0/21
172.30.88.0/22
172.30.92.0/22
172.30.236.0/24
172.30.210.0/24
172.30.238.48/28
172.30.241.0/28
172.30.80.0/22
172.30.243.128/28
172.30.243.192/28
EOF

# ==========================================
# 2. Nmapスキャンの実行
# ==========================================
echo "Starting Host Discovery Scan on $TARGET_NETWORK"
echo "Output will be saved to: $OUTPUT_FILE"
echo "This may take a while depending on network size..."

# 解説:
# -sn        : ポートスキャンをせず、ホスト発見のみ行う (Ping Scan)
# -n         : 名前解決を行わない (速度向上とDNSログ回避のため)
# --excludefile : 除外リストを適用
# --randomize-hosts : ターゲットの順序をランダムにし、特定NWへの集中負荷を避ける
# -T3        : 通常のタイミング (T2だと/16全域は時間がかかりすぎるため、T3+ランダム推奨)
#
# --- 発見率向上のためのプローブ設定 (Ping拒否回避) ---
# -PS22,80,443,445,3389 : TCP SYN Ping (主要サービスポートへ)
# -PA80,443,8080        : TCP ACK Ping (ステートフルFW回避用)
# -PU53,137,161         : UDP Ping (DNS, NetBIOS, SNMPポートへ)
# -PE -PP -PM           : ICMP Echo, Timestamp, Netmask Request (標準的なICMP)
# ---------------------------------------------------

sudo nmap -sn -n \
    --excludefile $EXCLUDE_FILE \
    --randomize-hosts \
    -T3 \
    -PS22,80,443,445,3389 \
    -PA80,443,8080 \
    -PU53,137,161 \
    -PE -PP -PM \
    -oN "$OUTPUT_FILE" \
    $TARGET_NETWORK

# ==========================================
# 3. 終了処理
# ==========================================
echo "Scan completed."
echo "Results saved in $OUTPUT_FILE"

# 稼働ホスト数のみ簡易表示
UP_COUNT=$(grep "Host is up" "$OUTPUT_FILE" | wc -l) echo "Total hosts found UP: $UP_COUNT"

# 除外ファイルのお掃除（残しておきたい場合はコメントアウトしてください）
rm $EXCLUDE_FILE