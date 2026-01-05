<div align="center">
  <img src="./public/win.svg" width="160" />
</div>

## win激活

- 打开win PowerShell
- 适用于Windows 8、10、11：

```
irm https://get.activated.win | iex
# 如果上述方法被屏蔽使用
iex (curl.exe -s --doh-url https://1.1.1.1/dns-query https://get.activated.win | Out-String)
```

- 适用于Windows 7及更高版本：

```
iex ((New-Object Net.WebClient).DownloadString('https://get.activated.win'))
```

- 根据命令执行即可完成激活！

> github https://github.com/massgravel/Microsoft-Activation-Scripts 161K 🌟 👍

> iex 直接执行远程脚本 可能存在不安全不可预测的问题

> 为了安全考虑 非必要勿要执行未知脚本