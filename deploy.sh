# 生成静态文件
yarn docs:build
#vuepress build docs

# 生成静态文件后先推到master分支
git add -A
git commit -m 'update'
git push origin

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'abc.com' > CNAME

git init
git add -A
git commit -m 'update'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@gitee.com:<USERNAME>/<USERNAME>.gitee.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:aguoxing/vitepress-doc master:gh-pages

cd -
