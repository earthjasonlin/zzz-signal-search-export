# 绝区零调频记录导出工具

> 导出《绝区零》调频记录，支持 UIGF v4.0，覆盖全部服务器。

<p align="center">
  <a href="https://github.com/earthjasonlin/zzz-signal-search-export/stargazers"><img src="https://img.shields.io/github/stars/earthjasonlin/zzz-signal-search-export?style=flat-square" alt="GitHub stars" /></a>
  <a href="https://github.com/earthjasonlin/zzz-signal-search-export/releases"><img src="https://img.shields.io/github/v/release/earthjasonlin/zzz-signal-search-export?style=flat-square" alt="Latest release" /></a>
  <a href="https://github.com/earthjasonlin/zzz-signal-search-export/commits/main"><img src="https://img.shields.io/github/last-commit/earthjasonlin/zzz-signal-search-export?style=flat-square" alt="Last commit" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT" /></a>
</p>

中文 | [English](https://github.com/earthjasonlin/zzz-signal-search-export/blob/main/docs/README_EN.md)

这个项目基于 [star-rail-warp-export](https://github.com/biuuu/star-rail-warp-export/) 修改而来，是一个使用 Electron 构建的桌面工具。它通过读取游戏日志或代理模式获取访问调频记录 API 所需的 `authKey`，再将历史记录导出为可保存、可迁移的数据。

## 目录
- [功能概览](#功能概览)
- [下载与运行环境](#下载与运行环境)
- [使用方法](#使用方法)
- [多账号导出](#多账号导出)
- [多语言支持](#多语言支持)
- [开发说明](#开发说明)
- [许可证](#许可证)

## 功能概览

- 导出《绝区零》调频历史记录
- 支持 **UIGF v4.0** 数据格式
- 支持所有服务器
- 支持从游戏日志或代理模式提取 `authKey`
- 支持桌面端查看与管理多个账号的数据

## 下载与运行环境

### 运行环境
- Windows（主要使用场景）

### 下载地址
- [GitHub Releases](https://github.com/earthjasonlin/zzz-signal-search-export/releases/latest/download/ZzzSignalSearchExport.zip)
- [123 云盘](https://www.123pan.com/s/Vs9uVv-ShhE.html)
- [蓝奏云（密码: zzzz）](https://www.lanzouh.com/b00eewtvxa)

下载后请先解压，再运行程序。

## 使用方法

1. 打开游戏中的调频详情页面。

   ![详情页面](/docs/wish-history.jpg)

2. 启动工具，点击 **加载数据**。

   ![加载数据](/docs/load-data.png)

3. 工具会读取所需信息并拉取历史记录。完成后可以在界面中预览结果。

   <details>
     <summary>展开预览图</summary>

   ![预览](/docs/preview.png)

   </details>

## 多账号导出

如果你需要导出多个账号的数据：

1. 点击账号区域旁边的加号按钮
2. 在游戏中切换到另一个账号
3. 重新打开调频历史记录页面
4. 回到工具再次点击 **加载数据**

## 多语言支持

如需新增或优化翻译，可修改 `src/i18n/` 目录下的 JSON 文件后提交 Pull Request。

## 开发说明

### 安装依赖
```bash
yarn install
```

### 本地开发
```bash
yarn dev
```

### 构建应用
```bash
yarn build
```

### 其他常用命令
```bash
yarn build:win64   # 构建 Windows x64 包
yarn build:linux   # 构建 Linux 包
yarn build:mac     # 构建 macOS 包
yarn dev:web       # 以 Web 目标调试
```

## 许可证

本项目基于 [MIT](https://github.com/earthjasonlin/zzz-signal-search-export/blob/main/LICENSE) 协议开源。

## Stargazers over time

[![Stargazers over time](https://starchart.cc/earthjasonlin/zzz-signal-search-export.svg)](https://starchart.cc/earthjasonlin/zzz-signal-search-export)
