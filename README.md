### Usage with WSL2:

- On a linux with flake-enabled [Nix](https://nixos.org) installed:
    - `nix build github:htngr/jfs-23-deac#nixosConfigurations.myWSL.config.system.build.systemd-tarball`
    - Copy `./result/tarball/nixos-wsl-x86_64-linux.tar.gz` to a Windows machine with WSL2 installed
- In Windows:
    - `wsl --import <name> <folder> <path\to\nixos-wsl-x86_64-linux.tar.gz>`
    - `wsl -d <name>`

### Usage with [codchi](https://github.com/aformatik/codchi):

- `codchi install <name> github:htngr/jfs-23-deac#myEnv`
- `codchi run <name>`
