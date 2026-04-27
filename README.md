# GM

自用的 Cocos Creator 3.8.8 小游戏快速初始化模板

## 环境要求

- Cocos Creator 3.8.8
- Node.js (用于安装依赖)

## 快速开始

1. **克隆项目并初始化 submodules**

```bash
git clone --recurse-submodules <repository-url>
```

如果已经克隆但未初始化 submodules：

```bash
git submodule update --init --recursive
```

2. **安装依赖**

```bash
npm install
```

## Submodules

| 路径 | 说明 | 仓库 |
|------|------|------|
| `extensions/cocos-mcp-server` | Cocos MCP Server | https://gitlab.umcasual.cn/mcp/cocos-mcp-server.git |
| `extensions/js-obfuscator` | Cocos JS Obfuscator | https://github.com/KaiXuanXuan/cocos-js-obfuscator.git |

## TypeScript 配置

- TypeScript 版本: ^6.0.2
- 配置文件: `tsconfig.json`
- 基础配置继承: `./temp/tsconfig.cocos.json`

## Cocos Creator 版本

- **3.8.8** - 请确保使用此版本打开项目
