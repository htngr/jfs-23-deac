{ inputs, ... }: {

  imports = [
    inputs.nixos-wsl.nixosModules.wsl
    ./configuration.nix
  ];

  wsl = {
    enable = true;
    nativeSystemd = true;
    # automatically add shortcuts to windows start menu
    startMenuLaunchers = true;
  };
}
