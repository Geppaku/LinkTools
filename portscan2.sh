#!/bin/bash

# ==========================================
# 設定エリア
# ==========================================
INPUT_FILE="list.txt"
OUTPUT_FILE="portscan_result_$(date +%Y%m%d_%H%M%S).txt"

# ==========================================
# 0. 事前チェック
# ==========================================
# root権限チェック (SYNスキャンにはrootが必要)
if [ "$EUID" -ne 0 ]; then
  echo "Error: This script requires root privileges to run SYN scan."
  echo "Please run as root (e.g., sudo ./targeted_portscan.sh)"
  exit 1
fi

# 入力ファイル存在チェック
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: $INPUT_FILE not found in the current directory."
    exit 1
fi

# ==========================================
# 1. Nmapスキャンの実行
# ==========================================
HOST_COUNT=$(wc -l < "$INPUT_FILE")
echo "Starting Port Scan on $HOST_COUNT hosts from $INPUT_FILE"
echo "Output will be saved to: $OUTPUT_FILE"
echo "Mode: Stealth SYN Scan, No Ping, Slow Timing (T2)"

# 解説:
# -sS             : TCP SYN Scan (Stealth scan)
# -Pn             : Treat all hosts as online (Skip host discovery/Ping)
# -n              : No DNS resolution
# --top-ports 1000: Scan the 1000 most common ports
# -T2             : Timing template 'Polite' (Slows down scan to evade IDS/IPS)
# --randomize-hosts: Randomize target scan order
# --open          : Only show open (or possibly open) ports
# --source-port 53: Set source port to 53 (DNS) to attempt FW bypass
# -iL             : Input from List
# -oN             : Output Normal format

nmap -sS -Pn -n \
    --top-ports 1000 \
    -T2 \
    --randomize-hosts \
    --open \
    --source-port 53 \
    -iL "$INPUT_FILE" \
    -oN "$OUTPUT_FILE"

# ==========================================
# 2. 終了処理
# ==========================================
echo "------------------------------------------------"
echo "Scan completed."
echo "Results saved in $OUTPUT_FILE"
echo "------------------------------------------------"