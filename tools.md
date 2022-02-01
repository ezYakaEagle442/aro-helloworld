## How to install Tekton CLI
- [https://github.com/tektoncd/cli](https://github.com/tektoncd/cli)
- [https://docs.openshift.com/container-platform/4.9/cli_reference/tkn_cli/installing-tkn.html](https://docs.openshift.com/container-platform/4.9/cli_reference/tkn_cli/installing-tkn.html)

### From Chocolatey
```sh
choco install tektoncd-cli --confirm --accept-license
choco upgrade tektoncd-cli --confirm --accept-license
```

### From Linux AMD64 / WSL
```sh
tkn_version=0.22.0
# Get the tar.xz
curl -LO https://github.com/tektoncd/cli/releases/download/v$tkn_version/tkn_$tkn_version\_Linux_x86_64.tar.gz
# Extract tkn to your PATH (e.g. /usr/local/bin)
sudo tar xvzf tkn_$tkn_version\_Linux_x86_64.tar.gz -C /usr/local/bin/ tkn

tkn --help
tkn version
```

### Mac
```sh
brew install tektoncd-cli
```

source <(tkn completion bash)
complete -F __start_tkn tkn

## Install odo
See [OpenShift doc](https://docs.openshift.com/container-platform/4.9/cli_reference/developer_cli_odo/installing-odo.html)
```sh
curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-amd64 -o odo
curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-amd64.tar.gz -o odo.tar.gz
tar xvzf odo.tar.gz
chmod +x odo
echo 'export PATH="$PATH:~/odo"' >> ~/.bashrc
odo version
```
## Install Podman
See [Podman doc](https://podman.io/getting-started/installation)
https://podman.io/getting-started/installation

[https://www.how2shout.com/linux/how-to-install-podman-on-ubuntu-20-04-wsl2/](https://www.how2shout.com/linux/how-to-install-podman-on-ubuntu-20-04-wsl2/)

```sh
VERSION_ID="20.04"
. /etc/os-release
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -
sudo apt-get update
sudo apt-get -y upgrade
sudo apt search podman
sudo apt-get -y install podman
podman --help
podman info
podman search --help
man podman-<subcommand>
podman images
podman ps
podman logs -l
```

## VIM tips

See [vim cheatsheet](https://devhints.io/vim)

```sh
# set ts=2 : ts stands for tabstop. It sets the tab width to 2 spaces.
# sts stands for softtabstop. Insert ou delete 2 spaces with tab or back keys.
# sw stands for shiftwidth. Number of spaces used during indentation > or <
# set et : et stands for expandtab. While in insert mode, it replaces tabs by spaces
vi ~/.vimrc
set ts=2 sts=2 sw=2 et
. ~/.vimrc
```