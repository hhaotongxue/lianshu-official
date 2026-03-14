# 自定义域名配置指南

## 域名：lianshu.show

### 1. DNS 配置

在你的域名提供商（如 Cloudflare、阿里云、腾讯云等）的 DNS 管理面板中添加以下记录：

#### 方案 A：使用 A 记录（推荐）

添加以下 4 条 A 记录，指向 GitHub Pages 的 IP：

```
类型    名称    值
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

#### 方案 B：使用 CNAME 记录

如果你想使用 www 子域名：

```
类型      名称    值
CNAME     www     yourusername.github.io
```

然后在 GitHub Pages 设置中配置 `www.lianshu.show` 作为自定义域名。

### 2. GitHub Pages 配置

1. 推送代码到 GitHub（包含 `docs/public/CNAME` 文件）

```bash
git add .
git commit -m "Add custom domain configuration"
git push origin main
```

2. 等待 GitHub Actions 部署完成

3. 进入 GitHub 仓库设置：
   - 点击 **Settings** → **Pages**
   - 在 **Custom domain** 输入框中填入：`lianshu.show`
   - 点击 **Save**

4. 等待 DNS 检查通过（可能需要几分钟到几小时）

5. 勾选 **Enforce HTTPS**（DNS 检查通过后才能勾选）

### 3. 验证配置

#### 检查 DNS 是否生效

```bash
# macOS/Linux
dig lianshu.show

# Windows
nslookup lianshu.show
```

应该能看到指向 GitHub Pages 的 IP 地址。

#### 检查网站访问

```bash
curl -I https://lianshu.show
```

应该返回 200 状态码。

### 4. 常见问题

#### DNS 未生效
- DNS 传播需要时间，通常 10 分钟到 48 小时
- 可以使用 https://dnschecker.org 检查全球 DNS 传播状态

#### HTTPS 证书问题
- GitHub Pages 会自动为自定义域名申请 Let's Encrypt 证书
- 首次配置可能需要等待几分钟
- 如果长时间未生效，尝试取消勾选再重新勾选 "Enforce HTTPS"

#### 404 错误
- 确认 CNAME 文件存在于 `docs/public/CNAME`
- 确认 GitHub Actions 部署成功
- 确认 VitePress 配置中没有设置 `base` 路径

### 5. 配置完成后的访问地址

- 主站：https://lianshu.show
- 中文版：https://lianshu.show/
- 英文版：https://lianshu.show/en/

## 注意事项

1. **CNAME 文件位置**：必须在 `docs/public/CNAME`，构建后会自动复制到输出目录
2. **base 配置**：使用自定义域名时，VitePress 配置中不需要设置 `base`
3. **HTTPS**：强烈建议启用 HTTPS，GitHub Pages 提供免费的 SSL 证书
4. **CDN**：如果使用 Cloudflare 等 CDN，确保 SSL/TLS 模式设置为 "Full" 或 "Full (strict)"

## 推荐的 Cloudflare 配置

如果使用 Cloudflare 作为 DNS 提供商：

1. **SSL/TLS 模式**：Full (strict)
2. **Always Use HTTPS**：开启
3. **Auto Minify**：开启 HTML、CSS、JS
4. **Brotli**：开启
5. **HTTP/3**：开启

这样可以获得更好的性能和安全性。
