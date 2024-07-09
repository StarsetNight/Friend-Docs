# 举报与管理员功能

Friend-友谊切实保障玩家群体的游玩体验，特此设置了举报功能以及管理员权限功能。

## ⛔ 举报

如果你发现了违规玩家，请使用该功能。

**命令用法**

```Minecraft
/freport Example_Player 轰炸友谊广场
```

上述指令会以“轰炸友谊广场”的原因将Example_Player举报并使其强制下线。

举报前请确保你有足够证据（录屏、截图等），如果被举报玩家申诉，橙管会自动前来调查。

> [!WARNING] 请勿恶意举报！
> 如果恶意举报，橙管有权给予严重的处罚！

## 💻 管理员功能

### 解封

```Minecraft
/funban 玩家ID
```

### 封禁

```Minecraft
/fban 玩家ID 时间 原因
```

### 更新封禁的时间

```Minecraft
/fup 玩家ID 时间 原因
```

### 监管模式

```Minecraft
/v
```

上述命令允许你切换监管模式的开关状态。

当监管模式启用，你将会进入隐身模式，右键玩家以查询他们的背包。

双击`潜行`键以进入旁观者模式，你可以四处隐身飞行。

中键可进入传送模式，你可以传送到一名玩家身边。

### 注释

- `-1` 表示永久封禁
- 时间格式支持 `1d 1h 1m 1s`，分别代表 `1天 1小时 1分钟 1秒`
- 只能填一种时间

示例：

```Minecraft
/fban Example_Player 1d 作弊
```

```Minecraft
/fup Example_Player 1h 违规
```

```Minecraft
/funban Example_Player
```