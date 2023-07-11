{ pkgs, ... }: {

  imports = [
    ./bobs-configuration.nix
  ];

  programs.java.enable = true;
  programs.java.package = pkgs.jdk19;

  environment.systemPackages = [
    pkgs.jetbrains.idea-community
  ];


  # Enable nix flakes
  nix.extraOptions = ''
    experimental-features = nix-command flakes
  '';
}
