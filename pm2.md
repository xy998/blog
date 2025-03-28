<div align="center">
	<img src="./public/pm2-logo.png" width="160" />
</div>

# PM2 & Nuxt

## 简介

- Node.js 进程管理工具
- 服务器上托管的 Nuxt 应用程序✨
- [我的website](https://xxyu.online)

## 安装

```
npm install pm2@latest -g
```

pm2 -v 查看版本号

## 常用命令

启动项目 pm2 start [项目地址] [项目名称]

```shell
pm2 start /home/webset/.output/server/index.mjs xxyu
```

列出PM2管理应用 pm2 [list|ls|status]

```shell
pm2 ls
# ┌────┬────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
# │ id │ name           │ mode     │ ↺    │ status    │ cpu      │ memory   │
# ├────┼────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
# │ 0  │ xxyu           │ fork     │ 12   │ online    │ 0%       │ 57.3mb   │
# └────┴────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

查看日志

```shell
pm2 logs
```

停止重启

```shell
# 全部
pm2 stop all
# 根据 id
pm2 stop 0
# 根据 name
pm2 stop xxyu
```

```shell
# 杀死并重启
pm2 restat
```

```shell
# 0秒停机时间重新加载
pm2 reload
```

查看详情

```shell
pm2 describe xxyu
# 如果你忘记了放置目录地址
# ┌───────────────────┬──────────────────────────────────────┐
# │ status            │ online                               │
# │ name              │ xxyu                                 │
# │ namespace         │ default                              │
# │ version           │ 0.0.0                                │
# │ restarts          │ 14                                   │
# │ uptime            │ 0                                    │
# │ script path       │ /home/webset/.output/server/index.mjs│
# │ script args       │ N/A                                  │
# │ error log path    │ /root/.pm2/logs/index-error.log      │
# │ out log path      │ /root/.pm2/logs/index-out.log        │
# │ pid path          │ /root/.pm2/pids/index-0.pid          │
# │ interpreter       │ node                                 │
# │ interpreter args  │ N/A                                  │
# │ script id         │ 0                                    │
# │ exec cwd          │ /                                    │
# │ exec mode         │ fork_mode                            │
# │ node.js version   │ 16.4.0                               │
# │ node env          │ N/A                                  │
# │ watch & reload    │ ✘                                    │
# │ unstable restarts │ 0                                    │
# │ created at        │ 2024-05-28T08:59:49.470Z             │
# └───────────────────┴──────────────────────────────────────┘
```

## 高级用法

- 调整好对应路径 目前 .output 同级目录

```javascript
module.exports = {
  apps: [
    {
      name: 'YourProjectName',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: '/home/webset/.output/server/index.mjs',
    },
  ],
};
```

```shell
pm2 start /home/webset/ecosystem.config.js

# 输出
# ┌────┬────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
# │ id │ name           │ mode     │ ↺    │ status    │ cpu      │ memory   │
# ├────┼────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
# │ 0  │ zichanonline   │ cluster  │ 0    │ online    │ 0%       │ 29.0mb   │
# │ 1  │ zichanonline   │ cluster  │ 0    │ online    │ 0%       │ 27.7mb   │
# │ 2  │ zichanonline   │ cluster  │ 0    │ online    │ 0%       │ 29.1mb   │
# │ 3  │ zichanonline   │ cluster  │ 0    │ online    │ 0%       │ 29.1mb   │
# │ 4  │ zichanonline   │ cluster  │ 0    │ online    │ 0%       │ 28.6mb   │
# │ 5  │ zichanonline   │ cluster  │ 0    │ online    │ 0%       │ 23.7mb   │
# │ 6  │ zichanonline   │ cluster  │ 0    │ online    │ 0%       │ 20.1mb   │
# │ 7  │ zichanonline   │ cluster  │ 0    │ online    │ 0%       │ 14.3mb   │
# └────┴────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

- 建立 pm2 配置文件
- name 自定义
- port 自定义

* nuxt 配置port不生效

- exec_mode: 'cluster'

* 启用 cluster 集群模式

- instances: 'max'

* 根据 cpu 核心启动多个实例

- 集群特点

* 处理更多请求
* 充分利用多核 cpu 提升利用率
* 提升容错 某个出错其余继续服务
<div align="center">
	<img src="./public/website.png" />
</div>
