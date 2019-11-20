export const serverDeps = `sudo apt-get install gnupg libpq-dev build-essential openssl curl git-core nodejs nginx imagemagick`

export const gemInstall = `gem update
gem install bundler
gem update
`

export const nginx = `sudo rm /etc/nginx/sites-enabled/default
sudo ln -nfs /var/www/[APP]/current/config/deploy/nginx/[APP].conf /etc/nginx/sites-enabled/[APP].conf
sudo service nginx start
`
